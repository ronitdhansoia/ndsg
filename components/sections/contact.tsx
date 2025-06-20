"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ContactSection() {
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
    console.log("Form submitted:", formData);
  };

  return (
    <section ref={containerRef} id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Subtle moving grid */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-white">Let's build</span><br />
              <span className="text-gray-600">something great</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Whether you're looking to transform your business or launch the next big thing, 
              we're here to turn your vision into reality.
            </p>

            {/* Contact details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Email</h3>
                <a href="mailto:dhansoia@gmail.com" className="text-2xl text-white hover:text-gray-300 transition-colors">
                  dhansoia@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Phone</h3>
                <a href="tel:+917015280780" className="text-2xl text-white hover:text-gray-300 transition-colors">
                  +91 7015280780
                </a>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Office</h3>
                <p className="text-lg text-gray-300">
                  589, Sector 7<br />
                  Gurugram, Haryana<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Business Hours</h3>
                <p className="text-lg text-gray-300">
                  Monday — Friday<br />
                  9:00 AM — 6:00 PM IST
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-800 focus:border-white transition-colors text-white placeholder-gray-700 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-800 focus:border-white transition-colors text-white placeholder-gray-700 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm uppercase tracking-wider text-gray-500 mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-800 focus:border-white transition-colors text-white placeholder-gray-700 outline-none"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-sm uppercase tracking-wider text-gray-500 mb-3">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-800 focus:border-white transition-colors text-white outline-none cursor-pointer"
                >
                  <option value="" className="bg-black">Select a project type</option>
                  <option value="digital-transformation" className="bg-black">Digital Transformation</option>
                  <option value="software-development" className="bg-black">Software Development</option>
                  <option value="cloud-migration" className="bg-black">Cloud Migration</option>
                  <option value="ai-ml" className="bg-black">AI & Machine Learning</option>
                  <option value="blockchain-web3" className="bg-black">Blockchain & Web3</option>
                  <option value="consulting" className="bg-black">Strategic Consulting</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-800 focus:border-white transition-colors text-white outline-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Select budget</option>
                    <option value="<5k" className="bg-black">Under $5K</option>
                    <option value="5k-10k" className="bg-black">$5K - $10K</option>
                    <option value="10k-25k" className="bg-black">$10K - $25K</option>
                    <option value="25k-50k" className="bg-black">$25K - $50K</option>
                    <option value="50k-100k" className="bg-black">$50K - $100K</option>
                    <option value="100k+" className="bg-black">$100K+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm uppercase tracking-wider text-gray-500 mb-3">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-800 focus:border-white transition-colors text-white outline-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Select timeline</option>
                    <option value="immediate" className="bg-black">Immediate</option>
                    <option value="1-3months" className="bg-black">1-3 Months</option>
                    <option value="3-6months" className="bg-black">3-6 Months</option>
                    <option value="6months+" className="bg-black">6+ Months</option>
                  </select>
                </div>
              </div>

              <div className="pt-8">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  Submit Inquiry
                </motion.button>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="w-20 h-[1px] bg-gray-800 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-500 font-light max-w-3xl mx-auto">
            Great partnerships begin with a simple conversation. 
            Let's start yours today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}