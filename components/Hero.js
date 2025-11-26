"use client";

import { useState } from "react";
import { Briefcase, Code2, LineChart, Users } from "lucide-react";

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 pt-[130px]">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Wave Border at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-32 sm:h-24 md:h-40 lg:h-52"
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="white"
            opacity="0.5"
          />
          <path
            d="M0,60 Q300,10 600,60 T1200,60 L1200,120 L0,120 Z"
            fill="white"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-1 gap-12 items-center justify-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 max-w-8xl mx-auto text-center animate-fadeIn">
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 px-2 animate-slideUp">
              One Platform. <span className="text-blue-600">✈️</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 underline decoration-2 md:decoration-3 lg:decoration-4 decoration-purple-400">
                Every Startup
              </span>{" "}
              Solution.
            </h1>

            {/* Subheadline */}
            <div
              className="space-y-3 animate-slideUp"
              style={{ animationDelay: "0.15s" }}
            >
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2 max-w-3xl mx-auto">
                From idea to investor, Startup Builder powers your entire
                journey — bringing company setup, legal, tech, marketing, sales,
                content, and funding under one roof.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 px-2 animate-slideUp"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="tel:9900043908"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                🚀 Book a Discovery Call
              </a>

              <a
                href="https://www.canva.com/design/DAGqred-o5A/Pamp3xObOVuyzUvQLpLunA/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-blue-400 bg-white/60 backdrop-blur-sm text-blue-900 text-sm sm:text-base md:text-lg font-semibold hover:bg-white/80 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                📄 View Company Deck
              </a>
            </div>

            {/* Tagline */}
            <div
              className="pt-2 animate-slideUp"
              style={{ animationDelay: "0.45s" }}
            >
              <p className="text-gray-800 font-medium italic text-sm sm:text-base md:text-lg px-2">
                "You don't need five vendors. You just need Startup Builder."
              </p>
            </div>

            {/* Social Proof */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2 animate-slideUp"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/80?img=${i + 20}`}
                    alt="Founder"
                    className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full border-2 sm:border-3 border-white shadow-md"
                  />
                ))}
                <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm font-bold flex items-center justify-center border-2 sm:border-3 border-white shadow-md">
                  +100
                </div>
              </div>
              <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base">
                100+ startups we helped to build
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Cards */}
      <div className="relative max-w-7xl mx-auto w-full mt-12 sm:mt-16 md:mt-20 lg:mt-24 overflow-hidden z-20 mb-8">
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-4 animate-infiniteScroll">
            {/* First set of cards */}
            <div className="flex-shrink-0 w-72">
              <FeatureCard
                icon={<Briefcase size={24} />}
                title="Setup & Legal"
                color="blue"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <FeatureCard
                icon={<Code2 size={24} />}
                title="Tech & Product Development"
                color="purple"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <FeatureCard
                icon={<LineChart size={24} />}
                title="Marketing & Growth Strategy"
                color="pink"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <FeatureCard
                icon={<Users size={24} />}
                title="Sales & Investor Connections"
                color="indigo"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex-shrink-0 w-72">
              <FeatureCard
                icon={<Briefcase size={24} />}
                title="Setup & Legal"
                color="blue"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <FeatureCard
                icon={<Code2 size={24} />}
                title="Tech & Product Development"
                color="purple"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <FeatureCard
                icon={<LineChart size={24} />}
                title="Marketing & Growth Strategy"
                color="pink"
              />
            </div>
            <div className="flex-shrink-0 w-72">
              <FeatureCard
                icon={<Users size={24} />}
                title="Sales & Investor Connections"
                color="indigo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Buttons Container */}
      <div className="fixed bottom-[100px] right-4 sm:right-6 z-50 flex flex-col gap-3 sm:gap-4 items-end">
        {/* Video Preview */}
        <div
          className="relative group"
          onMouseEnter={() => setIsVideoPlaying(true)}
          onMouseLeave={() => setIsVideoPlaying(false)}
        >
          {/* Video Container */}
          <div className={`transition-all duration-300 ${isVideoPlaying ? 'w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-48' : 'w-12 h-12 sm:w-14 sm:h-14'} bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl overflow-hidden shadow-2xl`}>
            {isVideoPlaying ? (
              <div className="relative w-full h-full rounded-xl p-[5px] bg-gradient-to-r from-purple-600 to-pink-600">
                <video
                  autoPlay
                  loop
                  
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source src="/video1.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                  <p className="text-white text-xs sm:text-sm font-medium">Watch Our Story</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg 
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            )}
          </div>
          
          {/* Pulse Animation Ring */}
          {!isVideoPlaying && (
            <span className="absolute inset-0 rounded-2xl bg-purple-500 animate-ping opacity-75"></span>
          )}
          
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {isVideoPlaying ? 'Playing...' : 'Hover to preview'}
          </span>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919900043908?text=Hi, I'm interested in learning more about Startup Builder"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group relative"
          aria-label="Contact us on WhatsApp"
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-xs sm:text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </span>
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes infiniteScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-infiniteScroll {
          animation: infiniteScroll 20s linear infinite;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

function FeatureCard({ icon, title, color }) {
  const colorClasses = {
    blue: "from-blue-600 to-blue-400",
    purple: "from-purple-600 to-purple-400",
    pink: "from-pink-600 to-pink-400",
    indigo: "from-indigo-600 to-indigo-400"
  };

  return (
    <div className="group flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-purple-200 hover:bg-white/80 hover:border-purple-300 transition-all cursor-default hover:-translate-y-1 shadow-md hover:shadow-lg">
      <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${colorClasses[color]} text-white group-hover:scale-110 transition-all duration-300 shrink-0`}>
        {icon}
      </div>
      <span className="text-gray-900 font-semibold text-xs sm:text-sm md:text-base leading-tight text-center sm:text-left">
        {title}
      </span>
    </div>
  );
}