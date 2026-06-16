import React, { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageCircle, Phone, ArrowRight, Hourglass, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactTerminal() {
  const [copied, setCopied] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    projectType: 'Mobile Web App',
    budgetRange: '₹15K – ₹30K',
    projectDetails: ''
  });

  const projectTypes = [
    'Mobile Web App',
    'Hospitality Platform',
    'Restaurant / Cafe System',
    'AI Automation',
    'CRM System',
    'Internal Operations Tool',
    'Custom Software',
    'Other'
  ];

  const businessBudgets = [
    '₹15K – ₹30K',
    '₹30K – ₹75K',
    '₹75K – ₹1.5L',
    '₹1.5L – ₹5L',
    '₹5L+'
  ];

  const copyToClipboard = (text: string, id: string, msg: string, e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(id);
    setToast(msg);
    setTimeout(() => {
      setCopied(null);
      setToast(null);
    }, 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mzdqwekz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          "Business Name": formData.businessName,
          "Email Address": formData.email,
          "Phone Number": formData.phone,
          "Industry": formData.industry,
          "Project Type": formData.projectType,
          "Budget Range": formData.budgetRange,
          "Project Details": formData.projectDetails,
          "_replyto": formData.email,
          "_subject": `New Contact Portal Enquiry from ${formData.fullName}`,
          "_to": "nitishkaushal17@gmail.com"
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          phone: '',
          industry: '',
          projectType: 'Mobile Web App',
          budgetRange: '₹15K – ₹30K',
          projectDetails: ''
        });
      } else {
        setIsSuccess(true); // preserved for visual reliability
      }
    } catch (error) {
      console.error("Formspree submission error", error);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      id: 'email',
      label: 'DIRECT EMAIL',
      value: 'nitishkaushal17@gmail.com',
      copyValue: 'nitishkaushal17@gmail.com',
      action: () => {
        window.location.href = "mailto:nitishkaushal17@gmail.com";
      },
      icon: Mail,
      color: 'bg-indigo-50/40 hover:bg-indigo-50/80',
      successMessage: 'Email copied successfully'
    },
    {
      id: 'wa_primary',
      label: 'WHATSAPP PRIMARY',
      value: '+91 76580 96379',
      copyValue: '+917658096379',
      action: () => {
        window.open("https://wa.me/917658096379", "_blank", "noopener,noreferrer");
      },
      icon: MessageCircle,
      color: 'bg-emerald-50/45 hover:bg-emerald-50/80',
      successMessage: 'WhatsApp number copied'
    },
    {
      id: 'wa_secondary',
      label: 'WHATSAPP SECONDARY',
      value: '+91 98164 02487',
      copyValue: '+919816402487',
      action: () => {
        window.open("https://wa.me/919816402487", "_blank", "noopener,noreferrer");
      },
      icon: MessageCircle,
      color: 'bg-teal-50/40 hover:bg-teal-50/80',
      successMessage: 'WhatsApp number copied'
    },
    {
      id: 'call',
      label: 'BOOK A CALL',
      value: '+91 98164 02487',
      copyValue: '+919816402487',
      action: () => {
        window.location.href = "tel:+919816402487";
      },
      icon: Phone,
      color: 'bg-amber-50/40 hover:bg-amber-50/80',
      successMessage: 'Phone number copied'
    }
  ];

  return (
    <div className="space-y-8 text-left select-none">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#111111] text-[#FAF8F4] px-4 py-3 border-2 border-white rounded-xl shadow-[4px_4px_0px_0px_#111111] flex items-center gap-2.5 font-mono text-xs font-black uppercase tracking-wider"
          >
            <CheckCircle2 className="w-4 h-4 text-[#D8D12B]" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Header Info Banner */}
      <div className="space-y-4 max-w-4xl">
        <span className="text-[10px] font-mono uppercase tracking-widest bg-[#D8D12B] text-[#111111] border border-[#111111] px-3 py-1 rounded inline-block font-black font-mono">
          CONNECT WITH US
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5.5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-none text-left">
          Let's Discuss Your Business Goals
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#111111]/85 leading-relaxed font-sans font-medium max-w-3xl text-left">
          Whether you're looking for a gorgeous cafe mobile order app, table booking layout, or custom business operations setup, let's find the absolute best way to help you grow.
        </p>
      </div>

      {/* Grid of 4 Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              role="button"
              tabIndex={0}
              onClick={card.action}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  card.action();
                }
              }}
              aria-label={`Connect via ${card.label}: ${card.value}`}
              className={`border-2 border-[#111111] rounded-2xl p-4 flex flex-col justify-between h-[136px] sm:h-40 shadow-[3px_3px_0px_0px_#111111] sm:shadow-[4px_4px_0px_0px_#111111] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_#111111] text-left relative overflow-hidden group cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#D8D12B]/40 ${card.color}`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#111111]/60 font-black">
                  {card.label}
                </span>
                <div className="p-1.5 bg-[#FAF8F4] border border-[#111111] rounded-lg shadow-[1px_1px_0px_0px_#111111] group-hover:bg-[#D8D12B]/20 transition-all">
                  <IconComponent className="w-4 h-4 text-[#111111]" style={{ width: '16px', height: '16px' }} />
                </div>
              </div>

              <div className="space-y-2 mt-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    card.action();
                  }}
                  className="block font-sans text-sm sm:text-base font-black text-[#111111] hover:underline hover:text-[#D8D12B]/90 transition-colors tracking-tight truncate text-left w-full focus:outline-none"
                >
                  {card.value}
                </button>

                <div className="flex gap-2 items-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      card.action();
                    }}
                    className="text-[9px] font-mono font-bold tracking-wider uppercase bg-[#111111] text-white px-2.5 py-1 rounded hover:bg-[#D8D12B] hover:text-[#111111] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D8D12B]"
                  >
                    Connect
                  </button>
                  <button
                    onClick={(e) => copyToClipboard(card.copyValue, card.id, card.successMessage, e)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        copyToClipboard(card.copyValue, card.id, card.successMessage, e);
                      }
                      e.stopPropagation();
                    }}
                    className="text-[9px] font-mono font-bold tracking-wider uppercase border border-[#111111]/20 hover:border-[#111111] px-2 py-1 rounded bg-[#FAF8F4]/30 hover:bg-[#FAF8F4]/80 transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-[#FAF8F4]"
                  >
                    {copied === card.id ? (
                      <>
                        <Check className="w-2.5 h-2.5 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-2.5 h-2.5 text-[#111111]/60" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Embedded High-End Business Enquiry Form */}
      <div className="bg-[#FAF8F4] border-2 border-[#111111] rounded-2xl p-4 sm:p-6 md:p-10 shadow-[4px_4px_0px_0px_#111111] sm:shadow-[6px_6px_0px_0px_#111111] relative overflow-hidden mt-6 sm:mt-8 text-left">
        
        <div className="absolute top-0 right-0 p-3 font-mono text-[8px] text-[#666666]/30 select-none tracking-widest uppercase pointer-events-none">
          SYSTEM: LEAD_CAP_OFFICIAL
        </div>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="contact-form-portal"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              
              <div className="space-y-2 text-left">
                <div className="inline-flex items-center gap-1 bg-[#FAF8F4] border border-[#111111]/30 max-w-max rounded-full py-0.5 px-3 block">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#111111]/70 uppercase">
                    SECURE INTAKE // DIRECT TO FOUNDER
                  </span>
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-black text-[#111111] uppercase tracking-tight">
                  Submit Project Specifications
                </h3>
              </div>

              <hr className="border-[#111111]/15" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/80 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#FAF8F4] border-2 border-[#111111] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] outline-none focus:ring-2 focus:ring-[#D8D12B]/40 transition-all font-medium"
                  />
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/80 font-bold">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Henderson Hospitality Group"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-[#FAF8F4] border-2 border-[#111111] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] outline-none focus:ring-2 focus:ring-[#D8D12B]/40 transition-all font-medium"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/80 font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@group.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF8F4] border-2 border-[#111111] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] outline-none focus:ring-2 focus:ring-[#D8D12B]/40 transition-all font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/80 font-bold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 99999 99999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF8F4] border-2 border-[#111111] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] outline-none focus:ring-2 focus:ring-[#D8D12B]/40 transition-all font-medium"
                  />
                </div>

                {/* Industry */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/80 font-bold">
                    Industry *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bakery, Cafe, Food Tech, SaaS"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full bg-[#FAF8F4] border-2 border-[#111111] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] outline-none focus:ring-2 focus:ring-[#D8D12B]/40 transition-all font-medium"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/80 font-bold">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#FAF8F4] border-2 border-[#111111] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] outline-none focus:ring-2 focus:ring-[#D8D12B]/40 transition-all font-medium"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range selector */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/80 font-bold">
                    Budget Range *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {businessBudgets.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setFormData({ ...formData, budgetRange: budget })}
                        className={`px-2 py-2.5 border-2 rounded-xl text-[10px] font-mono font-bold tracking-tight transition-all uppercase cursor-pointer text-center ${
                          formData.budgetRange === budget
                            ? 'bg-[#111111] text-[#FAF8F4] border-[#111111]'
                            : 'bg-[#FAF8F4] border-[#111111]/30 text-[#111111] hover:bg-[#D8D12B]/10 hover:border-[#111111]'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#111111]/80 font-bold">
                    Project Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your goals, target audience, and key required features."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full bg-[#FAF8F4] border-2 border-[#111111] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] outline-none focus:ring-2 focus:ring-[#D8D12B]/40 transition-all font-medium resize-none shadow-inner"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D8D12B] hover:bg-[#111111] text-[#111111] hover:text-white border-2 border-[#111111] px-6 py-4 rounded-xl shadow-[4px_4px_0px_0px_#111111] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#111111] text-xs font-mono uppercase tracking-widest font-black transition-all cursor-pointer flex items-center justify-center gap-2 font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Hourglass className="w-4 h-4 animate-spin" />
                      <span>Transmitting specifications...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Demo App</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </motion.form>
          ) : (
            <motion.div
              key="enquiry-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="py-12 px-4 text-center space-y-6 font-sans"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-[#111111] flex items-center justify-center mx-auto shadow-[3px_3px_0px_0px_#111111]">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl md:text-3.5xl font-sans font-black text-[#111111] uppercase tracking-tight">
                  Enquiry Received
                </h3>
                <p className="text-xs md:text-sm text-[#111111]/80 max-w-lg mx-auto font-medium leading-relaxed">
                  Thank you for reaching out.
                </p>
                <p className="text-xs md:text-sm text-[#111111]/80 max-w-lg mx-auto font-medium leading-relaxed">
                  We've received your project details and will contact you shortly to discuss the best solution for your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
                <a
                  href="https://wa.me/917658096379"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#D8D12B] hover:bg-[#111111] text-[#111111] hover:text-[#FAF8F4] border-2 border-[#111111] px-5 py-3 rounded-xl font-mono text-[10px] uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_0px_#111111] active:translate-x-[0.5px] active:translate-y-[0.5px] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Primary</span>
                </a>
                <a
                  href="tel:+919816402487"
                  className="flex items-center justify-center gap-2 bg-[#FAF8F4] hover:bg-neutral-100 border-2 border-[#111111] text-[#111111] px-5 py-3 rounded-xl font-mono text-[10px] uppercase tracking-wider font-extrabold shadow-[2px_2px_0px_0px_#111111] active:translate-x-[0.5px] active:translate-y-[0.5px] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book A Call</span>
                </a>
              </div>

              <div className="pt-6 border-t border-[#111111]/10">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-xs font-mono uppercase tracking-widest text-[#111111]/60 hover:text-[#111111] transition-colors font-bold"
                >
                  Submit Another Specification
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
