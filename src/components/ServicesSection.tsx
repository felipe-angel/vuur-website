// File: src/components/ServicesSection.tsx
'use client';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black">
      {services.map((svc, idx) => (
        <ServiceCard key={svc.title} svc={svc} idx={idx} />
      ))}
    </section>
  );
}