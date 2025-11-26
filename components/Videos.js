"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Card } from "@/components/ui/Card";

const videos = [
  {
    id: 1,
    title: "ZeeTV | Business Story",
    thumbnail: "https://img.youtube.com/vi/5qap5aO4i9A/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/5qap5aO4i9A",
  },
  {
    id: 2,
    title: "CNBC Interview",
    thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/jfKfPfyJRdk",
  },
  {
    id: 3,
    title: "Startup India Feature",
    thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
  {
    id: 4,
    title: "Lofi Chill Beats",
    thumbnail: "https://img.youtube.com/vi/5yx6BWlEVcY/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/5yx6BWlEVcY",
  },
  {
    id: 5,
    title: "Business Insights",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

export default function VideoCarousel() {
  const [index, setIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [width, setWidth] = useState(1200); // default fallback

  // ✅ Capture screen width client-side only
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Determine spacing based on actual window width
  const baseDist = width < 640 ? 120 : width < 1024 ? 180 : 230;

  const nextVideo = () => {
    setIndex((prev) => (prev + 1) % videos.length);
    setPlayingVideoId(null);
  };

  const prevVideo = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setPlayingVideoId(null);
  };

  const playVideo = (id) => setPlayingVideoId(id);

  return (
    <section className="text-center pt-10 pb-24 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Learn. <span className="text-orange-500">Get Inspired.</span> Stay Updated.
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto text-sm md:text-base">
        Dive Into Our Curated Video Library Featuring Powerful Insights And Real Founder Stories.
      </p>

      <div className="relative flex justify-center items-center w-full">
        <div className="relative w-full max-w-[900px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex justify-center items-center">

          <AnimatePresence initial={false}>
            {videos.map((video, i) => {
              const pos = (i - index + videos.length) % videos.length;
              const center = Math.floor(videos.length / 2);
              const adjusted = pos > center ? pos - videos.length : pos;

              const x = adjusted * (baseDist - Math.abs(adjusted) * 30);
              const scale = 1 - Math.abs(adjusted) * 0.15;
              const opacity = 1 - Math.abs(adjusted) * 0.4;
              const zIndex = 50 - Math.abs(adjusted);

              return (
                <motion.div
                  key={video.id}
                  className="absolute rounded-xl sm:rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                  style={{ zIndex }}
                  animate={{ x, scale, opacity }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Card className="relative w-[260px] sm:w-[380px] md:w-[540px] lg:w-[700px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-black">
                    {playingVideoId === video.id ? (
                      <iframe
                        className="w-full h-full"
                        src={`${video.url}?autoplay=1`}
                        title={video.title}
                        allow="autoplay; fullscreen; picture-in-picture"
                      />
                    ) : (
                      <>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition"
                        />
                        <div
                          onClick={() => playVideo(video.id)}
                          className="absolute inset-0 flex justify-center items-center"
                        >
                          <div className="bg-white p-3 sm:p-4 rounded-full shadow-md">
                            <Play className="text-orange-500 w-5 h-5 sm:w-7 sm:h-7" />
                          </div>
                        </div>
                      </>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-[-70px] sm:bottom-[-80px] left-1/2 -translate-x-1/2 flex items-center gap-3">
          <button
            onClick={prevVideo}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer hover:scale-110 transition"
          >
            <ChevronLeft size={18} />
          </button>

          {videos.map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === index ? "bg-orange-500" : "bg-gray-300"}`}
            />
          ))}

          <button
            onClick={nextVideo}
            className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 cursor-pointer hover:scale-110 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
