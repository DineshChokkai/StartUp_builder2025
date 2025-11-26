"use client";
import { motion } from "framer-motion";
import { Rocket, Users, Network, Cpu } from "lucide-react";

const features = [
  {
    title: "360° Startup Ecosystem",
    description:
      "One partner for tech, legal, marketing, and funding — seamless and strategic.",
    icon: Rocket,
  },
  {
    title: "Expert Partner Network",
    description:
      "15+ verified agencies, studios, and firms managed under our execution SLA.",
    icon: Network,
  },
  {
    title: "Strategy + Execution Model",
    description: "We co-build your business — not just consult on it.",
    icon: Users,
  },
  {
    title: "AI-Powered Operations",
    description:
      "From onboarding to analytics, every process runs smarter and faster with AI.",
    icon: Cpu,
  },
];

export default function WhyFoundersCircular() {
  return (
    <section className="relative pt-14 pb-16 bg-linear-to-b from-white via-orange-50 to-white text-[#1A1A1A] overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,119,0,0.08),transparent_75%)]"></div>

      {/* Heading */}
      <div className="text-center px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-2.5"
        >
          Why <span className="text-[#FF7700]">200+ Founders</span> Trust the Startup Bank
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
        >
          A unified ecosystem built to empower, accelerate, and automate your startup journey.
        </motion.p>
      </div>

      {/* ✅ Mobile + Tablet Version (STACKED CARDS) */}
      <div className="md:hidden px-6 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-orange-100 shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            <f.icon className="text-[#FF7700] mb-3" size={32} />
            <h3 className="font-semibold text-base mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </motion.div>
        ))}
      </div>

      {/* ✅ Desktop Circular Layout (UNCHANGED) */}
      <div className="hidden md:flex relative mx-auto w-full max-w-4xl aspect-square items-center justify-center -mt-4">

        {/* Outer Circle (UNCHANGED) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-12 left-16 w-[85%] h-[85%] rounded-full bg-orange-100/60 backdrop-blur-sm"
        ></motion.div>

        {/* Center Core (UNCHANGED) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute top-78 right-84 z-20 flex flex-col items-center justify-center rounded-full bg-linear-to-br from-[#FF7700] to-orange-600 text-white w-60 h-60 shadow-2xl"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 border-2 border-white/30 rounded-full"
          ></motion.div>
          <Rocket className="mb-2" size={40} />
          <p className="font-semibold text-center text-base px-4">Startup Builder Core</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-3 bg-white text-[#FF7700] px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer z-20"
          >
            Talk to a Strategist
          </motion.button>
        </motion.div>

        {/* Feature Circles (UNCHANGED) */}
        {features.map((f, i) => {
          const angle = (i * 90 - 90) * (Math.PI / 180);
          const radius = 220;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.08 }}
              className="absolute bg-white border border-orange-100 shadow-lg rounded-full p-10 w-[235px] h-[235px] flex flex-col items-center justify-center text-center transition-all hover:shadow-2xl hover:bg-orange-50"
              style={{
                left: `calc(36% + ${x}px)`,
                top: `calc(35% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <f.icon className="text-[#FF7700]" size={32} />
              <h3 className="font-semibold text-base mb-2 leading-tight">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
