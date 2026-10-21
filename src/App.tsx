import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
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

const icons = {
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  out: <path d="M7 17L17 7M8 7h9v9" />,
}

function Icon({ name }: { name: keyof typeof icons }) {
  return <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>
}

// Fades a group's children in the first time it enters the viewport
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

function Card({ children, i = 0, className = '' }: { children: ReactNode; i?: number; className?: string }) {
  return (
    <div className={`card-wrap ${className}`} style={{ '--i': Math.min(i, 5) } as CSSProperties}>
      <div className="card"><div className="card-in"><div className="card-body">{children}</div></div></div>
    </div>
  )
}

function Section({ id, title, lead, children }: { id: string; title: string; lead: string; children: ReactNode }) {
  return (
    <section className="section" id={id} aria-labelledby={`h-${id}`}>
      <div className="wrap">
        <div className="section-head">
          <h2 className="t-h2" id={`h-${id}`}>{title}</h2>
          <p className="t-lead">{lead}</p>
        </div>
        {children}
      </div>
    </section>
  )
}

function Palm({ side }: { side: 'l' | 'r' }) {
  return (
    <svg className={`palm ${side}`} viewBox="0 0 200 320" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="7">
      <path d="M92 320C96 250 84 190 104 120" />
      <path d="M104 120C76 102 48 110 22 138M104 120C84 88 58 76 28 80M104 120C118 90 146 76 180 86M104 120C132 108 164 118 186 146M104 120C104 94 108 70 118 48" />
    </svg>
  )
}

type Theme = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'))
  const [active, setActive] = useState('')
  const [menu, setMenu] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const menuBtn = useRef<HTMLButtonElement>(null)

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#150B2E' : '#FBF3EC')
    try { localStorage.setItem('dusk-theme', next) } catch { /* storage blocked */ }
  }

  // Sun parallax (max 24px) and grid pause while the hero is off screen
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const still = matchMedia('(prefers-reduced-motion: reduce)')
    let visible = true
    let ticking = false
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting
      hero.classList.toggle('paused', !visible)
    })
    io.observe(hero)
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        hero.style.setProperty('--parallax', still.matches || !visible ? '0' : Math.min(24, scrollY * 0.06).toFixed(1))
      })
    }
    addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); removeEventListener('scroll', onScroll) }
  }, [])

  // Marks the nav link of the section being read
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' },
    )
    links.forEach(([id]) => { const s = document.getElementById(id); if (s) io.observe(s) })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!menu) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMenu(false); menuBtn.current?.focus() } }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [menu])

  const navLinks = links.map(([id, label]) => (
    <a key={id} href={`#${id}`} aria-current={active === id} onClick={() => setMenu(false)}>{label}</a>
  ))

  return (
    <>
      <a className="skip" href="#contenido">Saltar al contenido</a>

      <nav className="nav" aria-label="Secciones">
        <a className="brand" href="#top"><span className="sun-mark" aria-hidden="true" />Alejandro Castillo</a>
        <div className="nav-links">{navLinks}</div>
        <div className="nav-actions">
          <button className="btn btn-icon" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Cambiar a tema claro (Alba)' : 'Cambiar a tema oscuro (Noche)'}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button ref={menuBtn} className="btn btn-icon menu-btn" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="menu-panel" aria-label={menu ? 'Cerrar menú' : 'Abrir menú'}>
            <Icon name={menu ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
      {menu && <div className="menu-panel" id="menu-panel"><div className="menu-links">{navLinks}</div></div>}

      <main id="contenido">
        <header id="top" className="hero" ref={heroRef} aria-labelledby="h-hero">
          <div className="hero-scene" aria-hidden="true"><div className="grain" /></div>
          <div className="wrap">
            <div className="hero-copy">
              <h1 className="t-h1" id="h-hero">Alejandro Castillo Jiménez</h1>
              <p className="t-h3">Technical Consultant en Omega CRM</p>
              <p className="t-lead">
                Graduado en Historia y Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.
                Apasionado por la informática y el desarrollo de software y web.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary lg" href="#experiencia">Ver experiencia</a>
                <a className="btn btn-secondary lg" href={linkedin} target="_blank" rel="noreferrer">LinkedIn<Icon name="out" /></a>
              </div>
              <div className="tags">
                <span className="tag">Otura, Granada</span>
                <span className="tag">5 certificaciones Salesforce</span>
                <span className="tag">Inglés B2</span>
              </div>
            </div>
          </div>
          <div className="hero-band" aria-hidden="true">
            <div className="sun" />
            <div className="ground" />
            <div className="floor" />
            <div className="horizon" />
            <Palm side="l" />
            <Palm side="r" />
          </div>
        </header>

        <Section id="experiencia" title="Experiencia" lead="Dos años y medio en Omega CRM.">
          <Reveal className="grid">
            {roles.map((r, n) => (
              <Card key={r.title} i={n}>
                <p className="t-caption">{r.period}{r.now && <span className="tag accent">Actualidad</span>}</p>
                <h3 className="t-h4">{r.title}</h3>
                <p className="t-small">{r.note}</p>
              </Card>
            ))}
          </Reveal>
        </Section>

        <Section id="certificaciones" title="Certificaciones" lead="Cinco insignias de Salesforce Certified.">
          <Reveal className="grid certs">
            {certs.map((c, n) => (
              <Card key={c.name} i={n} className="cert">
                <img src={c.img} alt={`Insignia Salesforce Certified ${c.name}`} width="140" height="140" />
                <h3 className="t-h4">{c.name}</h3>
              </Card>
            ))}
          </Reveal>
        </Section>

        <Section id="aptitudes" title="Aptitudes" lead="Lo que uso cada día.">
          <Reveal className="grid cols-2">
            {skills.map((s, n) => (
              <Card key={s.group} i={n}>
                <h3 className="t-h4">{s.group}</h3>
                <ul className="tags">
                  {s.items.map((i) => <li key={i} className="tag">{i}</li>)}
                </ul>
              </Card>
            ))}
          </Reveal>
        </Section>

        <Section id="educacion" title="Educación" lead="Estudios e idiomas.">
          <Reveal className="grid cols-2">
            {education.map((e, n) => (
              <Card key={e.name} i={n}>
                <p className="t-caption">{e.period}</p>
                <h3 className="t-h4">{e.name}</h3>
                <p className="t-small">{e.detail}</p>
              </Card>
            ))}
            <Card i={2}>
              <p className="t-caption">Idiomas</p>
              <h3 className="t-h4">Español</h3>
              <p className="t-small">Competencia bilingüe o nativa.</p>
            </Card>
            <Card i={3}>
              <p className="t-caption">Idiomas</p>
              <h3 className="t-h4">Inglés</h3>
              <p className="t-small">Nivel B2.</p>
            </Card>
          </Reveal>
        </Section>

        <Section id="contacto" title="¿Hablamos?" lead="Si quieres contactar conmigo, el mejor sitio es LinkedIn.">
          <Reveal className="contact">
            <Card>
              <a className="btn btn-primary" href={linkedin} target="_blank" rel="noreferrer">Abrir LinkedIn<Icon name="out" /></a>
            </Card>
          </Reveal>
        </Section>
      </main>

      <footer className="t-small">© {new Date().getFullYear()} Alejandro Castillo Jiménez</footer>
    </>
  )
}

export default App
