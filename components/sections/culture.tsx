"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CultureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="culture" className="relative py-32 bg-white overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-black">
            <span className="block">The foundation</span>
            <span className="block text-gray-400">we build on</span>
          </h2>
        </motion.div>

        {/* Vision, Mission, Values */}
        <div className="space-y-32">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-2 text-right">
              <span className="text-gray-400 text-sm uppercase tracking-widest">Vision</span>
            </div>
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-16 h-[1px] bg-gray-300"></div>
            </div>
            <div className="lg:col-span-9">
              <p className="text-3xl lg:text-4xl font-light leading-relaxed text-black">
                To be the catalyst for digital transformation, empowering businesses to realize their full potential in an ever-evolving technological landscape.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-2 text-right">
              <span className="text-gray-400 text-sm uppercase tracking-widest">Mission</span>
            </div>
            <div className="lg:col-span-1 flex justify-center">
              <div className="w-16 h-[1px] bg-gray-300"></div>
            </div>
            <div className="lg:col-span-9">
              <p className="text-3xl lg:text-4xl font-light leading-relaxed text-black">
                We create sophisticated technology solutions that solve complex challenges, drive efficiency, and unlock new opportunities for growth.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-2 text-right">
                <span className="text-gray-400 text-sm uppercase tracking-widest">Values</span>
              </div>
              <div className="lg:col-span-1 flex justify-center">
                <div className="w-16 h-[1px] bg-gray-300"></div>
              </div>
              <div className="lg:col-span-9">
                <p className="text-xl text-gray-600 mb-12">
                  The principles that guide every decision, every project, and every interaction.
                </p>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 lg:ml-[25%]">
              {[
                { title: "Excellence", description: "Pursuing perfection in every line of code and every client interaction" },
                { title: "Innovation", description: "Challenging conventions to create solutions that define the future" },
                { title: "Integrity", description: "Building trust through transparency, honesty, and ethical practices" },
                { title: "Collaboration", description: "Achieving more together through open communication and shared goals" }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 group hover:bg-black hover:text-white transition-all duration-500"
                >
                  <h4 className="text-lg font-semibold mb-4 group-hover:text-white transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Culture statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-[1px] bg-gray-300 mx-auto mb-12"></div>
            <p className="text-2xl lg:text-3xl font-light text-gray-600 leading-relaxed">
              "Culture is not just what we say, it's what we do every day. It's the commitment to excellence that turns good ideas into great solutions."
            </p>
            <p className="text-sm text-gray-400 mt-8 uppercase tracking-widest">— Dr. Narendra Dhansoia</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}