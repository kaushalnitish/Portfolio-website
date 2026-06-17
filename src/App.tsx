import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  PhoneCall,
  Instagram,
  Linkedin,
  Mail,
  Heart,
  ChevronRight,
  Sparkles,
  Layers,
  Cpu,
  Bookmark,
  Coffee,
  Smartphone,
  BookOpen,
  Calendar,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  HelpCircle
} from 'lucide-react';

import { PERSONAL_INFO, CURRENTLY_BUILDING, PROJECTS, BUILD_PROCESS, CLIENT_BRANDS } from './data';
import { Project } from './types';
import ProjectModal from './components/ProjectModal';
import ContactTerminal from './components/ContactTerminal';
import ClientLogo from './components/ClientLogo';
import DiagonalShowcase from './components/DiagonalShowcase';
import EnquiryForm from './components/EnquiryForm';
import ServicesOverview from './components/ServicesOverview';
import CreativeCampaigns from './components/CreativeCampaigns';
import FAQPage from './components/FAQPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'work' | 'faq' | 'contact' | 'enquiry'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    let title = "Nitish Kaushal - Digital Growth Systems";
    let description = "Specialized in mobile web apps, hospitality digital experiences, custom CRM solutions and high-converting landing pages.";

    if (currentPage === 'faq') {
      title = "FAQ | Nitish Kaushal";
      description = "Frequently asked questions about mobile web apps, hospitality systems, landing pages, AI automation and business growth solutions.";
    } else if (currentPage === 'about') {
      title = "About | Nitish Kaushal";
      description = "Learn more about Nitish Kaushal, focused on high-end hospitality systems and mobile web applications.";
    } else if (currentPage === 'work') {
      title = "Work | Nitish Kaushal";
      description = "Explore selected works, mobile web apps, custom CRMs, AI automations, and landing pages designed by Nitish Kaushal.";
    } else if (currentPage === 'contact') {
      title = "Contact | Nitish Kaushal";
      description = "Get in touch to build premium visual systems, high-converting platforms, and tailored business solutions.";
    } else if (currentPage === 'enquiry') {
      title = "Apply | Nitish Kaushal";
      description = "Submit your brand details and apply to launch custom digital growth systems.";
    }

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as any
    });
  }, [currentPage, selectedProject]);

  // Quick slide up page transitions
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3, ease: 'easeInOut' } }
  };

  return (
    <div className={`min-h-screen ${currentPage === 'home' ? 'h-screen max-h-screen overflow-hidden' : ''} bg-[#F2EEE7] text-[#111111] selection:bg-[#D8D12B]/40 relative flex flex-col justify-between`}>
      
      {/* HEADER NAVIGATION BAR (REPRODUCED LUXURY EDITORIAL MINIMAL STYLE) */}
      <header className="w-full border-b border-[#D8D2C8] py-2 sm:py-3 px-4 sm:px-6 md:px-12 flex justify-between items-center bg-[#F2EEE7]/95 backdrop-blur-md sticky top-0 z-40 relative">
        


        {/* HIGH-END INTERACTIVE TAB NAVIGATOR (DESKTOP ONLY) */}
        <nav className="hidden md:flex gap-4 md:gap-7 items-center text-[11px] font-mono tracking-widest uppercase text-[#666666]">
          <button
            onClick={() => setCurrentPage('home')}
            className={`transition-colors cursor-pointer hover:text-[#111111] relative py-1 ${
              currentPage === 'home' ? 'text-[#111111] font-bold border-b-2 border-[#D8D12B] pb-0.5' : ''
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`transition-colors cursor-pointer hover:text-[#111111] relative py-1 ${
              currentPage === 'about' ? 'text-[#111111] font-bold border-b-2 border-[#D8D12B] pb-0.5' : ''
            }`}
          >
            ABOUT
          </button>
          <button
            onClick={() => setCurrentPage('work')}
            className={`transition-colors cursor-pointer hover:text-[#111111] relative py-1 ${
              currentPage === 'work' ? 'text-[#111111] font-bold border-b-2 border-[#D8D12B] pb-0.5' : ''
            }`}
          >
            WORK
          </button>
          <button
            onClick={() => setCurrentPage('faq')}
            className={`transition-colors cursor-pointer hover:text-[#111111] relative py-1 ${
              currentPage === 'faq' ? 'text-[#111111] font-bold border-b-2 border-[#D8D12B] pb-0.5' : ''
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`transition-colors cursor-pointer hover:text-[#111111] relative py-1 ${
              currentPage === 'contact' ? 'text-[#111111] font-bold border-b-2 border-[#D8D12B] pb-0.5' : ''
            }`}
          >
            CONTACT
          </button>
          <span className="w-2.5 h-2.5 rounded-full bg-[#D8D12B] inline-block ml-1" />
        </nav>

        {/* MOBILE NAVIGATION CONTROLS (EXACT MOCKUP ACCORDANCE) */}
        <div className="flex md:hidden items-center gap-3">
          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col justify-between w-5 h-3.5 focus:outline-none cursor-pointer group"
            id="mobile-hud-menu-btn"
          >
            <span className={`w-full h-[2px] bg-[#111111] rounded-sm transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`w-full h-[2px] bg-[#111111] rounded-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-[2px] bg-[#111111] rounded-sm transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-[-6px]' : ''}`} />
          </button>
          {/* Small Gold Yellow Dot button right next to the menu */}
          <span 
            onClick={() => { setCurrentPage('work'); setIsMobileMenuOpen(false); }}
            className="w-2.5 h-2.5 rounded-full bg-[#D8D12B] cursor-pointer hover:scale-110 active:scale-95 transition-transform" 
          />
        </div>

        {/* MOBILE SLIDE-DOWN NAVIGATION DRAWER */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 bg-[#F2EEE7] border-b border-[#D8D2C8] py-4 px-6 flex flex-col gap-3 md:hidden z-50 shadow-[0_10px_20px_rgba(17,17,17,0.08)]"
            >
              <button 
                onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}
                className={`text-left font-mono text-[11px] tracking-wider uppercase py-2 border-b border-[#D8D2C8]/50 ${currentPage === 'home' ? 'text-[#111111] font-bold' : 'text-[#666666]'}`}
              >
                // HOME
              </button>
              <button 
                onClick={() => { setCurrentPage('about'); setIsMobileMenuOpen(false); }}
                className={`text-left font-mono text-[11px] tracking-wider uppercase py-2 border-b border-[#D8D2C8]/50 ${currentPage === 'about' ? 'text-[#111111] font-bold' : 'text-[#666666]'}`}
              >
                // ABOUT
              </button>
              <button 
                onClick={() => { setCurrentPage('work'); setIsMobileMenuOpen(false); }}
                className={`text-left font-mono text-[11px] tracking-wider uppercase py-2 border-b border-[#D8D2C8]/50 ${currentPage === 'work' ? 'text-[#111111] font-bold' : 'text-[#666666]'}`}
              >
                // WORK
              </button>
              <button 
                onClick={() => { setCurrentPage('faq'); setIsMobileMenuOpen(false); }}
                className={`text-left font-mono text-[11px] tracking-wider uppercase py-2 border-b border-[#D8D2C8]/50 ${currentPage === 'faq' ? 'text-[#111111] font-bold' : 'text-[#666666]'}`}
              >
                // FAQ
              </button>
              <button 
                onClick={() => { setCurrentPage('contact'); setIsMobileMenuOpen(false); }}
                className={`text-left font-mono text-[11px] tracking-wider uppercase py-2 ${currentPage === 'contact' ? 'text-[#111111] font-bold' : 'text-[#666666]'}`}
              >
                // CONTACT
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* PAGE TRANSITION ROOT FRAME */}
      <div className={`flex-grow w-full ${currentPage === 'home' ? 'flex flex-col justify-center overflow-visible md:overflow-hidden py-2 md:py-4 md:my-auto' : 'py-4 md:py-8'}`}>
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="max-w-7xl mx-auto px-6 md:px-12 md:my-auto w-full relative"
              style={{ fontSize: '25px', lineHeight: '13px', marginLeft: 'auto', marginRight: 'auto' }}
            >
              {/* BRAND REPRODUCED MAIN CONTENT FRAME: HIGH INTENSITY RESEMBLANCE (RESPONSIVE VIEWPORT) */}
              <div className="flex flex-col md:grid md:grid-cols-12 gap-5 md:gap-x-8 md:gap-y-4 items-center relative w-full h-auto md:h-[calc(100vh-160px)] md:max-h-[68vh] min-h-0 overflow-visible md:overflow-hidden pb-4 md:pb-0">
                
                {/* 1. NAME/HEADLINE */}
                <h1 
                  className="order-1 text-[1.85rem] xs:text-[2.15rem] sm:text-[2.5rem] md:text-5xl lg:text-[4.8rem] xl:text-[5.5rem] font-sans font-black tracking-tighter leading-[0.82] md:leading-[0.85] text-[#111111] uppercase select-none cursor-default md:col-span-6 md:col-start-1 md:row-start-1 md:self-end w-full"
                  style={{ marginTop: '2px', marginBottom: '4px', marginLeft: '-1px' }}
                >
                  NITISH<br />KAUSHAL
                </h1>

                {/* 2. SHORT DESCRIPTION & ROLE PILL */}
                <div className="order-2 md:order-none md:col-span-6 md:col-start-1 md:row-start-2 flex flex-col gap-3 md:gap-4 md:self-center select-none w-full">
                  <h2 
                    className="text-[#111111] tracking-tight text-[13px] xs:text-[14px] sm:text-lg md:text-xl lg:text-2xl font-sans font-extrabold leading-tight max-w-xl cursor-default"
                    style={{ marginBottom: '2px' }}
                  >
                    I Build AI Systems That Help Businesses Get More Customers And Save Time.
                  </h2>

                  <div className="max-w-full">
                    <p 
                      className="text-[#111111]/85 font-mono tracking-widest text-left font-black uppercase text-[9px] xs:text-[10px] md:text-xs cursor-default"
                    >
                      WEB DEVELOPER // AI AUTOMATION BUILDER
                    </p>
                  </div>
                </div>

                {/* 3. HERO IMAGE BETWEEN CONTENT AND BUTTONS ON MOBILE */}
                <div className="order-3 md:order-none md:col-span-6 md:col-start-7 md:row-start-1 md:row-span-3 w-full md:h-full flex items-center md:items-end justify-center relative select-none z-20 overflow-visible py-2 md:py-0">
                  {/* Premium soft ambient radial shadow behind key subject focus area */}
                  <div className="absolute top-[10%] bottom-[5%] left-[10%] right-[10%] md:top-[15%] md:bottom-[5%] h-[80%] md:h-[75%] bg-[#111111]/[0.04] rounded-full blur-[30px] md:blur-[70px] pointer-events-none z-10" />

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full flex items-center md:items-end justify-center overflow-visible relative"
                  >
                    <img
                      src={PERSONAL_INFO.images.hero}
                      alt="portrait of Nitish"
                      className="w-full max-w-[250px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-auto h-auto md:h-[105%] md:max-h-none object-contain md:object-bottom pointer-events-none filter drop-shadow-[0_12px_18px_rgba(17,17,17,0.1)] md:drop-shadow-[0_20px_30px_rgba(17,17,17,0.15)] transform-gpu z-20 origin-bottom transition-all duration-500 ease-out hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>

                {/* 4. PRIMARY & SECONDARY CTA BUTTONS */}
                <div 
                  className="order-4 md:order-none md:col-span-6 md:col-start-1 md:row-start-3 md:self-start flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1 md:pt-4 w-full"
                >
                  <button
                    onClick={() => setCurrentPage('work')}
                    id="nav-to-work-btn"
                    className="bg-[#D8D12B] hover:bg-[#111111] hover:text-white text-[#111111] font-mono uppercase tracking-widest text-[9px] sm:text-[10px] font-bold h-11 md:h-auto py-2 sm:py-3 px-5 border border-[#111111] transition-all cursor-pointer rounded shadow-[2px_2px_0px_0px_#111111] sm:shadow-[3px_3px_0px_0px_#111111] text-center"
                  >
                    VIEW PROJECTS →
                  </button>

                  <button
                    onClick={() => setCurrentPage('contact')}
                    id="nav-to-contact-btn"
                    className="bg-transparent hover:bg-[#111111]/5 text-[#111111] font-mono uppercase tracking-widest text-[9px] sm:text-[10px] font-bold h-11 md:h-auto py-2 sm:py-3 px-5 border border-[#111111] transition-all cursor-pointer rounded text-center"
                  >
                    CONTACT ME →
                  </button>
                </div>

                {/* DECORATIVE DOT GRID ACCENT (PRECISE REFERENCE) */}
                <div className="absolute top-[10%] right-[3%] grid grid-cols-5 gap-1.5 opacity-35 select-none pointer-events-none hidden md:grid z-0">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-[3px] h-[3px] rounded-full bg-[#111111]" />
                  ))}
                </div>

                {/* DECORATIVE VERTICAL ROTATED BRAND ACCENT (PRECISE REFERENCE) */}
                <div className="absolute top-[35%] right-[2%] h-[38%] flex flex-col justify-between items-center py-4 text-[#111111]/70 font-mono text-[8px] tracking-[0.25em] uppercase select-none pointer-events-none hidden lg:flex z-0" style={{ writingMode: 'vertical-rl' }}>
                  <span>BUILDER MINDSET</span>
                  <div className="h-10 w-[1px] bg-[#111111]/15 my-2" />
                  <span>EXPERIMENT DRIVEN</span>
                  <span className="text-[#D8D12B]/90 text-sm mt-1.5 font-bold font-sans">+</span>
                </div>

              </div>

            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="max-w-6xl mx-auto px-4 md:px-8 space-y-8 sm:space-y-12 md:space-y-16 py-4 sm:py-6 md:py-12"
            >
              
              {/* SECTION 02: MY INTRODUCTION */}
              <section id="mindset" className="bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl p-4 sm:p-6 md:p-10 shadow-[4px_4px_0px_0px_#111111] sm:shadow-[6px_6px_0px_0px_#111111]">
                <div className="space-y-6 max-w-4xl">
                  {/* Editorial label */}
                  <div className="flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-[#111111]/80 select-none">
                    <Coffee className="w-4 h-4 text-[#D8D12B]" />
                    <span>HOSPITALITY DIGITAL EXPERIENCES</span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-sans text-xl xs:text-2xl sm:text-3xl lg:text-[2.25rem] font-black tracking-tight text-[#111111] leading-[1.1] md:leading-tight text-left uppercase">
                    SPECIALIZED IN MOBILE WEB APPS FOR CAFÉS & HOSPITALITY BRANDS.
                  </h2>

                  {/* Body Copy */}
                  <p className="text-xs xs:text-sm md:text-base text-[#111111]/95 leading-snug xs:leading-normal md:leading-relaxed font-sans font-medium text-left max-w-3xl">
                    Over 80% of guests find, compare, and choose cafes or restaurants from their phones. I build fast, high-end mobile experiences for hospitality brands. These systems are designed to capture customer attention, strengthen your brand, and drive constant direct bookings, orders, and repeat visits.
                  </p>

                  {/* Trust/Proof Statement */}
                  <div className="p-4 bg-white border-2 border-[#111111] rounded-xl shadow-[3px_3px_0px_0px_#111111] text-left">
                    <p className="text-[11px] xs:text-xs sm:text-sm text-[#111111]/90 font-semibold leading-snug xs:leading-normal flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#D8D12B] shrink-0 mt-0.5" />
                      <span>
                        From digital menus and reservation systems to custom mobile web applications, every solution is designed around real customer behavior and business growth.
                      </span>
                    </p>
                  </div>

                  {/* Capabilities display - Clean static typographic items */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 pt-4 border-t border-[#111111]/10">
                    {[
                      { text: "Café Websites", icon: Coffee },
                      { text: "Mobile Web Apps", icon: Smartphone },
                      { text: "Digital Menus", icon: BookOpen },
                      { text: "Reservation Systems", icon: Calendar },
                      { text: "Hospitality Automation", icon: Sparkles },
                      { text: "WhatsApp Ordering", icon: PhoneCall },
                    ].map((pill, i) => {
                      const IconComponent = pill.icon;
                      return (
                        <div 
                          key={i} 
                          className="flex items-center gap-2.5 py-1 text-[#111111] select-none"
                        >
                          <div className="w-6 h-6 rounded-lg bg-[#FAF8F4] border border-[#111111]/20 flex items-center justify-center">
                            <IconComponent className="w-3.5 h-3.5 text-[#111111]" />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-[#111111] tracking-wider uppercase">{pill.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Credibility line */}
                  <div className="pt-4 border-t-2 border-[#111111] text-left">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#111111]/70 font-black flex items-center lg:items-start gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#D8D12B] inline-block animate-pulse shrink-0 mt-0.5" />
                      <span>Built specifically for hospitality businesses that care about customer experience and long-term growth.</span>
                    </p>
                  </div>
                </div>
              </section>

              {/* VISUAL SEPARATOR BANNER (STANDARD RATIO TEAM BANNER) */}
              <div className="max-w-3xl sm:max-w-4xl mx-auto w-full bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#111111] sm:shadow-[6px_6px_0px_0px_#111111] relative aspect-video">
                <img
                  src={PERSONAL_INFO.images.teamBannerWide}
                  alt="Nitish Kaushal's agency team at work - We're here for you"
                  className="w-full h-full object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* SECTION 02.5: CAPABILITIES & SERVICES SPECIFICATION */}
              <ServicesOverview />

              {/* SECTION 06: RECOGNITION & APPROACH */}
              <section id="approach" className="space-y-8 pt-8">
                <div className="border-b-2 border-[#111111] pb-3 flex justify-between items-end">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#111111]/70 font-extrabold">
                    03 // RECOGNITION & APPROACH
                  </h3>
                  <span className="text-[10px] font-mono text-[#111111]/70 font-black tracking-widest uppercase">PHILOSOPHY</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                  {/* Philosophy & Story Section */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="inline-flex items-center gap-1.5 bg-[#111111]/5 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#111111]/90 uppercase tracking-wider">
                      Proven Through Competition. Refined Through Execution.
                    </div>
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-[1.1] md:leading-none">
                      We Don't Start With Software.<br />We Start With The Business.
                    </h2>
                    <div className="space-y-4 text-[11px] xs:text-xs sm:text-sm text-[#111111]/90 leading-snug xs:leading-normal md:leading-relaxed font-sans font-medium">
                      <p className="font-bold text-[#111111] text-xs xs:text-sm sm:text-base">
                        Most agencies begin with a website, app or CRM.
                      </p>
                      <p>
                        We begin by understanding how the business actually works.
                      </p>
                      <p>
                        Before designing any interface or writing a single line of code, we study customer journeys, sales processes, operational bottlenecks and growth opportunities.
                      </p>
                      <p className="font-bold underline decoration-[#D8D12B] decoration-2">
                        Only then do we design the system.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-[10px] uppercase tracking-wider text-[#111111]/80">
                        <div className="flex items-center gap-2 bg-[#FAF8F4] border border-[#111111]/15 p-2 rounded-lg">
                          <span className="w-2 h-2 rounded-full bg-[#D8D12B]" />
                          <span>Mobile Web App</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#FAF8F4] border border-[#111111]/15 p-2 rounded-lg">
                          <span className="w-2 h-2 rounded-full bg-[#D8D12B]" />
                          <span>Internal Operations</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#FAF8F4] border border-[#111111]/15 p-2 rounded-lg">
                          <span className="w-2 h-2 rounded-full bg-[#D8D12B]" />
                          <span>Sales Automation Engine</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#FAF8F4] border border-[#111111]/15 p-2 rounded-lg">
                          <span className="w-2 h-2 rounded-full bg-[#D8D12B]" />
                          <span>AI-powered Workflow</span>
                        </div>
                      </div>
                      <p className="border-l-4 border-[#111111] pl-3 py-1 bg-[#FAF8F4]/50 leading-snug xs:leading-normal font-bold text-[11px] xs:text-xs sm:text-sm">
                        The goal is never to deliver software. The goal is to deliver business outcomes.
                      </p>
                    </div>
                  </div>

                  {/* Recognition, Achievements & Trust Statement */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div className="space-y-6">
                      <div className="bg-[#FAF8F4]/80 border-2 border-[#111111] rounded-2xl p-5 shadow-[4px_4px_0px_0px_#111111] space-y-4">
                        <div className="border-b border-[#111111]/10 pb-2 flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-[#111111]/60 font-bold">PROVEN RECORD</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        
                        <div className="space-y-4">
                          <div className="space-y-1">
                            <h4 className="font-sans text-lg font-black text-[#111111] uppercase tracking-tight">
                              3× First Place Winner
                            </h4>
                            <p className="text-[11px] sm:text-xs text-[#111111]/80 leading-relaxed font-semibold">
                              Hackathon & Product Competitions for Landing Page Design Concepts created for ITC brand initiatives.
                            </p>
                          </div>

                          <div className="space-y-1">
                            <h4 className="font-sans text-lg font-black text-[#111111] uppercase tracking-tight">
                              14× Design Recognition
                            </h4>
                            <p className="text-[11px] sm:text-xs text-[#111111]/80 leading-relaxed font-semibold">
                              Nominated across multiple brand campaigns for excellence in creative direction, graphic design and conceptual experience design.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Trust Statement Block */}
                      <div className="bg-[#FAF8F4]/30 border-2 border-dashed border-[#D8D2C8] rounded-2xl p-5 space-y-2">
                        <span className="text-[9px] font-mono tracking-widest uppercase text-[#111111]/60 font-bold">TRUST COMPACT</span>
                        <p className="text-xs text-[#111111]/85 leading-relaxed font-semibold italic">
                          "Every product showcased here is built around a real business objective — increasing sales, improving customer experience, streamlining operations or creating scalable digital systems."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metric Strip */}
                <div className="border-y-2 border-[#111111] py-6 sm:py-8 my-6 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center bg-[#FAF8F4]">
                  <div className="space-y-1">
                    <div className="font-sans text-3xl sm:text-4xl font-black text-[#111111] uppercase">
                      3×
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#111111]/70 font-bold">
                      First Place Finishes
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-sans text-3xl sm:text-4xl font-black text-[#111111] uppercase">
                      14×
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#111111]/70 font-bold">
                      Creative Nominations
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-sans text-3xl sm:text-4xl font-black text-[#111111] uppercase">
                      50+
                    </div>
                    <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#111111]/70 font-bold">
                      System Concepts Designed
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-sans text-base sm:text-lg lg:text-xl font-black text-[#111111] uppercase leading-tight pt-2">
                      Hospitality, AI & Business Systems
                    </div>
                  </div>
                </div>
              </section>

              {/* BACK TO ROOT BUTTONS */}
              <div className="pt-6 border-t-2 border-[#111111] flex justify-between items-center">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="text-xs font-mono uppercase tracking-wider text-[#111111]/70 hover:text-[#111111] font-extrabold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  ← Return to cover
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-[#D8D12B] hover:bg-[#111111] text-[#111111] hover:text-white text-xs font-mono uppercase tracking-widest px-6 py-3.5 border-2 border-[#111111] rounded-xl shadow-[3px_3px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#111111] font-extrabold cursor-pointer transition-all"
                >
                  Book A Call →
                </button>
              </div>

            </motion.div>
          )}

          {currentPage === 'work' && (
            <motion.div
              key="work"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="max-w-6xl mx-auto px-4 md:px-8 space-y-16 py-6 md:py-12 text-left"
            >
              {/* WORK PORTFOLIO HEADER */}
              <div className="space-y-4 max-w-3xl mb-12">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-[#111111] text-[#FAF8F4] border border-[#111111] px-3 py-1 rounded inline-block font-black">
                  WORK PORTFOLIO
                </span>
                <h1 className="text-3xl xs:text-4xl md:text-5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-none">
                  Projects, Systems & Growth Experiences
                </h1>
                <p className="text-sm xs:text-base md:text-lg text-[#111111]/70 leading-relaxed font-sans font-semibold">
                  Explore mobile web apps, hospitality platforms, AI systems, landing pages and business solutions built to solve real-world business challenges.
                </p>
              </div>

              {/* SECTION 03: ACTIVE PIPELINES CLIENT SHOWCASE */}
              <section id="pipelines" className="space-y-6 py-4">
                <div className="border-b-2 border-[#111111] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-left">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-[#111111]/70 font-extrabold">
                    Trusted By Businesses
                  </h3>
                  <span className="text-[10px] font-mono text-[#111111]/70 font-black tracking-widest uppercase self-start sm:self-auto">
                    ACTIVE COLLABORATIONS
                  </span>
                </div>

                {/* Seamless Horizontal Animation Loop scrolling to the right */}
                <div className="relative w-full overflow-hidden bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl py-6 shadow-[4px_4px_0px_0px_#111111]">
                  {/* Subtle gradient shields to fade edges for an ultra-premium look */}
                  <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAF8F4] to-transparent z-10 pointer-events-none" />
                  <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAF8F4] to-transparent z-10 pointer-events-none" />

                  {/* Infinite Marquee Wrapper */}
                  <div className="w-full overflow-hidden">
                    <motion.div
                      className="flex gap-4 sm:gap-6 w-max items-center"
                      animate={{ x: ["-33.3333%", "0%"] }}
                      transition={{
                        ease: "linear",
                        duration: 18,
                        repeat: Infinity,
                      }}
                    >
                      {[...CLIENT_BRANDS, ...CLIENT_BRANDS, ...CLIENT_BRANDS].map((item, index) => (
                        <div
                          key={`${item.id}-${index}`}
                          className="w-32 sm:w-40 h-14 sm:h-16 bg-[#FAF8F4]/40 border border-[#D8D2C8] rounded-xl flex items-center justify-center flex-shrink-0 cursor-default select-none"
                        >
                          <div className="scale-[0.65] sm:scale-[0.8] transform-gpu">
                            <ClientLogo logoType={item.logoType} />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* SECTION 05: SELECTED WORK */}
              <section id="ships" className="space-y-6">
                <div className="border-b-2 border-[#111111] pb-3 flex justify-between items-end">
                  <h3 className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#111111]/70 font-extrabold">
                    Portfolio & Projects
                  </h3>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#111111]/70 font-black tracking-widest uppercase">PROVEN ARCHITECTURE</span>
                </div>

                {/* Diagonal moving premium museum-style showcase gallery */}
                <DiagonalShowcase 
                  onSelectProject={(project) => setSelectedProject(project)}
                  onApplyDemo={() => {
                    setSelectedProject(null);
                    setCurrentPage('enquiry');
                  }}
                />
              </section>

              {/* SECTION 05.5: CREATIVE CAMPAIGNS SEPARATE GALLERY CATEGORY */}
              <CreativeCampaigns />

              {/* BACK TO ROOT BUTTONS */}
              <div className="pt-6 border-t-2 border-[#111111] flex justify-between items-center">
                <button
                  onClick={() => setCurrentPage('home')}
                  className="text-xs font-mono uppercase tracking-wider text-[#111111]/70 hover:text-[#111111] font-extrabold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  ← Return to cover
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="bg-[#D8D12B] hover:bg-[#111111] text-[#111111] hover:text-white text-xs font-mono uppercase tracking-widest px-6 py-3.5 border-2 border-[#111111] rounded-xl shadow-[3px_3px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#111111] font-extrabold cursor-pointer transition-all"
                >
                  Book A Call →
                </button>
              </div>

            </motion.div>
          )}

          {currentPage === 'faq' && (
            <motion.div
              key="faq"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-12"
            >
              <FAQPage onNavigate={(page) => setCurrentPage(page)} />
            </motion.div>
          )}

          {currentPage === 'enquiry' && (
            <motion.div
              key="enquiry"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="max-w-4xl mx-auto px-4 mt-2 md:mt-4 space-y-8"
            >
              <EnquiryForm onBack={() => setCurrentPage('about')} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              className="max-w-4xl mx-auto px-4 mt-2 md:mt-4 space-y-8"
            >
              
              {/* PRIMARY CONTACT COMPONENT */}
              <ContactTerminal />

              {/* QUICK RECENT LOG STATEMENT */}
              <div className="bg-[#FAF8F4] border-2 border-[#111111] p-4 rounded-xl text-center text-[10px] font-mono text-[#111111]/80 font-extrabold tracking-widest shadow-[2px_2px_0px_0px_#111111]">
                SECURE END-TO-END DATA TRANSMISSION // NO COOKIES RECORDED
              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Styled Minimal Magazine Footer */}
      <footer 
        className={`border-t border-[#D8D2C8] ${currentPage === 'home' ? 'hidden md:block py-2 sm:py-4 px-4 sm:px-6' : 'block py-8 px-6'} md:px-12 bg-[#FAF8F4] text-[#666666] text-xs font-mono`}
        style={{ paddingBottom: currentPage === 'home' ? '12px' : '32px', marginTop: '-1px' }}
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="text-center tracking-wider opacity-80">
            <span>© 2026 NITISH KAUSHAL. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </footer>

      {/* Interactive Project Details Lightbox Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onEnquire={() => {
              setSelectedProject(null);
              setCurrentPage('enquiry');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
