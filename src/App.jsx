
import './App.css'
import farhanPhoto from './assets/farhan.jpg.jpeg'

const projects = [
  {
    number: '01',
    name: 'JobSphere',
    type: 'AI JOB SEARCH AGENT',
    description:
      'An AI-powered application designed to analyze resumes, discover relevant job opportunities, match candidate skills, and simplify the job search process.',
    tags: ['Python', 'FastAPI', 'AI Agents'],
    url: '',
  },
  {
    number: '02',
    name: 'AudioSplitAI',
    type: 'AUDIO PROCESSING',
    description:
      'An application focused on audio processing and splitting, exploring practical software solutions for working with audio.',
    tags: ['Python', 'Audio Processing', 'AI'],
    url: 'https://github.com/farhan-geeky7/AudioSplitAI',
  },
]

const skills = [
  'Python',
  'FastAPI',
  'Generative AI',
  'AI Agents',
  'REST APIs',
  'SQL',
  'Git & GitHub',
  'Linux',
  'AWS',
  'DevOps',
]

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a className="brand" href="#home">FA<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">Contact ↗</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" />
              MCA GRADUATE · PYTHON & AI ENTHUSIAST
            </div>

            <h1>
              Hi, I'm <span>Farhan Alam.</span>
              <br />
              I build ideas into
              <br />
              <span className="gradient-text">intelligent solutions.</span>
            </h1>

            <p className="hero-description">
              MCA graduate from NIET, passionate about Python development,
              Generative AI, AI agents, and building practical software
              applications that solve real-world problems.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work ↗
              </a>
              <a className="button button-secondary" href="#contact">
                Let's connect
              </a>
            </div>

            <div className="education">
              <span className="education-icon">✳</span>
              <div>
                <strong>MCA · 2024–2026</strong>
                <p>Noida Institute of Engineering & Technology (NIET)</p>
              </div>
            </div>
          </div>

          <div className="hero-visual profile-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="glow" />

            <div className="profile-frame">
              <img
                src={farhanPhoto}
                alt="Farhan Alam, Python Developer and AI enthusiast"
                className="profile-photo"
              />
              <div className="profile-caption">
                <span className="status-dot" />
                <div>
                  <strong>Farhan Alam</strong>
                  <small>Python Developer · AI Enthusiast</small>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-python">⌘ Python</div>
            <div className="floating-chip chip-ai">✳ Generative AI</div>
            <div className="floating-chip chip-code">&lt;/&gt; AI Agents</div>
          </div>
        </section>

        <section className="intro-strip">
          <span>PYTHON DEVELOPMENT</span>
          <span>✳</span>
          <span>GENERATIVE AI</span>
          <span>✳</span>
          <span>AI AGENTS</span>
          <span>✳</span>
          <span>INTELLIGENT AUTOMATION</span>
        </section>

        <section className="section about-section" id="about">
          <div className="section-label">01 / ABOUT ME</div>
          <div className="about-content">
            <h2>
              Curious by nature.
              <br />
              <span>Builder by choice.</span>
            </h2>

            <div className="about-copy">
              <p>
                I'm an MCA graduate from Noida Institute of Engineering &
                Technology (NIET), with a strong interest in Python
                development, Artificial Intelligence, Generative AI, and
                intelligent automation.
              </p>
              <p>
                I enjoy exploring new technologies, solving technical
                challenges, and turning ideas into practical applications.
                My project work includes JobSphere, an AI-powered job search
                application agent, and AudioSplitAI, an audio-processing
                application.
              </p>
              <p>
                I'm continuously developing my skills in backend development,
                AI-powered tools, cloud computing, Linux, and DevOps.
              </p>
              <a className="text-link" href="#projects">
                Explore my projects ↗
              </a>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-label">02 / TOOLKIT</div>
          <div className="section-heading">
            <h2>Technologies I <span>explore.</span></h2>
            <p>Technical skills and technologies I use or am learning.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>

          <div className="section-heading projects-heading">
            <h2>Projects with <span>purpose.</span></h2>
            <p>A selection of projects I've worked on.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-mark">✳</span>
                </div>

                <div className="project-type">{project.type}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span>PROJECT OVERVIEW</span>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      View on GitHub ↗
                    </a>
                  ) : (
                    <span>Repository link to be added</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="project-note">
            Explore my projects and technical work. More features and project
            updates will be added as development continues.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label">04 / LET'S CONNECT</div>

          <h2>
            Have an idea?
            <br />
            <span>Let's build something.</span>
          </h2>

          <p>
            Interested in Python, AI, or building something useful?
            Let's connect.
          </p>

          <div className="contact-actions">
            <a
              className="button button-primary"
              href="https://www.linkedin.com/in/farhan-alam-b905a61a3/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/farhan-geeky7"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              className="button button-secondary"
              href="#home"
            >
              Back to top ↑
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">FA<span>.</span></a>
        <p>Designed & built with curiosity by Farhan Alam.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
