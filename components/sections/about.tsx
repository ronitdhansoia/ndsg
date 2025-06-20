"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years", value: "3+" },
  { label: "Projects", value: "50+" },
  { label: "Satisfaction", value: "98%" },
  { label: "Team", value: "15+" },
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <section ref={containerRef} id="about" className="relative py-32 bg-white text-black overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              <span className="block">We craft</span>
              <span className="block text-gray-400">digital excellence</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2021, NDSG Associates has rapidly emerged as a trusted partner 
                for businesses seeking transformative digital solutions.
              </p>
              <p>
                We combine strategic thinking with technical expertise to deliver 
                solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
              <p>
                Our approach is simple: understand deeply, design thoughtfully, and execute flawlessly.
              </p>
            </div>

            {/* Philosophy */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Our Philosophy</h3>
              <p className="text-2xl font-light leading-relaxed">
                "Excellence is not a destination but a continuous journey of refinement and innovation."
              </p>
            </div>
          </motion.div>

          {/* Right column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-px bg-gray-200"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-12 text-center group hover:bg-black hover:text-white transition-all duration-500"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-widest text-gray-500 group-hover:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Core principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 grid md:grid-cols-3 gap-16"
        >
          <div className="text-center">
            <div className="w-20 h-[1px] bg-black mx-auto mb-8"></div>
            <h3 className="text-xl font-semibold mb-4">Precision</h3>
            <p className="text-gray-600">
              Every detail matters. We approach each project with meticulous attention to craft solutions that stand the test of time.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-[1px] bg-black mx-auto mb-8"></div>
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600">
              We don't follow trends, we set them. Our solutions leverage cutting-edge technology to give you a competitive edge.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-[1px] bg-black mx-auto mb-8"></div>
            <h3 className="text-xl font-semibold mb-4">Partnership</h3>
            <p className="text-gray-600">
              Your success is our success. We work as an extension of your team, invested in achieving your goals.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}