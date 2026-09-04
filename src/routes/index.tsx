import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { pageHtml } from "@/lib/clone-page-html";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "290 Questões Comentadas PPA – Método 70/70 para Piloto Privado | ANAC",
      },
      {
        name: "description",
        content:
          "Revise as 5 matérias da prova da ANAC e descubra o que ainda pode fazer você errar na banca com 290 questões comentadas com explicações objetivas e pegadinhas da banca.",
      },
      {
        property: "og:title",
        content: "290 Questões Comentadas PPA – Método 70/70 para Piloto Privado",
      },
      {
        property: "og:description",
        content:
          "Revise Regulamentos, Meteorologia, Navegação, Teoria de Voo e Conhecimentos Técnicos com questões comentadas que explicam a resposta, revelam a pegadinha e mostram o conceito.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/clone/images/mockup_principal_290.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/clone/images/mockup_principal_290.png" },
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
    script.src = `/clone/app.js?v=${Date.now()}`;
    document.body.appendChild(script);

    // direct fallback for comment form
    const form = document.getElementById("depoimento-form");
    const alertBox = document.getElementById("depoimento-success-alert");
    const submitBtn = document.getElementById("btn-submit-depoimento");

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const nomeInput = document.getElementById("depoimento-nome") as HTMLInputElement | null;
      const textoInput = document.getElementById("depoimento-texto") as HTMLTextAreaElement | null;
      const nome = nomeInput?.value?.trim();
      const texto = textoInput?.value?.trim();

      if (!nome || !texto) {
        return;
      }

      if (submitBtn) {
        submitBtn.setAttribute("disabled", "true");
        submitBtn.innerHTML = "<span>⏳ Enviando seu depoimento...</span>";
      }

      setTimeout(() => {
        if (form) form.style.display = "none";
        if (alertBox) {
          alertBox.classList.add("show");
          alertBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 400);
    };

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      window.clearInterval(interval);
      script.remove();
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: pageHtml }} />;
}
