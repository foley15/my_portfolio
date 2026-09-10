import { useState, useEffect } from 'react';
import BentoCard from './bentoCard';
import { MapPin } from "lucide-react";

export default function LiveClockCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const formattedDate = time.toLocaleDateString([], {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <BentoCard colSpan="md:col-span-1" className="flex flex-col justify-between bg-gradient-to-br from-primary/5 via-transparent to-transparent">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <span>Location</span>
        <span className="flex items-center gap-1 text-primary">
          <MapPin className="h-3.5 w-3.5" />
          GMT / UTC
        </span>
      </div>

      <div className="my-6">
        <div className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          {formattedTime}
        </div>
        <p className="mt-1 text-xs font-medium text-muted-foreground">
          {formattedDate}
        </p>
      </div>

      <div className="text-xs text-muted-foreground">
        Based in <span className="font-semibold text-foreground">Remote / Worldwide</span>
      </div>
    </BentoCard>
  );
}