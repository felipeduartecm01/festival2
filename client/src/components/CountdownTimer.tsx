import { useEffect, useState } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Festival date: September 19, 2026, 12:00 PM (noon) - using UTC
      const festivalDate = new Date('2026-09-19T12:00:00Z').getTime();
      const now = new Date().getTime();
      const difference = festivalDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Days */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#FFD700] to-[#FF1493] rounded-lg p-6 md:p-8 shadow-2xl min-h-[120px] md:min-h-[150px] flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              {String(timeRemaining.days).padStart(2, '0')}
            </div>
          </div>
          <p className="text-festival-purple font-bold text-sm md:text-base mt-3">DIAS</p>
        </div>

        {/* Hours */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#FF1493] to-[#4B1B7F] rounded-lg p-6 md:p-8 shadow-2xl min-h-[120px] md:min-h-[150px] flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              {String(timeRemaining.hours).padStart(2, '0')}
            </div>
          </div>
          <p className="text-festival-purple font-bold text-sm md:text-base mt-3">HORAS</p>
        </div>

        {/* Minutes */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#4B1B7F] to-[#FFD700] rounded-lg p-6 md:p-8 shadow-2xl min-h-[120px] md:min-h-[150px] flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              {String(timeRemaining.minutes).padStart(2, '0')}
            </div>
          </div>
          <p className="text-festival-purple font-bold text-sm md:text-base mt-3">MINUTOS</p>
        </div>

        {/* Seconds */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[#FFD700] to-[#FF1493] rounded-lg p-6 md:p-8 shadow-2xl min-h-[120px] md:min-h-[150px] flex items-center justify-center">
            <div className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
              {String(timeRemaining.seconds).padStart(2, '0')}
            </div>
          </div>
          <p className="text-festival-purple font-bold text-sm md:text-base mt-3">SEGUNDOS</p>
        </div>
      </div>

      {/* Event Details */}
      <div className="text-center mt-8 bg-white rounded-lg p-6 md:p-8 shadow-lg border-2 border-festival-purple">
        <p className="text-festival-purple font-bold text-lg md:text-xl mb-2">
          📅 19 DE SETEMBRO DE 2026
        </p>
        <p className="text-festival-pink font-bold text-lg md:text-xl">
          📍 MOURÃO GARDEN - CAMPO MOURÃO, PR
        </p>
      </div>
    </div>
  );
}
