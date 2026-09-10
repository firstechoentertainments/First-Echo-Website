import { useEffect, useRef, useState } from "react";

/**
 * FIRST ECHO — Stats
 * -------------------------------------------------
 * Numbers count up once when the strip scrolls into view
 * (IntersectionObserver, no animation library needed).
 * Edit the STATS array — value/suffix/label per stat.
 */

const STATS = [
  { value: 500, suffix: "+", label: "Events produced" },
  { value: 10, suffix: "+", label: "Years running" },
  { value: 50, suffix: "k+", label: "Guests hosted" },
  { value: 25, suffix: "+", label: "Cities covered" },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="border-y border-[#FEFEFE]/10 bg-black px-6 py-16 text-[#FEFEFE] md:px-16 md:py-20">
      <div className="grid grid-cols-2 divide-x divide-y divide-[#FEFEFE]/10 border border-[#FEFEFE]/10 md:grid-cols-4 md:divide-y-0">
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ stat, inView }) {
  const count = useCountUp(stat.value, inView, 1500);

  return (
    <div className="flex flex-col items-center justify-center gap-2 px-4 py-10 text-center">
      <p className="text-4xl text-[#DB0100] sm:text-5xl md:text-6xl" style={{ fontFamily: "'Anton', sans-serif" }}>
        {count}
        {stat.suffix}
      </p>
      <p className="text-xs uppercase tracking-widest text-[#FEFEFE]/50 sm:text-sm">{stat.label}</p>
    </div>
  );
}

function useCountUp(target, start, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // ease-out cubic — fast start, gentle settle on the final number
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
}