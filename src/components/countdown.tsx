"use client";

import { useEffect, useState } from "react";

type TimeUnit = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeDifference = (targetDate: Date): { unit: TimeUnit, isFuture: boolean } => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  const isFuture = difference > 0;
  const absDifference = Math.abs(difference);

  const days = Math.floor(absDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (absDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((absDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((absDifference % (1000 * 60)) / 1000);

  return { unit: { days, hours, minutes, seconds }, isFuture };
};

export function Countdown({ date }: { date: string }) {
  const [targetDate] = useState(new Date(date));
  const [timeDifference, setTimeDifference] = useState<{ unit: TimeUnit, isFuture: boolean } | null>(null);

  useEffect(() => {
    // Run on client to avoid hydration issues
    setTimeDifference(calculateTimeDifference(targetDate));

    const interval = setInterval(() => {
      setTimeDifference(calculateTimeDifference(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeDifference) {
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

  const { unit: timeUnit } = timeDifference;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 text-center font-body">
      <div className="bg-primary/20 p-4 rounded-lg shadow-inner">
        <div className="text-4xl md:text-5xl font-bold text-primary-foreground/80">{timeUnit.days}</div>
        <div className="text-sm md:text-base text-muted-foreground">Days</div>
      </div>
      <div className="bg-primary/20 p-4 rounded-lg shadow-inner">
        <div className="text-4xl md:text-5xl font-bold text-primary-foreground/80">{timeUnit.hours}</div>
        <div className="text-sm md:text-base text-muted-foreground">Hours</div>
      </div>
      <div className="bg-primary/20 p-4 rounded-lg shadow-inner">
        <div className="text-4xl md:text-5xl font-bold text-primary-foreground/80">{timeUnit.minutes}</div>
        <div className="text-sm md:text-base text-muted-foreground">Minutes</div>
      </div>
      <div className="bg-primary/20 p-4 rounded-lg shadow-inner">
        <div className="text-4xl md:text-5xl font-bold text-primary-foreground/80">{timeUnit.seconds}</div>
        <div className="text-sm md:text-base text-muted-foreground">Seconds</div>
      </div>
    </div>
  );
}
