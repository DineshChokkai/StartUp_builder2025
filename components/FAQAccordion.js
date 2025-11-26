"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Do you execute projects directly or through partners?",
    answer:
      "We manage everything centrally but work with verified expert partners for execution — under strict SLAs and Startup Builder oversight.",
  },
  {
    question: "Can I choose only one service vertical?",
    answer: "Yes — start with one, scale across others as your startup grows.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Transparent milestone-based billing or monthly retainers. For long-term clients, we also offer hybrid or equity models.",
  },
  {
    question: "Do you help with funding or investor connects?",
    answer:
      "Yes. We prepare your decks, connect you to our investor network, and assist with government grant applications.",
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);
  const titleRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 60%",     // when title reaches top area
        toggleActions: "play none none reverse",
      },
    });

    faqRefs.current.forEach((el) => {
      tl.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "+=0.1" // slight delay between items
      );
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-white via-orange-50 to-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,119,0,0.4),transparent_70%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={titleRef}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Your <span className="text-orange-500">Frequently Asked Questions</span> 
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className="opacity-0 transform"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer bg-white/90 backdrop-blur-sm border border-orange-100 hover:border-orange-300 transition-all rounded-2xl shadow-sm hover:shadow-md px-6 py-5 flex justify-between items-center"
              >
                <h3 className="text-base md:text-lg font-medium text-gray-900 leading-snug">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-orange-500 w-5 h-5" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pt-3 pb-6 text-gray-700 text-sm md:text-base leading-relaxed bg-gradient-to-b from-orange-50/60 to-transparent rounded-b-2xl border-x border-b border-orange-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
