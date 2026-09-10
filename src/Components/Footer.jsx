import { Mail, Phone, MapPin } from "lucide-react";

/**
 * FIRST ECHO — Footer
 */

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Events", href: "#events" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const PHONE = "+91 9036996862";
const EMAIL = "firstechoentertainments@gmail.com";
const ADDRESS = "Bangalore, India";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      {/* Main Footer */}
      <div className="grid grid-cols-1 gap-14 px-6 py-16 md:grid-cols-[2fr_0.8fr_1.2fr] md:px-16 lg:px-20">

        {/* Big FIRST ECHO Wordmark */}
        <div className="flex items-start overflow-hidden">
          <p
            className="select-none whitespace-nowrap text-[11vw] leading-[0.85] tracking-[-0.025em] text-white/[0.095]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            FIRST ECHO
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="mb-5 text-sm font-semibold tracking-wide text-white/40">
            QUICK LINKS
          </p>

          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-white/70 transition hover:text-red-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <p className="mb-5 text-sm font-semibold tracking-wide text-white/40">
            CONTACT
          </p>

          <ul className="space-y-4 text-sm">

            <li>
              <a
                href={`tel:${PHONE.replace(/-/g, "")}`}
                className="flex items-center gap-3 text-white/70 transition hover:text-red-500"
              >
                <Phone size={17} className="shrink-0 text-red-600" />
                {PHONE}
              </a>
            </li>

            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-white/70 transition hover:text-red-500"
              >
                <Mail size={17} className="shrink-0 text-red-600" />
                <span className="break-all">{EMAIL}</span>
              </a>
            </li>

            <li className="flex items-center gap-3 text-white/50">
              <MapPin size={17} className="shrink-0 text-red-600" />
              {ADDRESS}
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-6 text-xs text-white/40 md:flex-row md:items-center md:justify-between md:px-16 lg:px-20">
        <p>
          © {new Date().getFullYear()} First Echo. All rights reserved.
        </p>

        <p>Bangalore, India</p>
      </div>

    </footer>
  );
}