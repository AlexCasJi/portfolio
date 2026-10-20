import administrator from './assets/badges/administrator.png'
import appBuilder from './assets/badges/app-builder.png'
import developerI from './assets/badges/developer-i.png'
import javascriptI from './assets/badges/javascript-i.png'
import aiAssociate from './assets/badges/ai-associate.png'

const linkedin = 'https://www.linkedin.com/in/alejandro-castillo-jiménez-370182276/'

const roles = [
  { title: 'Technical Consultant', period: 'Oct. 2025 – actualidad', note: 'Omega CRM, A Merkle Company', dark: true },
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

function App() {
  return (
    <>
      <nav className="nav" aria-label="Secciones">
        <a className="brand" href="#top">Alejandro Castillo</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#certificaciones">Certificaciones</a>
        <a href="#aptitudes">Aptitudes</a>
        <a href="#educacion">Educación</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <header className="band hero" id="top">
        <p className="eyebrow">Technical Consultant · Omega CRM</p>
        <h1>Alejandro Castillo Jiménez.</h1>
        <p className="lead">
          Graduado en Historia y Técnico Superior en Desarrollo de Aplicaciones Multiplataforma.
          Apasionado por la informática y el desarrollo de software y web.
        </p>
        <div className="links">
          <a className="btn" href="#experiencia">Ver experiencia</a>
          <a className="more" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="meta">Otura, Granada, Andalucía</p>
      </header>

      <section className="band gray" id="experiencia">
        <h2>Experiencia.<span> Dos años y medio en Omega CRM.</span></h2>
        <div className="tiles three">
          {roles.map((r) => (
            <article className={r.dark ? 'tile dark' : 'tile'} key={r.title}>
              <p className="tile-meta">{r.period}</p>
              <h3>{r.title}</h3>
              <p>{r.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="certificaciones">
        <h2>Certificaciones.<span> Salesforce Certified.</span></h2>
        <div className="tiles certs">
          {certs.map((c) => (
            <article className="tile cert" key={c.name}>
              <img src={c.img} alt={`Insignia Salesforce Certified ${c.name}`} width="160" height="160" />
              <h3>{c.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="band gray" id="aptitudes">
        <h2>Aptitudes.<span> Lo que uso cada día.</span></h2>
        <div className="tiles two">
          {skills.map((s) => (
            <article className="tile" key={s.group}>
              <h3>{s.group}</h3>
              <ul className="chips">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="band" id="educacion">
        <h2>Educación.<span> Y los idiomas.</span></h2>
        <div className="tiles two">
          {education.map((e) => (
            <article className="tile" key={e.name}>
              <p className="tile-meta">{e.period}</p>
              <h3>{e.name}</h3>
              <p>{e.detail}</p>
            </article>
          ))}
          <article className="tile">
            <p className="tile-meta">Idiomas</p>
            <h3>Español</h3>
            <p>Competencia bilingüe o nativa.</p>
          </article>
          <article className="tile">
            <p className="tile-meta">Idiomas</p>
            <h3>Inglés</h3>
            <p>Nivel B2.</p>
          </article>
        </div>
      </section>

      <section className="band gray contact" id="contacto">
        <h2>Hablemos.</h2>
        <p className="lead">Si quieres contactar conmigo, el mejor sitio es LinkedIn.</p>
        <a className="btn" href={linkedin} target="_blank" rel="noreferrer">Abrir LinkedIn</a>
      </section>

      <footer>Copyright © {new Date().getFullYear()} Alejandro Castillo Jiménez.</footer>
    </>
  )
}

export default App
