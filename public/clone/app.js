(() => {
  // 1. Tab Switcher for Mindmap Previews
  const tabBtns = document.querySelectorAll(".tab-btn");
  const previewCards = document.querySelectorAll(".mindmap-preview-card");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabBtns.forEach((b) => b.classList.remove("active"));
      previewCards.forEach((card) => card.classList.remove("active"));

      btn.classList.add("active");
      const activeCard = document.getElementById(`preview-${targetTab}`);
      if (activeCard) {
        activeCard.classList.add("active");
      }
    });
  });

  // 2. Image Lightbox Zoom Modal
  const modalOverlay = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalClose = document.getElementById("modalClose");
  const zoomTriggers = document.querySelectorAll(".preview-image-box");

  zoomTriggers.forEach((box) => {
    box.addEventListener("click", () => {
      const img = box.querySelector("img");
      if (img && modalOverlay && modalImg) {
        modalImg.src = img.src;
        modalOverlay.classList.add("active");
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }

  // 3. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other active items
      faqItems.forEach((i) => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // 4. Dynamic Countdown Timer (Moved to top script in index.html for unified synchronization)

  // 5. Scroll Reveal Effect
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".section-title, .dor-card, .step-card, .disciplina-card, .bonus-card, .pricing-card",
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition =
        "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      observer.observe(el);
    });

  // 6. Basic Plan Upsell Popup Modal
  const basicCtaBtns = document.querySelectorAll(
    ".btn-basic-cta-box, .btn-green-plan, .open-upsell-modal",
  );
  const upsellModal = document.getElementById("upsellModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  if (basicCtaBtns && upsellModal) {
    basicCtaBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        upsellModal.classList.add("active");
      });
    });
  }

  if (modalCloseBtn && upsellModal) {
    modalCloseBtn.addEventListener("click", () => {
      upsellModal.classList.remove("active");
    });
  }

  if (upsellModal) {
    upsellModal.addEventListener("click", (e) => {
      if (e.target === upsellModal) {
        upsellModal.classList.remove("active");
      }
    });
  }

  // 7. Reusable BonusCard Component & Interaction logic
  const bonusesData = [
    {
      badge: "🔥 BÔNUS 01",
      imagem: "/clone/images/mockup_bonus_01_cockpit.png",
      titulo: "Cockpit 70/70",
      descricao:
        "Um painel visual que revela seus pontos fracos e mostra exatamente o que corrigir para chegar mais preparado à banca.",
      precoAntigo: "De R$ 47,00",
      destaque: true,
    },
    {
      badge: "🔥 BÔNUS 02",
      imagem: "/clone/images/mockup_bonus_02_rota21.png",
      titulo: "Rota 21",
      descricao:
        "Um plano visual de 21 dias com missões diárias para estudar sem improviso e avançar com segurança rumo ao 70/70.",
      precoAntigo: "De R$ 39,00",
      destaque: false,
    },
    {
      badge: "🔥 BÔNUS 03",
      imagem: "/clone/images/mockup_bonus_03_mapas.png",
      titulo: "Mapas Mentais 70/70",
      descricao:
        "Mapas visuais das cinco matérias que conectam os conceitos decisivos e fazem você revisar e memorizar muito mais rápido.",
      precoAntigo: "De R$ 47,00",
      destaque: false,
    },
  ];

  const bonusGrid = document.getElementById("bonusGrid");

  function BonusCard({ badge, imagem, titulo, descricao, precoAntigo, destaque }) {
    const card = document.createElement("div");
    card.className = `bonus-card ${destaque ? "bonus-card-highlight" : ""}`;

    card.innerHTML = `
      ${badge ? `<div class="bonus-badge-top"><span>${badge}</span></div>` : ""}
      <div class="bonus-card-img-container">
        <img src="${imagem}" alt="${titulo}" class="bonus-card-img" />
      </div>
      <div class="bonus-card-info">
        <h3 class="bonus-card-title">${titulo}</h3>
        <p class="bonus-card-desc">${descricao}</p>
        <div class="bonus-card-divider"></div>
        <div class="bonus-card-price-row">
          <span class="bonus-price-old">${precoAntigo}</span>
          <span class="bonus-price-free">INCLUSO GRÁTIS</span>
        </div>
      </div>
    `;

    return card;
  }

  // Render cards
  if (bonusGrid) {
    bonusesData.forEach((data) => {
      const cardElement = BonusCard(data);
      bonusGrid.appendChild(cardElement);
    });
  }

  // 8. Dynamic UTM parameter forwarding to checkout links
  const urlParams = new URLSearchParams(window.location.search);
  const utms = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "src"];

  const checkoutLinks = document.querySelectorAll(
    'a[href*="pay.wiapy.com"], a[href*="pay.lowify.com.br/checkout"], a[href*="checkout"]',
  );
  checkoutLinks.forEach((link) => {
    try {
      const url = new URL(link.href);
      urlParams.forEach((value, key) => {
        if (
          utms.includes(key.toLowerCase()) ||
          key.toLowerCase().startsWith("utm_") ||
          key.toLowerCase() === "src"
        ) {
          url.searchParams.set(key, value);
        }
      });
      link.href = url.toString();
    } catch (e) {
      console.error("Error forwarding UTMs:", e);
    }
  });

  // 9. Formulário de Depoimento / Feedback do Usuário
  const depoimentoForm = document.getElementById("depoimento-form");
  const depoimentoSuccessAlert = document.getElementById("depoimento-success-alert");
  const btnSubmitDepoimento = document.getElementById("btn-submit-depoimento");

  if (depoimentoForm) {
    depoimentoForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nomeInput = document.getElementById("depoimento-nome");
      const funcaoInput = document.getElementById("depoimento-funcao");
      const textoInput = document.getElementById("depoimento-texto");

      if (!nomeInput || !textoInput || !nomeInput.value.trim() || !textoInput.value.trim()) {
        alert("Por favor, preencha seu nome e seu depoimento.");
        return;
      }

      if (btnSubmitDepoimento) {
        btnSubmitDepoimento.disabled = true;
        btnSubmitDepoimento.innerHTML = "<span>⏳ Enviando seu depoimento...</span>";
      }

      setTimeout(() => {
        depoimentoForm.style.display = "none";
        if (depoimentoSuccessAlert) {
          depoimentoSuccessAlert.classList.add("show");
          depoimentoSuccessAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 500);
    });
  }
})();
