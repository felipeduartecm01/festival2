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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-festival-purple mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            NOSSA HISTÓRIA
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desde 2011, o Festival Cristófoli evoluiu de um pequeno evento para um dos maiores festivais de rock da região. Acompanhe nossa jornada.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Navigation */}
          <div className="flex justify-center lg:justify-end">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-festival-purple text-white hover:bg-festival-pink transition-all duration-300 hover:scale-110"
              aria-label="Previous year"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Center - Active Event */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-festival-purple/10">
            {/* Image */}
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-festival-purple/20 to-festival-pink/20">
              <img
                src={activeEvent.image}
                alt={`Festival ${activeEvent.year}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block bg-festival-pink text-white px-4 py-2 rounded-full font-bold text-lg">
                  {activeEvent.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-festival-purple mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                {activeEvent.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {activeEvent.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                <p className="text-sm font-semibold text-festival-purple uppercase tracking-wide">Destaques</p>
                <ul className="space-y-2">
                  {activeEvent.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-festival-pink font-bold mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-festival-pink text-white hover:bg-festival-purple transition-all duration-300 hover:scale-110"
              aria-label="Next year"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Timeline Dots */}
        <div className="mt-12 flex justify-center gap-2 flex-wrap">
          {timelineEvents.map((event, idx) => (
            <button
              key={event.year}
              onClick={() => setActiveIndex(idx)}
              className={`w-10 h-10 rounded-full font-bold transition-all duration-300 ${
                idx === activeIndex
                  ? "bg-festival-purple text-white scale-125"
                  : "bg-gray-300 text-gray-700 hover:bg-festival-purple/50"
              }`}
              aria-label={`Go to ${event.year}`}
            >
              {event.year.toString().slice(-2)}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <span className="font-bold text-festival-purple">{activeIndex + 1}</span> de{" "}
            <span className="font-bold text-festival-purple">{timelineEvents.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
