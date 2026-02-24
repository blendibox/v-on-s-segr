"use client";

import { useEffect } from "react";



  
  export default function Page() {

  useEffect(() => {
    /* ================= REVEAL ON SCROLL ================= */

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, i * 80);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));


    /* ================= STICKY BAR ================= */

    const sticky = document.getElementById("stickyBar");

    const handleScroll = () => {
      if (!sticky) return;
      sticky.classList.toggle("show", window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);


    /* ================= FAQ TOGGLE ================= */

    const faqQuestions = document.querySelectorAll(".faq-q");

    const toggleFaq = (el: Element) => {
      const answer = el.nextElementSibling as HTMLElement | null;
      if (!answer) return;

      const isOpen = answer.classList.contains("open");

      // Close all
      document
        .querySelectorAll(".faq-a")
        .forEach((a) => a.classList.remove("open"));

      document
        .querySelectorAll(".faq-q")
        .forEach((q) => q.classList.remove("open"));

      // Open clicked if was closed
      if (!isOpen) {
        answer.classList.add("open");
        el.classList.add("open");
      }
    };

    faqQuestions.forEach((q) => {
      q.addEventListener("click", () => toggleFaq(q));
    });


    /* ================= CLEANUP ================= */

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();

      faqQuestions.forEach((q) => {
        q.replaceWith(q.cloneNode(true)); // remove listeners safely
      });
    };

  }, []);





  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          
<!-- URGÊNCIA TOPO -->
<div class="urgencia">
  <p>🔥 <span>OFERTA DE LANÇAMENTO:</span> Valor especial por tempo limitado. Garante antes que encerre!</p>
</div>

<!-- ===== HERO ===== -->
<section class="hero">
  <div class="hero-top-line"></div>

  <div class="hero-badge">📖 Ebook Digital — Entrega Imediata</div>

  <p class="hero-eyebrow"></p>

  <h1>Venda Online<br><span>Sem Segredos</span></h1>

  <p class="hero-sub">O Guia Definitivo para Lucrar Todos os Dias — do Zero ao Sucesso</p>

  <p class="hero-promise">
    Descubra as <strong>estratégias reais</strong> que transformaram uma marca do zero em um negócio lucrativo. 
    PNL, gatilhos mentais, técnicas de fechamento e muito mais — tudo que você precisa para 
    <strong>começar a vender online ainda essa semana.</strong>
  </p>

  <div class="hero-cta-wrap">
    <a href="#oferta" class="btn-primary pulse">QUERO MEU GUIA AGORA →</a>
    <p class="hero-guarantee">🔒 Pagamento 100% seguro · <span>Acesso imediato após confirmação</span></p>
  </div>

  <div class="hero-stats">
    <div class="stat"><span class="stat-n">8</span><span class="stat-l">Capítulos</span></div>
    <div class="stat"><span class="stat-n">50+</span><span class="stat-l">Técnicas</span></div>
    <div class="stat"><span class="stat-n">100%</span><span class="stat-l">Prático</span></div>
    <div class="stat"><span class="stat-n">∞</span><span class="stat-l">Acesso Vitalício</span></div>
  </div>
</section>

<div class="divider"></div>

<!-- ===== DOR ===== -->
<section class="dor">
  <div class="container">
    <span class="section-label reveal">Isso te soa familiar?</span>
    <h2 class="reveal">Você já sentiu que estava<br><em>nadando contra a corrente?</em></h2>
    <p class="lead reveal">Você sabe que existe dinheiro na internet. Você vê outras pessoas vendendo e crescendo. Mas quando você tenta...</p>

    <div class="dor-list">
      <div class="dor-item reveal">
        <span class="dor-icon">😔</span>
        <p class="dor-text"><strong>As pessoas perguntam o preço e somem.</strong> Você responde tudo certinho, mas a mensagem fica "visto" e nunca vira venda.</p>
      </div>
      <div class="dor-item reveal">
        <span class="dor-icon">😰</span>
        <p class="dor-text"><strong>Você tem medo de parecer insistente ou chata.</strong> Então fica esperando o cliente tomar a iniciativa — que nunca vem.</p>
      </div>
      <div class="dor-item reveal">
        <span class="dor-icon">😤</span>
        <p class="dor-text"><strong>Você já tentou de tudo:</strong> posts bonitos, promoções, stories — mas as vendas continuam irregulares e imprevisíveis.</p>
      </div>
      <div class="dor-item reveal">
        <span class="dor-icon">😞</span>
        <p class="dor-text"><strong>Concorrentes vendem o mesmo que você por mais.</strong> E você não entende por quê as pessoas escolhem eles.</p>
      </div>
      <div class="dor-item reveal">
        <span class="dor-icon">🤯</span>
        <p class="dor-text"><strong>Você absorve conteúdo infinito</strong> — cursos, reels, podcasts — mas na hora de aplicar, trava. Falta um método claro.</p>
      </div>
    </div>

    <div class="dor-turn reveal">
      <p>E se eu te dissesse que o problema <span>não é o seu produto</span>, não é o seu preço e nem a sua sorte?<br><br>
      O problema é que <span>ninguém te ensinou as técnicas certas.</span> E isso está prestes a mudar.</p>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ===== PARA QUEM ===== -->
<section class="paraquem">
  <div class="container">
    <span class="section-label reveal">Este guia é para você se...</span>
    <h2 class="reveal">Você quer <em>resultados reais,</em><br>não mais teoria</h2>

    <div class="pq-grid">
      <div class="pq-card reveal">
        <span class="pq-icon">🌱</span>
        <p class="pq-title">Está começando do zero</p>
        <p class="pq-desc">Ainda não tem produto, público ou experiência em vendas — mas quer construir renda online com método.</p>
      </div>
      <div class="pq-card reveal">
        <span class="pq-icon">📦</span>
        <p class="pq-title">Já vende mas quer escalar</p>
        <p class="pq-desc">Faz vendas esporádicas mas quer transformar em renda consistente e previsível todo mês.</p>
      </div>
      <div class="pq-card reveal">
        <span class="pq-icon">😟</span>
        <p class="pq-title">Trava na hora de fechar</p>
        <p class="pq-desc">Sabe que tem um bom produto mas não sabe como conduzir o cliente ao "sim" sem pressionar.</p>
      </div>
      <div class="pq-card reveal">
        <span class="pq-icon">💸</span>
        <p class="pq-title">Quer renda extra ou principal</p>
        <p class="pq-desc">Seja para sair do emprego ou complementar a renda, quer um negócio que funcione de verdade.</p>
      </div>
      <div class="pq-card reveal">
        <span class="pq-icon">📱</span>
        <p class="pq-title">Vende pelo celular</p>
        <p class="pq-desc">Instagram, WhatsApp, TikTok, Shopee — não importa o canal. As técnicas funcionam em todos.</p>
      </div>
      <div class="pq-card reveal">
        <span class="pq-icon">🔥</span>
        <p class="pq-title">Está pronta para agir</p>
        <p class="pq-desc">Chega de acumular informação. Você quer um guia prático para aplicar imediatamente.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ===== O QUE VAI APRENDER ===== -->
<section class="aprender">
  <div class="container">
    <span class="section-label" style="color:rgba(255,255,255,0.4)" >O que está dentro</span>
    <h2 class="reveal" style="color:#fff">8 capítulos que vão <em>transformar</em><br>a forma como você vende</h2>

    <div class="cap-grid">
      <div class="cap-item reveal">
        <span class="cap-num">01</span>
        <div class="cap-content">
          <p class="cap-title">Mindset de Sucesso: A Base para Vender Mais</p>
          <p class="cap-desc">Reprograme suas crenças limitantes, transforme rejeições em aprendizado e desenvolva a mentalidade das vendedoras que faturam consistentemente.</p>
        </div>
      </div>
      <div class="cap-item reveal">
        <span class="cap-num">02</span>
        <div class="cap-content">
          <p class="cap-title">PNL e Vendas: A Psicologia por Trás das Conversões</p>
          <p class="cap-desc">Técnicas de rapport, ancoragem e metamodelo de linguagem para criar conexão genuína e conduzir o cliente à decisão de forma natural.</p>
        </div>
      </div>
      <div class="cap-item reveal">
        <span class="cap-num">03</span>
        <div class="cap-content">
          <p class="cap-title">Gatilhos Mentais: O Poder da Decisão de Compra</p>
          <p class="cap-desc">Os 7 gatilhos mais poderosos — escassez, urgência, prova social, autoridade e mais — com exemplos reais e como combiná-los.</p>
        </div>
      </div>
      <div class="cap-item reveal">
        <span class="cap-num">04</span>
        <div class="cap-content">
          <p class="cap-title">Técnicas Avançadas de Vendas</p>
          <p class="cap-desc">Escada de Valor, Sim Progressivo, Objeção Antecipada e Bônus Irresistível. Scripts prontos para usar hoje mesmo.</p>
        </div>
      </div>
      <div class="cap-item reveal">
        <span class="cap-num">05</span>
        <div class="cap-content">
          <p class="cap-title">O Mindset da Vendedora Campeã</p>
          <p class="cap-desc">Como pensar, agir e se posicionar como uma Top Seller — incluindo como lidar com rejeição, concorrência e a síndrome do impostor.</p>
        </div>
      </div>
      <div class="cap-item reveal">
        <span class="cap-num">06</span>
        <div class="cap-content">
          <p class="cap-title">Estratégias para Fechar Mais Negócios</p>
          <p class="cap-desc">A Fórmula de Lançamento Perpétuo de Jeff Walker adaptada para o seu negócio — para vender todos os dias de forma previsível.</p>
        </div>
      </div>
      <div class="cap-item reveal">
        <span class="cap-num">07</span>
        <div class="cap-content">
          <p class="cap-title">Transformando Compradores em Clientes Fiéis</p>
          <p class="cap-desc">Como criar experiências inesquecíveis, construir comunidade e transformar clientes em embaixadores que vendem por você.</p>
        </div>
      </div>
      <div class="cap-item reveal">
        <span class="cap-num">08</span>
        <div class="cap-content">
          <p class="cap-title">Construindo um Negócio Lucrativo e Sustentável</p>
          <p class="cap-desc">Plano de ação completo com questionário para criar seu próprio negócio, metas e indicadores de sucesso para acompanhar.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ===== BENEFÍCIOS ===== -->
<section class="beneficios">
  <div class="container">
    <span class="section-label reveal">Por que funciona</span>
    <h2 class="reveal">Não é teoria — é o que<br><em>realmente funciona</em> na prática</h2>

    <div class="ben-grid">
      <div class="ben-card reveal">
        <span class="ben-emoji">🧠</span>
        <p class="ben-title">Baseado em Psicologia Real</p>
        <p class="ben-text">PNL, gatilhos de Cialdini e ciência comportamental aplicados ao contexto de vendas online para brasileiras — sem enrolação.</p>
      </div>
      <div class="ben-card reveal">
        <span class="ben-emoji">🏪</span>
        <p class="ben-title">Experiência Real de Mercado</p>
        <p class="ben-text">Cada técnica foi testada na Blendibox. São estratégias que funcionaram em vendas reais, não slides de curso.</p>
      </div>
      <div class="ben-card reveal">
        <span class="ben-emoji">⚡</span>
        <p class="ben-title">Aplicação Imediata</p>
        <p class="ben-text">Scripts prontos, exemplos reais e checklists que você pode usar na sua próxima mensagem de vendas — ainda hoje.</p>
      </div>
      <div class="ben-card reveal">
        <span class="ben-emoji">📈</span>
        <p class="ben-title">Do Zero ao Escalável</p>
        <p class="ben-text">Funciona tanto para quem está começando quanto para quem quer transformar vendas esporádicas em renda previsível.</p>
      </div>
      <div class="ben-card reveal">
        <span class="ben-emoji">💬</span>
        <p class="ben-title">Qualquer Canal Digital</p>
        <p class="ben-text">WhatsApp, Instagram, TikTok, Shopee, Mercado Livre — as técnicas se adaptam a qualquer plataforma de venda.</p>
      </div>
      <div class="ben-card reveal">
        <span class="ben-emoji">🔄</span>
        <p class="ben-title">Sistema de Vendas Recorrentes</p>
        <p class="ben-text">Aprenda a criar clientes fiéis que compram de novo e indicam — o combustível de qualquer negócio sustentável.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ===== AUTORA ===== -->
<section class="autora">
  <div class="container">
    <div class="autora-inner reveal">
      <div class="autora-photo-wrap">
        <div class="autora-avatar">J</div>
        <p class="autora-name">Juliana Gonçalves da Costa</p>
        <p class="autora-brand">Fundadora · Blendibox</p>
      </div>
      <div class="autora-text">
        <h3>Construí do zero.<br>Aprendi na prática.<br><em>Agora vou te mostrar o caminho.</em></h3>
        <p>Eu já estive onde você está. Sem saber como vender, com medo de parecer chata, sem entender por que meu produto não convertia mesmo sendo bom.</p>
        <p>Testei estratégias, investi em conhecimento, errei muito e acertei mais ainda. Transformei a Blendibox em uma marca reconhecida — e no processo, aprendi o que <strong>realmente</strong> separa quem vende muito de quem mal consegue uma venda por semana.</p>
        <p>Este guia é tudo que eu gostaria de ter tido quando comecei. Sem enrolação, sem teoria vazia — só o que funciona de verdade no mercado digital brasileiro.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ===== DEPOIMENTOS ===== -->
<section class="depoimentos">
  <div class="container-wide">
    <div style="text-align:center; margin-bottom:0">
      <span class="section-label reveal" style="display:block">Prova Social</span>
      <h2 class="reveal">Quem aplicou, <em>transformou</em></h2>
    </div>
    <div class="dep-grid" style="margin-top:44px">
      <div class="dep-card reveal">
        <span class="dep-quote">"</span>
        <div class="dep-stars">★★★★★</div>
        <p class="dep-text">Eu aplicei a técnica do Sim Progressivo no mesmo dia que li. Na semana seguinte, fechei 3 vendas que antes eu teria perdido. Mudou completamente como eu abordo os clientes.</p>
        <p class="dep-author">Mariana S.</p>
        <p class="dep-role">Revendedora de cosméticos, SP</p>
      </div>
      <div class="dep-card reveal">
        <span class="dep-quote">"</span>
        <div class="dep-stars">★★★★★</div>
        <p class="dep-text">Achei que já sabia tudo sobre vendas. Mas o capítulo de PNL me mostrou por que eu estava perdendo clientes na última etapa. Minha taxa de conversão aumentou muito.</p>
        <p class="dep-author">Fernanda R.</p>
        <p class="dep-role">Loja de roupas no Instagram, MG</p>
      </div>
      <div class="dep-card reveal">
        <span class="dep-quote">"</span>
        <div class="dep-stars">★★★★★</div>
        <p class="dep-text">O que mais me surpreendeu foi a parte de fidelização. Nunca pensei que follow-up e pós-venda pudessem gerar tantas recompras. Clientes que compraram meses atrás voltaram!</p>
        <p class="dep-author">Camila M.</p>
        <p class="dep-role">Artesã e vendedora online, RJ</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ===== OFERTA ===== -->
<section class="oferta" id="oferta">
  <div class="oferta-top"></div>
  <div class="container">
    <span class="section-label reveal" style="color:rgba(255,255,255,0.4)">Sua decisão</span>
    <h2 class="reveal">Invista hoje. Recupere<br><em>na primeira venda.</em></h2>

    <div class="price-box reveal">
      <div class="price-badge-wrap">
        <span class="price-badge">🎉 Oferta de Lançamento</span>
      </div>
      <p class="price-from">De R$ 97,00</p>
      <p class="price-main"><sup>R$</sup>27</p>
      <p class="price-sub">pagamento único · acesso vitalício</p>

      <div class="bonus-list">
        <div class="bonus-item">
          <span class="bonus-check">✓</span>
          <span>Ebook Venda Online Sem Segredos (8 capítulos)</span>
          <span class="bonus-val">R$ 97</span>
        </div>
        <div class="bonus-item">
          <span class="bonus-check">✓</span>
          <span>Scripts de Vendas Prontos para WhatsApp</span>
          <span class="bonus-val">BÔNUS</span>
        </div>
        <div class="bonus-item">
          <span class="bonus-check">✓</span>
          <span>Checklist dos 7 Gatilhos Mentais</span>
          <span class="bonus-val">BÔNUS</span>
        </div>
        <div class="bonus-item">
          <span class="bonus-check">✓</span>
          <span>Questionário do Plano de Negócio</span>
          <span class="bonus-val">BÔNUS</span>
        </div>
      </div>

      <div class="oferta-cta">
        <a href="#" class="btn-primary pulse" style="display:block;text-align:center">
          QUERO COMEÇAR A VENDER MAIS →
        </a>
      </div>
    </div>

    <div class="oferta-guarantee-box reveal" style="margin:0 auto">
      <span class="guarantee-icon">🛡️</span>
      <div class="guarantee-text">
        <strong>Garantia de 7 dias sem perguntas.</strong><br>
        Se você aplicar as técnicas e não ver diferença, devolvemos 100% do seu dinheiro. Sem burocracia, sem julgamento.
      </div>
    </div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section class="faq">
  <div class="container">
    <span class="section-label reveal">Dúvidas frequentes</span>
    <h2 class="reveal">Respondendo suas<br><em>principais dúvidas</em></h2>

    <div class="faq-list">
      <div class="faq-item reveal">
        <div class="faq-q" onclick="toggleFaq(this)">
          Preciso ter experiência em vendas para aproveitar o guia?
          <span class="arrow">+</span>
        </div>
        <div class="faq-a">
          Não! O guia foi pensado especialmente para quem está começando do zero. Cada técnica é explicada de forma simples, com exemplos práticos e passo a passo. Se você nunca vendeu nada na vida, este é o ponto de partida certo.
        </div>
      </div>
      <div class="faq-item reveal">
        <div class="faq-q" onclick="toggleFaq(this)">
          Funciona para qualquer tipo de produto ou nicho?
          <span class="arrow">+</span>
        </div>
        <div class="faq-a">
          Sim! As técnicas de PNL, gatilhos mentais e rapport funcionam para qualquer produto ou serviço vendido online — roupas, cosméticos, artesanato, cursos, serviços digitais, revendas e muito mais. Os princípios são universais.
        </div>
      </div>
      <div class="faq-item reveal">
        <div class="faq-q" onclick="toggleFaq(this)">
          Como vou receber o material?
          <span class="arrow">+</span>
        </div>
        <div class="faq-a">
          Imediatamente após a confirmação do pagamento, você recebe o link de acesso por e-mail. O material é em PDF — você pode ler no celular, computador ou tablet, quando e onde quiser, sem prazo de validade.
        </div>
      </div>
      <div class="faq-item reveal">
        <div class="faq-q" onclick="toggleFaq(this)">
          E se eu não gostar? Tem garantia?
          <span class="arrow">+</span>
        </div>
        <div class="faq-a">
          Sim! Você tem 7 dias de garantia total. Se por qualquer motivo o material não atender suas expectativas, basta enviar um e-mail e devolvemos 100% do valor investido — sem perguntas e sem burocracia.
        </div>
      </div>
      <div class="faq-item reveal">
        <div class="faq-q" onclick="toggleFaq(this)">
          Em quanto tempo verei resultados?
          <span class="arrow">+</span>
        </div>
        <div class="faq-a">
          Muitas leitoras relatam resultados já na primeira semana de aplicação. Obviamente depende de quanto você se dedicar a praticar, mas as técnicas são simples o suficiente para aplicar imediatamente — na próxima mensagem que você enviar para um cliente.
        </div>
      </div>
      <div class="faq-item reveal">
        <div class="faq-q" onclick="toggleFaq(this)">
          O pagamento é seguro?
          <span class="arrow">+</span>
        </div>
        <div class="faq-a">
          100%! Utilizamos plataformas de pagamento com criptografia de ponta a ponta. Seus dados estão completamente protegidos. Aceitamos cartão de crédito, débito, Pix e boleto.
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== FINAL CTA ===== -->
<section class="final-cta">
  <div class="container">
    <span class="section-label reveal">Última chamada</span>
    <h2 class="reveal">Sua concorrente já está<br><em>aprendendo isso agora.</em></h2>
    <p class="lead reveal">
      Cada dia sem essas técnicas é um dia de vendas perdidas para quem já as domina. 
      Por menos do que uma pizza, você tem acesso ao método completo — com garantia de resultado.
    </p>
    <a href="#oferta" class="btn-primary pulse reveal">GARANTIR MEU ACESSO POR R$27 →</a>
    <p class="reveal" style="margin-top:16px;font-size:13px;color:var(--muted)">
      🔒 Pagamento seguro · 📱 Acesso imediato · 🛡️ Garantia de 7 dias
    </p>
  </div>
</section>

<!-- ===== STICKY BAR ===== -->
<div class="sticky-bar" id="stickyBar">
  <p class="sticky-text"><strong>Venda Online Sem Segredos</strong> — Oferta por tempo limitado</p>
  <a href="#oferta" class="btn-primary">QUERO POR R$27 →</a>
</div>

<!-- ===== FOOTER ===== -->
<footer>
  <p>
    © 2025 <span>Venda Online Sem Segredos</span> · Juliana Gonçalves da Costa · Blendibox<br>
    Este produto é um ebook digital. Todos os direitos reservados.<br>
    Ao adquirir, você concorda com os termos de uso e política de privacidade.
  </p>
</footer>

        `,
      }}
    />
  );
}