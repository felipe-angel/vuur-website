// File: src/components/RealEstateCTA.tsx
'use client';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/20 to-secondary/20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Transform Your Listings?
      </h2>
      <a
        href="/contact"
        className="
          inline-block px-8 py-3
          bg-gradient-to-r from-primary to-secondary
          text-black font-semibold rounded-full
          shadow-lg hover:scale-105 transition
        "
      >
        Get Started Today
      </a>
    </section>
  );
}
