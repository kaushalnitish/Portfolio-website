import React from 'react';
import { 
  Smartphone, 
  Sparkles, 
  Compass, 
  TrendingUp, 
  Layers, 
  MousePointerClick, 
  Lightbulb, 
  Laptop, 
  Database, 
  Tv, 
  MessageSquare,
  FileSearch,
  Users
} from 'lucide-react';

export default function ServicesOverview() {
  const whatWeBuildList = [
    { text: "Mobile Web Apps", icon: Smartphone },
    { text: "Hospitality Platforms", icon: Compass },
    { text: "Restaurant & Cafe Systems", icon: Sparkles },
    { text: "Landing Pages", icon: Laptop },
    { text: "Sales Funnels", icon: TrendingUp },
    { text: "Custom CRM Solutions", icon: Database },
    { text: "AI Automations", icon: Tv },
    { text: "OCR & Data Extraction Tools", icon: FileSearch },
    { text: "Social Media Creatives", icon: MessageSquare },
    { text: "Product Advertisement Design", icon: Layers },
    { text: "Campaign Creative Direction", icon: Lightbulb },
    { text: "Content Marketing Systems", icon: Users },
    { text: "Conversion Optimization", icon: MousePointerClick }
  ];

  const creativeCapabilities = [
    "Product Ad Creatives",
    "Instagram Campaign Design",
    "Brand Visual Systems",
    "Hospitality Promotions",
    "Launch Campaign Assets",
    "Performance Marketing Creatives",
    "Creative Direction"
  ];

  const landingPageFocus = [
    "Product Launches",
    "Hospitality Brands",
    "Lead Generation",
    "SaaS Products",
    "AI Tools",
    "Local Businesses"
  ];

  return (
    <section id="services" className="space-y-8 select-none">
      {/* Editorial section separation line */}
      <div className="border-b-2 border-[#111111] pb-3 flex justify-between items-end">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[#111111]/70 font-extrabold">
          Our Services & Expertise
        </h3>
        <span className="text-[10px] font-mono text-[#111111]/70 font-black tracking-widest uppercase">
          OUR SERVICES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: What We Build */}
        <div className="lg:col-span-6 bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_0px_#111111] sm:shadow-[5px_5px_0px_0px_#111111] space-y-6 text-left flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#D8D12B] text-[#111111] border border-[#111111] px-2.5 py-1 rounded text-[10px] font-mono uppercase font-black tracking-wider">
              What We Build
            </div>
            <h3 className="text-xl sm:text-2xl font-sans font-black text-[#111111] uppercase tracking-tight">
              WHAT WE BUILD
            </h3>
            <p className="text-xs sm:text-sm text-[#111111]/90 leading-relaxed font-sans font-medium">
              We don't just build websites and apps. We help businesses create complete digital growth systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 pt-3">
              {whatWeBuildList.map((service, index) => {
                const IconComp = service.icon;
                return (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-white border border-[#111111]/15 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_0px_#111111]">
                       <IconComp className="w-3.5 h-3.5 text-[#111111]" />
                    </div>
                    <span className="text-[11px] font-sans font-semibold text-[#111111] tracking-tight uppercase">
                      {service.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[#111111]/10 bg-white/40 p-4 rounded-xl border border-[#111111]/5 text-xs text-[#111111]/85 font-medium leading-relaxed italic">
            "Every solution is designed around a business objective—whether that's generating leads, increasing sales, improving operations or creating a stronger customer experience."
          </div>
        </div>

        {/* Right Column: Creative & Landing Pages */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Top block: Creative Direction & Advertising */}
          <div className="bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_0px_#111111] sm:shadow-[5px_5px_0px_0px_#111111] text-left space-y-4 sm:space-y-5 flex-grow">
            <div className="inline-flex items-center gap-1.5 bg-[#111111] text-[#FAF8F4] px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold tracking-wider">
              Creative & Advertising
            </div>
            <h3 className="text-xl font-sans font-black text-[#111111] uppercase tracking-tight">
              CREATIVE DIRECTION & ADVERTISING
            </h3>
            <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed font-sans font-medium">
              Beyond software, we also design creative systems that help brands get noticed. From product advertisements and social media campaigns to landing pages and conversion-focused creative assets, every design is built to communicate value and drive action.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {creativeCapabilities.map((capability, index) => (
                <span 
                  key={index}
                  className="bg-white border border-[#111111]/20 px-2.5 py-1 rounded-lg text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-[#111111]/80 hover:border-[#111111] transition-colors shadow-[1px_1px_0px_0px_#111111]"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom block: Landing Page Design */}
          <div className="bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl p-4 sm:p-6 md:p-8 shadow-[4px_4px_0px_0px_#111111] sm:shadow-[5px_5px_0px_0px_#111111] text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#D8D12B]/20 text-[#111111] border border-[#D8D12B]/40 px-2.5 py-1 rounded text-[10px] font-mono uppercase font-bold tracking-wider">
              Landing Pages
            </div>
            <h3 className="text-xl font-sans font-black text-[#111111] uppercase tracking-tight">
              LANDING PAGE DESIGN
            </h3>
            <p className="text-xs sm:text-sm text-[#111111]/80 leading-relaxed font-sans font-medium">
              We design premium landing pages with a deep focus on clarity, conversion rates, visual elegance, and measurable business outcomes. Engineered specifically for:
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[9px] uppercase tracking-wider text-[#111111]/70">
              {landingPageFocus.map((focus, index) => (
                <div key={index} className="flex items-center gap-1.5 py-0.5 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8D12B]" />
                  <span>{focus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
