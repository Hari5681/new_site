"use client";

import { useEffect, useState } from "react";

type TimeUnit = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeSince = (targetDate: Date): TimeUnit => {
  const now = new Date();
  const difference = now.getTime() - targetDate.getTime();

  if (difference < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export function Countdown({ date }: { date: string }) {
  const [targetDate] = useState(new Date(date));
  const [timeSince, setTimeSince] = useState<TimeUnit | null>(null);

  useEffect(() => {
    // Run on client to avoid hydration issues
    setTimeSince(calculateTimeSince(targetDate));

    const interval = setInterval(() => {
      setTimeSince(calculateTimeSince(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeSince) {
    return (
        <div className="grid grid-cols-4 gap-4 text-center">
            <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-4xl font-bold">--</div>
                <div className="text-sm text-muted-foreground">Days</div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-4xl font-bold">--</div>
                <div className="text-sm text-muted-foreground">Hours</div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-4xl font-bold">--</div>
                <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
                <div className="text-4xl font-bold">--</div>
                <div className="text-sm text-muted-foreground">Seconds</div>
            </div>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 text-center font-body">
      <div className="bg-primary/20 p-4 rounded-lg shadow-inner">
        <div className="text-4xl md:text-5xl font-bold text-primary-foreground/80">{timeSince.days}</div>
        <div className="text-sm md:text-base text-muted-foreground">Days</div>
      </div>
      <div className="bg-primary/20 p-4 rounded-lg shadow-inner">
        <div className="text-4xl md:text-5xl font-bold text-primary-foreground/80">{timeSince.hours}</div>
        <div className="text-sm md:text-base text-muted-foreground">Hours</div>
      </div>
      <div className="bg-primary/20 p-4 rounded-lg shadow-inner">
        <div className="text-4xl md:text-5xl font-bold text-primary-foreground/80">{timeSince.minutes}</div>
        <div className="text-sm md:text-base text-muted-foreground">Minutes</div>
      </div>
      <div className="bg-primary/20 p-4 rounded-lg shadow-inner">
        <div className="text-4xl md:text-5xl font-bold text-primary-foreground/80">{timeSince.seconds}</div>
        <div className="text-sm md:text-base text-muted-foreground">Seconds</div>
      </div>
    </div>
  );
}