function Hero() {
  return (
    <section className="hero">
      {/* Background gradient orbs */}
      <div className="hero-bg-orb hero-bg-orb-1"></div>
      <div className="hero-bg-orb hero-bg-orb-2"></div>
      
      {/* Grid overlay */}
      <div className="hero-grid"></div>
      
      <div className="hero-content">
        <div className="hero-main">
          {/* Left side - Text content */}
          <div className="hero-text-content">
            

            <h1 className="hero-title">
              Building <span className="hero-title-gradient">Scalable</span> <br />
              SaaS Platforms & <span className="hero-title-highlight">Web Apps</span>
            </h1>

            <p className="hero-subtitle">
              I design and develop high-performance web applications
              with clean UI, powerful backend systems and modern architecture.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-btn-primary">
                <span>View Projects</span>
                <svg className="hero-btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a href="#contact" className="hero-btn-secondary">
                <span>Contact Me</span>
                <svg className="hero-btn-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2.5 7.5L10 11.6667L17.5 7.5M2.5 12.5L10 16.6667L17.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right side - Photo section */}
          <div className="hero-photo-wrapper">
            <div className="hero-photo-container">
              <div className="hero-photo-glow"></div>
              <div className="hero-photo-ring"></div>
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="hero-photo"
                // Replace with your actual image path
                // src="/path/to/your-photo.jpg"
              />
              
              {/* Tech icons floating around */}
              <div className="hero-photo-icon hero-icon-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#6366f1" strokeWidth="1.5"/>
                  <path d="M12 8V12L15 15" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="hero-photo-icon hero-icon-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#a855f7" strokeWidth="1.5"/>
                  <path d="M2 17L12 22L22 17" stroke="#a855f7" strokeWidth="1.5"/>
                  <path d="M2 12L12 17L22 12" stroke="#a855f7" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="hero-photo-icon hero-icon-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#ec4899" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="2" fill="#ec4899"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof / stats */}
      </div>

      {/* Scroll indicator */}
      <a href="#projects" className="hero-scroll-indicator">
        <span>Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <path d="M8 5V19M8 19L13 14M8 19L3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  );
}

export default Hero;