"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    client: "Global Finance Corp",
    industry: "Financial Services",
    challenge: "Legacy systems limiting digital innovation and customer experience",
    solution: "Complete digital transformation with cloud-native architecture and AI-powered analytics",
    impact: [
      "70% reduction in processing time",
      "3x increase in customer satisfaction",
      "40% operational cost savings"
    ],
    technologies: ["Cloud Architecture", "Machine Learning", "Microservices"]
  },
  {
    client: "HealthTech Solutions",
    industry: "Healthcare Technology",
    challenge: "Fragmented patient data and inefficient clinical workflows",
    solution: "Unified healthcare platform with real-time data integration and predictive analytics",
    impact: [
      "85% faster patient data access",
      "50% reduction in administrative tasks",
      "Improved patient outcomes"
    ],
    technologies: ["IoT Integration", "Data Analytics", "Security Compliance"]
  },
  {
    client: "E-Commerce Leader",
    industry: "Retail Technology",
    challenge: "Scaling infrastructure to handle massive traffic spikes and personalization",
    solution: "Serverless architecture with AI-driven recommendation engine",
    impact: [
      "99.99% uptime achieved",
      "35% increase in conversion rate",
      "60% infrastructure cost reduction"
    ],
    technologies: ["Serverless", "AI/ML", "Real-time Analytics"]
  }
];

export function ServiceDetailsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_75%,#000000_75%,#000000),linear-gradient(45deg,#000000_25%,transparent_25%,transparent_75%,#000000_75%,#000000)]  bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-black">
            <span className="block">Impact</span>
            <span className="block text-gray-400">in action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Real-world transformations that demonstrate our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Case studies */}
        <div className="space-y-0">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border-t border-gray-200 first:border-t-0"
            >
              <div className="py-20 grid lg:grid-cols-12 gap-8">
                {/* Client info */}
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-semibold text-black mb-2">{study.client}</h3>
                  <p className="text-gray-500 text-sm uppercase tracking-wider">{study.industry}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="lg:col-span-5">
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Challenge</h4>
                    <p className="text-lg text-gray-700">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Solution</h4>
                    <p className="text-lg text-black font-medium">{study.solution}</p>
                  </div>
                </div>

                {/* Impact & Technologies */}
                <div className="lg:col-span-4">
                  <div className="mb-8">
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Impact</h4>
                    <ul className="space-y-2">
                      {study.impact.map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="text-gray-400 mr-2">—</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 border border-gray-300 text-sm text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
          <div className="w-20 h-[1px] bg-gray-300 mx-auto mb-12"></div>
          <p className="text-2xl text-gray-600 mb-8">Ready to create your success story?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}