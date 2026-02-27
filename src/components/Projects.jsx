import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle">Some of my recent work</p>

      {/* Project 1 */}
      <div className="project-row">
        <div className="project-image">
          <img
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
            alt="Ecommerce"
          />
        </div>

        <div className="project-content">
          <h3>E-Commerce Platform</h3>
          <p>
            A full-featured online shopping platform with user authentication,
            product management, cart system and Stripe payment integration.
          </p>

          <div className="tech-badges">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
            <span>Stripe API</span>
          </div>

          <div className="project-buttons">
            <button className="code-btn">
              <FaGithub /> Code
            </button>

            <button className="demo-btn">
              <FaExternalLinkAlt /> Live Demo
            </button>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-row reverse">
        <div className="project-image">
          <img
            src="https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea"
            alt="Chat App"
          />
        </div>

        <div className="project-content">
          <h3>Real-Time Chat Application</h3>
          <p>
            Instant messaging platform with real-time communication,
            group chats and WebSocket integration.
          </p>

          <div className="tech-badges">
            <span>Socket.io</span>
            <span>Node.js</span>
            <span>MySQL</span>
            <span>Express</span>
            <span>JavaScript</span>
          </div>

          <div className="project-buttons">
            <button className="code-btn">
              <FaGithub /> Code
            </button>

            <button className="demo-btn">
              <FaExternalLinkAlt /> Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;