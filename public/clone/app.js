(() => {
  // 1. Tab Switcher for Mindmap Previews
  const tabBtns = document.querySelectorAll('.tab-btn');
  const previewCards = document.querySelectorAll('.mindmap-preview-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      previewCards.forEach(card => card.classList.remove('active'));

      btn.classList.add('active');
      const activeCard = document.getElementById(`preview-${targetTab}`);
      if (activeCard) {
        activeCard.classList.add('active');
      }
    });
  });

  // 2. Image Lightbox Zoom Modal
  const modalOverlay = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');
  const zoomTriggers = document.querySelectorAll('.preview-image-box');

  zoomTriggers.forEach(box => {
    box.addEventListener('click', () => {
      const img = box.querySelector('img');
      if (img && modalOverlay && modalImg) {
        modalImg.src = img.src;
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 3. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other active items
      faqItems.forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Dynamic Countdown Timer (Moved to top script in index.html for unified synchronization)


  // 5. Scroll Reveal Effect
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-title, .dor-card, .step-card, .disciplina-card, .bonus-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });

  // 6. Basic Plan Upsell Popup Modal
  const basicCtaBtn = document.querySelector('.btn-green-plan');
  const upsellModal = document.getElementById('upsellModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (basicCtaBtn && upsellModal) {
    basicCtaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      upsellModal.classList.add('active');
    });
  }

  if (modalCloseBtn && upsellModal) {
    modalCloseBtn.addEventListener('click', () => {
      upsellModal.classList.remove('active');
    });
  }

  if (upsellModal) {
    upsellModal.addEventListener('click', (e) => {
      if (e.target === upsellModal) {
        upsellModal.classList.remove('active');
      }
    });
  }

  // 7. Reusable BonusCard Component & Interaction logic
  const bonusesData = [
    {
      badge: '🔥 ESSENCIAL',
      imagem: '/clone/images/completo_mockup.png',
      titulo: 'Bônus 01: Guia Descomplicado de METAR & TAF',
      descricao: 'Aprenda a ler qualquer boletim meteorológico aeronáutico em segundos sem se confundir com códigos e siglas.',
      precoAntigo: 'De R$ 47,00',
      destaque: true
    },
    {
      badge: '🔥 ESSENCIAL',
      imagem: '/clone/images/recebe_mockup.jpg',
      titulo: 'Bônus 02: Manual Rápido do Computador de Voo E6B',
      descricao: 'Passo a passo visual dos principais cálculos de vento, proa, velocidade verdadeira e consumo de combustível.',
      precoAntigo: 'De R$ 39,00',
      destaque: false
    },
    {
      badge: '🔥 ESSENCIAL',
      imagem: '/clone/images/hero_mockup_v6_1.png',
      titulo: 'Bônus 03: Pegadinhas e Questões Frequentes da ANAC',
      descricao: 'Os macetes e as armadilhas conceituais mais comuns cobradas pela banca para você não perder pontos bobos.',
      precoAntigo: 'De R$ 37,00',
      destaque: false
    },
    {
      badge: '🔥 ESSENCIAL',
      imagem: '/clone/images/hero_mockup_v6.png',
      titulo: 'Bônus 04: Flashcards Visuais de Instrumentos de Voo',
      descricao: 'Identificação rápida do basic six, funcionamento dos instrumentos giroscópicos e sistema pitot-estática.',
      precoAntigo: 'De R$ 29,00',
      destaque: false
    }
  ];

  const bonusGrid = document.getElementById('bonusGrid');

  function BonusCard({ badge, imagem, titulo, descricao, precoAntigo, destaque }) {
    const card = document.createElement('div');
    card.className = `bonus-card ${destaque ? 'bonus-card-highlight' : ''}`;
    
    card.innerHTML = `
      ${badge ? `<div class="bonus-badge-top"><span>${badge}</span></div>` : ''}
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
    bonusesData.forEach(data => {
      const cardElement = BonusCard(data);
      bonusGrid.appendChild(cardElement);
    });
  }

  // 8. Dynamic UTM parameter forwarding to checkout links
  const urlParams = new URLSearchParams(window.location.search);
  const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'src'];
  
  const checkoutLinks = document.querySelectorAll('a[href*="pay.wiapy.com"], a[href*="pay.lowify.com.br/checkout"], a[href*="checkout"]');
  checkoutLinks.forEach(link => {
    try {
      const url = new URL(link.href);
      urlParams.forEach((value, key) => {
        if (utms.includes(key.toLowerCase()) || key.toLowerCase().startsWith('utm_') || key.toLowerCase() === 'src') {
          url.searchParams.set(key, value);
        }
      });
      link.href = url.toString();
    } catch (e) {
      console.error('Error forwarding UTMs:', e);
    }
  });
})();
