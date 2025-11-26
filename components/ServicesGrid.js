import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Building2,
  Code,
  Megaphone,
  TrendingUp,
  Video,
  DollarSign,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Build the Company",
    subtitle: "Set up your startup the right way.",
    description:
      "From company registration and compliances to accounting, audit, and IP protection, we handle the boring stuff — so you can focus on building.",
    includes:
      "Pvt Ltd / LLP setup • Accounting & Auditing • GST & ROC filing • Legal contracts • Trademarks & IP",
    cta: "Start Incorporation",
    icon: Building2,
    color: "from-blue-500 to-cyan-500",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Build the Product",
    subtitle: "Turn your idea into a product. Fast.",
    description:
      "We design and build modern apps, websites, AI tools, and platforms — scalable, secure, and investor-ready.",
    includes:
      "App & Web Development • AI Chatbots & Automation • UI/UX Design • DevOps & QA Testing",
    cta: "Plan My MVP",
    icon: Code,
    color: "from-purple-500 to-pink-500",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Build the Brand",
    subtitle: "Make them remember your name.",
    description:
      "We craft your story, grow your audience, and drive results through creative campaigns, social media, and performance marketing.",
    includes:
      "Brand Strategy & Design • Social Media & Influencers • Performance Marketing • PR & Growth Funnels",
    cta: "Get Growth Plan",
    icon: Megaphone,
    color: "from-orange-500 to-red-500",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Build the Pipeline",
    subtitle: "Scale your revenue without scaling chaos.",
    description:
      "Our dedicated Sales Pods and RevOps systems handle lead generation, CRM automation, and closing — all powered by data.",
    includes:
      "Sales Development Teams • CRM Setup • Outreach & Funnel Automation • Revenue Operations",
    cta: "Launch Sales Engine",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Build the Content",
    subtitle: "Content that connects and converts.",
    description:
      "From ad films to podcasts, our creative partners bring your brand to life with storytelling that sells.",
    includes:
      "Video & Ad Shoots • Product Films • Podcast Production • Motion Graphics & Reels",
    cta: "Book a Shoot",
    icon: Video,
    color: "from-yellow-500 to-orange-500",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Build the Fundraise",
    subtitle: "Secure capital and investor confidence.",
    description:
      "We help you prepare pitch decks, grant proposals, and financial models that attract investors and unlock government funding.",
    includes:
      "Pitch Decks • Financial Models • Grant Proposals (MSME, BIRAC, Startup India) • Valuation & Investor Connect",
    cta: "Prepare My Raise",
    icon: DollarSign,
    color: "from-indigo-500 to-blue-500",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=60",
  },
];

export default function CoreServicesSection() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (serviceId) => {
    if (expandedCard === serviceId) {
      setExpandedCard(null);
    } else {
      setExpandedCard(serviceId);
    }
  };

  const next = () => setMobileIndex((p) => (p + 1) % services.length);
  const prev = () =>
    setMobileIndex((p) => (p - 1 + services.length) % services.length);

  return (
    <section 
      ref={sectionRef} 
      className="w-full relative py-20 overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-pink-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="text-center mb-16 px-6 relative z-10">
        <h2
          className={`text-4xl md:text-6xl font-black text-gray-900 mb-6 transition-all duration-1000 tracking-tight ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Explore Our{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Core Services
            </span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-4"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0,15 Q25,5 50,10 T100,8"
                stroke="url(#gradient-services)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient-services" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>
        <p
          className={`text-gray-700 text-xl max-w-3xl mx-auto font-medium transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Like fruits on a tree, each service is ready to help your startup grow
        </p>
      </div>

      {/* Desktop & Tablet Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                service={service}
                isExpanded={expandedCard === service.id}
                isHovered={hoveredCard === service.id}
                onClick={() => handleCardClick(service.id)}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                videoRef={(el) => (videoRefs.current[service.id] = el)}
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative px-4">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <ServiceCard
                service={services[mobileIndex]}
                isExpanded={expandedCard === services[mobileIndex].id}
                isHovered={false}
                onClick={() => handleCardClick(services[mobileIndex].id)}
                videoRef={(el) =>
                  (videoRefs.current[services[mobileIndex].id] = el)
                }
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-orange-200 flex justify-center items-center hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 active:scale-95"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === mobileIndex
                      ? 'w-8 bg-gradient-to-r from-orange-500 to-red-500'
                      : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to service ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-orange-200 flex justify-center items-center hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 active:scale-95"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function ServiceCard({
  service,
  isExpanded,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  videoRef,
}) {
  const Icon = service.icon;

  return (
    <div
      className={`
        relative group bg-white rounded-2xl overflow-hidden
        transition-all duration-500 cursor-pointer
        ${
          isExpanded
            ? 'shadow-2xl ring-4 ring-orange-500/50 scale-105 z-20'
            : isHovered
            ? 'shadow-xl scale-102'
            : 'shadow-lg hover:shadow-xl'
        }
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Media Section */}
      <div 
        className={`relative overflow-hidden bg-gray-900 transition-all duration-500 ${
          isExpanded ? 'h-80' : 'h-56'
        }`}
        onClick={onClick}
      >
        {isExpanded ? (
          <>
            <video
              ref={videoRef}
              src={service.video}
              className="w-full h-full object-cover"
              autoPlay
              controls
              playsInline
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="absolute top-4 right-4 bg-white/95 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center z-20 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </>
        ) : (
          <>
            <img
              src={service.image}
              alt={service.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Icon Badge */}
            <div
              className={`absolute top-4 left-4 transition-all duration-500 ${
                isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-xl`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`
                  w-20 h-20 rounded-full flex items-center justify-center
                  bg-white shadow-2xl
                  transition-all duration-500
                  ${isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-90'}
                  hover:scale-125
                  group/play
                `}
              >
                <Play className="w-8 h-8 text-orange-500 ml-1 transition-transform group-hover/play:scale-110" />
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
              </div>
            </div>

            {/* Hover Overlay */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent
                transition-opacity duration-500
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}
            />

            {/* Shine Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none ${!isExpanded ? 'block' : 'hidden'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </>
        )}
      </div>

      {/* Content Section */}
      <div className={`p-6 transition-all duration-500 ${isExpanded ? 'bg-gradient-to-br from-orange-50 to-red-50' : ''}`}>
        <h3 className={`text-xl font-bold mb-2 transition-all duration-300 tracking-tight ${
          isExpanded ? 'text-orange-600 text-2xl' : 'text-gray-900 group-hover:text-orange-600'
        }`}>
          {service.title}
        </h3>
        <p className="text-sm font-semibold text-orange-500 mb-3">
          {service.subtitle}
        </p>
        <p className={`text-sm text-gray-600 leading-relaxed mb-4 transition-all duration-500 ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-2'
        }`}>
          {service.description}
        </p>

        {/* Expandable Details */}
        <div
          className={`
            overflow-hidden transition-all duration-500
            ${isExpanded ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="text-xs text-gray-700 p-4 bg-white rounded-xl border-2 border-orange-200 shadow-sm">
            <p className="font-semibold text-orange-600 mb-2">What's Included:</p>
            {service.includes}
          </div>
        </div>

        {/* CTA Button */}
        <button
          className={`
            inline-flex items-center gap-2 font-bold text-sm
            px-6 py-3 rounded-full
            transition-all duration-300
            ${
              isExpanded
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl hover:scale-105'
                : 'text-orange-500 hover:gap-3'
            }
          `}
        >
          {service.cta}
          <ArrowRight
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded || isHovered ? 'translate-x-1' : 'translate-x-0'
            }`}
          />
        </button>

        {/* Tap to Expand Hint */}
        {!isExpanded && (
          <p className="text-xs text-gray-400 mt-3 font-medium">
            Click to watch video & learn more
          </p>
        )}
      </div>
    </div>
  );
}