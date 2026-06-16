import { motion } from 'motion/react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onEnquire?: () => void;
}

export default function ProjectModal({ project, onClose, onEnquire }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
      {/* Background overlay click */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        id={`project-modal-${project.id}`}
        className="relative w-full max-w-4xl bg-[#FAF8F4] border border-[#D8D2C8] rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-modal-btn"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#111111]/10 text-[#111111] hover:bg-[#111111]/20 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Panel */}
        <div className="w-full md:w-1/2 h-44 sm:h-56 md:h-auto min-h-0 md:min-h-[300px] relative bg-[#F2EEE7]">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:hidden" />
          <div className="absolute bottom-4 left-4 text-white md:hidden">
            <span className="text-xs uppercase tracking-widest font-mono text-[#D8D12B] bg-[#111111] px-2 py-0.5 rounded">
              {project.year}
            </span>
            <h3 className="text-2xl font-serif font-bold mt-1">{project.title}</h3>
          </div>
        </div>

        {/* Project Details Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[70vh] md:max-h-[85vh]">
          <div>
            <div className="hidden md:flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest font-mono text-[#666666] border border-[#D8D2C8] px-2.5 py-1 rounded">
                Role: {project.role}
              </span>
              <span className="text-xs font-mono font-bold text-[#111111] bg-[#D8D12B] px-2.5 py-1 rounded">
                {project.year}
              </span>
            </div>

            <h2 className="text-2xl xs:text-3xl md:text-4xl font-serif font-semibold text-[#111111] leading-[1.15] md:leading-tight mb-2 tracking-tight text-left">
              {project.title}
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs font-mono tracking-wider uppercase bg-[#F2EEE7] px-2.5 py-1 text-[#666666] border border-[#D8D2C8]/60 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-xs xs:text-sm md:text-base text-[#111111]/90 font-sans font-medium leading-snug xs:leading-normal md:leading-relaxed mb-6 text-left">
              {project.detailedDescription || project.description}
            </p>

            {/* Performance Stats */}
            {project.stats && (
              <div className="border-t border-[#D8D2C8] pt-6 mb-6">
                <h4 className="text-xs uppercase tracking-widest font-mono text-[#666666] mb-3">
                  Key Metrics & Outcomes
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="bg-[#F2EEE7]/50 border border-[#D8D2C8]/40 p-3 rounded-lg">
                      <div className="text-xl md:text-2xl font-mono font-semibold text-[#111111]">
                        {stat.value}
                      </div>
                      <div className="text-[11px] text-[#666666] font-sans tracking-wide uppercase mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4 border-t border-[#D8D2C8]/60 mt-auto">
            <button
              onClick={() => {
                if (onEnquire) {
                  onEnquire();
                }
              }}
              id={`visit-project-btn-${project.id}`}
              className="flex-1 flex items-center justify-center gap-2 bg-[#111111] text-[#FAF8F4] px-5 py-3 rounded-lg text-sm font-sans uppercase tracking-widest font-medium hover:bg-[#D8D12B] hover:text-[#111111] transition-all cursor-pointer shadow-sm group font-bold"
            >
              Launch Your App
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={onClose}
              id={`close-modal-footer-${project.id}`}
              className="px-4 py-3 border border-[#D8D2C8] rounded-lg text-xs font-sans uppercase tracking-wider text-[#666666] hover:bg-neutral-100 transition-all cursor-pointer font-bold"
            >
              Back
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
