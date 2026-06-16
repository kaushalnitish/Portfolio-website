import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, ArrowLeft, ArrowRight, X } from 'lucide-react';

interface CampaignItem {
  id: string;
  category: 'Concept Campaign' | 'Creative Exploration' | 'Landing Page Concept' | 'Ad Direction Study';
  title: string;
  description: string;
  strategy: string;
  imageUrl: string;
  tags: string[];
}

export default function CreativeCampaigns() {
  const [selectedItem, setSelectedItem] = useState<CampaignItem | null>(null);

  const campaigns: CampaignItem[] = [
    {
      id: 'midnight-brew',
      category: 'Concept Campaign',
      title: "THE MIDNIGHT BREW",
      description: "A dark-ambient social media asset suite created to build mystery around single-origin cold brew drops.",
      strategy: "Calibrated utilizing high-contrast, deeply saturated noir color coordinates to maximize feed-stopping clicks.",
      imageUrl: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop",
      tags: ["Instagram Ads", "Noir Aesthetic", "Feed Stopping"]
    },
    {
      id: 'kinetic-harmony',
      category: 'Creative Exploration',
      title: "KINETIC HARMONY",
      description: "Atmospheric sensory system exploring how kinetic, floating graphics reflect physical acoustic vibrations in café spaces.",
      strategy: "Employs modern digital vector assets paired with typography scales inspired by 1970s modernist editorial posters.",
      imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
      tags: ["Kinetic Art", "Visual System", "Identity Guide"]
    },
    {
      id: 'avant-slate',
      category: 'Landing Page Concept',
      title: "AVANT SLATE",
      description: "Extremely fast, high-converting checkout landing page designed to optimize friction-free gourmet sales conversions.",
      strategy: "Engineered around high visual hierarchy, oversized product profiles, and immediate key trust markers.",
      imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      tags: ["Conversion System", "Clean CSS Layout", "SaaS Funnel"]
    },
    {
      id: 'clarity-in-black',
      category: 'Ad Direction Study',
      title: "CLARITY IN COLD",
      description: "Minimalist black-and-white print campaign study designed to communicate unmatched raw purity of glass-brewed extraction.",
      strategy: "Utilizes immense tracking-out letters, negative-space composition, and premium editorial layouts.",
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
      tags: ["Print Ad Design", "Swiss Grid", "Core Typo"]
    },
    {
      id: 'rouge-blends',
      category: 'Concept Campaign',
      title: "ROUGE PATTERNS",
      description: "Performance-marketing visual assets crafted to leverage intense, bold warm hues for rapid seasonal café promotions.",
      strategy: "Constructed utilizing raw close-up texture captures, dynamic typography overlays, and custom branding templates.",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
      tags: ["Performance Creative", "Instagram Grid", "Launch System"]
    },
    {
      id: 'solo-subscription',
      category: 'Landing Page Concept',
      title: "SOLO CHECKOUT",
      description: "An ultra-clean, mobile-first micro-baking subscription page created to reduce ordering time from 1 minute to 12 seconds.",
      strategy: "Built specifically around immediate native sensory trigger imagery and a one-tap Apple/Google Pay loop.",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      tags: ["Lead Capture", "Hospitality Funnel", "Ultra-light UI"]
    }
  ];

  // Duo lanes duplication for infinite scrolling without gaps
  const laneItems = [...campaigns, ...campaigns, ...campaigns];

  return (
    <section id="creative-campaigns" className="space-y-4 sm:space-y-6 select-none relative">
      {/* Editorial Separator */}
      <div className="border-b-2 border-[#111111] pb-3 flex justify-between items-end">
        <div className="text-left">
          <span className="text-[9px] font-mono uppercase bg-[#D8D12B]/20 text-[#111111] px-2 py-0.5 rounded tracking-widest font-black border border-[#D8D12B]/40">
            Portfolio Addition
          </span>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#111111]/70 font-extrabold mt-1.5">
            Creative Campaigns & Brand Designs
          </h3>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-[#111111]/70 font-black tracking-widest uppercase hidden xs:inline">
          Brand Strategy & Marketing
        </span>
      </div>

      {/* Intro Context Banner */}
      <div className="bg-[#FAF8F4] border-2 border-[#111111] p-3.5 sm:p-5 rounded-2xl shadow-[4px_4px_0px_0px_#111111] text-left max-w-4xl">
        <p className="text-xs sm:text-sm text-[#111111]/90 font-sans font-semibold leading-relaxed">
          <strong>Creative Campaigns & Marketing Execution:</strong> Beyond custom lines of code, we construct highly expressive visual systems, high-converting product ads, landing page explorations and campaign visuals. Every draft is designed to communicate premium values, tell a cohesive brand story, and drive rapid business outcomes.
        </p>
      </div>

      {/* Marquee Wrapper with slant style coordinating perfectly with the main showcase */}
      <div className="relative w-full overflow-hidden bg-transparent py-3 border-y border-[#D8D2C8]/50">
        <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#F2EEE7] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#F2EEE7] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max select-none hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          <div className="flex gap-3 sm:gap-6 animate-marquee-left-slow pr-3 sm:pr-6 whitespace-nowrap">
            {laneItems.map((item, idx) => (
              <div
                key={`campaign-${item.id}-${idx}`}
                onClick={() => setSelectedItem(item)}
                className="w-[190px] xs:w-[220px] sm:w-[280px] md:w-[320px] bg-[#FAF8F4] border-2 border-[#111111] rounded-xl p-3 flex flex-col justify-between hover:scale-[1.01] hover:shadow-[4px_4px_0px_0px_#111111] sm:shadow-[5px_5px_0px_0px_#111111] transition-all duration-300 cursor-pointer group text-left flex-shrink-0"
              >
                <div>
                  {/* Category label */}
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[7.5px] sm:text-[9px] font-mono uppercase bg-[#111111] text-[#FAF8F4] px-1.5 py-0.5 rounded tracking-wider font-black">
                      {item.category}
                    </span>
                    <span className="text-[8px] font-mono text-[#111111]/50 font-black hidden xs:inline">
                      CONCEPT STUDY // 0{ (idx % 6) + 1 }
                    </span>
                  </div>

                  {/* Image Aspect ratio Container */}
                  <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-[#F2EEE7] border border-[#111111]/10 relative mb-2.5">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 saturate-[0.80] group-hover:saturate-100 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[#111111]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-[#D8D12B] border border-[#111111] rounded-lg px-2.5 py-1 shadow-[1px_1px_0px_0px_#111111] flex items-center gap-1 text-[10px] font-mono font-black text-[#111111] uppercase tracking-wider">
                        <Eye className="w-3 h-3" />
                        <span>Inspect Draft</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="font-sans text-xs xs:text-sm sm:text-base font-black text-[#111111] tracking-tight group-hover:text-[#D8D12B] transition-colors leading-none uppercase mb-1">
                    {item.title}
                  </h4>

                  {/* Subtext description */}
                  <p className="text-[10px] sm:text-xs text-[#111111]/80 leading-relaxed font-sans font-semibold line-clamp-2 whitespace-normal">
                    {item.description}
                  </p>
                </div>

                {/* Technical tags */}
                <div className="flex flex-wrap gap-1 mt-2.5 pt-2.5 border-t border-[#111111]/5">
                  {item.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[7.5px] font-mono tracking-normal uppercase bg-[#111111]/5 px-1.5 py-0.5 text-[#111111]/70 rounded font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conceptual Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FAF8F4] border-2 border-[#111111] w-full max-w-2xl rounded-2xl p-6 md:p-8 shadow-[8px_8px_0px_0px_#111111] space-y-6 text-left relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white hover:bg-red-50 border-2 border-[#111111] rounded-lg p-1.5 shadow-[2px_2px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all focus:outline-none"
              >
                <X className="w-4 h-4 text-[#111111]" />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] sm:text-[11px] font-mono bg-[#D8D12B] text-[#111111] border border-[#111111] px-2.5 py-0.5 rounded inline-block font-black uppercase tracking-wider">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#111111] uppercase tracking-tight">
                  {selectedItem.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#F2EEE7] border-2 border-[#111111] p-1 shadow-[3px_3px_0px_0px_#111111]">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover rounded-lg saturate-[0.9]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 font-sans text-xs sm:text-sm">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] text-[#111111]/50 font-black uppercase tracking-widest block">CONCEPT DESCRIPTION</span>
                    <p className="text-[#111111] font-medium leading-relaxed bg-white border border-[#111111]/15 p-3 rounded-xl shadow-[1.5px_1.5px_0px_0px_#111111]">
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] text-[#111111]/50 font-black uppercase tracking-widest block">STRATEGY & METRICS CALIBRATION</span>
                    <p className="text-[#111111]/90 font-medium leading-relaxed bg-[#D8D12B]/5 border border-[#D8D12B]/35 p-3 rounded-xl shadow-[1.5px_1.5px_0px_0px_#D8D12B]/20">
                      {selectedItem.strategy}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-mono text-[10px] text-[#111111]/50 font-black uppercase tracking-widest block">CAMPAIGN TAGS</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono uppercase bg-[#111111] text-[#FAF8F4] px-2.5 py-0.5 rounded font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[#111111] flex justify-end">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="bg-[#FAF8F4] hover:bg-[#111111] text-[#111111] hover:text-[#FAF8F4] border-2 border-[#111111] px-5 py-2.5 rounded-xl font-mono text-[10px] uppercase tracking-wider font-extrabold shadow-[3px_3px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1.5px_1.5px_0px_0px_#111111] cursor-pointer transition-all"
                >
                  Close Draft
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
