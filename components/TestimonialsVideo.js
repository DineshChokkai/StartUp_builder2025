"use client";

import { useState, useEffect, useRef } from "react";
import { Play, X, Volume2, VolumeX } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const videos = [
  {
    id: 1,
    title: "ZeeTV Business Story",
    thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/5qap5aO4i9A",
    category: "Growth",
  },
  {
    id: 2,
    title: "CNBC Interview",
    thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    category: "Insights",
  },
  {
    id: 3,
    title: "Startup India",
    thumbnail: "https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/LXb3EKWsInQ",
    category: "Journey",
  },
  {
    id: 4,
    title: "Founder Journey",
    thumbnail: "https://img.youtube.com/vi/C0DPdy98e4c/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/C0DPdy98e4c",
    category: "Story",
  },
  {
    id: 5,
    title: "Business Insights",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
    category: "Insights",
  },
  {
    id: 6,
    title: "Success Story",
    thumbnail: "https://img.youtube.com/vi/eX2qFMC8cFo/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/eX2qFMC8cFo",
    category: "Success",
  },
];

export default function FounderStories() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const categories = ["All", "Growth", "Insights", "Journey", "Story", "Success"];

  useEffect(() => {
    cardsRef.current = [];
  }, [activeCategory]);

  // Simple parallax effect on scroll
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Smooth parallax - cards move at different speeds
        gsap.to(card, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            markers: false,
          },
          y: index % 2 === 0 ? 50 : -50,
          ease: "none",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    if (selectedVideo) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [selectedVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 py-16 md:py-28 lg:py-40 px-4 md:px-8 lg:px-12 overflow-hidden min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/2 -right-32 w-96 h-96 bg-pink-300/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/3 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Founder Stories
          </h2>
          <div className="h-1.5 w-32 md:w-48 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mb-8"></div>
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
            Watch inspiring journeys from founders who transformed ideas into impact. Real
            stories, real growth, real results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 md:px-8 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/60 text-gray-700 hover:bg-white/80 border-2 border-purple-200/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => handleVideoClick(video)}
            >
              {/* Card Container */}
              <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                {/* Thumbnail Image */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Small Blinking Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="relative">
                    <div className="animate-pulse">
                      <div className="bg-white rounded-full p-3 shadow-lg flex items-center justify-center">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-purple-600 fill-purple-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full z-30">
                  <span className="text-white text-xs md:text-sm font-bold">{video.category}</span>
                </div>

                {/* Title Badge - Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 backdrop-blur-md rounded-xl px-4 py-3 border border-white/30">
                    <p className="text-white text-sm md:text-base font-bold drop-shadow-lg line-clamp-2">
                      {video.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg md:text-xl">No videos in this category yet.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl bg-black rounded-2xl shadow-2xl overflow-hidden border border-purple-500/30 aspect-video">
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close video"
              className="absolute top-4 right-4 z-10 bg-purple-500/50 hover:bg-purple-500/70 rounded-full p-2 transition-all duration-300"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            {/* Mute Button */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              aria-label="Mute video"
              className="absolute bottom-4 right-4 z-10 bg-purple-500/50 hover:bg-purple-500/70 rounded-full p-2 transition-all duration-300"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              )}
            </button>

            {/* Video Title */}
            <div className="absolute top-4 left-4 z-10">
              <h3 className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
                {selectedVideo.title}
              </h3>
            </div>

            {/* Iframe */}
            <iframe
              className="w-full h-full"
              src={`${selectedVideo.url}?autoplay=1&modestbranding=1&rel=0&mute=${
                isMuted ? 1 : 0
              }`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blinking {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }
        .animate-pulse {
          animation: blinking 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
