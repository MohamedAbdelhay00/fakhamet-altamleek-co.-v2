import React from "react";

import AboutUs from "@/components/home/AboutUs";
import ContactUs from "@/components/home/ContactUs";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import Reviews from "@/components/home/Reviews";
import Services from "@/components/home/Services";

const Home = () => {
  return (
    <main>
      <section id="home" aria-label="Hero Section">
        <Hero />
      </section>
      <section id="about-us" aria-label="About Us Section">
        <AboutUs />
      </section>
      <section id="projects" aria-label="Projects Section">
        <Projects />
      </section>
      <section id="services" aria-label="Services Section">
        <Services />
      </section>
      <section id="reviews" aria-label="Testimonials Section">
        <Reviews />
      </section>
      <section id="contact-us" aria-label="Contact Us Section">
        <ContactUs />
      </section>
    </main>
  );
};

export default Home;
