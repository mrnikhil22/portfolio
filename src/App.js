import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function App() {
  const certificates = [
    { title: "DSA using Python", link: "https://1drv.ms/b/c/4863cb8b39e28396/IQAw1mdExCdoQbnBgvkeZE3dAXwR5zvn3-3rxRfeCyN2ZRI?e=pRJj9n" },
    { title: "Microsoft 365 Copilot", link: "https://1drv.ms/b/c/4863cb8b39e28396/IQCununYDwcrSLlvJjFPWjUqAfumG-fX1IfFRzRoj9Foi1w?e=0hoeWX" },
    { title: "Communication Skills - Coursera", link: "https://1drv.ms/b/c/4863cb8b39e28396/IQCj7mhDstWLS5B_n1K4Is_RAXhsP9hgFal_CZ-F76KgVfk?e=ayOSPn" },
    { title: "Basics of Python", link: "https://1drv.ms/b/c/4863cb8b39e28396/IQA8KCfcgDDrR7IMxnTHlWVRAVgwwTtNsAsvWo95TMfHvGA?e=9OhTbe" },
    { title: "Demystifying Strategy Certificate", link: "https://1drv.ms/b/c/4863cb8b39e28396/IQApOYiVikiuRLo-yQfLAJqNAQzIusb3rsCBk6C3ReT1Voc?e=O5aDzm" },
    { title: "HTML Advanced", link: "https://1drv.ms/b/c/4863cb8b39e28396/IQAvHG_zXZ_OTYmSiojHJhavATMc_mjP7VTK6-2zQkT2XlM?e=exs22F" },
  ];

  const skills = ["C++", "Python", "DSA", "Flask", "HTML/CSS", "Machine Learning", "Git & GitHub"];

  return (
    <div className="app-container dark-theme">
      {/* Navbar */}
      <nav className="navbar">
  <h2 className="logo">Nikhil Verma</h2>

  <input type="checkbox" id="menu-toggle" />
  <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>

  <div className="nav-links">
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#certificates">Certificates</a>
    <a href="#education">Education</a>
    <a href="#resume">Resume</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

      <div className="content-wrapper">
        {/* HERO */}
        <section id="about" className="section hero">
          <h1 className="main-heading">
            Hi, I'm <span>Nikhil Verma</span>
          </h1>
          <h2 className="sub-heading">AI Developer | Python Programmer | Problem Solver</h2>
          <p className="about-text">
            I build AI-powered applications and solve real-world problems using
            Data Structures and Web Development. I focus on creating impactful
            and practical solutions.
          </p>
          <div className="icons">
            <a href="https://github.com/mrnikhil22" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nikhil-verma-8630a725b/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="grid skills-grid">
            {skills.map((skill) => (
              <div className="card skills-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="grid projects-grid">
            <div className="card modern-card">
              <h3>AI Disease Detection</h3>
              <p>AI-based system to predict diseases using symptoms</p>
              <a href="https://github.com/mrnikhil22/YOUR_LINK" target="_blank" rel="noreferrer">View →</a>
            </div>
            <div className="card modern-card">
              <h3>Heart Disease Prediction</h3>
              <p>Machine Learning model using real dataset</p>
              <a href="https://github.com/mrnikhil22/YOUR_LINK" target="_blank" rel="noreferrer">View →</a>
            </div>
            <div className="card modern-card">
              <h3>Portfolio Website</h3>
              <p>Modern portfolio built with React</p>
              <a href="https://github.com/mrnikhil22/YOUR_LINK" target="_blank" rel="noreferrer">View →</a>
            </div>
            <div className="card modern-card">
              <h3>DSA Problem Solver</h3>
              <p>Optimized DSA solutions in C++</p>
              <a href="https://github.com/mrnikhil22/YOUR_LINK" target="_blank" rel="noreferrer">View →</a>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="section">
          <h2 className="section-title">Certificates</h2>
          <div className="grid certificates-grid">
            {certificates.map((cert) => (
              <a href={cert.link} target="_blank" rel="noreferrer" key={cert.title} className="card modern-card cert-link">
                {cert.title}
              </a>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <h2 className="section-title">Education</h2>
          <div className="timeline modern-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>B.Tech (Computer Science)</h3>
                <p>3rd Year Student</p>
                <p>Focused on AI, DSA & Web Development</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>12th (Science)</h3>
                <p>Strong foundation in Mathematics & Physics</p>
              </div>
            </div>
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="section">
          <h2 className="section-title">Resume</h2>
          <div className="resume-box modern-card">
            <p>Download or view my resume:</p>
            <a href="https://1drv.ms/b/c/4863cb8b39e28396/IQCh26XEklCmQLUu_tolYDPIAcaiFASpPox0TBNGV4TfGkE?e=dh0e1D" target="_blank" rel="noreferrer" className="resume-link">
              <FaDownload /> View Resume
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-box">
            <p><FaEnvelope /> vermanikhil7275@gmail.com</p>
            <p>
              <FaGithub />
              <a href="https://github.com/mrnikhil22" target="_blank" rel="noreferrer"> GitHub</a>
            </p>
            <p>
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/nikhil-verma-8630a725b/" target="_blank" rel="noreferrer"> LinkedIn</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;