'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  Rocket
} from 'lucide-react';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@startupbuilder.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sine Wave Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 Q250,20 500,50 T1000,50 T1500,50 T2000,50"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M0,50 Q250,20 500,50 T1000,50 T1500,50 T2000,50",
                "M0,50 Q250,80 500,50 T1000,50 T1500,50 T2000,50",
                "M0,50 Q250,20 500,50 T1000,50 T1500,50 T2000,50",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M0,150 Q250,120 500,150 T1000,150 T1500,150 T2000,150"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            animate={{
              d: [
                "M0,150 Q250,120 500,150 T1000,150 T1500,150 T2000,150",
                "M0,150 Q250,180 500,150 T1000,150 T1500,150 T2000,150",
                "M0,150 Q250,120 500,150 T1000,150 T1500,150 T2000,150",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </svg>

        {/* Moving Diagonal Lines */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 60px,
              rgba(168, 85, 247, 0.4) 60px,
              rgba(168, 85, 247, 0.4) 62px
            )`,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '120px 120px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
          animate={{
            x: mousePosition.x * 50,
            y: mousePosition.y * 50,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { duration: 0.5 },
            y: { duration: 0.5 },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-20"
          animate={{
            x: -mousePosition.x * 30,
            y: -mousePosition.y * 30,
            scale: [1, 1.3, 1],
          }}
          transition={{
            x: { duration: 0.5 },
            y: { duration: 0.5 },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Startup Builder
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                One Platform. Every Startup Solution. From idea to investor under one roof. Building tomorrow's success stories today.
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors group">
                  <div className="bg-white/5 p-2 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10 ${social.color} transition-all group`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg text-purple-400 uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Solutions', 'Pricing', 'Resources', 'Documentation'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg text-pink-400 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {['About', 'Careers', 'Blog', 'Contact', 'Partners'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-0 h-0.5 bg-pink-500 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg text-blue-400 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Startup Builder. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Sitemap
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Accessibility
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Support
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </footer>
  );
}