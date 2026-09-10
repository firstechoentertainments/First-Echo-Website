import BhartiyaLogo from "../assets/Clients/Bhartiya.png";
import GalleriaLogo from "../assets/Clients/Galleria.jpg";
import MallOfAsiaLogo from "../assets/Clients/Mall of Asia.jpg";

/**
 * FIRST ECHO — Brands
 * -------------------------------------------------
 * "People who trusted us" — infinite horizontal logo loop.
 *
 * Real client logos. Add more clients by dropping their file
 * into src/assets/Clients/, importing it above, and adding a
 * { name, logo } entry to BRANDS below.
 */

const BRANDS = [
  { name: "Bhartiya", logo: BhartiyaLogo },
  { name: "Galleria", logo: GalleriaLogo },
  { name: "Mall of Asia", logo: MallOfAsiaLogo },
];

export default function Brands() {
  const loop = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="border-y border-white/10 bg-black py-20">
      <h2
        className="mb-12 text-center text-3xl text-white md:text-5xl"
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        People who trusted us.
      </h2>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

        <div className="flex w-max items-center animate-marquee-left motion-reduce:animate-none">
          {loop.map((brand, i) => (
            <div
              key={brand.name + i}
              className="mx-8 flex h-14 w-40 shrink-0 items-center justify-center opacity-70 transition duration-300 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}