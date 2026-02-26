import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children, title, description, canonical }) {
  const siteTitle = title
    ? `${title} | Venda Online Sem Segredos`
    : 'Venda Online Sem Segredos — Guia Completo'

  const siteDesc = description ||
    'Aprenda a vender online com técnicas de PNL, gatilhos mentais e estratégias comprovadas. Guia completo por Juliana Gonçalves da Costa.'

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        {canonical && <link rel="canonical" href={canonical} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo">
            <span className="site-header__logo-title">
              Venda Online <span>Sem Segredos</span>
            </span>
            <span className="site-header__logo-sub">por Juliana Gonçalves · Blendibox</span>
          </Link>
          <a href="#cta" className="site-header__cta">
            Quero o Guia Completo →
          </a>
        </div>
      </header>

      <main>{children}</main>

      <div className="divider" />

      {/* CTA Section */}
      <section id="cta" style={{
        background: 'var(--navy)',
        padding: '60px 24px',
        textAlign: 'center',
        borderTop: '3px solid var(--gold)',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(22px, 4vw, 34px)',
            color: '#fff',
            lineHeight: 1.25,
            marginBottom: 12,
          }}>
            Pronta para transformar<br />
            <em style={{ color: 'var(--gold-m)' }}>conhecimento em vendas reais?</em>
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', marginBottom: 32, lineHeight: 1.7 }}>
            O guia <strong style={{ color: '#fff' }}>Venda Online Sem Segredos</strong> reúne tudo que você
            precisa — mindset, PNL, gatilhos mentais, scripts prontos e um plano de ação completo.
          </p>
          <a
            href="/#"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, var(--gold-m), var(--gold-b))',
              color: 'var(--navy)',
              fontWeight: 700,
              fontSize: 16,
              padding: '18px 48px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 6px 30px rgba(184,134,11,0.4)',
            }}
          >
            QUERO O GUIA POR R$27 →
          </a>
          <p style={{ marginTop: 14, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            🔒 Acesso imediato · 🛡️ Garantia de 7 dias · 📱 Funciona no celular
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <p>
          © 2025 <span>Venda Online Sem Segredos</span> · Juliana Gonçalves da Costa · Blendibox<br />
          Todos os direitos reservados.
        </p>
      </footer>
    </>
  )
}
