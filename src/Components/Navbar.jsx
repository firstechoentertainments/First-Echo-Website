import { useEffect, useState } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";
import logoAsset from "../assets/RED-WHITE.png";

/**
 * FIRST ECHO — Navbar
 * -------------------------------------------------
 * npm install lucide-react   (if not already installed)
 *
 * NOTE: lucide-react deprecated/removed its brand & social
 * icons (Instagram, Facebook, Twitter, etc.) — they're no
 * longer exported at all in recent versions, which is what
 * was causing the build to fail. Swapped it for a small
 * inline SVG (<InstagramIcon />) below, drawn in the same
 * stroke style as the Lucide icons so it still matches.
 *
 * - Transparent at the top of the page, swaps to solid black
 *   once you scroll past ~20px.
 * - Scroll-spy: tracks which section is currently under the
 *   navbar and highlights that link red + underlined.
 *
 * Each NAV_LINKS href must point to a UNIQUE section id that
 * actually exists in the DOM (e.g. Events section needs
 * id="events"), or the scroll-spy can't tell them apart.
 */

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Events", href: "#events" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact us", href: "#contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/firstecho.in";
const EMAIL = "firstechoentertainments@gmail.com";
const PHONE = "+91 9036996862";

// How far below the navbar a section's top edge can be and
// still count as "active" — roughly the navbar's own height.
const SCROLL_OFFSET = 96;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");

  useEffect(() => {
    const sectionIds = Array.from(new Set(NAV_LINKS.map((l) => l.href.slice(1))));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= SCROLL_OFFSET) {
          current = id;
        }
      }
      setActiveHref(`#${current}`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 z-[1000] w-full transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:grid md:grid-cols-3 md:px-16">
        {/* Logo — left */}
        <a href="#top" aria-label="First Echo home" className="flex items-center">
          <img src={logoAsset} alt="First Echo" className="h-9 w-auto md:h-10" />
        </a>

        {/* Nav links — centered, desktop only */}
        <nav aria-label="Primary" className="hidden justify-center md:flex">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeHref === link.href;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-lg font-medium tracking-wide underline-offset-4 transition ${
                      isActive ? "text-red-500 underline decoration-2" : "text-white/80 hover:text-red-500"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Icons — right, desktop only */}
        <div className="hidden items-center justify-end gap-4 md:flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/70 transition hover:text-red-500"
          >
            <InstagramIcon size={20} />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="text-white/70 transition hover:text-red-500">
            <Mail size={20} />
          </a>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} aria-label="Call" className="text-white/70 transition hover:text-red-500">
            <Phone size={20} />
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black transition-[max-height] duration-300 ease-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-base font-medium underline-offset-4 transition ${
                    isActive ? "text-red-500 underline decoration-2" : "text-white/80 hover:text-red-500"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-6 border-t border-white/10 px-6 py-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-red-500">
            <InstagramIcon size={20} />
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="text-white/70 hover:text-red-500">
            <Mail size={20} />
          </a>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} aria-label="Call" className="text-white/70 hover:text-red-500">
            <Phone size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

/**
 * Minimal Instagram glyph, drawn as an outline to match Lucide's
 * stroke-based icon style (round caps/joins, 2px stroke, 24x24 box).
 * No external package needed.
 */
function InstagramIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}