// src/components/ContactSection.tsx

import React from "react";

interface ContactProps {
  phone: string;
  whatsapp: string;
}

const ContactSection = ({ phone, whatsapp }: ContactProps) => {
  return (
    <div className="contact-section">
      <a href={`tel:${phone}`} className="call-button">
        Call Us
      </a>
      <a href={`https://wa.me/${whatsapp}`} className="whatsapp-button">
        WhatsApp
      </a>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactSection;
