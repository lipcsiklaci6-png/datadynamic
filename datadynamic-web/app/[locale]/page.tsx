"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import MacOSMockup from "@/components/MacOSMockup";
import SecurityPrivacy from "@/components/SecurityPrivacy";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// SVG Icons
const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
);

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);

const IconCopy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
);

const IconDatabase = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
);

const IconFileCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>
);

const IconPhone = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.7 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const IconLinkedIn = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const UserPlaceholder = () => (
  <div className="w-full h-full bg-[#0A2540]/5 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#0A2540]/20"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  </div>
);

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const tNav = useTranslations('nav');
  const tHero = useTranslations('hero');
  const tProblem = useTranslations('problem');
  const tSolution = useTranslations('solution');
  const tOutput = useTranslations('output');
  const tFounder = useTranslations('founder');
  const tContact = useTranslations('contact');

  const email = "laszlo.lipcsik@datadynamic.eu";
  const phone = "+36303849691";
  const linkedinUrl = "https://www.linkedin.com/in/l%C3%A1szl%C3%B3-lipcsik-158932403/";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
  };

  return (
    <div className="min-h-screen selection:bg-[#D4AF37]/30 scroll-smooth text-[#0A2540]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F8F8F8]/80 backdrop-blur-md border-b border-[#0A2540]/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="relative w-40 h-10">
            <Image 
              src="/logo.svg" 
              alt="DataDynamic Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#0A2540]/70">
            <a href="#problem" className="hover:text-[#0A2540] transition-colors">{tNav('problem')}</a>
            <a href="#megoldas" className="hover:text-[#0A2540] transition-colors">{tNav('solution')}</a>
            <a href="#security" className="hover:text-[#0A2540] transition-colors">{tNav('security')}</a>
            <a href="#kimenet" className="hover:text-[#0A2540] transition-colors">{tNav('output')}</a>
            <a href="#founder" className="hover:text-[#0A2540] transition-colors">{tNav('founder')}</a>
          </div>
          <div className="flex items-center gap-6">
             <div className="text-[10px] font-bold text-[#0A2540]/40 flex gap-2">
                {['en', 'de', 'hu'].map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLanguage(l)}
                    className={`uppercase hover:text-[#0A2540] transition-colors ${locale === l ? 'text-[#0A2540] underline decoration-[#D4AF37] decoration-2 underline-offset-4' : ''}`}
                  >
                    {l}
                  </button>
                ))}
             </div>
             <a 
              href="#kapcsolat" 
              className="text-sm font-bold bg-[#0A2540] text-white px-5 py-2 rounded-full hover:bg-[#0A2540]/90 transition-all"
            >
              {tNav('contact')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Screen */}
      <section id="hero" className="pt-32 pb-24 px-6 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6">
              {tHero('badge')}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0A2540] leading-[1.1] mb-8">
              {tHero('title')}
            </h1>
            <p className="text-xl text-[#0A2540]/70 mb-10 leading-relaxed max-w-xl">
              {tHero('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#kapcsolat"
                className="px-10 py-4 bg-[#0A2540] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-[#0A2540]/10"
              >
                {tHero('cta_primary')} <IconArrowRight />
              </a>
              <a 
                href="#megoldas"
                className="px-10 py-4 border-2 border-[#0A2540]/10 text-[#0A2540] rounded-full font-bold hover:bg-[#0A2540]/5 transition-all"
              >
                {tHero('cta_secondary')}
              </a>
            </div>
          </motion.div>
          
          <div className="relative">
             <MacOSMockup />
             <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              viewport={{ once: true }}
              {...fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                {tProblem('title')}
              </h2>
              <div className="space-y-6">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div 
                    key={i} 
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                    <p className="text-[#0A2540]/70 leading-relaxed">{tProblem(`items.${i}`)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="relative p-8 bg-[#F8F8F8] rounded-3xl border border-[#0A2540]/5"
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative space-y-4">
                <div className="h-2 w-1/2 bg-red-100 rounded-full" />
                <div className="h-2 w-3/4 bg-red-100 rounded-full" />
                <div className="h-2 w-2/3 bg-red-100 rounded-full" />
                <div className="flex gap-4 items-center py-4">
                  <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xs font-mono text-red-500 bg-red-50 px-2 py-1 rounded"
                  >
                    ERROR: MAPPING_FAILED
                  </motion.div>
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="text-xs font-mono text-red-500 bg-red-50 px-2 py-1 rounded"
                  >
                    SCOPE_3_GAP
                  </motion.div>
                </div>
                <div className="h-2 w-5/6 bg-red-100 rounded-full" />
                <div className="h-2 w-1/3 bg-red-100 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section (Megoldás) */}
      <section id="megoldas" className="py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            viewport={{ once: true }}
            {...fadeIn}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">{tSolution('title')}</h2>
            <p className="text-[#0A2540]/70">{tSolution('subtitle')}</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0A2540]/10 to-transparent -translate-y-1/2 hidden md:block" />

            <div className="grid md:grid-cols-3 gap-12 items-center relative z-10">
              <motion.div 
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-[#0A2540]/5"
              >
                <div className="mb-6 relative">
                   <IconDatabase className="w-12 h-12 text-[#0A2540]/20 mx-auto" />
                   <motion.div 
                    animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2"
                   >
                     <div className="w-1 h-4 bg-[#D4AF37]/40 rounded-full" />
                   </motion.div>
                </div>
                <h3 className="font-bold text-[#0A2540] mb-2 text-xl">{tSolution('input')}</h3>
                <p className="text-sm text-[#0A2540]/60">{tSolution('input_desc')}</p>
              </motion.div>

              <motion.div 
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#0A2540] p-12 rounded-[3rem] shadow-2xl text-white relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#1a3d5f]" />
                <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-3xl"
                />
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <svg className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </motion.div>
                  <h3 className="font-bold text-2xl mb-2 tracking-tight">{tSolution('engine')}</h3>
                  <p className="text-[#D4AF37] font-bold text-xs tracking-widest uppercase">{tSolution('engine_badge')}</p>
                </div>
              </motion.div>

              <motion.div 
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm border border-[#0A2540]/5"
              >
                <div className="mb-6">
                  <IconFileCheck className="w-12 h-12 text-[#D4AF37] mx-auto" />
                </div>
                <h3 className="font-bold text-[#0A2540] mb-2 text-xl">{tSolution('output')}</h3>
                <p className="text-sm text-[#0A2540]/60">{tSolution('output_desc')}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SecurityPrivacy />

      {/* Output Section (Kimenet) */}
      <section id="kimenet" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">{tOutput('title')}</h2>
            <p className="text-[#0A2540]/70">{tOutput('subtitle')}</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="group p-8 rounded-2xl bg-[#F8F8F8] hover:bg-[#0A2540] transition-all duration-500 border border-[#0A2540]/5"
              >
                <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                  <IconCheck />
                </div>
                <h3 className="font-bold text-[#0A2540] group-hover:text-white mb-2 text-lg">{tOutput(`items.${i}.title`)}</h3>
                <p className="text-[#0A2540]/60 group-hover:text-white/70 text-sm leading-relaxed">{tOutput(`items.${i}.desc`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Section (Alapító) */}
      <section id="founder" className="py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-[#0A2540]/5 flex flex-col md:flex-row gap-12 md:gap-20 items-center md:items-start">
            <motion.div 
              viewport={{ once: true }}
              {...fadeIn}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-2xl relative group"
            >
               {!imageError ? (
                 <Image 
                   src="../../images/Founder.png" 
                   alt={tFounder('name')}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                   onError={() => setImageError(true)}
                 />
               ) : (
                 <UserPlaceholder />
               )}
            </motion.div>
            
            <motion.div 
              viewport={{ once: true }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex-1"
            >
              <span className="text-[#D4AF37] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">{tFounder('badge')}</span>
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-3xl md:text-4xl font-black text-[#0A2540]">{tFounder('name')}</h2>
                <a 
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A2540]/30 hover:text-[#0077B5] transition-colors"
                  title="Connect on LinkedIn"
                >
                  <IconLinkedIn className="w-6 h-6" />
                </a>
              </div>
              <p className="text-lg font-bold text-[#0A2540]/60 mb-8">{tFounder('role')}</p>
              
              <div className="prose prose-slate max-w-none">
                {tFounder('description').split('\n\n').map((para, i) => (
                  <p key={i} className="text-[#0A2540]/80 leading-relaxed mb-6 text-justify">
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                 {['Audit-Ready CSRD', 'Scope 3 Reporting', 'CISL Cambridge'].map((tag, i) => (
                   <div key={i} className="px-4 py-2 bg-[#F8F8F8] rounded-full text-[10px] font-black uppercase tracking-widest text-[#0A2540]/40 border border-[#0A2540]/5">
                     {tag}
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section (Kapcsolat) */}
      <section id="kapcsolat" className="py-32 bg-[#0A2540] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{tContact('title')}</h2>
            <p className="text-white/60 mb-12 text-lg max-w-xl mx-auto">
              {tContact('subtitle')}
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href={`mailto:${email}`} 
                  className="inline-flex items-center gap-3 bg-[#D4AF37] text-[#0A2540] px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
                >
                  {email}
                </a>
                
                <button 
                  onClick={copyEmail}
                  className="p-5 rounded-full border-2 border-white/10 hover:bg-white/5 transition-all group relative"
                  title="Copy to clipboard"
                >
                  <IconCopy />
                  <AnimatePresence>
                    {copied && (
                      <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs bg-white text-[#0A2540] px-3 py-1.5 rounded-md font-bold"
                      >
                        {tContact('copied')}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>

              <a 
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 text-[#D4AF37] hover:text-white transition-colors font-bold text-lg group"
              >
                <div className="p-3 rounded-full border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all">
                  <IconPhone />
                </div>
                {tContact('phone')}
              </a>

              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
              >
                <IconLinkedIn className="w-5 h-5" />
                {tContact('linkedin')}
              </a>

              <p className="text-white/40 text-sm">{tContact('response_time')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#0A2540]/5 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="relative w-32 h-8">
            <Image 
              src="/datadynamic/logo.svg" 
              alt="DataDynamic Logo" 
              fill
              className="object-contain object-left grayscale opacity-50"
            />
          </div>
          <div className="text-sm text-[#0A2540]/40">
            © {new Date().getFullYear()} DataDynamic. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[#0A2540]/40 hover:text-[#0A2540] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
