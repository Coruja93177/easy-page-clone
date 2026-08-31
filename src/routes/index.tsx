import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { pageHtml } from "@/lib/clone-page-html";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "120 Fichas Visuais para Piloto Privado – ANAC | Guia Completo",
      },
      {
        name: "description",
        content:
          "120 Fichas Visuais para Piloto Privado – ANAC. Domine Regulamentos, Meteorologia, Navegação, Teoria de Voo e Conhecimentos Técnicos de forma visual.",
      },
      {
        property: "og:title",
        content: "120 Fichas Visuais para Piloto Privado – ANAC",
      },
      {
        property: "og:description",
        content:
          "Domine as 5 matérias da banca da ANAC com resumos e esquemas visuais prontos para você ser aprovado de primeira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: "/clone/css/style.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // countdown timer (15 min, persisted)
    const duration = 15 * 60;
    const key = "offer_countdown_start_time";
    const now = Math.floor(Date.now() / 1000);
    let saved = Number(localStorage.getItem(key));
    if (!saved) {
      saved = now;
      localStorage.setItem(key, String(now));
    }
    let remaining = duration - (now - saved);
    if (remaining <= 0) {
      localStorage.setItem(key, String(now));
      remaining = duration;
    }
    const tick = () => {
      const m = String(Math.floor(remaining / 60)).padStart(2, "0");
      const s = String(remaining % 60).padStart(2, "0");
      const d = document.getElementById("timer-display");
      if (d) d.textContent = `${m}:${s}`;
      const dd = document.getElementById("timerDigits");
      if (dd) dd.textContent = `00:${m}:${s}`;
      if (remaining > 0) remaining--;
    };
    tick();
    const interval = window.setInterval(tick, 1000);

    const dateDisplay = document.getElementById("current-date-display");
    if (dateDisplay) {
      dateDisplay.textContent = new Date().toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }

    // page interactions script
    const script = document.createElement("script");
    script.src = "/clone/app.js";
    document.body.appendChild(script);

    return () => {
      window.clearInterval(interval);
      script.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
