import { useEffect, useState } from "react";

import img1 from "../assets/Gallery/1.JPG";
import img2 from "../assets/Gallery/2.png";
import img3 from "../assets/Gallery/3.avif";
import img4 from "../assets/Gallery/4.jpg";
import img5 from "../assets/Gallery/5.jpg";
import img6 from "../assets/Gallery/6.jpg";
import img7 from "../assets/Gallery/7.jpg";
import img8 from "../assets/Gallery/8.jpg";


const items = [
  { id: "1", img: img1, url: "#gallery" },
  { id: "2", img: img2, url: "#gallery" },
  { id: "3", img: img3, url: "#gallery" },
  { id: "4", img: img4, url: "#gallery" },
  { id: "5", img: img5, url: "#gallery" },
  { id: "6", img: img6, url: "#gallery" },
  { id: "7", img: img7, url: "#gallery" },
  { id: "8", img: img8, url: "#gallery" },
  
];

function useIsMobile(breakpoint = "(max-width: 639px)") {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia(breakpoint).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(breakpoint);
    const handler = () => setIsMobile(mql.matches);
    handler();
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}

function Masonry({ items }) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-4">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className="mb-4 block break-inside-avoid overflow-hidden bg-neutral-900"
        >
          <img
            src={item.img}
            alt="Event moment"
            className="block h-auto w-full object-cover transition duration-500 hover:scale-105"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}

export default function Gallery() {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(false);

  const showLimited = isMobile && !expanded && items.length > 4;
  const visibleItems = showLimited ? items.slice(0, 4) : items;

  return (
    <section id="gallery" className="bg-neutral-950 px-6 py-24 text-white md:px-16">
      <div className="mb-14 max-w-2xl">
        <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Anton', sans-serif" }}>
          Moments from the floor.
        </h2>
        <p className="mt-4 text-white/60">A running record of stages, crowds and setups we've built.</p>
      </div>

      {/* No fixed-height wrapper — this masonry is normal document
          flow (CSS columns), it sizes itself to its content. */}
      <Masonry items={visibleItems} />

      {showLimited && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded(true)}
            className="border border-white/20 px-8 py-3 text-sm font-semibold tracking-wide text-white transition hover:border-red-600 hover:text-red-500"
            style={{ clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0 100%)" }}
          >
            See more
          </button>
        </div>
      )}
    </section>
  );
}