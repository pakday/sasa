import Link from "next/link";
import Image from "next/image";

const footerNav = [
  { name: "Destinations", href: "/destinations" },
  { name: "Curated Escapes", href: "/curated-escapes" },
  { name: "Immersion", href: "/immersion" },
  { name: "About Us", href: "/about" },
  { name: "Our Impact", href: "/our-impact" },
  { name: "Start Your Trip", href: "/start-your-trip" },
];

const destinations = [
  { name: "Botswana", href: "/destinations/botswana" },
  { name: "Kenya", href: "/destinations/kenya" },
  { name: "Rwanda", href: "/destinations/rwanda" },
  { name: "Tanzania", href: "/destinations/tanzania" },
  { name: "Zimbabwe", href: "/destinations/zimbabwe" },
  { name: "South Africa", href: "/destinations/south-africa" },
  { name: "Uganda", href: "/destinations/uganda" },
  { name: "Zambia", href: "/destinations/zambia" },
  { name: "Mozambique", href: "/destinations/mozambique" },
  { name: "Zanzibar", href: "/destinations/zanzibar" },
];

export default function Footer() {
  return (
    <footer className="bg-sasa-brown text-sasa-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo/5.png"
              alt="Sasa Travel"
              width={160}
              height={50}
              className="h-10 w-auto mb-6"
            />
            <p className="text-sasa-white/60 text-sm leading-relaxed max-w-xs">
              Experience Africa through the eyes of locals — personal journeys
              shaped by real connection, rich culture, and unforgettable
              wildlife.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sasa-sec-green text-xs tracking-[0.2em] uppercase mb-5 font-medium">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerNav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sasa-white/60 text-sm hover:text-sasa-sec-green transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sasa-sec-green text-xs tracking-[0.2em] uppercase mb-5 font-medium">
              Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((dest) => (
                <li key={dest.name}>
                  <Link
                    href={dest.href}
                    className="text-sasa-white/60 text-sm hover:text-sasa-sec-green transition-colors duration-300"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sasa-sec-green text-xs tracking-[0.2em] uppercase mb-5 font-medium">
              Find Us
            </h4>
            <address className="not-italic text-sasa-white/60 text-sm leading-relaxed space-y-1">
              <p>8424 Santa Monica Blvd</p>
              <p>Los Angeles, CA 90069</p>
              <p>United States</p>
            </address>
            <div className="mt-8">
              <Link
                href="/start-your-trip"
                className="inline-block border border-sasa-sec-green text-sasa-sec-green text-xs tracking-[0.15em] uppercase px-5 py-3 hover:bg-sasa-sec-green hover:text-sasa-brown transition-colors duration-300"
              >
                Begin the Conversation
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-sasa-sec-brown/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sasa-white/30 text-xs">
            © {new Date().getFullYear()} Sasa Travel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sasa-white/30 text-xs hover:text-sasa-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sasa-white/30 text-xs hover:text-sasa-white/60 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
