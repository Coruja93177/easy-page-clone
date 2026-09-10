export const pageHtml = `
  <!-- TOP RED TICKER BAR -->
  <div class="top-ticker-bar" style="justify-content: center;">
    <div id="countdown-timer" style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; letter-spacing: 0.5px;">
      <span>💥 ESTA OFERTA EXPIRA EM:</span>
      <span id="timer-display" style="color: #FDE047; font-weight: 900; background: rgba(0,0,0,0.25); padding: 2px 8px; border-radius: 4px; font-family: monospace; font-size: 0.95rem;">15:00</span>
    </div>
  </div>

  <!-- HERO SECTION -->
  <header class="hero">
    <div class="hero-glow-bg"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-headline">
          REVISE AS <span style="color: #0284c7;">5 MATÉRIAS DA PROVA DA ANAC</span> E DESCUBRA O QUE AINDA PODE FAZER VOCÊ <span style="color: #0284c7;">ERRAR NA BANCA</span>
        </h1>
      </div>
    </div>

    <!-- MOCKUP CONTAINER -->
    <div class="hero-mockup-container">
      <div class="hero-mockup-wrapper" style="max-width: 620px; margin: 0 auto;">
        <img src="/clone/images/mockup_principal_290.png" alt="290 Questões Comentadas PPA – Método 70/70 para Piloto Privado" class="hero-mockup-img" style="border-radius: 16px; box-shadow: 0 16px 36px -10px rgba(15, 23, 42, 0.18);">
      </div>
    </div>

    <div class="container">
      <!-- SUBHEADLINE & CTA -->
      <p class="hero-subheadline">
        Pare de apenas conferir gabaritos sem entender onde você se confundiu. Revise <strong>Regulamentos, Meteorologia, Navegação, Teoria de Voo e Conhecimentos Técnicos</strong> com questões comentadas que explicam a resposta, revelam a pegadinha e mostram o conceito que a banca queria testar.
      </p>
      <div class="hero-cta-wrapper">
        <a href="#oferta" class="btn-green-cta">
          <span>QUERO REVISAR AS 5 MATÉRIAS AGORA ↓</span>
        </a>

        <div class="hero-security-note">
          🔒 Compra segura · Pagamento único · Acesso Digital Imediato
        </div>
      </div>
    </div>
  </header>

  <!-- PRÉVIA DO CONTEÚDO -->
  <section class="section-padding previa-section" id="previa">
    <div class="container text-center">
      <span class="section-badge badge-gold" style="background: rgba(2, 132, 199, 0.08); color: #0284c7; border-color: rgba(2, 132, 199, 0.25);">
        ✈️ PRÉVIA DO CONTEÚDO
      </span>
      <h2 class="section-title">Veja as questões comentadas por dentro</h2>
      <p class="section-subtitle">
        Cada questão foi estruturada para transformar a prática em revisão: você responde, confere o gabarito, entende o motivo, identifica a pegadinha e memoriza o conceito central.
      </p>
    </div>

    <!-- Horizontal Carousel Container -->
    <div class="previa-carousel-wrapper">
      <div class="previa-track" id="previaTrack">
        <!-- Set 1 -->
        <div class="previa-card-item"><img src="/clone/images/map_1.jpg" alt="Questão 1"></div>
        <div class="previa-card-item"><img src="/clone/images/map_2.jpg" alt="Questão 2"></div>
        <div class="previa-card-item"><img src="/clone/images/map_3.jpg" alt="Questão 3"></div>
        <div class="previa-card-item"><img src="/clone/images/map_4.jpg" alt="Questão 4"></div>
        <div class="previa-card-item"><img src="/clone/images/map_5.jpg" alt="Questão 5"></div>
        <div class="previa-card-item"><img src="/clone/images/map_6.jpg" alt="Questão 6"></div>
        <div class="previa-card-item"><img src="/clone/images/map_7.jpg" alt="Questão 7"></div>
        <div class="previa-card-item"><img src="/clone/images/map_8.jpg" alt="Questão 8"></div>
        <div class="previa-card-item"><img src="/clone/images/map_9.jpg" alt="Questão 9"></div>
        <div class="previa-card-item"><img src="/clone/images/map_10.jpg" alt="Questão 10"></div>
        <div class="previa-card-item"><img src="/clone/images/map_11.jpg" alt="Questão 11"></div>
        <div class="previa-card-item"><img src="/clone/images/map_12.jpg" alt="Questão 12"></div>
        <div class="previa-card-item"><img src="/clone/images/map_13.jpg" alt="Questão 13"></div>
        <div class="previa-card-item"><img src="/clone/images/map_14.jpg" alt="Questão 14"></div>
        <div class="previa-card-item"><img src="/clone/images/map_15.jpg" alt="Questão 15"></div>
        <div class="previa-card-item"><img src="/clone/images/map_16.jpg" alt="Questão 16"></div>
        <div class="previa-card-item"><img src="/clone/images/map_17.jpg" alt="Questão 17"></div>
        <div class="previa-card-item"><img src="/clone/images/map_18.jpg" alt="Questão 18"></div>
        <div class="previa-card-item"><img src="/clone/images/map_19.jpg" alt="Questão 19"></div>

        <!-- Duplicated Set for Seamless Infinite Loop -->
        <div class="previa-card-item"><img src="/clone/images/map_1.jpg" alt="Questão 1"></div>
        <div class="previa-card-item"><img src="/clone/images/map_2.jpg" alt="Questão 2"></div>
        <div class="previa-card-item"><img src="/clone/images/map_3.jpg" alt="Questão 3"></div>
        <div class="previa-card-item"><img src="/clone/images/map_4.jpg" alt="Questão 4"></div>
        <div class="previa-card-item"><img src="/clone/images/map_5.jpg" alt="Questão 5"></div>
        <div class="previa-card-item"><img src="/clone/images/map_6.jpg" alt="Questão 6"></div>
        <div class="previa-card-item"><img src="/clone/images/map_7.jpg" alt="Questão 7"></div>
        <div class="previa-card-item"><img src="/clone/images/map_8.jpg" alt="Questão 8"></div>
        <div class="previa-card-item"><img src="/clone/images/map_9.jpg" alt="Questão 9"></div>
        <div class="previa-card-item"><img src="/clone/images/map_10.jpg" alt="Questão 10"></div>
        <div class="previa-card-item"><img src="/clone/images/map_11.jpg" alt="Questão 11"></div>
        <div class="previa-card-item"><img src="/clone/images/map_12.jpg" alt="Questão 12"></div>
        <div class="previa-card-item"><img src="/clone/images/map_13.jpg" alt="Questão 13"></div>
        <div class="previa-card-item"><img src="/clone/images/map_14.jpg" alt="Questão 14"></div>
        <div class="previa-card-item"><img src="/clone/images/map_15.jpg" alt="Questão 15"></div>
        <div class="previa-card-item"><img src="/clone/images/map_16.jpg" alt="Questão 16"></div>
        <div class="previa-card-item"><img src="/clone/images/map_17.jpg" alt="Questão 17"></div>
        <div class="previa-card-item"><img src="/clone/images/map_18.jpg" alt="Questão 18"></div>
        <div class="previa-card-item"><img src="/clone/images/map_19.jpg" alt="Questão 19"></div>
      </div>
    </div>
  </section>

  <!-- BIBLIOTECA / CONTEÚDO DAS 5 MATÉRIAS -->
  <section class="section-padding biblioteca-section" id="biblioteca">
    <div class="container text-center">
      <span class="section-badge" style="background: rgba(56, 189, 248, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); font-weight: 800;">
        ⚡ GUIA PRÁTICO DAS 5 MATÉRIAS
      </span>
      <h2 class="section-title" style="color: #ffffff; font-weight: 800;">
        Explore o conteúdo das <span style="color: #38bdf8;">290 Questões Comentadas PPA</span>
      </h2>
      <p class="section-subtitle" style="color: #cbd5e1;">
        As questões são organizadas pelas cinco matérias da prova, permitindo que você revise cada área separadamente e encontre com facilidade os assuntos em que ainda precisa melhorar.
      </p>

      <!-- 5 Matérias Cards Grid -->
      <div class="materias-grid">
        <div class="materia-card">
          <div class="materia-header">
            <h3 class="materia-title">Meteorologia Aeronáutica</h3>
            <span class="materia-badge">60 questões</span>
          </div>
          <p class="materia-desc">Atmosfera, pressão, temperatura, umidade, nuvens, ventos, massas de ar, frentes e mensagens meteorológicas, incluindo METAR, TAF e SPECI (001–060).</p>
        </div>

        <div class="materia-card">
          <div class="materia-header">
            <h3 class="materia-title">Navegação Aeronáutica</h3>
            <span class="materia-badge">60 questões</span>
          </div>
          <p class="materia-desc">Vento, rumo, proa, deriva, cartas, distâncias, velocidades, consumo e conceitos de navegação que costumam gerar confusão (061–120).</p>
        </div>

        <div class="materia-card">
          <div class="materia-header">
            <h3 class="materia-title">Regulamentos de Tráfego Aéreo</h3>
            <span class="materia-badge">60 questões</span>
          </div>
          <p class="materia-desc">Regras do ar, operações VFR, espaços aéreos, procedimentos, siglas e conceitos essenciais de regulamentação (121–180).</p>
        </div>

        <div class="materia-card">
          <div class="materia-header">
            <h3 class="materia-title">Teoria de Voo</h3>
            <span class="materia-badge">70 questões</span>
          </div>
          <p class="materia-desc">Aerodinâmica, forças do voo, sustentação, arrasto, estabilidade, comandos, eixos e comportamento da aeronave (181–250).</p>
        </div>

        <div class="materia-card">
          <div class="materia-header">
            <h3 class="materia-title">Conhecimentos Técnicos</h3>
            <span class="materia-badge">40 questões</span>
          </div>
          <p class="materia-desc">Motores, sistemas, instrumentos e conhecimentos técnicos essenciais da aeronave (251–290).</p>
        </div>
      </div>
    </div>

    <!-- Multi-Row Carousels -->
    <div class="multi-carousel-container" style="margin-top: 48px; display: flex; flex-direction: column; gap: 18px;">
      <!-- ROW 1 -->
      <div class="multi-carousel-wrapper">
        <div class="multi-track track-clockwise">
          <div class="multi-card"><img src="/clone/images/map_1.jpg" alt="Questão 1"></div>
          <div class="multi-card"><img src="/clone/images/map_2.jpg" alt="Questão 2"></div>
          <div class="multi-card"><img src="/clone/images/map_3.jpg" alt="Questão 3"></div>
          <div class="multi-card"><img src="/clone/images/map_4.jpg" alt="Questão 4"></div>
          <div class="multi-card"><img src="/clone/images/map_5.jpg" alt="Questão 5"></div>
          <div class="multi-card"><img src="/clone/images/map_6.jpg" alt="Questão 6"></div>
          <div class="multi-card"><img src="/clone/images/map_7.jpg" alt="Questão 7"></div>
          <!-- Duplicated Set -->
          <div class="multi-card"><img src="/clone/images/map_1.jpg" alt="Questão 1"></div>
          <div class="multi-card"><img src="/clone/images/map_2.jpg" alt="Questão 2"></div>
          <div class="multi-card"><img src="/clone/images/map_3.jpg" alt="Questão 3"></div>
          <div class="multi-card"><img src="/clone/images/map_4.jpg" alt="Questão 4"></div>
          <div class="multi-card"><img src="/clone/images/map_5.jpg" alt="Questão 5"></div>
          <div class="multi-card"><img src="/clone/images/map_6.jpg" alt="Questão 6"></div>
          <div class="multi-card"><img src="/clone/images/map_7.jpg" alt="Questão 7"></div>
        </div>
      </div>

      <!-- ROW 2 -->
      <div class="multi-carousel-wrapper">
        <div class="multi-track track-counter-clockwise">
          <div class="multi-card"><img src="/clone/images/map_8.jpg" alt="Questão 8"></div>
          <div class="multi-card"><img src="/clone/images/map_9.jpg" alt="Questão 9"></div>
          <div class="multi-card"><img src="/clone/images/map_10.jpg" alt="Questão 10"></div>
          <div class="multi-card"><img src="/clone/images/map_11.jpg" alt="Questão 11"></div>
          <div class="multi-card"><img src="/clone/images/map_12.jpg" alt="Questão 12"></div>
          <div class="multi-card"><img src="/clone/images/map_13.jpg" alt="Questão 13"></div>
          <!-- Duplicated Set -->
          <div class="multi-card"><img src="/clone/images/map_8.jpg" alt="Questão 8"></div>
          <div class="multi-card"><img src="/clone/images/map_9.jpg" alt="Questão 9"></div>
          <div class="multi-card"><img src="/clone/images/map_10.jpg" alt="Questão 10"></div>
          <div class="multi-card"><img src="/clone/images/map_11.jpg" alt="Questão 11"></div>
          <div class="multi-card"><img src="/clone/images/map_12.jpg" alt="Questão 12"></div>
          <div class="multi-card"><img src="/clone/images/map_13.jpg" alt="Questão 13"></div>
        </div>
      </div>

      <!-- ROW 3 -->
      <div class="multi-carousel-wrapper">
        <div class="multi-track track-clockwise">
          <div class="multi-card"><img src="/clone/images/map_14.jpg" alt="Questão 14"></div>
          <div class="multi-card"><img src="/clone/images/map_15.jpg" alt="Questão 15"></div>
          <div class="multi-card"><img src="/clone/images/map_16.jpg" alt="Questão 16"></div>
          <div class="multi-card"><img src="/clone/images/map_17.jpg" alt="Questão 17"></div>
          <div class="multi-card"><img src="/clone/images/map_18.jpg" alt="Questão 18"></div>
          <div class="multi-card"><img src="/clone/images/map_19.jpg" alt="Questão 19"></div>
          <!-- Duplicated Set -->
          <div class="multi-card"><img src="/clone/images/map_14.jpg" alt="Questão 14"></div>
          <div class="multi-card"><img src="/clone/images/map_15.jpg" alt="Questão 15"></div>
          <div class="multi-card"><img src="/clone/images/map_16.jpg" alt="Questão 16"></div>
          <div class="multi-card"><img src="/clone/images/map_17.jpg" alt="Questão 17"></div>
          <div class="multi-card"><img src="/clone/images/map_18.jpg" alt="Questão 18"></div>
          <div class="multi-card"><img src="/clone/images/map_19.jpg" alt="Questão 19"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- O QUE VOCÊ RECEBE -->
  <section class="section-padding recebe-section" id="recebe">
    <div class="container">
      <div class="text-center" style="margin-bottom: 40px;">
        <h2 class="section-title" style="color: #0F172A; font-size: 2.4rem; margin-bottom: 12px; font-weight: 800; text-align: center;">O que você <span style="color: #0284c7;">recebe</span></h2>
        <p class="section-subtitle" style="color: #475569; font-size: 1.15rem; max-width: 650px; margin: 0 auto; line-height: 1.5; font-weight: 400; text-align: center;">
          <strong style="color: #0f172a; font-weight: 800;">290 Questões Comentadas PPA — Método 70/70</strong>, organizadas pelas cinco matérias da prova.
        </p>
      </div>

      <!-- CENTERED MOCKUP BOX -->
      <div class="recebe-mockup-wrapper-centered" style="max-width: 580px; margin: 0 auto 36px auto;">
        <img src="/clone/images/mockup_principal_290.png" alt="290 Questões Comentadas PPA" class="recebe-mockup-centered-img" style="border-radius: 16px; box-shadow: 0 16px 36px -10px rgba(15, 23, 42, 0.18);">
      </div>

      <!-- CARDS LIST -->
      <div class="recebe-cards-container">
        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">290 questões comentadas para Piloto Privado — ANAC (Faixa 001–290)</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Meteorologia Aeronáutica: 60 questões (Faixa 001–060)</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Navegação Aeronáutica: 60 questões (Faixa 061–120)</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Regulamentos de Tráfego Aéreo: 60 questões (Faixa 121–180)</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Teoria de Voo: 70 questões (Faixa 181–250)</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Conhecimentos Técnicos: 40 questões (Faixa 251–290)</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Enunciado com quatro alternativas em cada questão</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Gabarito destacado com explicação objetiva</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Caixa Pegadinha da Banca mostrando onde pode acontecer a confusão</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Caixa Memorize para reforçar o conceito principal</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Bloco O que a banca queria testar revelando o ponto central da questão</div>
        </div>

        <div class="recebe-card">
          <div class="recebe-card-check">✓</div>
          <div class="recebe-card-text">Cadernos de questões comentadas organizados por matéria</div>
        </div>
      </div>

      <!-- FOOTER TEXT -->
      <p class="recebe-footer-text">
        Use o material como uma camada entre o estudo e o simulado: responda, entenda, corrija e revise antes de testar novamente.
      </p>
    </div>
  </section>

  <!-- BÔNUS PREMIUM -->
  <section class="section-padding bonus-section">
    <div class="container">
      <span class="section-badge badge-gold">PRESENTES EXCLUSIVOS</span>
      <h2 class="section-title" style="color: var(--white);">Bônus exclusivos <span style="color: #38bdf8;">inclusos</span></h2>
      <p class="section-subtitle" style="color: var(--gray-300);">
        Adquirindo o <strong>Plano Premium</strong>, você recebe as 290 Questões Comentadas PPA e mais três materiais complementares de revisão:
      </p>

      <div class="bonus-grid" id="bonusGrid">
        <!-- Bônus 1 -->
        <div class="bonus-card bonus-card-highlight">
          <div class="bonus-badge-top"><span>🔥 BÔNUS 01</span></div>
          <div class="bonus-card-img-container">
            <img src="/clone/images/mockup_bonus_01_cockpit.png" alt="Cockpit 70/70" class="bonus-card-img" />
          </div>
          <div class="bonus-card-info">
            <h3 class="bonus-card-title">Cockpit 70/70</h3>
            <p class="bonus-card-desc">Um painel visual que revela seus pontos fracos e mostra exatamente o que corrigir para chegar mais preparado à banca.</p>
            <div class="bonus-card-divider"></div>
            <div class="bonus-card-price-row">
              <span class="bonus-price-old">De R$ 47,00</span>
              <span class="bonus-price-free">INCLUSO GRÁTIS</span>
            </div>
          </div>
        </div>

        <!-- Bônus 2 -->
        <div class="bonus-card">
          <div class="bonus-badge-top"><span>🔥 BÔNUS 02</span></div>
          <div class="bonus-card-img-container">
            <img src="/clone/images/mockup_bonus_02_rota21.png" alt="Rota 21" class="bonus-card-img" />
          </div>
          <div class="bonus-card-info">
            <h3 class="bonus-card-title">Rota 21</h3>
            <p class="bonus-card-desc">Um plano visual de 21 dias com missões diárias para estudar sem improviso e avançar com segurança rumo ao 70/70.</p>
            <div class="bonus-card-divider"></div>
            <div class="bonus-card-price-row">
              <span class="bonus-price-old">De R$ 39,00</span>
              <span class="bonus-price-free">INCLUSO GRÁTIS</span>
            </div>
          </div>
        </div>

        <!-- Bônus 3 -->
        <div class="bonus-card">
          <div class="bonus-badge-top"><span>🔥 BÔNUS 03</span></div>
          <div class="bonus-card-img-container">
            <img src="/clone/images/mockup_bonus_03_mapas.png" alt="Mapas Mentais 70/70" class="bonus-card-img" />
          </div>
          <div class="bonus-card-info">
            <h3 class="bonus-card-title">Mapas Mentais 70/70</h3>
            <p class="bonus-card-desc">Mapas visuais das cinco matérias que conectam os conceitos decisivos e fazem você revisar e memorizar muito mais rápido.</p>
            <div class="bonus-card-divider"></div>
            <div class="bonus-card-price-row">
              <span class="bonus-price-old">De R$ 47,00</span>
              <span class="bonus-price-free">INCLUSO GRÁTIS</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bonus-total-box" style="text-align: center; background: rgba(2, 132, 199, 0.08); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 14px; padding: 22px 28px; max-width: 720px; margin: 0 auto;">
        <div style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: rgba(22, 163, 74, 0.15); border: 1px solid rgba(34, 197, 94, 0.4); padding: 4px 14px; border-radius: 20px; margin-bottom: 12px;">
          <span style="font-size: 0.85rem; font-weight: 800; color: #4ade80;">🎁 VALOR TOTAL DOS 3 BÔNUS:</span>
          <span style="font-size: 0.85rem; color: #94a3b8; text-decoration: line-through; font-weight: 600;">R$ 133,00</span>
          <strong style="color: #ffffff; background: #16a34a; padding: 1px 8px; border-radius: 6px; font-size: 0.8rem; font-weight: 800;">100% GRÁTIS NO PLANO PREMIUM</strong>
        </div>
        <p class="bonus-total-text" style="font-size: 1.05rem; color: #e2e8f0; margin: 0; line-height: 1.5;">
          As 290 questões e os três bônus formam uma preparação completa de revisão: prática, correção, associação e recuperação do conteúdo antes da banca.
        </p>
      </div>
    </div>
  </section>



  <!-- DEPOIMENTOS DE ALUNOS APROVADOS (EXPLOSÃO DE DOPAMINA) -->
  <section class="section-padding depoimentos-section" id="depoimentos">
    <div class="container">
      <span class="section-badge badge-gold" style="background: rgba(2, 132, 199, 0.1); color: #0284c7; border-color: rgba(2, 132, 199, 0.25);">
        🔥 QUEM USOU, PASSOU DE PRIMEIRA
      </span>
      <h2 class="section-title" style="color: #0f172a; font-size: 2.3rem;">
        Veja a sensação de ver o <span style="color: #0284c7;">"APROVADO"</span> na tela da ANAC
      </h2>
      <p class="section-subtitle" style="color: #475569; max-width: 720px; margin: 0 auto 36px auto;">
        Pilotos que destravaram Navegação e Meteorologia, pararam de cair em pegadinhas e conquistaram a aprovação com notas acima de 90%.
      </p>

      <div class="depoimentos-grid">
        <!-- Depoimento 1 -->
        <div class="depoimento-card">
          <div>
            <div class="depoimento-header">
              <div class="depoimento-avatar">LR</div>
              <div class="depoimento-user-info">
                <span class="depoimento-name">Lucas Rezende</span>
                <span class="depoimento-role">Aprovado ANAC · 94% de Acertos</span>
              </div>
            </div>
            <div class="depoimento-stars">★★★★★</div>
            <p class="depoimento-quote">
              "Eu estava travado em Navegação há quase 2 meses, errando cálculo de deriva e proa nos simulados. Quando peguei as questões comentadas e vi o passo a passo com a caixa <strong>'Pegadinha da Banca'</strong>, minha mente explodiu! Fiz a banca semana passada e <strong>acertei 19 de 20 em NAV</strong>. A sensação de ver a tela de aprovado não tem preço!"
            </p>
          </div>
          <span class="depoimento-highlight">✈️ 19/20 em Navegação</span>
        </div>

        <!-- Depoimento 2 -->
        <div class="depoimento-card">
          <div>
            <div class="depoimento-header">
              <div class="depoimento-avatar">BC</div>
              <div class="depoimento-user-info">
                <span class="depoimento-name">Beatriz Castanho</span>
                <span class="depoimento-role">Aluna de Aeroclube · Aprovada PPA</span>
              </div>
            </div>
            <div class="depoimento-stars">★★★★★</div>
            <p class="depoimento-quote">
              "Meteorologia era o meu maior pesadelo, eu confundia direto METAR com TAF e os tipos de frentes. Esse material salvou a minha vida! A caixa <em>'O que a banca queria testar'</em> vai direto na ferida. <strong>Passei em todas as 5 matérias de primeira!</strong> Valeu cada centavo, é o melhor investimento pra quem quer voar logo."
            </p>
          </div>
          <span class="depoimento-highlight">🔥 Aprovada nas 5 Matérias de 1ª</span>
        </div>

        <!-- Depoimento 3 -->
        <div class="depoimento-card">
          <div>
            <div class="depoimento-header">
              <div class="depoimento-avatar">RF</div>
              <div class="depoimento-user-info">
                <span class="depoimento-name">Rodrigo Fagundes</span>
                <span class="depoimento-role">Estudou Sozinho em Casa</span>
              </div>
            </div>
            <div class="depoimento-stars">★★★★★</div>
            <p class="depoimento-quote">
              "Estudar sozinho por livros grossos é muito cansativo. Esse método das 5 etapas é viciante: você responde, entende na hora o erro e fixa na memória. Cheguei na prova da ANAC tão confiante que parecia que eu já tinha visto cada uma das 100 questões antes. <strong>Bati 92% de média geral!</strong>"
            </p>
          </div>
          <span class="depoimento-highlight">🎯 92% de Média Geral</span>
        </div>

        <!-- Depoimento 4 -->
        <div class="depoimento-card">
          <div>
            <div class="depoimento-header">
              <div class="depoimento-avatar">GS</div>
              <div class="depoimento-user-info">
                <span class="depoimento-name">Gabriel Silveira</span>
                <span class="depoimento-role">Piloto Privado Formado</span>
              </div>
            </div>
            <div class="depoimento-stars">★★★★★</div>
            <p class="depoimento-quote">
              "O diferencial absurdo são os macetes de pegadinha. A banca adora trocar uma palavra para te induzir ao erro em Regulamentos e Teoria de Voo. Quando você treina com esse material comentado, seu cérebro bate o olho e já identifica a armadilha na hora. O coração bate forte de alegria quando você fecha a prova sabendo que passou!"
            </p>
          </div>
          <span class="depoimento-highlight">⚡ Identificou Todas as Pegadinhas</span>
        </div>

        <!-- Depoimento 5 -->
        <div class="depoimento-card">
          <div>
            <div class="depoimento-header">
              <div class="depoimento-avatar">MA</div>
              <div class="depoimento-user-info">
                <span class="depoimento-name">Mariana Albuquerque</span>
                <span class="depoimento-role">Piloto Privado Avião (PPA)</span>
              </div>
            </div>
            <div class="depoimento-stars">★★★★★</div>
            <p class="depoimento-quote">
              "O <strong>Cockpit 70/70</strong> e o cronograma <strong>Rota 21</strong> do plano completo foram a virada de chave nos meus últimos dias antes da prova. A adrenalina de ver o resultado 'APTO' gerado no sistema da ANAC é indescritível. Não façam a banca sem antes revisar por aqui!"
            </p>
          </div>
          <span class="depoimento-highlight">🏆 Resultado: APTO NA ANAC</span>
        </div>
      </div>

      <!-- FORMULÁRIO PARA DEIXAR DEPOIMENTO / FEEDBACK -->
      <div class="depoimento-form-wrapper" id="form-depoimento-wrapper">
        <div class="depoimento-form-header">
          <h3 class="depoimento-form-title">✍️ Já é aluno do material? Deixe seu depoimento</h3>
          <p class="depoimento-form-subtitle">
            Conte como foi sua evolução nos estudos ou sua aprovação na banca!
          </p>
        </div>

        <form id="depoimento-form" onsubmit="return false;">
          <div class="depoimento-form-grid">
            <div class="depoimento-form-group">
              <label class="depoimento-label" for="depoimento-nome">Seu Nome *</label>
              <input 
                type="text" 
                id="depoimento-nome" 
                class="depoimento-input" 
                placeholder="Ex: Gabriel Santos" 
                required 
              />
            </div>
            <div class="depoimento-form-group">
              <label class="depoimento-label" for="depoimento-funcao">Sua Situação *</label>
              <input 
                type="text" 
                id="depoimento-funcao" 
                class="depoimento-input" 
                placeholder="Ex: Aluno PPA · Aprovado" 
                required 
              />
            </div>
          </div>

          <div class="depoimento-form-group">
            <label class="depoimento-label" for="depoimento-texto">Seu Depoimento *</label>
            <textarea 
              id="depoimento-texto" 
              class="depoimento-textarea" 
              rows="2"
              placeholder="Escreva brevemente como o material ajudou na sua preparação..."
              required
            ></textarea>
          </div>

          <button type="submit" id="btn-submit-depoimento" class="depoimento-btn-submit">
            <span>✈️ Enviar Depoimento</span>
          </button>
        </form>

        <!-- AVISO DE AVALIAÇÃO / SUCESSO -->
        <div id="depoimento-success-alert" class="depoimento-feedback-alert">
          <span class="depoimento-alert-icon">🎉</span>
          <h4 class="depoimento-alert-title">Depoimento enviado com sucesso!</h4>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION DIVIDER -->
  <div class="section-divider-navy"></div>

  <!-- OFERTA E PRICING -->
  <section class="section-padding oferta-section" id="oferta">
    <div class="container">
      <div class="countdown-box">
        <div style="font-size: 0.8rem; font-weight: 800; color: #ea580c; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px; display: flex; align-items: center; justify-content: center; gap: 6px;">
          ⏰ CONDIÇÃO ESPECIAL DE ACESSO
        </div>
        <div style="font-size: 1.15rem; font-weight: 800; color: #0f172a; font-family: var(--font-heading); line-height: 1.3;">
          Esta oferta é válida somente hoje, <span id="current-date-display">...</span>
        </div>
      </div>

      <h2 class="section-title" style="color: var(--white); font-size: 2.5rem; font-weight: 800; margin-bottom: 12px; text-align: center;">Escolha o seu <span style="color: #38bdf8;">plano</span></h2>
      <p class="section-subtitle" style="color: var(--gray-300); font-size: 1.1rem; text-align: center; max-width: 650px; margin: 0 auto 40px auto; line-height: 1.5;">
        Garanta o acesso às 290 Questões Comentadas PPA e escolha entre o produto principal ou o pacote com os três bônus de revisão.
      </p>

      <div class="pricing-grid">
        <!-- PLANO BÁSICO -->
        <div class="pricing-card plan-basic-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 28px 24px;">
          <div>
            <!-- Capsule Badge -->
            <div style="text-align: center; margin-bottom: 8px; margin-top: 4px;">
              <span class="plan-capsule-badge" style="background: rgba(100, 116, 139, 0.05); border: 1px solid rgba(100, 116, 139, 0.15); color: #64748b; font-size: 0.78rem; padding: 4px 12px;">ACESSO SIMPLES</span>
            </div>

            <h3 class="plan-name" style="text-align: center; margin-bottom: 16px; font-size: 1.45rem; font-weight: 800;">Plano Básico</h3>

            <!-- Features List -->
            <div class="plan-features" style="margin-bottom: 20px; gap: 8px;">
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; line-height: 1.35; color: #334155;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span>290 Questões Comentadas PPA</span>
              </div>
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; line-height: 1.35; color: #334155;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span>Garantia de 7 dias</span>
              </div>
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; line-height: 1.35; color: #334155;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span>Acesso imediato</span>
              </div>
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; line-height: 1.35; color: #334155;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span>Acesso vitalício</span>
              </div>
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; line-height: 1.35; color: #94a3b8; font-weight: normal;">
                <span class="check" style="color: #ef4444; font-weight: bold; font-size: 0.95rem;">✕</span>
                <span>Sem os 3 bônus complementares</span>
              </div>
            </div>

            <!-- Price Container -->
            <div class="plan-price-promo-container" style="text-align: center; margin-bottom: 16px;">
              <div class="plan-price-old" style="font-size: 0.88rem; color: #64748b; margin-bottom: 2px;">por apenas:</div>
              <div class="plan-price-box" style="justify-content: center; margin-bottom: 2px; display: flex; align-items: baseline; gap: 3px;">
                <span class="plan-currency" style="color: #0f172a; font-size: 1.5rem; font-weight: 800;">R$</span>
                <span class="plan-price" style="color: #0f172a; font-size: 3.2rem; font-weight: 800; line-height: 1;">9,90</span>
              </div>
              <div class="plan-period" style="font-size: 0.85rem; color: #475569;">
                pagamento único
              </div>
            </div>

            <!-- White CTA Box Button -->
            <div style="margin-bottom: 14px;">
              <button type="button" class="btn-basic-cta-box open-upsell-modal" style="padding: 13px 18px; font-size: 0.95rem;">
                <span>QUERO O PLANO BÁSICO →</span>
              </button>
            </div>

            <!-- UPSELL BOX -->
            <div class="plan-basic-upsell-box" style="background: #f0f9ff; border: 1px dashed #7dd3fc; border-radius: 10px; padding: 12px 14px; margin-top: 12px; text-align: center;">
              <p style="font-size: 0.84rem; color: #334155; line-height: 1.4; margin: 0; text-align: center;">
                Por mais <strong>R$ 10,00</strong>, leve o pacote com os <strong>3 bônus exclusivos</strong>.
              </p>
              <a href="#plano-premium" class="upsell-link" style="color: #0284c7; font-weight: 800; text-decoration: underline; display: inline-block; margin-top: 6px; font-size: 0.82rem; font-family: var(--font-heading);">VER PLANO PREMIUM ↓</a>
            </div>
          </div>
        </div>

        <!-- PLANO PREMIUM -->
        <div class="pricing-card featured" id="plano-premium" style="display: flex; flex-direction: column; justify-content: space-between; padding: 28px 24px; border: 2px solid #0284c7; position: relative;">
          <div>
            <h3 class="plan-name" style="text-align: center; margin-bottom: 14px; font-size: 1.45rem; font-weight: 800; color: #0f172a;">Plano Premium</h3>

            <!-- Mockup Image -->
            <div class="plan-mockup-wrapper" style="margin: 8px auto 12px auto;">
              <img src="/clone/images/mockup_principal_290.png" alt="290 Questões Comentadas PPA – Plano Premium" class="plan-mockup-img" style="max-height: 175px; border-radius: 10px;">
            </div>

            <!-- Price Container -->
            <div class="plan-price-promo-container" style="text-align: center; margin-bottom: 18px;">
              <div style="font-size: 0.86rem; color: #94a3b8; margin-bottom: 1px;">De <span style="text-decoration: line-through;">R$ 97,00</span> por apenas:</div>
              <div class="plan-price-box" style="justify-content: center; margin-bottom: 2px; display: flex; align-items: baseline; gap: 3px;">
                <span class="plan-currency" style="color: #0284c7; font-size: 1.5rem; font-weight: 800;">R$</span>
                <span class="plan-price" style="color: #0284c7; font-size: 3.2rem; font-weight: 800; line-height: 1;">19,90</span>
              </div>
              <div class="plan-period" style="font-size: 0.85rem; color: #16a34a; font-weight: 700;">
                ✓ Pagamento único • Acesso vitalício
              </div>
            </div>

            <!-- Title of Plan -->
            <h4 style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; color: #0f172a; text-align: center; margin-bottom: 12px;">
              Vantagens do Plano Premium
            </h4>

            <!-- Benefits List with High Perceived Value -->
            <div class="plan-features" style="margin-bottom: 14px; gap: 8px;">
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; line-height: 1.35; color: #1e293b;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span><strong>290 Questões Comentadas PPA</strong> (Completo)</span>
              </div>
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; line-height: 1.35; color: #1e293b;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span><strong>As 5 Matérias ANAC</strong>: MET, NAV, REG, TV e CTA</span>
              </div>
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; line-height: 1.35; color: #1e293b;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span><strong>Método Anti-Pegadinha</strong>: Gabarito, Análise & Memorize</span>
              </div>
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; line-height: 1.35; color: #1e293b;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span><strong>Arquivos em PDF</strong> para celular, tablet e computador</span>
              </div>
              <div class="plan-feature-item" style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; line-height: 1.35; color: #1e293b;">
                <span class="check" style="color: #0284c7; font-weight: bold; font-size: 0.95rem;">✔</span>
                <span><strong>Garantia Total de 7 Dias</strong> com devolução de 100%</span>
              </div>
            </div>

            <!-- Bonus Box with Perceived Value Highlights -->
            <div class="plan-bonus-box" style="padding: 12px 14px; margin: 12px 0 16px 0; border-radius: 10px; background: #fff7ed; border: 1px solid #fed7aa;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h5 class="plan-bonus-box-title" style="color: #c2410c; font-family: var(--font-heading); font-size: 0.88rem; font-weight: 800; margin: 0; display: flex; align-items: center; gap: 6px;">
                  🎁 3 BÔNUS INCLUSOS HOJE:
                </h5>
                <span style="font-size: 0.72rem; font-weight: 800; color: #15803d; background: #dcfce7; padding: 2px 7px; border-radius: 4px; letter-spacing: 0.3px;">100% GRÁTIS</span>
              </div>
              <ul class="plan-bonus-list" style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 7px;">
                <li style="font-size: 0.82rem; color: #475569; line-height: 1.3; display: flex; justify-content: space-between; align-items: center;">
                  <span><strong style="color: #0f172a; font-weight: 700;">#1</strong> Cockpit 70/70</span>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="color: #94a3b8; font-size: 0.76rem; text-decoration: line-through;">R$ 47,00</span>
                    <strong style="color: #16a34a; font-weight: 800; font-size: 0.78rem;">GRÁTIS</strong>
                  </div>
                </li>
                <li style="font-size: 0.82rem; color: #475569; line-height: 1.3; display: flex; justify-content: space-between; align-items: center;">
                  <span><strong style="color: #0f172a; font-weight: 700;">#2</strong> Rota 21</span>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="color: #94a3b8; font-size: 0.76rem; text-decoration: line-through;">R$ 39,00</span>
                    <strong style="color: #16a34a; font-weight: 800; font-size: 0.78rem;">GRÁTIS</strong>
                  </div>
                </li>
                <li style="font-size: 0.82rem; color: #475569; line-height: 1.3; display: flex; justify-content: space-between; align-items: center;">
                  <span><strong style="color: #0f172a; font-weight: 700;">#3</strong> Mapas Mentais 70/70</span>
                  <div style="display: flex; align-items: center; gap: 6px;">
                    <span style="color: #94a3b8; font-size: 0.76rem; text-decoration: line-through;">R$ 47,00</span>
                    <strong style="color: #16a34a; font-weight: 800; font-size: 0.78rem;">GRÁTIS</strong>
                  </div>
                </li>
              </ul>
              
              <div style="margin-top: 10px; padding-top: 9px; border-top: 1px dashed #fdba74; display: flex; justify-content: space-between; align-items: center; font-size: 0.79rem;">
                <span style="color: #7c2d12; font-weight: 600;">Valor total dos bônus:</span>
                <div>
                  <span style="color: #94a3b8; text-decoration: line-through; margin-right: 4px; font-weight: 600;">R$ 133,00</span>
                  <strong style="color: #15803d; font-weight: 800; background: #dcfce7; padding: 1px 6px; border-radius: 4px;">R$ 0,00</strong>
                </div>
              </div>
            </div>

            <!-- CTA Button with Pulse and Shine -->
            <div style="margin-top: 18px;">
              <a href="https://pay.wiapy.com/VAN-BIfmGJTY" class="btn-green-cta btn-pulse-shine" data-checkout-link style="padding: 15px 20px; font-size: 1rem;">
                <span>GARANTIR ACESSO COMPLETO + 3 BÔNUS →</span>
              </a>
              <div style="font-size: 0.76rem; color: #64748b; text-align: center; margin-top: 8px;">
                🔒 Compra 100% Segura • Liberação Imediata
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SEÇÃO DE GARANTIA INCONDICIONAL DE 7 DIAS (DE ACORDO COM A LEI) -->
  <section class="section-padding garantia-section" id="garantia">
    <div class="container">
      <div class="garantia-box">
        <div class="garantia-badge-col">
          <div class="garantia-seal-svg-wrapper">
            <span class="garantia-seal-days">7</span>
            <span class="garantia-seal-text">DIAS DE</span>
            <span class="garantia-seal-text">GARANTIA</span>
          </div>
        </div>

        <div class="garantia-content-col">
          <h3 class="garantia-title">
            Garantia Incondicional de 7 Dias
          </h3>
          <p class="garantia-desc">
            Conforme o <strong>Art. 49 do Código de Defesa do Consumidor (Lei 8.078/90)</strong>, você tem 7 dias de garantia para avaliar o material. Se não ficar satisfeito, basta solicitar o reembolso para receber 100% do valor de volta, sem burocracia.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="section-padding faq-section" id="faq">
    <div class="container">
      <span class="section-badge badge-navy">DÚVIDAS FREQUENTES</span>
      <h2 class="section-title">Perguntas Frequentes</h2>
      <p class="section-subtitle">Tire suas dúvidas sobre as 290 Questões Comentadas PPA.</p>

      <div class="faq-container">
        <div class="faq-item">
          <button class="faq-question">
            <span>Recebo o material após a compra?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Sim. Após a confirmação do pagamento, o acesso ao material digital é liberado pela plataforma.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Posso consultar as questões no celular?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Sim. Os arquivos são digitais e podem ser consultados no celular, tablet ou computador.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Quais matérias estão incluídas?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>O material reúne questões de Regulamentos, Meteorologia, Navegação, Teoria de Voo e Conhecimentos Técnicos.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>O material substitui um curso teórico?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Não. As 290 Questões Comentadas PPA funcionam como uma ferramenta de revisão entre o estudo e o simulado. O objetivo é praticar, identificar erros e revisar conceitos já estudados.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>O produto é apenas um banco de questões?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Não. Cada questão inclui gabarito, explicação objetiva, Pegadinha da Banca, Memorize e O que a banca queria testar.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>O material serve para quem já faz simulados?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>Sim. Ele complementa os simulados ao mostrar o motivo do erro e o conceito que precisa ser revisado antes de uma nova tentativa.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Qual é a diferença entre o Plano Básico e o Premium?</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            <p>O Plano Básico inclui as 290 Questões Comentadas PPA. O Plano Premium inclui o mesmo produto principal e acrescenta os 3 bônus exclusivos: Cockpit 70/70, Rota 21 e Mapas Mentais 70/70.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- RODAPÉ -->
  <footer class="footer">
    <div class="container">
      <h2 class="footer-title">
        Comece hoje a revisar as cinco matérias da ANAC com questões que explicam, corrigem e ajudam você a memorizar.
      </h2>

      <a href="#oferta" class="btn-gold">
        <span>QUERO MEU ACESSO AGORA</span>
      </a>

      <div class="footer-seals">
        <div class="seal-item">🔒 Compra segura</div>
        <div class="seal-item">⚡ Material digital</div>
        <div class="seal-item">💳 Pagamento único</div>
      </div>

      <div class="footer-copy">
        <p>© 2026 290 Questões Comentadas PPA. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>

  <!-- UPSELL POPUP MODAL -->
  <div class="upsell-modal-overlay" id="upsellModal">
    <div class="upsell-modal-content">
      <button class="modal-close-btn" id="modalCloseBtn">×</button>
      <div class="modal-badge">🔥 OFERTA EXCLUSIVA</div>
      <h3 class="modal-title">Espere! Leve o Plano Premium por apenas <span class="highlight-price">R$ 14,90</span></h3>
      <p class="modal-subtitle">Adicione os três bônus do Plano Premium por apenas R$ 5,00 a mais que o Plano Básico.</p>
      
      <div class="modal-features-list">
        <div class="modal-feature-item" style="display: flex; justify-content: space-between; align-items: center;">
          <span>✔ 290 Questões Comentadas PPA</span>
          <span style="color: #0284c7; font-weight: 700; font-size: 0.76rem;">INCLUSO</span>
        </div>
        <div class="modal-feature-item" style="display: flex; justify-content: space-between; align-items: center;">
          <span>✔ Bônus 1: Cockpit 70/70</span>
          <div style="display: flex; align-items: center; gap: 5px;">
            <span style="color: #94a3b8; font-size: 0.74rem; text-decoration: line-through;">R$ 47</span>
            <span style="color: #16a34a; font-weight: 800; font-size: 0.76rem;">GRÁTIS</span>
          </div>
        </div>
        <div class="modal-feature-item" style="display: flex; justify-content: space-between; align-items: center;">
          <span>✔ Bônus 2: Rota 21</span>
          <div style="display: flex; align-items: center; gap: 5px;">
            <span style="color: #94a3b8; font-size: 0.74rem; text-decoration: line-through;">R$ 39</span>
            <span style="color: #16a34a; font-weight: 800; font-size: 0.76rem;">GRÁTIS</span>
          </div>
        </div>
        <div class="modal-feature-item" style="display: flex; justify-content: space-between; align-items: center;">
          <span>✔ Bônus 3: Mapas Mentais 70/70</span>
          <div style="display: flex; align-items: center; gap: 5px;">
            <span style="color: #94a3b8; font-size: 0.74rem; text-decoration: line-through;">R$ 47</span>
            <span style="color: #16a34a; font-weight: 800; font-size: 0.76rem;">GRÁTIS</span>
          </div>
        </div>
        <div style="margin-top: 4px; padding-top: 6px; border-top: 1px dashed #cbd5e1; display: flex; justify-content: space-between; align-items: center; font-size: 0.76rem;">
          <span style="color: #64748b; font-weight: 600;">Total em bônus:</span>
          <div>
            <span style="color: #94a3b8; text-decoration: line-through; margin-right: 4px;">R$ 133,00</span>
            <strong style="color: #15803d; font-weight: 800; background: #dcfce7; padding: 1px 5px; border-radius: 4px;">GRÁTIS</strong>
          </div>
        </div>
      </div>

      <a href="https://pay.wiapy.com/y73pcRDeabSf" class="modal-cta-btn" data-checkout-link>
        <span>SIM, QUERO O PLANO PREMIUM POR R$ 14,90 →</span>
      </a>
      
      <a href="https://pay.wiapy.com/TPKh5tVHZchK" class="modal-decline-link" data-checkout-link style="margin-top: 12px;">
        Não quero adicionar os bônus. Quero apenas o Plano Básico por R$ 9,90 →
      </a>
    </div>
  </div>
`;
