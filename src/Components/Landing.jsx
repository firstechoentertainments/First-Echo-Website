
import heroVideo from "../assets/hero.webm";

const MARQUEE_WORDS = ["LIGHTS", "SOUND", "STAGE", "RIGGING", "LED", "DJ", "VISUALS", "POWER", "TRUSS", "CREW"];
 
export default function Landing() {
  return (
    <section className="relative w-full bg-black text-white">
      {/* ---------------- HERO ---------------- */}
      <div className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
 
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 md:px-16">
          <p className="mb-4 text-sm tracking-wide text-red-500">Bangalore, India</p>
          <h1
            className="max-w-4xl text-5xl leading-[0.95] text-white md:text-8xl"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            EVENTS THAT{" "}
            <span
              className="italic text-red-600"
              style={{ transform: "skewX(-8deg)", display: "inline-block" }}
            >
              ECHO.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base text-white/70 md:text-lg">
            Sound, lighting and stage production, run by one crew from first brief to last load-out.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-red-600 px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-red-500"
              style={{ clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0 100%)" }}
            >
              Get a quote
            </a>
            <a
              href="#services"
              className="border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:border-white"
              style={{ clipPath: "polygon(4% 0, 100% 0, 96% 100%, 0 100%)" }}
            >
              See what we do
            </a>
          </div>
        </div>
      </div>
 
      {/* ---------------- FULL MARQUEE ---------------- */}
      <div className="relative overflow-hidden border-y-4 border-white bg-red-600 py-2 md:py-4">
        <MarqueeRow words={MARQUEE_WORDS} direction="left" />
      </div>
      <div className="relative overflow-hidden border-b-4 border-white bg-black py-2 md:py-4">
        <MarqueeRow words={MARQUEE_WORDS} direction="right" outline />
      </div>
    </section>
  );
}
 
/* ---------------- Sub-component ---------------- */
 
function MarqueeRow({ words, direction = "left", outline = false }) {
  // Duplicate the word list so the loop has no visible seam.
  const loop = [...words, ...words];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
 
  return (
    <div className={`flex w-max whitespace-nowrap ${animClass} motion-reduce:animate-none`}>
      {loop.map((word, i) => (
        <span
          key={i}
          className={`mx-8 flex items-center text-3xl md:text-5xl ${
            outline ? "text-transparent" : "text-black"
          }`}
          style={{
            fontFamily: "'Anton', sans-serif",
            WebkitTextStroke: outline ? "1.5px white" : undefined,
          }}
        >
          {word}
          <span className={`ml-8 text-xl ${outline ? "text-red-600" : "text-black/50"}`}>/</span>
        </span>
      ))}
    </div>
  );
}
 