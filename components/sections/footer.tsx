"use client";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-white text-black py-20 overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-bold mb-6">NDSG</h3>
            <p className="text-gray-600 mb-8 pr-8">
              Transforming businesses through strategic innovation and cutting-edge technology solutions since 2021.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-black">Est.</span> 2021
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-black">HQ:</span> Gurugram, India
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-700 hover:text-black transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-700 hover:text-black transition-colors">Services</a></li>
              <li><a href="#culture" className="text-gray-700 hover:text-black transition-colors">Culture</a></li>
              <li><a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-700">Strategy & Consulting</li>
              <li className="text-gray-700">Software Development</li>
              <li className="text-gray-700">Cloud Architecture</li>
              <li className="text-gray-700">AI & Machine Learning</li>
              <li className="text-gray-700">Blockchain & Web3</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-700">
                <a href="mailto:dhansoia@gmail.com" className="hover:text-black transition-colors">
                  dhansoia@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <a href="tel:+917015280780" className="hover:text-black transition-colors">
                  +91 7015280780
                </a>
              </p>
              <p className="text-gray-700 text-sm">
                589, Sector 7<br />
                Gurugram, Haryana<br />
                India
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {currentYear} NDSG Associates. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        
        {/* Founder attribution */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Founded by Dr. Narendra Dhansoia
          </p>
        </motion.div>
      </div>
    </footer>
  );
}