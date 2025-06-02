/* -------- SocialMediaFAQ.tsx -------- */
// File: src/components/SocialMediaFAQ.tsx
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'How much does your Social Media Management service cost?',
    a: 'Most clients invest between $1,500 and $3,000 per month, depending on the scope of work and the channels we’re managing. We’ll tailor a proposal once we’ve learned more about your goals, audience size, and desired level of service.',
  },
  {
    q: 'What’s included in a monthly retainer?',
    a: 'Every plan is 100% custom to your needs. Depending on your package, your monthly retainer might include any combination of:\n\n• Reels, Carousels, and Story Posts (short-form videos, multi-image slides, GIFs, etc.)\n• Community Management (monitoring DMs, replying to comments, and fostering engagement)\n• Paid Ad Campaigns (strategy, creative, targeting, and ongoing optimization)\n• Bi-weekly or Monthly Performance Reports (deep-dive analytics to keep you in the loop)\n\nBecause every brand’s priorities differ, we’ll recommend exactly which deliverables make sense for you. You only pay for what you need.',
  },
  {
    q: 'Which platforms do you support?',
    a: 'We create, publish, and manage content on:\n\n• Instagram (feed posts, Reels, Stories, carousel graphics)\n• TikTok (short-form creative, sound sync, native editing)\n• Facebook (organic publishing, boosted posts, community group moderation)\n• LinkedIn (company-page content, thought-leadership articles, sponsored posts)\n\nIf you need additional channels like Pinterest or YouTube Shorts, let us know and we’ll integrate them into your plan.',
  },
  {
    q: 'How do you handle content creation?',
    a: 'Our in-house studio is full-service: we have photographers, videographers, models, and editors on payroll. We can:\n\n• Shoot On-Site (Atlanta-Area): For local brands, we come to your location, capture all imagery and b-roll, and edit everything in-house.\n• Studio Production: If you prefer, we shoot against custom backdrops, rent props, or even bring in talent—whatever it takes to nail your brand’s look and feel.\n\nFrom concept to final export (color-graded videos, high-res JPEGs, optimized web versions, vertical cuts for Stories/Reels), we manage every step so you never have to chase down assets or freelancers.',
  },
  {
    q: 'Can you help with paid ad campaigns, and how is the ad budget managed?',
    a: 'Yes—paid social can be part of your Social Media Management plan or added on as a standalone service. Here’s how it works:\n\n1. Strategy & Budget Consultation: We work with you to determine a monthly ad budget based on your goals (awareness, lead generation, sales).\n2. Ad Account Setup: If you don’t have a Meta Ads or TikTok Ads account, we’ll create and configure it. You fund the ad account directly—no markup on your media spend.\n3. Creative & Targeting: We produce ad-ready graphics and videos and build precise audiences (lookalike, interest-based, retargeting).\n4. Ongoing Optimization: Each week, we review performance data, pause underperforming ad sets, scale winning creatives, and refine bidding strategies.\n\nYour monthly retainer covers our management fee, so you always know exactly what you’re paying for.',
  },
  {
    q: 'What level of creative control and approval do I have over each post?',
    a: 'Nothing goes live without your express sign-off. Our process ensures:\n\n1. Content Review: We send every draft (static graphic or video cut) to you in a shared workspace.  \n2. Two Rounds of Edits: If you need tweaks—color adjustments, copy changes, or a different caption—we make them until you’re 100% satisfied.  \n3. Final Approval: Once you click “Approve,” we schedule the post. If you spot an issue before it goes live, we’ll pull or update it immediately.\n\nYou always remain in the driver’s seat; we’re simply your production and execution arm.',
  },
  {
    q: 'Do you provide bi-weekly or monthly performance reports, and in what format?',
    a: 'We’ll send you a comprehensive report on the cadence that matches your plan (bi-weekly or monthly). Each report includes:\n\n• Key Metrics: Impressions, reach, engagement rate, follower growth, and top-performing content.  \n• Ad Performance (if applicable): Spend, clicks, CTR, CPC, CPA, and ROAS broken down by campaign.  \n• Community Insights: Total comments and DMs handled, average response time, and any notable sentiment trends.  \n• Actionable Recommendations: Based on Ember AI data, we highlight which post types or targeting tweaks worked best—and how we’ll pivot next.\n\nYou receive a downloadable PDF (or private dashboard link), plus a quick review call to walk through every data point and answer any questions.',
  },
];

export default function SocialMediaFAQ() {
  return (
    <section className="bg-gray-900 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <Accordion key={i} question={f.q} answer={f.a} />
        ))}
      </div>
    </section>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-black/50 p-4 rounded-lg cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="text-2xl text-[#ff5400]"
        >
          +
        </motion.span>
      </div>
      {open && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-2 whitespace-pre-wrap text-gray-300"
        >
          {answer}
        </motion.p>
      )}
    </div>
  );
}
