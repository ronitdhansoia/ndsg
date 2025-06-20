"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const technologies = [
  {
    id: "AI",
    title: "Artificial Intelligence",
    subtitle: "Machine Learning & Deep Learning",
    description: "We implement intelligent systems that learn, adapt, and make decisions, transforming data into actionable insights and automating complex processes.",
    applications: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems"
    ],
  },
  {
    id: "CLOUD",
    title: "Cloud Architecture",
    subtitle: "Scalable Infrastructure Solutions",
    description: "Design and deploy cloud-native architectures that scale seamlessly, ensuring high availability and optimal performance for mission-critical applications.",
    applications: [
      "Microservices Architecture",
      "Serverless Computing",
      "Container Orchestration",
      "Multi-Cloud Strategy"
    ],
  },
  {
    id: "IOT",
    title: "Internet of Things",
    subtitle: "Connected Ecosystem Development",
    description: "Create intelligent networks of connected devices that collect, process, and exchange data in real-time, enabling smarter operations and new business models.",
    applications: [
      "Smart Manufacturing",
      "Connected Healthcare",
      "Intelligent Buildings",
      "Fleet Management"
    ],
  },
  {
    id: "BLOCKCHAIN",
    title: "Blockchain Solutions",
    subtitle: "Distributed Ledger Technology",
    description: "Implement secure, transparent, and decentralized systems that enhance trust, reduce costs, and enable new forms of digital interaction and value exchange.",
    applications: [
      "Smart Contracts",
      "Supply Chain Tracking",
      "Digital Identity",
      "Tokenization"
    ],
  },
];

export function AdvancedTechSection() {
  const [selectedTech, setSelectedTech] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background grid */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 opacity-[0.03]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>
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
            <span className="text-white">Technology</span>{" "}
            <span className="text-gray-600">that transforms</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl">
            We leverage cutting-edge technologies to create solutions that don't just solve today's problems, 
            but anticipate tomorrow's opportunities.
          </p>
        </motion.div>

        {/* Technology showcase */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Technology list */}
          <div className="space-y-0">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`border-t border-gray-800 py-8 cursor-pointer transition-all duration-300 ${
                  selectedTech === index ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                }`}
                onClick={() => setSelectedTech(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="text-gray-700 text-sm font-mono">{tech.id}</span>
                    <h3 className="text-2xl font-semibold text-white mt-2">{tech.title}</h3>
                    <p className="text-gray-500 mt-1">{tech.subtitle}</p>
                  </div>
                  <motion.div
                    animate={{ 
                      rotate: selectedTech === index ? 45 : 0,
                      scale: selectedTech === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 1v18m9-9H1" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Selected technology details */}
          <motion.div 
            key={selectedTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <div className="bg-white text-black p-12">
              <h4 className="text-3xl font-bold mb-6">{technologies[selectedTech].title}</h4>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {technologies[selectedTech].description}
              </p>
              
              <div>
                <h5 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Key Applications</h5>
                <div className="space-y-3">
                  {technologies[selectedTech].applications.map((app, index) => (
                    <motion.div
                      key={app}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <div className="w-1 h-1 bg-black mr-3"></div>
                      <span className="text-gray-700">{app}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-black border-b border-black pb-1 hover:border-gray-400 hover:text-gray-600 transition-colors"
                >
                  Explore this technology
                  <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1 8h14m0 0l-7-7m7 7l-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Innovation statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center max-w-4xl mx-auto"
        >
          <div className="w-20 h-[1px] bg-gray-800 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-400 font-light leading-relaxed">
            Innovation isn't just about using the latest technology — it's about applying it in ways that create meaningful impact and lasting value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}