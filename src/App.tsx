import { useEffect, useState, type ReactNode } from 'react'
import administrator from './assets/badges/administrator.png'
import appBuilder from './assets/badges/app-builder.png'
import developerI from './assets/badges/developer-i.png'
import javascriptI from './assets/badges/javascript-i.png'
import aiAssociate from './assets/badges/ai-associate.png'

const linkedin = 'https://www.linkedin.com/in/alejandro-castillo-jiménez-370182276/'

const roles = [
  { title: 'Technical Consultant', period: 'Oct. 2025 – actualidad', note: 'Omega CRM, A Merkle Company', now: true },
  { title: 'Junior Salesforce Developer', period: 'Jun. 2024 – oct. 2025', note: 'Apex, Lightning Web Components y SOQL. Granada, híbrido.' },
  { title: 'Trainee Salesforce Developer', period: 'Abr. 2024 – jun. 2024', note: 'Omega CRM, A Merkle Company. Granada.' },
]

const certs = [
  { name: 'Platform Administrator', img: administrator },
  { name: 'Platform App Builder', img: appBuilder },
  { name: 'Platform Developer I', img: developerI },
  { name: 'JavaScript Developer I', img: javascriptI },
  { name: 'AI Associate', img: aiAssociate },
]

const skills = [
  { group: 'Salesforce', items: ['Apex', 'Lightning Web Components', 'SOQL'] },
  { group: 'Desarrollo', items: ['Java', 'Spring Boot', 'Python', 'JavaScript', 'HTML5', 'CSS', 'Odoo'] },
  { group: 'Datos', items: ['MySQL', 'MongoDB', 'Esquemas XML', 'Oxygen XML Editor'] },
  { group: 'Personales', items: ['Resolución de problemas', 'Comunicación', 'Pensamiento crítico', 'Investigación', 'Mediación', 'Redacción'] },
]

const education = [
  { name: 'MEDAC', detail: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma', period: '2022 – 2024' },
  { name: 'Universidad de Granada', detail: 'Grado en Historia', period: 'Sept. 2018 – jul. 2022' },
]

const links = [
  ['experiencia', 'Experiencia'],
  ['certificaciones', 'Certificaciones'],
  ['aptitudes', 'Aptitudes'],
  ['educacion', 'Educación'],
  ['contacto', 'Contacto'],
]

// Fades children in the first time they enter the viewport
function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [el, setEl] = useState<HTMLDivElement | null>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setSeen(true), io.disconnect()), { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [el])

  return <div ref={setEl} className={`reveal ${seen ? 'in' : ''} ${className}`}>{children}</div>
}

function Head({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
    </Reveal>
  )
}

function App() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
    } catch { /* storage blocked */ }
    return matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* storage blocked */ }
  }, [dark])

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      document.documentElement.style.setProperty('--p', String(max > 0 ? scrollY / max : 0))
      setScrolled(scrollY > 40)
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="ambient" aria-hidden="true">
        <i className="orb orb-1" /><i className="orb orb-2" /><i className="orb orb-3" /><i className="orb orb-4" />
      </div>
      <div className="progress" aria-hidden="true" />

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} aria-label="Secciones">
        <a className="brand" href="#top"><span className="dot" /><span className="name">Alejandro Castillo</span></a>
        <div className="nav-links">
          {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </div>
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label={dark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}>
          {dark ? '☀' : '☾'}
        </button>
      </nav>

      <main>
        <header id="top" className="hero">
          <div className="wrap hero-inner">
            <span className="eyebrow"><i className="live" />Technical Consultant · Omega CRM</span>
            <h1 className="hero-title">
              Alejandro Castillo
              <span className="line-2">Jiménez</span>
            </h1>
            <p className="hero-lead">
              Graduado en Historia y Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.
              Apasionado por la informática y el desarrollo de software y web.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#experiencia">Ver experiencia</a>
              <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="hero-meta">
              <span className="pill">Otura, Granada</span>
              <span className="pill">5 certificaciones Salesforce</span>
              <span className="pill">Inglés B2</span>
            </div>
          </div>
        </header>

        <section id="experiencia">
          <div className="wrap">
            <Head eyebrow="Trayectoria" title="Experiencia" />
            <ol className="timeline">
              {roles.map((r) => (
                <li key={r.title}>
                  <Reveal className="glass card">
                    <p className="meta">{r.period}{r.now && <b className="now">Actualidad</b>}</p>
                    <h3>{r.title}</h3>
                    <p>{r.note}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="certificaciones">
          <div className="wrap">
            <Head eyebrow="Salesforce Certified" title="Certificaciones" />
            <div className="grid certs">
              {certs.map((c) => (
                <Reveal key={c.name} className="glass card cert">
                  <img src={c.img} alt={`Insignia Salesforce Certified ${c.name}`} width="140" height="140" />
                  <h3>{c.name}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="aptitudes">
          <div className="wrap">
            <Head eyebrow="Stack" title="Aptitudes" />
            <div className="grid two">
              {skills.map((s) => (
                <Reveal key={s.group} className="glass card">
                  <h3>{s.group}</h3>
                  <ul className="chips">
                    {s.items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="educacion">
          <div className="wrap">
            <Head eyebrow="Formación" title="Educación e idiomas" />
            <div className="grid two">
              {education.map((e) => (
                <Reveal key={e.name} className="glass card">
                  <p className="meta">{e.period}</p>
                  <h3>{e.name}</h3>
                  <p>{e.detail}</p>
                </Reveal>
              ))}
              <Reveal className="glass card">
                <p className="meta">Idiomas</p>
                <h3>Español</h3>
                <p>Competencia bilingüe o nativa.</p>
              </Reveal>
              <Reveal className="glass card">
                <p className="meta">Idiomas</p>
                <h3>Inglés</h3>
                <p>Nivel B2.</p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contacto">
          <div className="wrap">
            <Reveal className="glass card contact">
              <h2 className="section-title">Hablemos</h2>
              <p>Si quieres contactar conmigo, el mejor sitio es LinkedIn.</p>
              <a className="btn btn-primary" href={linkedin} target="_blank" rel="noreferrer">Abrir LinkedIn</a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Alejandro Castillo Jiménez</footer>
    </>
  )
}

export default App
