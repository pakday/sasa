"use client";

import { useState } from "react";

const planOptions = [
  "I'm ready to plan a trip to Africa soon",
  "I'm considering a trip in the next 6–12 months",
  "I'm thinking about a trip in the next few years",
  "I'm interested in learning more for now",
  "I'd like to connect, even if I'm not planning a trip yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    timeline: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to a backend / email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <svg
          className="w-12 h-12 text-sasa-green mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h3 className="font-serif text-2xl text-sasa-brown mb-3">
          Thank you — we&apos;ll be in touch soon.
        </h3>
        <p className="text-sasa-black/60 text-sm leading-relaxed">
          We&apos;ve received your details and will match you with the right
          person on our team.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs tracking-[0.15em] uppercase text-sasa-brown mb-2"
          >
            Full Name <span className="text-sasa-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            className="w-full border border-sasa-sec-brown/40 bg-transparent px-4 py-3 text-sasa-brown text-sm placeholder-sasa-black/30 focus:outline-none focus:border-sasa-brown transition-colors"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-[0.15em] uppercase text-sasa-brown mb-2"
          >
            Email Address <span className="text-sasa-red">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            className="w-full border border-sasa-sec-brown/40 bg-transparent px-4 py-3 text-sasa-brown text-sm placeholder-sasa-black/30 focus:outline-none focus:border-sasa-brown transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {/* Phone (optional) */}
      <div>
        <label
          htmlFor="phone"
          className="block text-xs tracking-[0.15em] uppercase text-sasa-brown mb-2"
        >
          Phone{" "}
          <span className="text-sasa-black/40 normal-case tracking-normal text-xs font-normal">
            (optional)
          </span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          autoComplete="tel"
          className="w-full border border-sasa-sec-brown/40 bg-transparent px-4 py-3 text-sasa-brown text-sm placeholder-sasa-black/30 focus:outline-none focus:border-sasa-brown transition-colors"
          placeholder="+1 (000) 000-0000"
        />
      </div>

      {/* Timeline — radio group */}
      <div>
        <p className="text-xs tracking-[0.15em] uppercase text-sasa-brown mb-4">
          How would you describe yourself?{" "}
          <span className="text-sasa-red">*</span>
        </p>
        <div className="space-y-3">
          {planOptions.map((option) => (
            <label
              key={option}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="timeline"
                value={option}
                required
                checked={form.timeline === option}
                onChange={handleChange}
                className="mt-0.5 accent-sasa-green flex-shrink-0"
              />
              <span className="text-sasa-black/70 text-sm leading-snug group-hover:text-sasa-brown transition-colors">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs tracking-[0.15em] uppercase text-sasa-brown mb-2"
        >
          Tell us what you&apos;re looking for{" "}
          <span className="text-sasa-black/40 normal-case tracking-normal text-xs font-normal">
            (optional)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-sasa-sec-brown/40 bg-transparent px-4 py-3 text-sasa-brown text-sm placeholder-sasa-black/30 focus:outline-none focus:border-sasa-brown transition-colors resize-none"
          placeholder="Destinations you're interested in, travel dates, group size, anything else..."
        />
      </div>

      <p className="text-sasa-black/45 text-xs leading-relaxed">
        By submitting this form, you agree to hear from us about Sasa Travel.
        You can unsubscribe at any time.
      </p>

      <button
        type="submit"
        className="bg-sasa-green text-white text-xs tracking-[0.2em] uppercase font-medium px-10 py-4 hover:bg-sasa-sec-green transition-colors duration-300 w-full sm:w-auto"
      >
        Send My Details
      </button>
    </form>
  );
}
