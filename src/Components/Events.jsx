import { useMemo, useState } from "react";

/**
 * FIRST ECHO — Events
 * -------------------------------------------------
 * Filterable gallery of past work. Categories are driven
 * entirely by the EVENTS array below — add a new category
 * to any event's `category` field and it will automatically
 * show up as a filter pill, no extra wiring needed.
 *
 * Swap the placeholder `image` paths for your real photos.
 */

const EVENTS = [
  {
    title: "Annual day, tech campus",
    category: "Corporate",
    tags: ["Stage", "LED", "Speech audio"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Open-air live set",
    category: "Concerts",
    tags: ["Line array", "Moving heads"],
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Product launch, Whitefield",
    category: "Product launch",
    tags: ["Branding build", "AV"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Reception, palace lawn",
    category: "Weddings",
    tags: ["Ambient light", "DJ sound"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "College fest main stage",
    category: "Concerts",
    tags: ["Rig", "LED wall", "Crowd control"],
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sangeet night",
    category: "Weddings",
    tags: ["Dance floor lighting", "MC audio"],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Club night takeover",
    category: "Concerts",
    tags: ["DJ booth", "Laser", "Fog"],
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mehendi afternoon",
    category: "Weddings",
    tags: ["Decor light", "Live sound"],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Temple festival, main ground",
    category: "Traditional festivals",
    tags: ["PA line", "Flood light", "Stage"],
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Ganesh Chaturthi pandal",
    category: "Traditional festivals",
    tags: ["Decor light", "Sound"],
    image: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Board offsite, resort lawn",
    category: "Corporate",
    tags: ["AV", "Breakout audio"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Brand activation, mall atrium",
    category: "Product launch",
    tags: ["LED wall", "Truss branding"],
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Events() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(EVENTS.map((e) => e.category)));
    return ["All", ...unique];
  }, []);

  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? EVENTS : EVENTS.filter((e) => e.category === active)),
    [active]
  );

  return (
    <section id="events" className="bg-black px-4 py-16 text-white sm:px-6 md:px-16 md:py-24">
      <div className="mb-4 max-w-2xl">
        <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Anton', sans-serif" }}>
          Kinds of rooms we've filled.
        </h2>
        <p className="mt-4 text-white/60">
          Corporate floors, wedding lawns, festival grounds, concert stages — same crew, same standard.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-col gap-3 border-b border-white/10 pb-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 rounded-full border px-5 py-2 text-xs font-semibold tracking-wide transition ${
                  isActive
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-white/20 bg-transparent text-white/70 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            );
          })}
        </div>
        <p className="text-xs tracking-widest text-white/40">
          {filtered.length} {filtered.length === 1 ? "EVENT" : "EVENTS"}
        </p>
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {filtered.map((event, i) => (
          <EventCard key={event.title + i} event={event} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ event }) {
  return (
    <article
      className="group relative aspect-[4/5] overflow-hidden bg-neutral-900"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 94%, 94% 100%, 0 100%)" }}
    >
      <img
        src={event.image}
        alt={event.title}
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition group-hover:from-black/90" />

      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
        <p className="text-[10px] font-semibold tracking-wide text-red-500 sm:text-xs">{event.category}</p>
        <h3
          className="mt-1 text-sm leading-tight text-white sm:text-lg md:text-xl"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {event.title}
        </h3>
        <p className="mt-1 hidden text-xs text-white/50 sm:block">{event.tags.join(" · ")}</p>
      </div>
    </article>
  );
}