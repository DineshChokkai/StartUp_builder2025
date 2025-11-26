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
    video: "/assets/Videos/1st Video.mp4",
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
    video: "/assets/Videos/1st Video.mp4",
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
    video: "/assets/Videos/Branding & PR.mp4",
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
    video: "/assets/Videos/Sales team.mp4",
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
    video: "/assets/Videos/Ads Shoot & Podcast.mp4",
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
    video: "/assets/Videos/Grants and Funding.mp4",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=60",
  },
];

export default function CoreServicesSection() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
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

  const handleCardHover = (serviceId) => {
    if (playingVideo !== serviceId) {
      setHoveredCard(serviceId);
      if (playingVideo !== null && playingVideo !== serviceId) {
        setPlayingVideo(null);
      }
    }
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleVideoClick = (serviceId) => {
    if (playingVideo === serviceId) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(serviceId);
      setHoveredCard(null);
    }
  };

  const next = () => setMobileIndex((p) => (p + 1) % services.length);
  const prev = () =>
    setMobileIndex((p) => (p - 1 + services.length) % services.length);

  return (
    <section ref={sectionRef} className="w-full relative py-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/30 via-transparent to-transparent pointer-events-none" />

      <div className="text-center mb-12 md:mb-16 px-6 relative">
        <h2
          className={`text-3xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Explore Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Core Services
          </span>
        </h2>
        <p
          className={`text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          Like fruits on a tree, each service is ready to help your startup grow
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => handleCardHover(service.id)}
              onMouseLeave={handleCardLeave}
            >
              <ServiceCard
                service={service}
                isPlaying={playingVideo === service.id}
                isHovered={hoveredCard === service.id}
                onVideoClick={handleVideoClick}
                videoRef={(el) => (videoRefs.current[service.id] = el)}
              />
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative px-4">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <ServiceCard
                service={services[mobileIndex]}
                isPlaying={playingVideo === services[mobileIndex].id}
                isHovered={false}
                onVideoClick={handleVideoClick}
                videoRef={(el) =>
                  (videoRefs.current[services[mobileIndex].id] = el)
                }
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex justify-center items-center hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 active:scale-95"
              aria-label="Previous service"
            >
              <span className="text-gray-700">◀</span>
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
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex justify-center items-center hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 active:scale-95"
              aria-label="Next service"
            >
              <span className="text-gray-700">▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isPlaying,
  isHovered,
  onVideoClick,
  videoRef,
}) {
  const Icon = service.icon;

  return (
    <div
      className={`
        relative group bg-white rounded-2xl overflow-hidden
        transition-all duration-500 cursor-pointer
        ${
          isPlaying
            ? 'shadow-2xl scale-105 ring-4 ring-orange-500/50'
            : isHovered
            ? 'shadow-xl scale-102'
            : 'shadow-lg hover:shadow-xl'
        }
      `}
    >
      <div className="relative h-56 overflow-hidden bg-gray-900">
        {isPlaying ? (
          <>
            <video
              ref={videoRef}
              src={service.video}
              className="w-full h-full object-cover"
              autoPlay
              controls
              playsInline
              crossOrigin="anonymous"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                onVideoClick(service.id);
              }}
              className="absolute top-3 right-3 bg-white/95 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center z-20 shadow-lg transition-all duration-300 hover:scale-110"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div
              className={`absolute top-4 left-4 transition-all duration-500 ${
                isHovered
                  ? 'scale-110 rotate-12'
                  : 'scale-100 rotate-0'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onVideoClick(service.id);
              }}
              className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-16 h-16 rounded-full flex items-center justify-center
                bg-white shadow-2xl z-10
                transition-all duration-500
                ${
                  isHovered
                    ? 'scale-110 opacity-100'
                    : 'scale-90 opacity-90'
                }
                hover:scale-125
                group/play
              `}
              aria-label={`Play ${service.title} video`}
            >
              <Play className="w-7 h-7 text-red-500 ml-1 transition-transform group-hover/play:scale-110" />
              <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
            </button>

            <div
              className={`
                absolute inset-0 bg-gradient-to-t from-orange-500/40 to-transparent
                transition-opacity duration-500
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `}
            />
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm font-medium text-orange-600 mb-3">
          {service.subtitle}
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>

        <div
          className={`
            overflow-hidden transition-all duration-500
            ${isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="text-xs text-gray-500 mb-4 p-3 bg-gray-50 rounded-lg">
            {service.includes}
          </div>
        </div>

        <button
          className={`
            inline-flex items-center gap-2 font-semibold text-sm
            transition-all duration-300
            ${
              isHovered
                ? 'text-orange-600 gap-3'
                : 'text-orange-500 gap-2'
            }
          `}
        >
          {service.cta}
          <ArrowRight
            className={`w-4 h-4 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
