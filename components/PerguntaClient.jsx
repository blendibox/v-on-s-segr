"use client";

import Link from 'next/link'

function JsonLdFAQ({ pergunta, resposta }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: pergunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: resposta.replace(/\*\*/g, '').replace(/\n/g, ' '),
      },
    }],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}


function renderAnswer(text) {
  const paragraphs = text.split('\n\n')
  return paragraphs.map((para, i) => {
    // heading lines (start with **)
    if (para.startsWith('**') && para.endsWith('**') && !para.slice(2,-2).includes('\n')) {
      return (
        <h3 key={i} style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 18, fontWeight: 700,
          color: 'var(--navy)', marginTop: 24, marginBottom: 8,
        }}>
          {para.replace(/\*\*/g, '')}
        </h3>
      )
    }
    // bold inline
    const html = para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    return (
      <p key={i} style={{
        fontSize: 15.5, lineHeight: 1.85,
        color: 'var(--body)', marginBottom: 12,
      }} dangerouslySetInnerHTML={{ __html: html }} />
    )
  })
}

export default function PerguntaClient({ item, prev, next, related }) {
  return (
    <>
      {/* JSON-LD for Google rich results */}
      <JsonLdFAQ pergunta={item.pergunta} resposta={item.resposta_completa} />

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <div className="breadcrumb__inner">
          <Link href="/" className="breadcrumb__link">Início</Link>
          <span className="breadcrumb__sep">›</span>
          <Link href="/" className="breadcrumb__link">Perguntas</Link>
          <span className="breadcrumb__sep">›</span>
          <span className="breadcrumb__current">{item.pergunta}</span>
        </div>
      </nav>

      {/* ── ARTICLE HERO ── */}
      <section style={{
        background: 'var(--navy)',
        padding: '56px 24px 64px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(184,134,11,0.04) 60px, rgba(184,134,11,0.04) 61px)',
        }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--gold), var(--gold-b))' }} />

        <div className="container" style={{ position: 'relative' }}>
          {/* Number + category */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, flexWrap: 'wrap' }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 15, fontWeight: 700, color: 'var(--gold)',
              border: '1px solid rgba(184,134,11,0.4)',
              padding: '4px 14px',
            }}>
              #{String(item.id).padStart(2,'0')}
            </span>
            <span style={{
              background: 'rgba(184,134,11,0.15)',
              color: 'var(--gold-m)',
              fontSize: 11, fontWeight: 700, letterSpacing: 1,
              textTransform: 'uppercase', padding: '4px 12px',
              border: '1px solid rgba(184,134,11,0.3)',
            }}>
              {item.categoria}
            </span>
            {item.intencao === 'altíssima' && (
              <span style={{
                background: 'rgba(217,119,6,0.2)',
                color: '#FCD34D',
                fontSize: 11, fontWeight: 700, letterSpacing: 1,
                textTransform: 'uppercase', padding: '4px 12px',
                border: '1px solid rgba(252,211,77,0.3)',
              }}>
                🔥 Muito Buscado
              </span>
            )}
          </div>

          {/* Question headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(26px, 4.5vw, 44px)',
            color: '#fff', lineHeight: 1.2,
            marginBottom: 24, fontWeight: 900,
          }}>
            <span style={{ marginRight: 12 }}>{item.emoji}</span>
            {item.pergunta}
          </h1>

          {/* Short answer highlight */}
          <div style={{
            background: 'rgba(184,134,11,0.12)',
            borderLeft: '4px solid var(--gold)',
            padding: '18px 22px',
            maxWidth: 700,
          }}>
            <p style={{
              fontSize: 16, color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.7, fontWeight: 500,
            }}>
              <strong style={{ color: 'var(--gold-m)' }}>Resposta rápida: </strong>
              {item.resposta_curta}
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: '56px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr minmax(0,680px) 1fr', gap: '0 40px' }}>
          {/* Spacer */}
          <div />

          {/* Article body */}
          <article>
            {/* Full answer */}
            <div style={{
              background: 'var(--white)',
              border: '1px solid var(--border)',
              borderTop: '3px solid var(--gold)',
              padding: '36px 40px',
              marginBottom: 28,
            }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22, fontWeight: 700,
                color: 'var(--navy)', marginBottom: 24,
                paddingBottom: 14, borderBottom: '1px solid var(--border)',
              }}>
                Resposta Completa
              </h2>
              <div>{renderAnswer(item.resposta_completa)}</div>
            </div>

            {/* Pro Tip */}
            <div style={{
              background: '#FEF3C7',
              border: '1px solid #D97706',
              borderLeft: '4px solid #D97706',
              padding: '20px 24px',
              marginBottom: 28,
              display: 'flex', gap: 14, alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>💡</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: 13, color: '#78350F', marginBottom: 6, letterSpacing: 0.5, textTransform: 'uppercase' }}>
                  Dica da Especialista
                </p>
                <p style={{ fontSize: 14.5, color: '#451A03', lineHeight: 1.7 }}>
                  {item.dica_pro}
                </p>
              </div>
            </div>

            {/* CTA card */}
            <div style={{
              background: 'var(--navy)',
              padding: '32px 36px',
              marginBottom: 40,
              borderTop: '3px solid var(--gold)',
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20, color: '#fff',
                marginBottom: 8, lineHeight: 1.3,
              }}>
                {item.cta}
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
                Guia completo com técnicas de PNL, gatilhos mentais, scripts de vendas e plano de ação.
              </p>
              <a href="/#cta" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, var(--gold-m), var(--gold-b))',
                color: 'var(--navy)',
                fontWeight: 700, fontSize: 14,
                padding: '14px 32px',
                transition: 'opacity 0.2s',
              }}>
                QUERO O GUIA COMPLETO →
              </a>
            </div>

            {/* Navigation between questions */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: prev ? (next ? '1fr 1fr' : '1fr') : '1fr',
              gap: 14, marginBottom: 40,
            }}>
              {prev && (
                <Link href={`/perguntas/${prev.slug}`} style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  padding: '16px 20px',
                  transition: 'border-color 0.2s',
                  display: 'block',
                }}>
                  <span style={{ fontSize: 11, color: 'var(--muted)', display: 'block', marginBottom: 4 }}>← Anterior</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', lineHeight: 1.4, display: 'block' }}>
                    {prev.emoji} {prev.pergunta}
                  </span>
                </Link>
              )}
              {next && (
                <Link href={`/perguntas/${next.slug}`} style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  padding: '16px 20px',
                  textAlign: next && prev ? 'right' : 'left',
                  transition: 'border-color 0.2s',
                  display: 'block',
                }}>
                  <span style={{ fontSize: 11, color: 'var(--muted)', display: 'block', marginBottom: 4 }}>Próxima →</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', lineHeight: 1.4, display: 'block' }}>
                    {next.emoji} {next.pergunta}
                  </span>
                </Link>
              )}
            </div>
          </article>

          {/* Spacer */}
          <div />
        </div>
      </section>

      {/* ── RELATED QUESTIONS ── */}
      {related.length > 0 && (
        <section style={{ background: 'var(--cream2)', padding: '48px 24px', borderTop: '1px solid var(--border)' }}>
          <div className="container-wide">
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 24, fontWeight: 700,
              color: 'var(--navy)', marginBottom: 24,
              paddingBottom: 12, borderBottom: '2px solid var(--gold)',
            }}>
              Perguntas relacionadas
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 16,
            }}>
              {related.map(r => (
                <Link key={r.id} href={`/perguntas/${r.slug}`} style={{
                  background: 'var(--white)',
                  border: '1px solid var(--border)',
                  borderTop: '3px solid var(--gold)',
                  padding: '20px',
                  display: 'flex', flexDirection: 'column', gap: 10,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none' }}
                >
                  <span style={{ fontSize: 22 }}>{r.emoji}</span>
                  <p style={{ fontWeight: 700, fontSize: 14, color: 'var(--navy)', lineHeight: 1.35 }}>
                    {r.pergunta}
                  </p>
                  <span style={{ fontSize: 12, color: 'var(--gold)', fontWeight: 700, marginTop: 'auto' }}>
                    Ver resposta →
                  </span>
                </Link>
              ))}
            </div>


          </div>
        </section>
      )}
    </>
  );
}