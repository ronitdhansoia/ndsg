"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("tFGrBssQt92lRU8JF");
    console.log("EmailJS initialized");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - using the credentials directly
      const SERVICE_ID = "service_ztiq5yj";
      const TEMPLATE_ID = "template_uzfsjdq";

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not specified",
        project_type: formData.project || "Not specified",
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
      };

      // Send email using EmailJS
      console.log("Attempting to send emails with EmailJS...");
      console.log("Service ID:", SERVICE_ID);
      console.log("Template ID:", TEMPLATE_ID);
      console.log("Template params:", templateParams);
      
      try {
        // Send notification email to admin
        const adminResult = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
        console.log("Admin notification sent successfully:", adminResult);
        
        // Send thank you email to user
        // Note: You'll need to create a new template in EmailJS for this
        // Template ID for thank you email: template_thankyou (you need to create this)
        const THANKYOU_TEMPLATE_ID = "template_thankyou"; // Update this with your actual template ID
        
        const thankyouParams = {
          to_email: formData.email, // User's email
          from_name: formData.name,
          company: formData.company || "Not specified",
          project_type: formData.project || "Not specified",
          budget: formData.budget || "Not specified",
          timeline: formData.timeline || "Not specified",
        };
        
        try {
          const thankyouResult = await emailjs.send(SERVICE_ID, THANKYOU_TEMPLATE_ID, thankyouParams);
          console.log("Thank you email sent successfully:", thankyouResult);
        } catch (thankyouError: any) {
          console.error("Failed to send thank you email:", thankyouError);
          // Don't throw here - admin email was sent successfully
        }
      } catch (emailError: any) {
        console.error("EmailJS specific error:", emailError);
        throw emailError;
      }
      
      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        timeline: "",
      });
    } catch (error: any) {
      console.error("Failed to send email:", error);
      console.error("Error details:", {
        message: error?.message,
        status: error?.status,
        text: error?.text
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? "bg-gray-800 text-gray-400 cursor-not-allowed" 
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </motion.button>
                
                {submitStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-500 mt-4 text-center"
                  >
                    Thank you! Your inquiry has been sent successfully.
                  </motion.p>
                )}
                
                {submitStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 mt-4 text-center"
                  >
                    Sorry, there was an error. Please try again or email directly.
                  </motion.p>
                )}
                
                {submitStatus === "idle" && (
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    We'll get back to you within 24 hours.
                  </p>
                )}
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