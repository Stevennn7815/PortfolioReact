import React from "react";
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Social Medias</h2>
        <p>
          This is my social medias. You can also send me a message below.
        </p>

        <div className="contact-links">
          <a 
            href="https://www.facebook.com/Teven.Teben" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn facebook"
          >
            Facebook
          </a>

          <a 
            href="mailto:your.email@example.com" 
            className="btn email"
          >
            Email
          </a>
        </div>
            
        <div className="message-form">
          <h3>Message Me</h3>
          <form action="mailto:your.email@example.com" method="post" encType="text/plain">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn send">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
