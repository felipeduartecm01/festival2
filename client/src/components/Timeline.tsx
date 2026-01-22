import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { timelineEvents } from "@/data/timeline";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = timelineEvents[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? timelineEvents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === timelineEvents.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-festival-purple/5 via-white to-festival-pink/5 overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-festival-purple mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NOSSA HISTÓRIA
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-festival-pink to-festival-purple mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desde 2011, o Festival Cristófoli evoluiu de um pequeno evento para um dos maiores festivais de rock da região. Acompanhe nossa jornada.
          </p>
        </div>

        {/* Main Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Navigation */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <button
              onClick={handlePrevious}
              className="p-4 rounded-full bg-gradient-to-br from-festival-purple to-festival-pink text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous year"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Center - Active Event Card */}
          <div className="lg:col-span-10">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-festival-purple/10 hover:shadow-3xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-br from-festival-purple/20 to-festival-pink/20">
                  <img
                    src={activeEvent.image}
                    alt={`Festival ${activeEvent.year}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-festival-pink to-festival-purple rounded-full blur-lg opacity-75"></div>
                      <span className="relative inline-block bg-gradient-to-r from-festival-pink to-festival-purple text-white px-6 py-3 rounded-full font-bold text-2xl">
                        {activeEvent.year}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-festival-pink via-festival-purple to-festival-pink"></div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50/50">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-festival-purple mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {activeEvent.title}
                    </h3>
                    <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg">
                      {activeEvent.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-festival-purple uppercase tracking-widest">✨ Destaques</p>
                      <ul className="space-y-3">
                        {activeEvent.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 group">
                            <span className="text-festival-pink font-bold text-lg mt-0.5 group-hover:scale-125 transition-transform">★</span>
                            <span className="group-hover:text-festival-purple transition-colors">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-gradient-to-br from-festival-pink to-festival-purple text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next year"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Timeline Navigation - Horizontal Line with Years */}
        <div className="mb-16">
          <div className="relative">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-festival-purple/20 via-festival-pink/40 to-festival-purple/20 transform -translate-y-1/2"></div>
            
            {/* Year Buttons */}
            <div className="relative flex justify-between gap-2 overflow-x-auto pb-4 px-2">
              {timelineEvents.map((event, idx) => (
                <button
                  key={event.year}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex-shrink-0 px-4 py-3 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
                    idx === activeIndex
                      ? "bg-gradient-to-r from-festival-pink to-festival-purple text-white scale-110 shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-festival-purple/50 hover:bg-gray-50"
                  }`}
                  aria-label={`Go to ${event.year}`}
                >
                  {event.year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center items-center gap-6">
          <div className="h-1 w-12 bg-festival-pink rounded-full"></div>
          <p className="text-center text-gray-600 font-semibold">
            <span className="text-2xl font-bold text-festival-purple">{activeIndex + 1}</span>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-2xl font-bold text-festival-purple">{timelineEvents.length}</span>
          </p>
          <div className="h-1 w-12 bg-festival-purple rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
