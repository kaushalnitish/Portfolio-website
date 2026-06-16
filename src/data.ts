import { Project, CurrentlyBuildingItem, BuildStep, ClientBrand } from './types';

export const PERSONAL_INFO = {
  name: 'NITISH KAUSHAL',
  moniker: '',
  fullName: 'Nitish Kaushal',
  secondaryBranding: 'Web Developer & AI Automation Builder',
  tagline: 'Web Developer • AI Automation Builder',
  shortStatement: 'I Build AI Systems That Help Businesses Get More Customers And Save Time.',
  introduction: 'Every project starts with understanding the business, the customer, and the outcome that matters most. I focus on creating systems that are simple to use, easy to maintain, and capable of supporting long-term growth without unnecessary complexity.',
  aboutMeParagraph: 'Focused on high business-leverage outcomes. I approach complex modern business problems by building, turning abstract objectives into tangible, automated systems. From high-level AI agent orchestrations to custom web development architectures, I shape tools that optimize business workflows, acquire clients, and solve operational bottlenecks.',
  images: {
    hero: 'https://www.image2url.com/r2/default/images/1780866821202-55167a7c-cbe5-4812-a777-560e8e229734.png',
    intro: '/src/assets/images/nitish_intro_1780860111040.png',
    about1: '/src/assets/images/nitish_about_1_1780860132213.png',
    about2: '/src/assets/images/builder_desk_detail_1780860201223.png',
  },
  contact: {
    email: 'nitishkaushal17@gmail.com',
    whatsapp: 'https://wa.me/917658096379',
    whatsappSecondary: 'https://wa.me/919816402487',
    phone: 'tel:+919816402487'
  }
};

export const CURRENTLY_BUILDING: CurrentlyBuildingItem[] = [
  {
    id: 'main-character-ai',
    title: 'Main Character AI',
    description: 'Autonomous digital twin framework for high-influence creators, designed to synthesize dynamic tone and personality.',
    status: 'Beta',
    tech: ['LLM Orchestration', 'Memory Vectors', 'Audio Synthesis']
  },
  {
    id: 'reality-check',
    title: 'Reality Check',
    description: 'An AI-powered critical review engine dissecting startup pitches and product positioning with brutal objectivity.',
    status: 'Live',
    tech: ['Structured Outputs', 'Market Pattern Analysis', 'AI Agentic Loops']
  },
  {
    id: 'ai-script-engine',
    title: 'AI Script Engine',
    description: 'Generative storyboarding and viral content script modeling calibrated on high-retention audio-visual assets.',
    status: 'In Progress',
    tech: ['Generative Video Contexts', 'Audience Analytics', 'Dynamic Prompting']
  },
  {
    id: 'ai-calling-agent',
    title: 'AI Calling Agent',
    description: 'Ultra-low latency real-time voice intelligence engineered with semantic interruptibility for direct consumer operations.',
    status: 'Concept',
    tech: ['WebSockets', 'VAD (Voice Activity Detection)', 'Real-time Audio Streams']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'plah-bakers',
    title: 'PLAH BAKERS',
    category: 'Bakery Ordering App',
    description: 'Mobile ordering experience for bakeries. Let customers order, pay, and schedule pickups in seconds.',
    detailedDescription: 'A fast and beautiful mobile-first web app designed for local bakeries. Customers can pre-order pastries, customize bake items, make secure payments, and choose pickup time slots—all from their phones without installing any app. This streamlines bakery orders and reduces peak-hour kitchen stress.',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    tags: ['Mobile Ordering', 'Digital Menu', 'Online Payments', 'Local Pickup'],
    role: 'Lead Developer & Designer',
    year: '2025',
    monthlyUsers: '16K+ Monthly Customers',
    stats: [
      { label: 'Active Customers', value: '16K+' },
      { label: 'Frictionless Order Time', value: 'under 15s' }
    ]
  },
  {
    id: 'cafe-ageecha',
    title: 'CAFE AGEECHA',
    category: 'Cafe Booking Platform',
    description: 'Digital menu discovery and private table reservations. Built specifically for modern cafes.',
    detailedDescription: 'A tailored booking system and digital menu for modern cafes. Features real-time table reservation, a gorgeous visual menu, and simple customer feedback loops. Perfect for hospitality brands that want to grow bookings and make a memorable first impression.',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop',
    tags: ['Table Bookings', 'Digital Menu', 'Guest Experience', 'Feedback System'],
    role: 'Lead UX & Product Architect',
    year: '2025',
    monthlyUsers: '18K+ Monthly Guests',
    stats: [
      { label: 'Active Guests', value: '18K+' },
      { label: 'Booking Speedup', value: '3x Faster' }
    ]
  },
  {
    id: 'nitish-ai',
    title: 'NITISH AI',
    category: 'Ad Copy & Promotion Planner',
    description: 'Smart marketing copilot helper. Plan restaurant menus, write ad campaigns, and schedule promotions.',
    detailedDescription: 'An AI-powered planning helper for busy business owners. Use simple templates to draft Instagram captions, plan seasonal cafe promotions, generate menu announcements, and coordinate advertising scripts in half the time.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    tags: ['Marketing Helper', 'AI Copywriter', 'Campaign Planner'],
    role: 'Full-Stack Architect',
    year: '2026',
    monthlyUsers: '8K+ Business Owners',
    stats: [
      { label: 'Active Owners', value: '8K+' },
      { label: 'Plan Generation', value: 'under 10s' }
    ]
  },
  {
    id: 'fssai-ocr-scanner',
    title: 'FSSAI OCR SCANNER',
    category: 'Ingredient & Compliance Scanner',
    description: 'Instant food label scanner. Verify nutrition values and check compliance on packaging instantly.',
    detailedDescription: 'An easy-to-use scanner for verifying ingredients and certificate numbers. Point a phone camera at any food label or license code to automatically extract product data, saving kitchen staff hours of manual typing and compliance checking.',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
    tags: ['Label Scanner', 'Food Safety', 'Automatic Logging'],
    role: 'Developer & QA Lead',
    year: '2026',
    monthlyUsers: '5K+ Staff Audits',
    stats: [
      { label: 'Scans Handled', value: '250K+' },
      { label: 'Accuracy Rate', value: '99.8%' }
    ]
  },
  {
    id: 'dilse-dabba',
    title: 'DILSEDABBA',
    category: 'Meal Subscription Platform',
    description: 'Daily meal subscription app. Manage weekly dining plans, deliveries, and automatic billing.',
    detailedDescription: 'A weekly meal delivery platform. Subscribers can easily pick daily food preferences, adjust delivery times, pay automatically, and pause schedules instantly. Built to minimize administrative effort and provide a premium, modern meal experience.',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop',
    tags: ['Meal Plans', 'Auto-Billing', 'Delivery Schedule', 'Customer Portal'],
    role: 'Founding CTO & Architect',
    year: '2025',
    monthlyUsers: '12K+ Meal Subscribers',
    stats: [
      { label: 'Meal Subscribers', value: '12K+' },
      { label: 'Retention Rate', value: '94.2%' }
    ]
  }
];

export const BUILD_PROCESS: BuildStep[] = [
  {
    number: '01',
    title: 'Observe',
    description: 'Deconstructing user behaviors, identifying system bottlenecks, and locating untapped AI potential.'
  },
  {
    number: '02',
    title: 'Research',
    description: 'Evaluating architectural pathways, matching context windows, and refining logical prompt models.'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Deploying robust automation loops, crafting premium interfaces, and wiring highly stable code bases.'
  },
  {
    number: '04',
    title: 'Improve',
    description: 'Running stress tests, tweaking latency boundaries, and evolving systems into elegant software products.'
  }
];

export const CLIENT_BRANDS: ClientBrand[] = [
  { id: 'passion-capital', name: 'passion capital', category: 'Early Stage', logoType: 'passion-capital' },
  { id: 'heapsgood', name: 'HEAPSGOOD', category: 'Eco Packaging', logoType: 'heapsgood' },
  { id: 'square-peg', name: 'Square Peg', category: 'Venture', logoType: 'square-peg' },
  { id: 'wavepiston', name: 'WAVEPISTON', category: 'Wave Energy', logoType: 'wavepiston' },
  { id: 'bt', name: 'bt.', category: 'Design Briefing', logoType: 'bt' },
  { id: 'ripple', name: 'Ripple', category: 'Wind Farm', logoType: 'ripple' },
  { id: 'airtree', name: 'AirTree', category: 'Venture', logoType: 'airtree' },
  { id: 'bereev', name: 'bereev', category: 'Bereavement', logoType: 'bereev' }
];
