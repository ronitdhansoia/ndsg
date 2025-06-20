"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "Strategy & Consulting",
    description: "We architect digital transformation roadmaps that align technology with business objectives, ensuring sustainable growth and competitive advantage.",
    capabilities: ["Digital Transformation", "Business Analysis", "Strategic Planning", "Technology Advisory"],
  },
  {
    id: "02",
    title: "Software Development",
    description: "From concept to deployment, we build robust, scalable applications that solve real business challenges and deliver exceptional user experiences.",
    capabilities: ["Web Applications", "Mobile Development", "Enterprise Systems", "API Integration"],
  },
  {
    id: "03",
    title: "Cloud & Infrastructure",
    description: "We design and implement cloud-native architectures that scale effortlessly, ensuring your infrastructure grows with your business.",
    capabilities: ["Cloud Migration", "DevOps Automation", "Infrastructure Design", "Performance Optimization"],
  },
  {
    id: "04",
    title: "Data & Analytics",
    description: "Transform raw data into strategic insights with our advanced analytics solutions that drive informed decision-making.",
    capabilities: ["Business Intelligence", "Predictive Analytics", "Data Architecture", "Visualization"],
  },
  {
    id: "05",
    title: "AI & Machine Learning",
    description: "Harness the power of artificial intelligence to automate processes, enhance customer experiences, and unlock new opportunities.",
    capabilities: ["Natural Language Processing", "Computer Vision", "Predictive Modeling", "Process Automation"],
  },
  {
    id: "06",
    title: "Security & Compliance",
    description: "Protect your digital assets with comprehensive security strategies that ensure compliance and safeguard against evolving threats.",
    capabilities: ["Security Audits", "Risk Assessment", "Compliance Management", "Incident Response"],
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="services" className="relative py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">What we</span>{" "}
            <span className="text-gray-600">do best</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl">
            We deliver end-to-end solutions that transform ideas into reality, 
            combining technical excellence with strategic thinking.
          </p>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-t border-gray-800 first:border-t-0"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="py-12 lg:py-16 grid lg:grid-cols-12 gap-8 items-start">
                {/* Service number */}
                <div className="lg:col-span-1">
                  <span className="text-gray-700 text-sm font-mono">{service.id}</span>
                </div>

                {/* Service title */}
                <div className="lg:col-span-3">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Service description */}
                <div className="lg:col-span-4">
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="lg:col-span-3">
                  <ul className="space-y-2">
                    {service.capabilities.map((capability, i) => (
                      <motion.li
                        key={capability}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0.5,
                          x: hoveredIndex === index ? 0 : -10
                        }}
                        transition={{ delay: i * 0.05 }}
                        className="text-sm text-gray-600"
                      >
                        {capability}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="lg:col-span-1 flex justify-end">
                  <motion.div
                    animate={{ 
                      x: hoveredIndex === index ? 10 : 0,
                      opacity: hoveredIndex === index ? 1 : 0.3
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8">Ready to transform your business?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}