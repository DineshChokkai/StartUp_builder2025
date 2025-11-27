import { useState, useEffect, useRef } from "react";
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
  Sparkles,
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
    color: "from-purple-500 to-indigo-500",
    video: "/assets/Videos/1st Video.mp4",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    title: "Build the Product Application  (Tech & AI)",
    subtitle: "Turn your idea into a product. Fast.",
    description:
      "We design and build modern apps, websites, AI tools, and platforms — scalable, secure, and investor-ready.",
    includes:
      "App & Web Development • AI Chatbots & Automation • UI/UX Design • DevOps & QA Testing",
    cta: "Plan My MVP",
    icon: Code,
    color: "from-pink-500 to-purple-500",
    video: "/assets/Videos/Tech.mp4",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    title: "Build the Brand (Marketing & PR)",
    subtitle: "Make them remember your name.",
    description:
      "We craft your story, grow your audience, and drive results through creative campaigns, social media, and performance marketing.",
    includes:
      "Brand Strategy & Design • Social Media & Influencers • Performance Marketing • PR & Growth Funnels",
    cta: "Get Growth Plan",
    icon: Megaphone,
    color: "from-fuchsia-500 to-pink-500",
    video: "/assets/Videos/Branding & PR.mp4",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    title: "Build the Pipeline (Sales Team)",
    subtitle: "Scale your revenue without scaling chaos.",
    description:
      "Our dedicated Sales Pods and RevOps systems handle lead generation, CRM automation, and closing — all powered by data.",
    includes:
      "Sales Development Teams • CRM Setup • Outreach & Funnel Automation • Revenue Operations",
    cta: "Launch Sales Engine",
    icon: TrendingUp,
    color: "from-violet-500 to-purple-500",
    video: "/assets/Videos/Sales team.mp4",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    title: "Build the Content (Studio & Podcasts)",
    subtitle: "Content that connects and converts.",
    description:
      "From ad films to podcasts, our creative partners bring your brand to life with storytelling that sells.",
    includes:
      "Video & Ad Shoots • Product Films • Podcast Production • Motion Graphics & Reels",
    cta: "Book a Shoot",
    icon: Video,
    color: "from-blue-500 to-indigo-500",
    video: "/assets/Videos/Ads Shoot & Podcast.mp4",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    title: "Build the Fundraise (Funding & Grants)",
    subtitle: "Secure capital and investor confidence.",
    description:
      "We help you prepare pitch decks, grant proposals, and financial models that attract investors and unlock government funding.",
    includes:
      "Pitch Decks • Financial Models • Grant Proposals (MSME, BIRAC, Startup India) • Valuation & Investor Connect",
    cta: "Prepare My Raise",
    icon: DollarSign,
    color: "from-purple-500 to-pink-500",
    video: "/assets/Videos/Grant and Funding.mp4",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=60",
  },
];

function ServiceCard({ service, isExpanded, isHovered, onClick, onMouseEnter, onMouseLeave, videoRef }) {
  const Icon = service.icon;

  return (
    <div
      className={`relative group bg-white rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${
        isExpanded ? 'shadow-2xl ring-4 ring-purple-500/50 scale-105 z-20' : isHovered ? 'shadow-xl' : 'shadow-lg hover:shadow-xl'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px] ${isExpanded ? 'opacity-100' : ''}`}>
        <div className="w-full h-full bg-white rounded-3xl"></div>
      </div>

      <div className={`relative overflow-hidden bg-gray-900 transition-all duration-500 ${isExpanded ? 'h-80' : 'h-56'}`} onClick={onClick}>
        {isExpanded ? (
          <>
            <video ref={videoRef} src={service.video} className="w-full h-full object-cover" autoPlay controls playsInline />
            <button
              onClick={(e) => { e.stopPropagation(); onClick(); }}
              className="absolute top-4 right-4 bg-white/95 hover:bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center z-20 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </>
        ) : (
          <>
            <img src={service.image} alt={service.title} className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
              {String(service.id).padStart(2, "0")}
            </div>
            <div className={`absolute top-4 right-4 transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} shadow-xl`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-white shadow-2xl transition-all duration-500 ${isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-90'} hover:scale-125 group/play`}>
                <Play className="w-8 h-8 text-purple-600 ml-1 transition-transform group-hover/play:scale-110" />
              </div>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t from-purple-600/50 via-pink-500/30 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
          </>
        )}
      </div>

      <div className={`relative p-6 transition-all duration-500 ${isExpanded ? 'bg-gradient-to-br from-purple-50 to-pink-50' : ''}`}>
        <h3 className={`text-lg font-bold mb-2 transition-all duration-300 tracking-tight ${
          isExpanded ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-2xl' : 'text-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent'
        }`}>
          {service.title}
        </h3>
        <p className="text-sm font-semibold text-purple-600 mb-3">{service.subtitle}</p>
        <p className={`text-sm text-gray-600 leading-relaxed mb-4 transition-all duration-500 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>
          {service.description}
        </p>
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
          <div className="text-xs text-gray-700 p-4 bg-white rounded-xl border-2 border-purple-200 shadow-sm">
            <p className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">What's Included:</p>
            {service.includes}
          </div>
        </div>
        <button className={`inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all duration-300 ${
          isExpanded ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105' : 'text-purple-600 hover:gap-3'
        }`}>
          {service.cta}
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded || isHovered ? 'translate-x-1' : 'translate-x-0'}`} />
        </button>
        {!isExpanded && <p className="text-xs text-gray-400 mt-3 font-medium">Click to watch video & learn more</p>}
      </div>
    </div>
  );
}

export default function CoreServicesSection() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const videoRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (serviceId) => setExpandedCard(expandedCard === serviceId ? null : serviceId);
  const next = () => setMobileIndex((p) => (p + 1) % services.length);
  const prev = () => setMobileIndex((p) => (p - 1 + services.length) % services.length);

  return (
    <section ref={sectionRef} className="w-full relative py-20 overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="text-center mb-16 px-6 relative z-10">
        <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-6 shadow-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <Sparkles size={20} className="animate-pulse" />
          <span className="font-bold tracking-tight">Our Services</span>
        </div>
        <h2 className={`text-4xl md:text-6xl font-black text-gray-900 mb-6 transition-all duration-1000 tracking-tight ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          Explore Our <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Core Services</span>
            <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,15 Q25,5 50,10 T100,8" stroke="url(#gradient-services)" strokeWidth="3" fill="none" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient-services" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h2>
        <p className={`text-gray-700 text-xl max-w-3xl mx-auto font-medium transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          Like fruits on a tree, each service is ready to help your startup grow
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={service.id} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${index * 100}ms` }}>
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

        <div className="md:hidden">
          <div className="relative px-4">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <ServiceCard
                service={services[mobileIndex]}
                isExpanded={expandedCard === services[mobileIndex].id}
                isHovered={false}
                onClick={() => handleCardClick(services[mobileIndex].id)}
                videoRef={(el) => (videoRefs.current[services[mobileIndex].id] = el)}
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-purple-200 flex justify-center items-center hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 active:scale-95" aria-label="Previous">
              <ChevronLeft className="w-5 h-5 text-purple-600" />
            </button>
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button key={idx} onClick={() => setMobileIndex(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === mobileIndex ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600' : 'w-2 bg-gray-300'}`} aria-label={`Go to ${idx + 1}`} />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white shadow-lg border-2 border-purple-200 flex justify-center items-center hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 active:scale-95" aria-label="Next">
              <ChevronRight className="w-5 h-5 text-purple-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}