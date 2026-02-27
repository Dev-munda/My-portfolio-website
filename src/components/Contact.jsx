import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Let's work together on your next project
      </p>

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h3>Contact Information</h3>
          <p className="contact-desc">
            Feel free to reach out through any of these channels.
          </p>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <span>Email</span>
              <p>devmunda@example.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <div>
              <span>Phone</span>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <span>Location</span>
              <p>Odisha, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="your.email@example.com" />
          </div>

          <div className="input-group">
            <label>Subject</label>
            <input type="text" placeholder="What's this about?" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message..." />
          </div>

          <button className="send-btn">
            <FaPaperPlane /> Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;