import { PROJECTS } from '../data';
import { Project } from '../types';
import { Zap, ArrowUpRight } from 'lucide-react';

interface DiagonalShowcaseProps {
  onSelectProject: (project: Project) => void;
  onApplyDemo: () => void;
}

export default function DiagonalShowcase({ onSelectProject, onApplyDemo }: DiagonalShowcaseProps) {
  // Triple-pack items to make sure there is absolutely no gap on widescreen monitors
  const lane1Items = [...PROJECTS, ...PROJECTS, ...PROJECTS];
  const lane2Items = [
    PROJECTS[2], PROJECTS[3], PROJECTS[4], PROJECTS[0], PROJECTS[1],
    PROJECTS[2], PROJECTS[3], PROJECTS[4], PROJECTS[0], PROJECTS[1],
    PROJECTS[2], PROJECTS[3], PROJECTS[4], PROJECTS[0], PROJECTS[1]
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#FAF8F4]/30 py-8 sm:py-12 md:py-16 border-y border-[#D8D2C8]/60">
      {/* Self-contained responsive CSS animation injection for robust performance */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-33.3333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-left-slow {
          animation: marqueeLeft 38s linear infinite;
        }
        .animate-marquee-right-slow {
          animation: marqueeRight 38s linear infinite;
        }
      `}</style>

      {/* Decorative Blur Vignettes */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F2EEE7] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F2EEE7] to-transparent z-10 pointer-events-none" />

      {/* Premium Studio Slant Diagonal Axis Rotation Container */}
      <div className="relative -rotate-1 md:-rotate-2 scale-[1.01] flex flex-col gap-4 sm:gap-6 overflow-hidden py-2 sm:py-4">
        
        {/* ROW 1: Moves Leftwards */}
        <div className="flex w-max select-none hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          <div className="flex gap-4 sm:gap-6 animate-marquee-left-slow pr-4 sm:pr-6">
            {lane1Items.map((project, idx) => (
              <div
                key={`lane1-${project.id}-${idx}`}
                onClick={() => onSelectProject(project)}
                className="w-[210px] xs:w-[240px] sm:w-[320px] md:w-[380px] bg-[#FAF8F4] border border-[#111111]/15 rounded-xl p-3 sm:p-5 flex flex-col justify-between hover:border-[#111111] hover:shadow-[5px_5px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all duration-300 group text-left flex-shrink-0"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#F2EEE7] border border-[#111111]/5 relative mb-3 sm:mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-[0.85] group-hover:saturate-100"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1.5 w-full px-1.5 flex justify-between items-center">
                      <span className="text-[8px] font-mono uppercase bg-[#111111] text-[#FAF8F4] px-1.5 py-0.5 rounded tracking-widest font-black">
                        {project.year || '2025'}
                      </span>
                      <span className="text-[8px] font-mono uppercase bg-[#FAF8F4] text-[#111111] px-1.5 py-0.5 rounded tracking-normal font-bold border border-[#111111]/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="flex justify-between items-start gap-1.5 mb-1 sm:mb-1.5">
                    <h4 className="font-sans text-sm xs:text-base sm:text-lg font-extrabold text-[#111111] tracking-tight group-hover:text-[#D8D12B] transition-colors leading-none uppercase">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#111111]/45 group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                  </div>

                  {/* Metrics Badge */}
                  <div className="inline-flex items-center gap-1 bg-[#D8D12B]/10 border border-[#D8D12B]/30 px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-mono font-bold text-[#111111] mb-2 sm:mb-3">
                    <Zap className="w-2.5 h-2.5 text-[#D8D12B] fill-[#D8D12B]" />
                    <span>{project.monthlyUsers || '10K+ Monthly Users'}</span>
                  </div>

                  {/* Plain language Description is kept minimal & business-driven */}
                  <p className="text-[11px] sm:text-xs text-[#111111]/80 leading-relaxed font-sans font-medium line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-1 mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#111111]/5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-mono tracking-normal uppercase bg-[#111111]/5 px-1.5 py-0.5 text-[#111111]/70 rounded font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Rightwards */}
        <div className="flex w-max select-none hover:[animation-play-state:paused] active:[animation-play-state:paused]">
          <div className="flex gap-4 sm:gap-6 animate-marquee-right-slow pr-4 sm:pr-6">
            {lane2Items.map((project, idx) => (
              <div
                key={`lane2-${project.id}-${idx}`}
                onClick={() => onSelectProject(project)}
                className="w-[210px] xs:w-[240px] sm:w-[320px] md:w-[380px] bg-[#FAF8F4] border border-[#111111]/15 rounded-xl p-3 sm:p-5 flex flex-col justify-between hover:border-[#111111] hover:shadow-[5px_5px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer transition-all duration-300 group text-left flex-shrink-0"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#F2EEE7] border border-[#111111]/5 relative mb-3 sm:mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 saturate-[0.85] group-hover:saturate-100"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1.5 w-full px-1.5 flex justify-between items-center">
                      <span className="text-[8px] font-mono uppercase bg-[#111111] text-[#FAF8F4] px-1.5 py-0.5 rounded tracking-widest font-black">
                        {project.year || '2025'}
                      </span>
                      <span className="text-[8px] font-mono uppercase bg-[#FAF8F4] text-[#111111] px-1.5 py-0.5 rounded tracking-normal font-bold border border-[#111111]/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="flex justify-between items-start gap-1.5 mb-1 sm:mb-1.5">
                    <h4 className="font-sans text-sm xs:text-base sm:text-lg font-extrabold text-[#111111] tracking-tight group-hover:text-[#D8D12B] transition-colors leading-none uppercase">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#111111]/45 group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-0.5" />
                  </div>

                  {/* Metrics Badge */}
                  <div className="inline-flex items-center gap-1 bg-[#D8D12B]/10 border border-[#D8D12B]/30 px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-mono font-bold text-[#111111] mb-2 sm:mb-3">
                    <Zap className="w-2.5 h-2.5 text-[#D8D12B] fill-[#D8D12B]" />
                    <span>{project.monthlyUsers || '10K+ Monthly Users'}</span>
                  </div>

                  {/* Plain language Description is kept minimal & business-driven */}
                  <p className="text-[11px] sm:text-xs text-[#111111]/80 leading-relaxed font-sans font-medium line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-1 mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#111111]/5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-mono tracking-normal uppercase bg-[#111111]/5 px-1.5 py-0.5 text-[#111111]/70 rounded font-bold"
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
    </div>
  );
}
