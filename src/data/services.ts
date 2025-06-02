// File: src/data/services.ts
export interface Service {
    title: string;
    description: string;
    features: string[];
    image: string;
    link: string;
  }
  
  export const services: Service[] = [
    {
      title: 'Social Media Management',
      description: 'From strategy to content creation, we handle every aspect of your social media.',
      features: [
        'Content Creation',
        'Social Strategy',
        'Community Engagement',
        'Analytics & Reporting',
        'Account Management',
        'Influencer Collaboration',
        'Paid Ad Campaigns',
      ],
      image: '/social-media.png',
      link: '/social-media',
    },
    {
      title: 'Website Development',
      description: 'We design and develop websites that look great and drive results.',
      features: [
        'Custom Web Design',
        'Web Development',
        'SEO Optimization',
        'User Experience (UX/UI)',
        'Responsive Design',
        'Website Maintenance',
        'E-Commerce Solutions',
      ],
      image: '/website-development.png',
      link: '/website-development',
    },
    {
      title: 'Real Estate Media Services',
      description: 'Capture properties beautifully and sell faster with professional media.',
      features: [
        'Professional Photography',
        'Cinematic Videography',
        'Drone Aerial Footage',
        '3D Virtual Walkthroughs',
        'Real Estate Listing Videos',
        'Property Highlight Reels',
        'Virtual Staging',
      ],
      image: '/real-estate-media.png',
      link: '/real-estate',
    },
    {
      title: 'Ember AI Analytics',
      description: 'Advanced analytics to uncover trends and optimize campaigns.',
      features: [
        'Advanced Analytics',
        'Real-time Data Insights',
        'Campaign Optimization',
        'Audience Segmentation',
        'Predictive Analytics',
        'Performance Reporting',
        'Market Trend Analysis',
      ],
      image: '/ember-ai.png',
      link: '/ember-ai',
    },
  ];