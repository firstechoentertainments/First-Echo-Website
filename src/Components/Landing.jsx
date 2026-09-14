import heroVideo from "../assets/hero.mp4";
import heroVideoWebm from "../assets/hero.webm";

const MARQUEE_WORDS = [
  "LIGHTS",
  "SOUND",
  "STAGE",
  "RIGGING",
  "LED",
  "DJ",
  "VISUALS",
  "LOUD",
  "POWER",
  "TRUSS",
  "CREW",
  "BANG",
];

export default function Landing() {
  return (
    <section
      id="home"
      className="relative w-full bg-black text-white scroll-mt-24"
    >
      {/* ---------------- HERO ---------------- */}
      <div className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <video
  className="absolute inset-0 h-full w-full object-cover"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
  <source src={heroVideoWebm} type="video/webm" />
  <source src={heroVideo} type="video/mp4" />
</video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 md:px-16">
          <p className="mb-4 text-sm tracking-wide text-red-500">
            Bangalore, India
          </p>

          <h1
            className="max-w-4xl text-5xl leading-[0.95] text-white md:text-8xl"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            EVENTS THAT{" "}
            <span
              className="italic text-red-600"
              style={{
                transform: "skewX(-8deg)",
                display: "inline-block",
              }}
            >
              ECHO.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base text-white/70 md:text-lg">
            Sound, lighting and stage production, run by one crew from first
            brief to last load-out.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-red-600 px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-red-500"
              style={{
                clipPath:
                  "polygon(4% 0, 100% 0, 96% 100%, 0 100%)",
              }}
            >
              Get a quote
            </a>

            <a
              href="#services"
              className="border border-white/30 px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:border-white"
              style={{
                clipPath:
                  "polygon(4% 0, 100% 0, 96% 100%, 0 100%)",
              }}
            >
              See what we do
            </a>
          </div>
        </div>

        {/* ---------------- LOWER BORDER MARQUEE ---------------- */}
        <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden border-4 border-white bg-black">
          <div className="py-2 md:py-3">
            <MarqueeRow
              words={MARQUEE_WORDS}
              direction="right"
              outline
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */

function MarqueeRow({
  words,
  direction = "left",
  outline = false,
}) {
  const loop = [...words, ...words];

  const animClass =
    direction === "left"
      ? "animate-marquee-left"
      : "animate-marquee-right";

  return (
    <div
      className={`flex w-max whitespace-nowrap ${animClass} motion-reduce:animate-none`}
    >
      {loop.map((word, i) => (
        <span
          key={i}
          className={`mx-5 flex items-center text-xl md:text-3xl ${
            outline ? "text-transparent" : "text-black"
          }`}
          style={{
            fontFamily: "'Anton', sans-serif",
            WebkitTextStroke: outline
              ? "1px white"
              : undefined,
          }}
        >
          {word}

          <span
            className={`ml-5 text-sm md:text-base ${
              outline
                ? "text-red-600"
                : "text-black/50"
            }`}
          >
            /
          </span>
        </span>
      ))}
    </div>
  );
}