// src/app/website-development/page.tsx
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WebDevHero from '@/components/WebDevHero'
import WebDevServicesGrid from '@/components/WebDevServicesGrid'
import WebDevProcessSection from '@/components/WebDevProcessSection'

import WebDevCTA from '@/components/WebDevCTA'

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0a0a] text-[#ededed]">
        <WebDevHero />
        <WebDevServicesGrid />
        <WebDevProcessSection />
       
        <WebDevCTA />
      </main>
      <Footer />
    </>
  )
}
