import { useState, useEffect } from 'react';

interface CountdownState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  statusText: string;
  isFinished: boolean;
}

export function useCountdown(targetDate: Date): CountdownState {
  const [countdown, setCountdown] = useState<CountdownState>({
    days: '238',
    hours: '18',
    minutes: '36',
    seconds: '00',
    statusText: 'Faltam para o festival começar',
    isFinished: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          statusText: 'É hoje. O festival já começou!',
          isFinished: true,
        });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (24 * 3600));
      const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      const daysStr = String(days);
      const hoursStr = String(hours).padStart(2, '0');
      const minutesStr = String(minutes).padStart(2, '0');
      const secondsStr = String(seconds).padStart(2, '0');

      let statusText = `Faltam ${days} ${days === 1 ? 'dia' : 'dias'} para o festival começar`;

      setCountdown({
        days: daysStr,
        hours: hoursStr,
        minutes: minutesStr,
        seconds: secondsStr,
        statusText,
        isFinished: false,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}
