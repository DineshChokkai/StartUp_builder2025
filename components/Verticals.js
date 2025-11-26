"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const verticals = [
  {
    id: 1,
    title: "Ideabaaz TV Show",
    description: "Feature your startup to a national audience",
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    title: "Ideabaaz Platform",
    description: "A digital space to connect with founders, investors, and mentors",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    title: "Ideabaaz Dangal",
    description: "India's Ultimate Startup Ecosystem for Startups, investors, and Trainers.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    title: "Ideabaaz Expo",
    description: "India's premier competitive Idea Stage pitching platform",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 5,
    title: "Incubation Centre",
    description: "Structured incubation journeys with funding and mentoring",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 6,
    title: "Ideabaaz OTT",
    description: "A media platform broadcasting startup stories and journeys",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=60"
  }
];

export default function CoreVerticals() {
  const [hoveredId, setHoveredId] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const next = () => {
    setMobileIndex((prev) => (prev + 1) % verticals.length);
  };

  const prev = () => {
    setMobileIndex((prev) => (prev - 1 + verticals.length) % verticals.length);
  };

  return (
    <div className="w-full bg-gradient-to-b from-amber-50 via-orange-100 to-rose-50 py-18 px-4">
      <div className="mx-auto max-w-[1650px] bg-white rounded-[40px] shadow-lg px-6 sm:px-10 md:px-16 lg:px-20 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#242243] mb-4">
            Explore Our{" "}
            <span className="text-[#FF7700] relative inline-block">
              Verticles
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,15 Q35,0 100,5"
                  stroke="#FF7700"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg lg:text-xl mt-4">
            We nurture innovation across diverse domains.
          </p>
        </div>

        {/* Tablet Grid (No Hover Effects) */}
        <div className="hidden sm:grid md:grid-cols-2 lg:hidden gap-6">
          {verticals.map((v) => (
            <div
              key={v.id}
              className="bg-gradient-to-br from-[#FFF8F0] to-[#FFE6CC] rounded-[25px] overflow-hidden shadow-lg"
            >
              <img
                src={v.img}
                alt={v.title}
                className="w-full h-48 object-cover rounded-t-[25px]"
              />
              <div className="p-5">
                <h3 className="text-[#FF7700] font-bold text-xl">
                  {v.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Hover Layout */}
        <div className="hidden lg:flex w-full justify-center items-stretch gap-4 min-h-[300px]">
          {verticals.map((vertical) => {
            const isHovered = hoveredId === vertical.id;
            const hasHovered = hoveredId !== null;
            const isOther = hasHovered && !isHovered;

            return (
             <div
  key={vertical.id}
  onMouseEnter={() => setHoveredId(vertical.id)}
  onMouseLeave={() => setHoveredId(null)}
  className="relative shrink-0 bg-gradient-to-br from-[#FFF8F0] to-[#FFE6CC] rounded-[25px] overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer flex flex-col transition-all duration-500 ease-in-out"
  style={{
    width: isHovered ? "420px" : isOther ? "180px" : "240px",
    opacity: isOther ? 0.6 : 1,
    transform: isHovered ? "scale(1.03)" : "scale(1)",
  }}
>

               <div
  className="relative w-full overflow-hidden transition-all duration-500 ease-in-out"
  style={{ height: isHovered ? "240px" : "200px" }}
>

                  <img
                    src={vertical.img}
                    alt={vertical.title}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      transform: isHovered ? "scale(1.05)" : "scale(1)"
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#FF7700] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {String(vertical.id).padStart(2, "0")}
                  </div>
                </div>

                <div
                  className="flex-1 p-4 flex flex-col justify-center transition-all duration-500"
                  style={{ opacity: isOther ? 0.5 : 1 }}
                >
                  <h3
                    className="font-bold text-[#FF7700] mb-2 leading-tight transition-all duration-500"
                    style={{
  fontSize: isHovered ? "1.5rem" : isOther ? "0.9rem" : "1.1rem",
  transition: "all 0.5s ease",
}}

                  >
                    {vertical.title}
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed transition-all duration-500 overflow-hidden"
                    style={{
                      fontSize: isHovered ? "1rem" : isOther ? "0.75rem" : "0.875rem",
                      maxHeight: isHovered ? "200px" : isOther ? "40px" : "66px"
                    }}
                  >
                    {vertical.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden relative w-full flex flex-col items-center mt-4">
          <div className="bg-gradient-to-br from-[#FFF8F0] to-[#FFE6CC] rounded-[25px] overflow-hidden shadow-xl w-full max-w-xs transition-all duration-500">
            <img
              src={verticals[mobileIndex].img}
              alt={verticals[mobileIndex].title}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-[#FF7700] font-bold text-lg mb-2">
                {verticals[mobileIndex].title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {verticals[mobileIndex].description}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-5">
            <button
              onClick={prev}
              className="p-3 bg-white border-2 border-[#FF7700] rounded-full shadow-md hover:bg-[#FF7700] hover:text-white transition-all"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {verticals.map((_, idx) => (
                <div
                  key={idx}
                  className={`rounded-full transition-all ${
                    idx === mobileIndex ? "w-6 h-2 bg-[#FF7700]" : "w-2 h-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 bg-white border-2 border-[#FF7700] rounded-full shadow-md hover:bg-[#FF7700] hover:text-white transition-all"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
