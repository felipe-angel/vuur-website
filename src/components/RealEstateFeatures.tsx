// File: src/components/RealEstateFeatures.tsx
'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Aerial Drone Footage',
    text: 'Showcase exteriors and surroundings with smooth, high-resolution drone shots for unmatched perspectives.',
    media: {
      type: 'video',
      src: 'https://firebasestorage.googleapis.com/v0/b/vuursocial-media-9aed0.firebasestorage.app/o/feature-drone.mp4?alt=media&token=bf3ab643-8a6a-495b-b417-ec25336f9e36',
    },
    reverse: false,
  },
  {
    title: 'Cinematic Video Tours',
    text: 'Engage viewers with dynamic walkthroughs and storytelling that bring listings to life on every device.',
    media: {
      type: 'image',
      src: '/images/feature-video.jpeg',
    },
    reverse: true,
  },
  {
    title: 'Interactive 3D Walkthroughs',
    text: 'Allow buyers to explore properties online with virtual tours that simulate an in-person visit.',
    media: {
      type: 'image',
      src: '/images/feature-3d.jpg',
    },
    reverse: false,
  },
  {
    title: 'High-Impact Photography',
    text: 'Capture every angle and detail with professional property photography that attracts clicks and creates desire.',
    media: {
      type: 'image',
      src: '/images/feature-photo.jpg',
    },
    reverse: true,
  },
];

export default function FeatureSections() {
  return (
    <section id="features" className="py-24 space-y-24 overflow-visible">
      {features.map((f, i) => (
        <div
          key={i}
          className={`
            flex flex-col-reverse md:flex-row items-center
            max-w-6xl mx-auto px-4 gap-8
            ${f.reverse ? 'md:flex-row-reverse' : ''}
          `}
        >
          {/* Text */}
          <div className="md:w-1/3 space-y-4">
            <h2
              className="
                text-4xl md:text-5xl font-bold
                bg-clip-text text-transparent
                bg-gradient-to-r from-primary to-secondary
                leading-[1.15] pb-[0.15em]
              "
            >
              {f.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{f.text}</p>
          </div>

          {/* Media (Image or Video) */}
          <div className="md:w-2/3 w-full h-[450px] relative rounded-2xl overflow-hidden shadow-2xl">
            {f.media.type === 'image' ? (
              <Image
                src={f.media.src}
                alt={f.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <video
                src={f.media.src}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
