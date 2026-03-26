import Image from "next/image";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────── */

const destinations = [
  {
    name: "Botswana",
    sub: "Okavango Delta & Kalahari",
    image: "/images/Botswana/16167.jpg",
    href: "/destinations/botswana",
  },
  {
    name: "Kenya",
    sub: "Maasai Mara & Amboseli",
    image: "/images/general/AdobeStock_51767739.jpeg",
    href: "/destinations/kenya",
  },
  {
    name: "Rwanda",
    sub: "Gorilla Trekking & Akagera",
    image: "/images/general/AdobeStock_686054056.jpeg",
    href: "/destinations/rwanda",
  },
  {
    name: "Tanzania",
    sub: "Serengeti & Ngorongoro",
    image: "/images/general/AdobeStock_214680490.jpeg",
    href: "/destinations/tanzania",
  },
  {
    name: "Zimbabwe",
    sub: "Victoria Falls & Hwange",
    image: "/images/general/AdobeStock_332073818.jpeg",
    href: "/destinations/zimbabwe",
  },
  {
    name: "South Africa",
    sub: "Kruger & Cape Winelands",
    image: "/images/general/AdobeStock_312250474.jpeg",
    href: "/destinations/south-africa",
  },
];

const escapes = [
  {
    tag: "15 Days",
    tagColor: "bg-sasa-green",
    region: "East Africa",
    title: "The Best of East Africa",
    description:
      "Kenya, Rwanda & Tanzania over 15 unforgettable days of wildlife, culture, and adventure. Begin in Nairobi, continue to Kigali for rare gorilla trekking, then head into Tanzania's iconic safari landscapes.",
    image: "/images/general/AdobeStock_312250474.jpeg",
    href: "/curated-escapes/east-africa",
  },
  {
    tag: "Signature Journey",
    tagColor: "bg-sasa-red",
    region: "4 Countries",
    title: "An Extraordinary Safari Across Africa",
    description:
      "Zimbabwe, Botswana, Kenya & Rwanda over 12 days aboard the Emirates Executive Private Jet. A rare way to experience the continent in exceptional comfort and exclusivity. Limited dates for 2026–2027.",
    image: "/images/general/Favorite%201.jpeg",
    href: "/curated-escapes/signature-safari",
  },
  {
    tag: "Signature Journey",
    tagColor: "bg-sasa-sec-brown",
    region: "Tanzania",
    title: "Journey to the Summit",
    description:
      "Kilimanjaro via the Machame Route — a 9-day guided ascent of the world's tallest free-standing mountain. Designed to take you to the summit at a steady, well-considered pace. Children 14+ welcome.",
    image: "/images/general/antelope-4121962_1280.jpg",
    href: "/curated-escapes/kilimanjaro",
  },
];

const testimonials = [
  {
    quote:
      "We honestly can't say enough good things about our first trip to South Africa and Botswana. Everything was so well thought through and smoothly handled from start to finish, which meant we could just relax and enjoy the experience. The guides and the whole team on the ground made it feel incredibly special.",
    trip: "South Africa & Botswana",
  },
  {
    quote:
      "Our family of five had the most incredible trip to Zimbabwe — easily one of the best trips we've ever taken together. The service was excellent, the guides were amazing, and seeing so much wildlife made the whole experience unforgettable. Everything was so well organized from start to finish.",
    trip: "Zimbabwe",
  },
  {
    quote:
      "You created a journey that helped me reconnect with myself in a really meaningful way. I'll never forget the role you played in that process of rediscovery. Thank you, truly, for the care, intention, and level you operate at to create something that can have such a deep impact on someone.",
    trip: "Africa Immersion Journey",
  },
];

const blogPosts = [
  {
    title: "Into the Okavango: Why Botswana Belongs on Every Safari List",
    category: "Destinations",
    date: "March 2026",
    image: "/images/Botswana/hyenas-laying-down-round.jpg",
    href: "/blog/okavango-botswana",
  },
  {
    title: "Rwanda Revealed: Gorilla Trekking and Cultural Connection",
    category: "Experiences",
    date: "February 2026",
    image: "/images/general/AdobeStock_686054056.jpeg",
    href: "/blog/rwanda-gorilla-trekking",
  },
  {
    title: "The Art of Slow Travel: Why Less Is More on an African Safari",
    category: "Travel Philosophy",
    date: "January 2026",
    image: "/images/general/fav%202.jpeg",
    href: "/blog/slow-travel-safari",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/images/Botswana/11528208-uhd_2158_3840_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-sasa-brown/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-sasa-brown/65" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-sasa-sec-green text-xs tracking-[0.35em] uppercase mb-8">
            Sasa Travel
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-sasa-white leading-[1.1] mb-8">
            Experience Africa <br className="hidden md:block" />
            Through the Eyes of Locals
          </h1>
          <p className="text-sasa-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-14">
            Personal journeys shaped by real connection, rich culture,
            unforgettable wildlife, and the kind of moments that stay with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/start-your-trip"
              className="inline-block bg-sasa-green text-white text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-sasa-sec-green transition-colors duration-300"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/destinations"
              className="inline-block border border-sasa-white/60 text-sasa-white text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:border-sasa-white hover:bg-sasa-white/10 transition-colors duration-300"
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-sasa-white/30" />
          <svg
            className="w-4 h-4 text-sasa-white/40 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sasa-green text-xs tracking-[0.3em] uppercase mb-8">
            Our Belief
          </p>
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-sasa-brown leading-relaxed italic">
            &ldquo;The most meaningful journeys are the ones that stay with
            you.&rdquo;
          </p>
          <div className="mt-10 w-14 h-px bg-sasa-green mx-auto" />
          <p className="mt-10 text-sasa-black/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We create thoughtful, personal experiences across Africa that
            connect you to its people, landscapes, and culture in a deeper way —
            so you leave with lasting memories, a renewed perspective, and a
            real connection to the continent.
          </p>
        </div>
      </section>

      {/* ── About / Who We Are ──────────────────────────────────────── */}
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-6">
                Who We Are
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sasa-brown leading-tight mb-8">
                Journeys Rooted <br />
                in Deeper Experience
              </h2>
              <p className="text-sasa-black/70 text-base leading-relaxed mb-5">
                We design private experiences across Africa with local insight,
                care, and an intimate understanding of the continent — creating
                journeys that feel personal, seamless, and deeply enriching.
              </p>
              <p className="text-sasa-black/70 text-base leading-relaxed mb-10">
                Through each experience, travelers are invited into a deeper
                connection with Africa&apos;s people, landscapes, wildlife, and
                culture, while contributing positively to the communities and
                places that make these journeys possible.
              </p>
              <Link
                href="/about"
                className="inline-block bg-sasa-brown text-white text-xs tracking-[0.2em] uppercase font-medium px-8 py-3 hover:bg-sasa-sec-brown transition-colors duration-300"
              >
                Discover Our Story
              </Link>
            </div>

            <div className="relative h-[480px] lg:h-[560px] overflow-hidden">
              <Image
                src="/images/general/AdobeStock_140101064.jpeg"
                alt="Africa landscape with wildlife"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/15 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Destinations ────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="text-sasa-green text-xs tracking-[0.3em] uppercase mb-4">
              Where We Go
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              Destinations Across Africa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative h-72 overflow-hidden block"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-sasa-white mb-1">
                    {dest.name}
                  </h3>
                  <p className="text-sasa-white/60 text-xs tracking-wide">
                    {dest.sub}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-sasa-brown"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-block border border-sasa-brown/30 text-sasa-brown text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-sasa-green hover:text-sasa-green transition-colors duration-300"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* ── Founder's Message ──────────────────────────────────────── */}
      <section className="bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="relative h-80 lg:h-auto order-2 lg:order-1">
            <Image
              src="/images/general/Fav%203.jpeg"
              alt="Emmanuel — Founder, Sasa Travel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="bg-sasa-brown px-8 py-16 md:px-14 md:py-20 lg:py-28 flex flex-col justify-center order-1 lg:order-2">
            <p className="text-sasa-sec-green text-xs tracking-[0.3em] uppercase mb-8">
              Founder&apos;s Message
            </p>
            <blockquote className="font-serif text-2xl md:text-3xl text-sasa-white leading-relaxed italic mb-8">
              &ldquo;I was born and raised in Rwanda, and although I now live
              between Los Angeles, London, and Rwanda, Africa has always
              remained the place that grounds me most.&rdquo;
            </blockquote>
            <p className="text-sasa-white/65 text-base leading-relaxed mb-5">
              Having traveled across the continent, I&apos;ve come to appreciate
              that what makes Africa unforgettable is not just its beauty,
              wildlife, or landscapes, but the feeling it gives you — the
              warmth, depth, rhythm, and sense of connection that is hard to
              find anywhere else.
            </p>
            <p className="text-sasa-white/65 text-base leading-relaxed mb-5">
              This company was born from a desire to share that feeling with
              others through journeys that are thoughtful, personal, and rooted
              in real experience. I want travelers to see Africa beyond the
              obvious — through its people, culture, landscapes, and the quiet
              moments that leave a lasting mark.
            </p>
            <p className="text-sasa-white/65 text-base leading-relaxed mb-10">
              It would be a privilege for me and my team to help shape that
              experience with you.
            </p>
            <div className="border-t border-sasa-sec-brown/50 pt-6">
              <p className="font-serif text-xl text-sasa-white">Emmanuel</p>
              <p className="text-sasa-white/45 text-xs tracking-[0.2em] uppercase mt-1">
                Founder, Sasa Travel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Curated Escapes ─────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-4">
              Special Journeys
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sasa-brown mb-6">
              Curated Escapes
            </h2>
            <p className="text-sasa-black/60 text-base max-w-xl mx-auto leading-relaxed">
              Discover the continent through thoughtfully curated journeys
              guided by local insight, care, and quiet precision. Each private
              experience is designed to feel seamless, personal, and deeply
              enriching.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {escapes.map((trip) => (
              <div key={trip.title} className="group flex flex-col">
                <div className="relative h-80 overflow-hidden mb-6 flex-shrink-0">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sasa-brown/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${trip.tagColor} text-white text-xs tracking-[0.15em] uppercase px-3 py-1`}
                    >
                      {trip.tag}
                    </span>
                  </div>
                </div>
                <p className="text-sasa-sec-brown text-xs tracking-[0.2em] uppercase mb-2">
                  {trip.region}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-sasa-brown mb-4 leading-snug">
                  {trip.title}
                </h3>
                <p className="text-sasa-black/60 text-sm leading-relaxed mb-6 flex-1">
                  {trip.description}
                </p>
                <Link
                  href={trip.href}
                  className="inline-flex items-center gap-2 text-sasa-green text-xs tracking-[0.15em] uppercase font-medium hover:text-sasa-sec-green transition-colors duration-300 group/link"
                >
                  Explore Journey
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/curated-escapes"
              className="inline-block border border-sasa-brown text-sasa-brown text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-sasa-brown hover:text-white transition-colors duration-300"
            >
              View All Journeys
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sasa-green text-xs tracking-[0.3em] uppercase mb-4">
              What Travelers Say
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
              Stories from the Field
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 p-8 flex flex-col"
              >
                <svg
                  className="w-8 h-6 text-sasa-brown/20 mb-6 flex-shrink-0"
                  viewBox="0 0 32 24"
                  fill="currentColor"
                >
                  <path d="M0 24V13.7C0 5.7 4 1.1 12 0l1.3 2C9 3 6.8 5.1 5.8 8.3H12V24H0zm17.3 0V13.7c0-8 4-12.6 12-13.7l1.3 2c-4.3 1-6.5 3.1-7.5 6.3H30V24H17.3z" />
                </svg>
                <p className="text-sasa-black/70 text-base leading-relaxed italic flex-1 mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-stone-100 pt-5">
                  <p className="text-sasa-brown text-sm font-medium">Guest</p>
                  <p className="text-sasa-green text-xs tracking-wide mt-1">
                    {t.trip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Impact ──────────────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative h-72 lg:h-96 overflow-hidden">
              <Image
                src="/images/general/AdobeStock_51767739.jpeg"
                alt="Community and landscape in Africa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sasa-green text-xs tracking-[0.3em] uppercase mb-6">
                Our Impact
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-sasa-brown mb-6 leading-tight">
                Travel That Gives Back
              </h2>
              <p className="text-sasa-black/65 text-base leading-relaxed mb-10">
                We support youth-led small businesses in the communities
                connected to the places and safari regions our journeys touch —
                helping create more local opportunity alongside travel.
              </p>
              <Link
                href="/our-impact"
                className="inline-block border border-sasa-brown text-sasa-brown text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-sasa-brown hover:text-white transition-colors duration-300"
              >
                Learn About Our Impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog / Journal ──────────────────────────────────────────── */}
      <section className="bg-stone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-14">
            <div>
              <p className="text-sasa-sec-brown text-xs tracking-[0.3em] uppercase mb-3">
                From the Journal
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sasa-brown">
                Stories &amp; Insights
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sasa-brown text-xs tracking-[0.2em] uppercase font-medium border-b border-sasa-brown pb-0.5 hover:text-sasa-green hover:border-sasa-green transition-colors duration-300"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link key={i} href={post.href} className="group block">
                <div className="relative h-60 overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-sasa-green text-xs tracking-[0.15em] uppercase mb-2">
                  {post.category} &middot; {post.date}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-sasa-brown leading-snug group-hover:text-sasa-sec-brown transition-colors duration-300">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-block text-sasa-brown text-xs tracking-[0.2em] uppercase border-b border-sasa-brown pb-0.5"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="relative py-28 md:py-44 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/general/AdobeStock_332073818.jpeg"
            alt="Begin your Africa journey"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-sasa-brown/72" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-sasa-sec-green text-xs tracking-[0.35em] uppercase mb-8">
            Ready to Explore?
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-sasa-white leading-tight mb-8">
            Your Africa Journey <br className="hidden md:block" />
            Begins Here
          </h2>
          <p className="text-sasa-white/70 text-base md:text-lg leading-relaxed mb-14 max-w-xl mx-auto">
            Connect with our travel designers to start planning your bespoke
            African experience — crafted around your interests, timeline, and
            vision.
          </p>
          <Link
            href="/start-your-trip"
            className="inline-block bg-sasa-green text-white text-xs tracking-[0.25em] uppercase font-medium px-12 py-5 hover:bg-sasa-sec-green transition-colors duration-300"
          >
            Begin the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
