// /api/webhook.js

import crypto from "crypto";

const META_ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const PIXEL_ID = process.env.PIXEL_ID;
const GG_SECRET = process.env.GG_WEBHOOK_SECRET;

function hashEmail(email) {
  return crypto.createHash("sha256").update(email.toLowerCase().trim()).digest("hex");
}

function validateSignature(payload, signature) {
  if (!GG_SECRET) return true;

  const hmac = crypto.createHmac("sha256", GG_SECRET).update(JSON.stringify(payload)).digest("hex");

  return hmac === signature;
}

async function sendToMetaCAPI(eventData, retries = 3) {
  const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [eventData],
          access_token: META_ACCESS_TOKEN,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Meta API Error: ${error.error?.message || response.statusText}`);
      }

      const result = await response.json();
      console.log("Meta CAPI Success:", result);
      return { success: true, data: result };
    } catch (error) {
      console.error(`Attempt ${attempt}/${retries} failed:`, error.message);

      if (attempt === retries) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const payload = req.body;
    const signature = req.headers["x-gg-signature"] || req.query.signature;

    if (!validateSignature(payload, signature)) {
      console.warn("Assinatura inválida");
    }

    const { id: orderId, email, amount, status, fbp, fbc } = payload;

    if (!email || !amount) {
      return res.status(400).json({ error: "Email e amount são obrigatórios" });
    }

    if (status !== "paid" && status !== "Pix Paid") {
      return res.status(200).json({ ignored: true });
    }

    const eventData = {
      event_name: "Purchase",
      event_time: Math.floor(Date.now() / 1000),
      user_data: {
        em: hashEmail(email),
        fbc: fbc || undefined,
        fbp: fbp || undefined,
      },
      custom_data: {
        value: parseFloat(amount),
        currency: "BRL",
      },
      event_id: orderId,
    };

    Object.keys(eventData.user_data).forEach(
      (key) => eventData.user_data[key] === undefined && delete eventData.user_data[key],
    );

    const result = await sendToMetaCAPI(eventData);

    return res.status(200).json({
      success: true,
      message: "Evento enviado para Meta CAPI",
      orderId,
      metaResponse: result,
    });
  } catch (error) {
    console.error("Webhook Error:", error);
    return res.status(500).json({
      error: "Erro ao processar webhook",
      details: error.message,
    });
  }
}
