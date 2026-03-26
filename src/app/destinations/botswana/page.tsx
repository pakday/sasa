import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Botswana Safaris — Sasa Travel",
  description:
    "Experience Botswana at its finest. From the waterways of the Okavango Delta to the vast stillness of the Kalahari — untamed beauty, exceptional wildlife, and some of Africa's most exclusive safari experiences.",
};

/* ─── Journey Highlights ────────────────────────────────────────────── */
const highlights = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 110 10A5 5 0 0112 7z"
        />
      </svg>
    ),
    title: "Exceptional Wildlife",
    description:
      "Home to Africa's largest elephant population and an extraordinary density of predators — lions, leopards, cheetahs, and wild dogs.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "The Okavango Delta",
    description:
      "One of the world's most unique ecosystems — a vast inland river delta teeming with wildlife, navigated by traditional mokoro canoes.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Low-Impact Luxury",
    description:
      "Botswana's high-value, low-volume approach to tourism means exclusive access to pristine landscapes with beautifully designed camps.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Varied Landscapes",
    description:
      "From the lush floodplains of the Delta and Linyanti to the salt pans of Makgadikgadi and the solitude of the Kalahari.",
  },
];

/* ─── Trip Dates ────────────────────────────────────────────────────── */
const tripDates = [
  { label: "Available", date: "August 10 – 22, 2026", spots: "10 spots left" },
  {
    label: "Sold Out",
    date: "August 25 – September 6, 2026",
    spots: "Sold out",
    soldOut: true,
  },
  {
    label: "Available",
    date: "August 25 – September 6, 2027",
    spots: "Inquire for availability",
  },
];

/* ─── Gallery images ────────────────────────────────────────────────── */
const gallery = [
  { src: "/images/Botswana/16167.jpg", alt: "Botswana safari landscape" },
  { src: "/images/Botswana/8776.jpg", alt: "Wildlife in Botswana" },
  {
    src: "/images/Botswana/hyenas-laying-down-round.jpg",
    alt: "Hyenas at rest in Botswana",
  },
  { src: "/images/general/AdobeStock_140101064.jpeg", alt: "African savanna" },
  { src: "/images/general/AdobeStock_214680490.jpeg", alt: "African wildlife" },
  { src: "/images/general/AdobeStock_332073818.jpeg", alt: "Africa landscape" },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function BotswanaPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/images/Botswana/13828341_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-sasa-brown/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/85 via-sasa-brown/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sasa-brown/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 pt-16 w-full">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 mb-10"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="text-sasa-white/50 text-xs tracking-wide hover:text-sasa-white transition-colors"
            >
              Home
            </Link>
            <span className="text-sasa-white/30 text-xs">/</span>
            <Link
              href="/destinations"
              className="text-sasa-white/50 text-xs tracking-wide hover:text-sasa-white transition-colors"
            >
              Destinations
            </Link>
            <span className="text-sasa-white/30 text-xs">/</span>
            <span className="text-sasa-sec-green text-xs tracking-wide">
              Botswana
            </span>
          </nav>

          <p className="text-sasa-sec-green text-xs tracking-[0.35em] uppercase mb-5">
            Destination
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-sasa-white leading-[1.05] mb-6 max-w-3xl">
            Botswana
          </h1>
          <p className="text-sasa-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            Untamed beauty, exceptional wildlife, and some of Africa&apos;s most
            exclusive safari experiences.
          </p>
          <Link
            href="#get-in-touch"
            className="inline-block bg-sasa-green text-white text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-sasa-sec-green transition-colors duration-300"
          >
            Begin Your Journey
          </Link>
        </div>
      </section>

      {/* ── Intro / Why Botswana ─────────────────────────────────────── */}
      <section className="bg-sasa-brown py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sasa-sec-green text-xs tracking-[0.3em] uppercase mb-8">
            Experience Botswana at Its Finest
          </p>
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-sasa-white italic leading-relaxed">
            &ldquo;A rare sense of space, privacy, and quiet luxury — making it
            one of the most extraordinary safari destinations in Africa.&rdquo;
          </p>
          <div className="mt-10 w-14 h-px bg-sasa-sec-green mx-auto" />
          <p className="mt-10 text-sasa-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Botswana is a place for travelers looking for something truly
            special. Think remarkable wildlife, beautifully designed camps, and
            landscapes that shift from lush floodplains to salt pans and desert.
            It is wild, refined, and deeply memorable.
          </p>
        </div>
      </section>

      {/* ── Why Botswana — 4 Pillars ─────────────────────────────────── */}
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Why Botswana
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              What Makes It Unforgettable
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {highlights.map((h) => (
              <div key={h.title} className="flex flex-col">
                <div className="text-sasa-green mb-5">{h.icon}</div>
                <h3 className="font-serif text-xl text-sasa-brown mb-3">
                  {h.title}
                </h3>
                <p className="text-sasa-black/60 text-sm leading-relaxed">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width immersive divider ─────────────────────────────── */}
      <div className="relative h-[50vh] min-h-72 overflow-hidden">
        <Image
          src="/images/Botswana/8776.jpg"
          alt="Botswana landscape"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-sasa-brown/30" />
      </div>

      {/* ── Featured Journey ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Featured Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              13-Day Botswana Safari
            </h2>
            <p className="mt-4 text-sasa-black/60 text-base">
              Selinda, Okavango &amp; Makgadikgadi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Image */}
            <div className="relative h-80 lg:h-auto min-h-[420px]">
              <Image
                src="/images/Botswana/16167.jpg"
                alt="13-Day Botswana Safari"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="bg-sasa-brown px-8 py-14 md:px-12 md:py-16 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-sasa-white mb-6 leading-snug">
                  A beautifully curated journey through three of Botswana&apos;s
                  most iconic regions
                </h3>
                <p className="text-sasa-white/65 text-sm leading-relaxed mb-5">
                  From the remote beauty of Selinda to the wildlife-rich
                  Okavango Delta and the vast Makgadikgadi Pans, this itinerary
                  brings together exceptional guiding, stunning camps, and some
                  of Africa&apos;s most remarkable scenery.
                </p>
                <p className="text-sasa-white/65 text-sm leading-relaxed mb-8">
                  This is a safari that gives you the best of Botswana in one
                  seamless experience — rich wildlife, varied landscapes, quiet
                  luxury, and a true sense of being immersed in the wild.
                </p>

                {/* Why it stands out */}
                <div className="border border-sasa-sec-brown/40 p-5 mb-8">
                  <p className="text-sasa-sec-green text-xs tracking-[0.2em] uppercase mb-3">
                    Why This Journey Stands Out
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Three distinct regions in one itinerary",
                      "Rich wildlife across multiple ecosystems",
                      "Exceptional guiding from trusted local experts",
                      "Beautifully selected private camps",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sasa-white/70 text-sm"
                      >
                        <span className="text-sasa-sec-green mt-0.5 flex-shrink-0">
                          —
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dates */}
                <div className="mb-8">
                  <p className="text-sasa-sec-green text-xs tracking-[0.2em] uppercase mb-4">
                    Trip Dates
                  </p>
                  <div className="space-y-3">
                    {tripDates.map((d) => (
                      <div
                        key={d.date}
                        className="flex items-start justify-between gap-4"
                      >
                        <span className="text-sasa-white/70 text-sm">
                          {d.date}
                        </span>
                        <span
                          className={`text-xs tracking-wide flex-shrink-0 ${
                            d.soldOut
                              ? "text-sasa-sec-red"
                              : "text-sasa-sec-green"
                          }`}
                        >
                          {d.spots}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="#get-in-touch"
                className="inline-block bg-sasa-green text-white text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 hover:bg-sasa-sec-green transition-colors duration-300 text-center"
              >
                Inquire About This Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="bg-stone-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sasa-green text-xs tracking-[0.3em] uppercase mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-sasa-brown">
              A Glimpse of Botswana
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden ${
                  i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""
                }`}
                style={{ height: i === 0 ? "480px" : "236px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Botswana Video ─────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-80 overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/images/Botswana/15295468_1440_2560_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-sasa-brown/50" />
        <div className="relative z-10 text-center px-6">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-sasa-white italic leading-relaxed max-w-2xl mx-auto">
            &ldquo;Wild, refined, and deeply memorable.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Get in Touch ─────────────────────────────────────────────── */}
      <section id="get-in-touch" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left — copy */}
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-6">
                Begin Your Journey
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-sasa-brown mb-8 leading-tight">
                Connect with Our <br />
                Travel Designer
              </h2>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-6">
                Share a few details about what you&apos;re looking for and how
                you&apos;d prefer to connect, and we&apos;ll match you with the
                right person on our team.
              </p>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-10">
                Whether you&apos;re ready to plan now or simply exploring the
                possibility, we&apos;d love to hear from you.
              </p>

              {/* Address */}
              <div className="border-l-2 border-sasa-sec-green pl-5">
                <p className="text-sasa-sec-brown text-xs tracking-[0.2em] uppercase mb-2">
                  Our Office
                </p>
                <address className="not-italic text-sasa-black/60 text-sm leading-relaxed">
                  <p>8424 Santa Monica Blvd</p>
                  <p>Los Angeles, CA 90069</p>
                  <p>United States</p>
                </address>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── More Destinations ────────────────────────────────────────── */}
      <section className="bg-stone-50 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sasa-green text-xs tracking-[0.3em] uppercase mb-4">
              Continue Exploring
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-sasa-brown">
              More Destinations in Africa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
            {[
              {
                name: "Kenya",
                sub: "Maasai Mara & Coast",
                image: "/images/general/AdobeStock_51767739.jpeg",
                href: "/destinations/kenya",
              },
              {
                name: "Rwanda",
                sub: "Gorillas & Culture",
                image: "/images/general/AdobeStock_686054056.jpeg",
                href: "/destinations/rwanda",
              },
              {
                name: "Zimbabwe",
                sub: "Victoria Falls & Hwange",
                image: "/images/general/AdobeStock_332073818.jpeg",
                href: "/destinations/zimbabwe",
              },
            ].map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative h-64 overflow-hidden block"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-sasa-brown/50 group-hover:bg-sasa-brown/65 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-2xl text-sasa-white mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-sasa-white/60 text-xs tracking-wide">
                    {dest.sub}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/destinations"
              className="inline-block border border-sasa-brown/30 text-sasa-brown text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-sasa-green hover:text-sasa-green transition-colors duration-300"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
