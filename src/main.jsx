import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { BrainCircuit, DatabaseZap, Cpu, ShieldCheck, Mail, Phone, MapPin, ExternalLink, Sparkles, Network, Activity } from 'lucide-react';
import { profile, metrics, skills, projects, experience } from './data/portfolio';
import profilePic from './assets/profile.png';
import './styles.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

function Navbar() {
  return (
    <nav className="navbar glass-nav">
      <a href="#home" className="brand"><Sparkles size={18} /> Charan AI</a>
      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-grid">
      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-copy">
        <span className="eyebrow"><Cpu size={16} /> Production AI Engineer</span>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p>{profile.headline}</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#projects">View Projects <ExternalLink size={17} /></a>
          <a className="secondary-btn" href={`mailto:${profile.email}`}>Contact Me</a>
        </div>
        <div className="contact-strip">
          <span><Mail size={16} /> {profile.email}</span>
          <span><Phone size={16} /> {profile.phone}</span>
          <span><MapPin size={16} /> {profile.location}</span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-visual">
        <div className="hero-avatar glass-panel">
          <img src={profilePic} alt={`${profile.name} profile`} />
        </div>
      </motion.div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics-grid">
      {metrics.map((item) => (
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="metric-card glass-panel" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </motion.div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="section glass-panel about-card">
      <div>
        <span className="section-kicker"><BrainCircuit size={16} /> About</span>
        <h2>Enterprise AI systems with backend-first engineering.</h2>
      </div>
      <p>{profile.summary}</p>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const icons = [Network, DatabaseZap, Activity];
  const Icon = icons[index % icons.length];
  return (
    <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="project-card glass-panel">
      <div className="project-top">
        <div className="project-icon"><Icon size={28} /></div>
        <div>
          <span className="badge">{project.badge}</span>
          <h3>{project.title}</h3>
          <small>{project.period}</small>
        </div>
      </div>
      <p>{project.description}</p>
      <div className="impact-list">
        {project.impact.map((point) => <span key={point}>✓ {point}</span>)}
      </div>
      <div className="stack-list">
        {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
      </div>
      <div className="flow-line">
        {project.flow.map((step) => <em key={step}>{step}</em>)}
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-kicker"><Sparkles size={16} /> Featured Work</span>
        <h2>AI projects designed for enterprise use cases.</h2>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => <ProjectCard project={project} index={index} key={project.title} />)}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <span className="section-kicker"><Cpu size={16} /> Technical Stack</span>
        <h2>AI, backend, data, and secure API engineering.</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="skill-card glass-panel" key={skill.group}>
            <h3>{skill.group}</h3>
            <div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-heading">
        <span className="section-kicker"><ShieldCheck size={16} /> Experience</span>
        <h2>Professional timeline.</h2>
      </div>
      <div className="timeline">
        {experience.map((item) => (
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="timeline-item glass-panel" key={item.company}>
            <div>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <span>{item.period} · {item.location}</span>
            </div>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section glass-panel">
      <div>
        <span className="section-kicker"><Mail size={16} /> Contact</span>
        <h2>Let’s build production-ready AI systems.</h2>
        <p>Available for AI Engineer, Generative AI, Agentic AI, RAG, and FastAPI backend roles.</p>
      </div>
      <div className="contact-buttons">
        <a href={`mailto:${profile.email}`}><Mail size={18} /> Email</a>
        <a href="tel:+919346852834"><Phone size={18} /> Call</a>
        <a href="https://github.com/charankalicheti?tab=repositories" target="_blank" rel="noreferrer"><ExternalLink size={18} /> GitHub</a>
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <div className="texture-layer" />
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <Navbar />
      <Hero />
      <Metrics />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <footer>© 2026 Charan Reddy · AI Engineer Portfolio</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
