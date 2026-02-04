import { useEffect, useState } from 'react';
import { useCountdown } from '@/hooks/useCountdown';

interface CountdownDisplayProps {
  targetDate: Date;
  className?: string;
}

export function CountdownDisplay({ targetDate, className = '' }: CountdownDisplayProps) {
  const countdown = useCountdown(targetDate);
  const [prevValues, setPrevValues] = useState({
    days: countdown.days,
    hours: countdown.hours,
    minutes: countdown.minutes,
    seconds: countdown.seconds,
  });
  const [tickingDigits, setTickingDigits] = useState<Set<string>>(new Set());

  useEffect(() => {
    const newTicking = new Set<string>();

    if (prevValues.days !== countdown.days) newTicking.add('days');
    if (prevValues.hours !== countdown.hours) newTicking.add('hours');
    if (prevValues.minutes !== countdown.minutes) newTicking.add('minutes');
    if (prevValues.seconds !== countdown.seconds) newTicking.add('seconds');

    setTickingDigits(newTicking);
    setPrevValues({
      days: countdown.days,
      hours: countdown.hours,
      minutes: countdown.minutes,
      seconds: countdown.seconds,
    });

    // Remove animation class after animation completes
    const timer = setTimeout(() => setTickingDigits(new Set()), 300);
    return () => clearTimeout(timer);
  }, [countdown.days, countdown.hours, countdown.minutes, countdown.seconds]);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Status Text */}
      <p className="text-festival-yellow text-sm md:text-base font-bold tracking-widest mb-8 text-center countdown-status">
        {countdown.statusText}
      </p>

      {/* Countdown Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Days */}
        <div className="bg-gradient-to-br from-festival-yellow/20 to-festival-pink/20 rounded-2xl px-4 md:px-6 py-6 text-center border border-festival-yellow/30 hover:border-festival-yellow/60 transition-all hover:scale-105">
          <p className={`text-3xl md:text-5xl font-black text-festival-yellow countdown-digit ${tickingDigits.has('days') ? 'tick' : ''}`} aria-label="Dias">
            {countdown.days}
          </p>
          <p className="text-xs md:text-sm font-bold text-white/70 mt-3 tracking-widest">DIAS</p>
        </div>

        {/* Hours */}
        <div className="bg-gradient-to-br from-festival-purple/20 to-festival-pink/20 rounded-2xl px-4 md:px-6 py-6 text-center border border-festival-purple/30 hover:border-festival-purple/60 transition-all hover:scale-105">
          <p className={`text-3xl md:text-5xl font-black text-festival-purple countdown-digit ${tickingDigits.has('hours') ? 'tick' : ''}`} aria-label="Horas">
            {countdown.hours}
          </p>
          <p className="text-xs md:text-sm font-bold text-white/70 mt-3 tracking-widest">HORAS</p>
        </div>

        {/* Minutes */}
        <div className="bg-gradient-to-br from-festival-purple/20 to-festival-yellow/20 rounded-2xl px-4 md:px-6 py-6 text-center border border-festival-purple/30 hover:border-festival-purple/60 transition-all hover:scale-105">
          <p className={`text-3xl md:text-5xl font-black text-festival-purple countdown-digit ${tickingDigits.has('minutes') ? 'tick' : ''}`} aria-label="Minutos">
            {countdown.minutes}
          </p>
          <p className="text-xs md:text-sm font-bold text-white/70 mt-3 tracking-widest">MINUTOS</p>
        </div>

        {/* Seconds */}
        <div className="bg-gradient-to-br from-festival-pink/20 to-festival-yellow/20 rounded-2xl px-4 md:px-6 py-6 text-center border border-festival-pink/30 hover:border-festival-pink/60 transition-all hover:scale-105">
          <p className={`text-3xl md:text-5xl font-black text-festival-pink countdown-digit ${tickingDigits.has('seconds') ? 'tick' : ''}`} aria-label="Segundos">
            {countdown.seconds}
          </p>
          <p className="text-xs md:text-sm font-bold text-white/70 mt-3 tracking-widest">SEGUNDOS</p>
        </div>
      </div>

      {/* Event Info */}
      <div className="border-t border-white/20 pt-6 text-center">
        <p className="text-festival-yellow font-bold mb-2 tracking-widest">📍 19 DE SETEMBRO DE 2026</p>
        <p className="text-white/80 font-semibold">MOURÃO GARDEN - CAMPO MOURÃO, PR</p>
      </div>
    </div>
  );
}
