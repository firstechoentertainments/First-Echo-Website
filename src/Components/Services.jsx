import { useState } from "react";

/**
 * FIRST ECHO — Services
 * -------------------------------------------------
 * Each top-level category (Stage, Lights, Sound...) expands
 * to reveal the specific items under it. Add/remove items
 * freely — the tag list wraps automatically, no layout
 * changes needed.
 */

const SERVICES = [
  {
    category: "Stage",
    blurb: "Decks, trussing and backdrops built to the ground plan.",
    items: ["Modular decking", "Trussing & rigging", "Backdrops", "Ramps & steps", "Stage skirting"],
  },
  {
    category: "Lights",
    blurb: "From a single wash to a full pixel-mapped rig.",
    items: ["Moving heads", "Wash lights", "Par cans", "String & fairy lights", "Uplighting", "Followspots"],
  },
  {
    category: "Sound",
    blurb: "Line array to lapel mic, tuned for the room.",
    items: ["Line array systems", "Monitors", "Wireless mics", "Mixing console", "DJ sound systems"],
  },
  {
    category: "Band & DJ",
    blurb: "Talent and booth setup, booked and run end to end.",
    items: ["Live bands", "DJ booking", "DJ booth & console", "MC / anchor"],
  },
  {
    category: "Decoration",
    blurb: "Themed builds, floral and fabric work.",
    items: ["Floral decor", "Fabric draping", "Themed backdrops", "Balloon decor", "Entrance arches"],
  },
  {
    category: "Tents & Seating",
    blurb: "Cover and comfort for any headcount.",
    items: ["German hangar tents", "Canopy tents", "Chairs", "Sofas & lounge sets", "Banquet tables"],
  },
  {
    category: "Power & Rigging",
    blurb: "The unglamorous part that keeps everything else running.",
    items: ["Generators", "Power distribution", "Safe overhead rigging", "Cabling"],
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="bg-neutral-950 px-6 py-24 text-white md:px-16">
      <div className="mb-14 max-w-2xl">
        <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Anton', sans-serif" }}>
          Everything under one crew.
        </h2>
        <p className="mt-4 text-white/60">
          Tap a category to see what's inside it. Mix and match — most events use five or six of these together.
        </p>
      </div>

      <div className="border-t border-white/10">
        {SERVICES.map((service, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={service.category} className="border-b border-white/10">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition hover:bg-white/[0.03] md:py-8"
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-sm text-white/30 md:text-base">{String(i + 1).padStart(2, "0")}</span>
                  <span
                    className={`text-2xl transition-colors md:text-4xl ${isOpen ? "text-red-500" : "text-white"}`}
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {service.category}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden max-w-[16rem] text-sm text-white/40 md:block">{service.blurb}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-red-500 text-red-500" : "text-white/60"
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <p className="mb-4 max-w-md text-sm text-white/40 md:hidden">{service.blurb}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="border border-white/15 px-4 py-2 text-sm text-white/80"
                        style={{ clipPath: "polygon(6% 0, 100% 0, 94% 100%, 0 100%)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}