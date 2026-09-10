import TiltedCard from "./TiltedCard";
import teamPhoto1 from "../assets/team/1.jpg";
import teamPhoto2 from "../assets/team/2.png";
import teamPhoto3 from "../assets/team/3.png";
import teamPhoto4 from "../assets/team/4.jpg";
import teamPhoto5 from "../assets/team/5.jpg";
import teamPhoto6 from "../assets/team/6.jpg";

/**
 * FIRST ECHO — Team
 * -------------------------------------------------
 * 1 per row on mobile, 2 on small tablets, 3 on desktop.
 *
 * The original version used a fixed containerWidth="280px"
 * on every card inside grid-cols-6 — on a phone that's 6
 * columns each demanding 280px (1680px total), so the grid
 * just overflowed and forced horizontal scroll. Fix: each
 * card now sizes to 100% of its own grid cell (wrapped in a
 * max-width div so it doesn't get too wide on a single-column
 * mobile layout) instead of a hardcoded pixel width.
 */

const TEAM = [
  { name: "Abel Biju", title: "Founder", photo: teamPhoto1 },
  { name: "Ojas", title: "COO", photo: teamPhoto2 },
  { name: "Tejas", title: "CHRO", photo: teamPhoto3 },
  { name: "Harish", title: "Marketing Director", photo: teamPhoto4 },
  { name: "Brunda", title: "CFO", photo: teamPhoto5 },
  { name: "Harish", title: "Tech", photo: teamPhoto6 },
];

export default function Team() {
  return (
    <section id="team" className="bg-black px-6 py-24 text-white md:px-16">
      <div className="mb-14 max-w-2xl">
        <h2 className="text-3xl md:text-5xl" style={{ fontFamily: "'Anton', sans-serif" }}>
          The people on console.
        </h2>

        <p className="mt-4 text-white/60">
          The same crew plans, builds and runs your event — no subcontracted floor staff.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-y-14 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
        {TEAM.map((member) => (
          <div key={member.name + member.title} className="w-full max-w-[300px]">
            <TiltedCard
              imageSrc={member.photo}
              altText={member.name}
              captionText={`${member.name} — ${member.title}`}
              containerHeight="360px"
              containerWidth="100%"
              imageHeight="360px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent
              overlayContent={
                <div
                  className="absolute bottom-0 left-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4"
                  style={{ width: "100%" }}
                >
                  <p className="text-lg text-white" style={{ fontFamily: "'Anton', sans-serif" }}>
                    {member.name}
                  </p>
                  <p className="text-sm text-red-500">{member.title}</p>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}