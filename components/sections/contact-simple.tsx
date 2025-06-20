"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ContactSectionSimple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `New Inquiry from ${formData.name} - NDSG Website`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not specified"}
Project Type: ${formData.project || "Not specified"}
Budget Range: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}

---
This inquiry was sent from the NDSG Associates website contact form.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:dhansoia@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <section ref={containerRef} id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Rest of the component remains the same */}
    </section>
  );
}