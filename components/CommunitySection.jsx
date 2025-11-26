"use client";
import { useState, useEffect, useRef } from "react";
import { X, Users, Bell, TrendingUp, MessageCircle, CheckCircle } from "lucide-react";
import gsap from "gsap";

export default function CommunitySection() {
  const [showModal, setShowModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const modalRef = useRef(null);

   useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = rect.top / window.innerHeight;
      setScrollY(Math.min(Math.max(progress, -1), 1));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showModal && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [showModal]);

  const benefits = [
    {
      icon: Bell,
      title: "Early Access",
      description: "Get funding alerts and startup updates before anyone else",
    },
    {
      icon: TrendingUp,
      title: "Growth Tips",
      description: "Weekly insights on scaling your business effectively",
    },
    {
      icon: Users,
      title: "Network",
      description: "Connect with 5000+ founders and investors",
    },
    {
      icon: MessageCircle,
      title: "Direct Support",
      description: "Ask questions and get expert answers instantly",
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden  md:my-20 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8"
      >
        <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Parallax Background Image */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `translateY(${scrollY * 50}px) scale(${1 + scrollY * 0.1})`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop"
              alt="Community"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-16 lg:px-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Join Our Community
              </h2>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
                Get startup updates, events & funding alerts first — only on our WhatsApp channel.
              </p>

              <button
                onClick={() => setShowModal(true)}
                className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Join Community
              </button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 sm:px-8 py-4 sm:py-6 flex items-center justify-between rounded-t-3xl z-10">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    WhatsApp Community
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">Join 5,000+ founders</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 sm:px-8 py-6 sm:py-8">
              {/* Hero Section */}
              <div className="text-center mb-8 sm:mb-10">
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-4">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-green-700 text-xs sm:text-sm font-semibold">
                    Free to Join
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Why Join Our Community?
                </h4>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                  Get exclusive access to startup resources, funding opportunities, and a network of like-minded entrepreneurs
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group p-5 sm:p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-2.5 sm:p-3 rounded-xl group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                          {benefit.title}
                        </h5>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* What You'll Get */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8">
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                  What You'll Get
                </h5>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Daily startup tips and growth strategies",
                    "Weekly funding opportunities & grants",
                    "Exclusive webinars and workshops",
                    "Direct Q&A with industry experts",
                    "Networking events and meetups",
                    "Early access to new features",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://chat.whatsapp.com/your-group-link"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Join WhatsApp Community Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </a>

              <p className="text-xs sm:text-sm text-gray-500 text-center mt-4">
                No spam, unsubscribe anytime
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}