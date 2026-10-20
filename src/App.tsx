const linkedin = 'https://www.linkedin.com/in/alejandro-castillo-jiménez-370182276/'

const roles = [
  { title: 'Technical Consultant', period: 'oct. 2025 – actualidad', now: true },
  { title: 'Junior Salesforce Developer', period: 'jun. 2024 – oct. 2025', note: 'Apex, Lightning Web Components, SOQL · Granada, híbrido' },
  { title: 'Trainee Salesforce Developer', period: 'abr. 2024 – jun. 2024', note: 'Granada' },
]

const certs = ['Platform App Builder', 'Platform Developer I', 'JavaScript Developer I', 'AI Associate']

const skills = [
  { group: 'Salesforce', items: ['Apex', 'Lightning Web Components', 'SOQL'] },
  { group: 'Desarrollo', items: ['Java', 'Spring Boot', 'Python', 'JavaScript', 'HTML5', 'CSS', 'Odoo'] },
  { group: 'Datos', items: ['MySQL', 'MongoDB', 'Esquemas XML', 'Oxygen XML Editor'] },
  { group: 'Personales', items: ['Resolución de problemas', 'Comunicación', 'Pensamiento crítico', 'Investigación', 'Mediación', 'Redacción'] },
]

const education = [
  { name: 'MEDAC', detail: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma', period: '2022 – 2024' },
  { name: 'Universidad de Granada', detail: 'Grado en Historia', period: 'sept. 2018 – jul. 2022' },
]

function App() {
  return (
    <>
      <nav className="nav" aria-label="Secciones">
        <a href="#experiencia">Experiencia</a>
        <a href="#certificaciones">Certificaciones</a>
        <a href="#aptitudes">Aptitudes</a>
        <a href="#educacion">Educación</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <main>
        <header className="hero">
          <p className="eyebrow">Technical Consultant · Omega CRM, A Merkle Company</p>
          <h1>Alejandro Castillo Jiménez</h1>
          <p className="lead">
            Graduado en Historia y Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.
            Apasionado por la informática y el desarrollo de software y web.
          </p>
          <div className="links">
            <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn ghost" href="#experiencia">Ver experiencia</a>
          </div>
          <p className="meta" style={{ marginTop: 20 }}>Otura, Granada, Andalucía</p>
        </header>

        <section id="experiencia">
          <h2>Experiencia</h2>
          <div className="card">
            <h3>Omega CRM, A Merkle Company</h3>
            <p className="meta" style={{ marginBottom: 20 }}>Jornada completa · 2 años 7 meses</p>
            {roles.map((r) => (
              <div className="role" key={r.title}>
                <div>
                  <strong>{r.title}</strong>
                  {r.note && <p className="meta">{r.note}</p>}
                </div>
                <span className={r.now ? 'now' : 'meta'}>{r.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="certificaciones">
          <h2>Certificaciones</h2>
          <div className="grid">
            {certs.map((c) => (
              <div className="card cert" key={c}>
                <span className="meta">Salesforce Certified</span>
                <strong>{c}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="aptitudes">
          <h2>Aptitudes</h2>
          <div className="grid">
            {skills.map((s) => (
              <div className="card" key={s.group}>
                <h3>{s.group}</h3>
                <div className="chips">
                  {s.items.map((i) => <span className="chip" key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="educacion">
          <h2>Educación</h2>
          <div className="grid">
            {education.map((e) => (
              <div className="card" key={e.name}>
                <h3>{e.name}</h3>
                <p>{e.detail}</p>
                <p className="meta">{e.period}</p>
              </div>
            ))}
          </div>
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Idiomas</h3>
            <p>Español <span className="meta">· bilingüe o nativo</span></p>
            <p>Inglés <span className="meta">· B2</span></p>
          </div>
        </section>

        <section id="contacto" style={{ textAlign: 'center' }}>
          <h2>Contacto</h2>
          <a className="btn" href={linkedin} target="_blank" rel="noreferrer">Escríbeme por LinkedIn</a>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} Alejandro Castillo Jiménez</footer>
    </>
  )
}

export default App
