"use client";

import { useEffect, useState } from "react";

export default function Countdown() {

  const targetDate = new Date("April 11, 2026 10:30:00").getTime();

  const [timeLeft, setTimeLeft] = useState<any>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 via-blue-500 to-indigo-600 text-white text-center">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 font-fredoka tracking-tight">
        ⏳ Hurry! Limited Time Offer
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">

        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/15 backdrop-blur-xl p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-white/20 hover:scale-105 transition"
          >
            <p className="text-4xl md:text-5xl font-extrabold">
              {item.value || 0}
            </p>

            <p className="text-sm mt-2 uppercase tracking-wide text-white/80">
              {item.label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}