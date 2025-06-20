"use client";
import { motion } from "framer-motion";
import { FloatingDots } from "@/components/ui/floating-dots";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ffffff10,transparent_50%)]"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white opacity-[0.02] rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white opacity-[0.02] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating dots animation */}
      <FloatingDots />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Small intro text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <span className="text-sm md:text-base text-gray-600 tracking-[0.3em] uppercase font-light">
              Est. 2017
            </span>
          </motion.div>
          
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter leading-none"
          >
            <span className="block text-white">NDSG</span>
            <span className="block text-gray-500 text-5xl md:text-6xl lg:text-7xl font-light mt-2">Associates</span>
          </motion.h1>
          
          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed font-light"
          >
            Strategic consulting and technology solutions for 
            forward-thinking enterprises
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 bg-white text-black font-medium overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">View Services</span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-4 border border-gray-700 text-gray-400 font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
          
          {/* Stats - More subtle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-12 mt-24 text-sm text-gray-600"
          >
            {[
              { number: "8+", label: "Years of Excellence" },
              { number: "50+", label: "Projects Delivered" },
              { number: "15+", label: "Team Members" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-white font-semibold text-lg">{stat.number}</span>
                <span className="text-gray-600">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-gray-600 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}