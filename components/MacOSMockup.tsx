"use client";

import { motion } from "framer-motion";

// --- Icons ---
const IconFile = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
);

const IconCheck = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>
);

const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
);

const IconLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);

export default function MacOSMockup() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white rounded-2xl shadow-[0_40px_100px_-20px_rgba(10,37,64,0.2)] overflow-hidden border border-[#0A2540]/10 flex flex-col"
    >
      {/* MacOS Title Bar */}
      <div className="bg-[#F3F3F3] px-5 py-3 border-b border-[#0A2540]/5 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-inner" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-inner" />
        </div>
        <div className="text-[9px] font-bold text-[#0A2540]/40 tracking-[0.3em] uppercase">
          Audit Core V2 — Data Refinery
        </div>
        <div className="w-10" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* LEFT COLUMN: BEFORE (Data Chaos) */}
        <div className="flex-1 p-8 bg-white flex flex-col relative overflow-hidden">
          <div className="text-center mb-6">
            <span className="text-[11px] font-extrabold text-[#0A2540]/30 uppercase tracking-widest">before</span>
          </div>

          {/* Messy Excel Table */}
          <div className="flex-1 border border-gray-100 rounded-lg overflow-x-auto bg-[#FBFBFB] shadow-sm">
            <table className="min-w-[400px] lg:min-w-0 w-full text-[10px] font-mono text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {["Verbrauch", "Menge", "Einheit", "Lieferant", "Kostenstelle"].map((h) => (
                    <th key={h} className="px-3 py-2 text-gray-400 font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  ["1.234,56", "12", "kWh", "RWE AG", "DE-101"],
                  ["#WERT!", "", "kW/h", "", "Unknown"],
                  ["500", "500", "KWh", "E.ON SE", "202"],
                  ["1,2", "1,2", "MWh", "", "ERR_404"],
                  ["-", "-", "-", "Shell", "CC_9"],
                  ["1200.00", "1200", "units", "BASF", "HQ_A"],
                  ["", "0", "", "Vattenfall", ""],
                  ["9.999", "9.9", "kwh", "Unknown", "DEP_X"]
                ].map((row, i) => (
                  <tr key={i} className="group">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-3 py-2 whitespace-nowrap ${
                        cell.includes('#') || cell === "" || cell === "ERR_404" ? "bg-red-50/50 text-red-500 font-bold" : "text-gray-500"
                      }`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Warning Message */}
          <div className="mt-6 bg-red-50 border border-red-100 p-4 rounded-xl flex items-start gap-3">
             <span className="text-lg">⚠️</span>
             <div className="flex flex-col">
                <span className="text-[11px] font-bold text-red-600">47 sor karanténban</span>
                <span className="text-[9px] text-red-400 font-mono">Code: UnknownHeader, RangeGuardFail</span>
             </div>
          </div>

          <div className="mt-auto pt-6 flex justify-center">
            <span className="text-[11px] font-black text-red-500 uppercase tracking-tighter bg-red-50 px-4 py-1.5 rounded-full border border-red-200">
               ADATMINŐSÉG: KRITIKUS
            </span>
          </div>
          
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent opacity-20" />
        </div>

        {/* ELEGANT DIVIDER */}
        <div className="hidden lg:block w-[1px] bg-[#E5E7EB] self-stretch" />

        {/* RIGHT COLUMN: AFTER (Big4 Ready Audit Package) */}
        <div className="flex-1 p-8 bg-[#F8F8F8] flex flex-col gap-6 relative overflow-hidden">
          <div className="text-center">
            <span className="text-[11px] font-extrabold text-[#0A2540]/30 uppercase tracking-widest">after</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-[#D4AF37] font-black text-lg leading-tight tracking-tight">BIG4 READY AUDIT PACKAGE</h3>
            <p className="text-[10px] font-bold text-[#0A2540]/40 uppercase tracking-widest">15 verifikált fájl • CRC32 Validated</p>
          </div>

          {/* File Grid */}
          <div className="grid grid-cols-2 gap-2">
            {[
              "00_Manifest.json", "01_GHG_Inventar.xlsx",
              "02_Scope_Breakdown.xlsx", "03_Audit_Trail_Master.xlsx",
              "04_Quarantine_Log.xlsx", "METHODOLOGY.md",
              "ESEF_Report.xhtml", "Manifest.sig"
            ].map((file) => (
              <div key={file} className="bg-white border border-[#0A2540]/5 rounded-lg px-3 py-2.5 flex items-center justify-between group hover:border-[#D4AF37]/30 transition-all shadow-sm">
                <div className="flex items-center gap-2 overflow-hidden">
                  <IconFile className="text-[#D4AF37] shrink-0" />
                  <span className="text-[9px] font-bold text-[#0A2540]/70 truncate">{file}</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
                   <IconCheck className="text-green-500" />
                </div>
              </div>
            ))}
          </div>

          {/* SHA-256 Hash Chain */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-[9px] font-black text-[#0A2540]/30 uppercase tracking-widest">
              <IconLink /> SHA-256 Audit Lánc
            </div>
            <div className="flex items-center gap-1.5 overflow-hidden">
              {["a7f2", "9c1b", "4d8e", "f0a3"].map((hash, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="bg-[#0A2540] text-white px-2 py-1 rounded flex items-center gap-1.5 shadow-md">
                    <span className="text-[8px] font-mono opacity-80">{hash}</span>
                    <IconCheck className="w-2 h-2 text-[#D4AF37]" />
                  </div>
                  {i < 3 && <div className="w-1.5 h-[1px] bg-[#0A2540]/20" />}
                </div>
              ))}
              <div className="flex-1 bg-[#D4AF37] text-[#0A2540] px-3 py-1 rounded font-black text-[8px] shadow-lg whitespace-nowrap">
                MASTER HASH: VERIFIED
              </div>
            </div>
          </div>

          {/* Triage Engine Flow */}
          <div className="bg-white/50 border border-[#0A2540]/5 rounded-2xl p-5 space-y-4">
             <div className="text-[9px] font-black text-[#0A2540]/30 uppercase tracking-widest">Triage Engine Flow</div>
             <div className="flex items-center justify-between gap-1">
                {[
                  { label: "Raw Header", color: "bg-gray-100" },
                  { label: "Dictionary Match", color: "bg-gray-200" },
                  { label: "AI Validation", color: "bg-[#D4AF37]/20" },
                  { label: "Final Category", color: "bg-[#0A2540] text-white" }
                ].map((step, i) => (
                  <div key={i} className="flex flex-1 items-center gap-1">
                    <div className={`flex-1 ${step.color} py-1.5 rounded flex items-center justify-center border border-black/5`}>
                      <span className="text-[7px] font-bold text-center leading-none px-1">{step.label}</span>
                    </div>
                    {i < 3 && <IconArrowRight />}
                  </div>
                ))}
             </div>
          </div>

          <div className="mt-auto pt-6 flex justify-center">
            <span className="text-[11px] font-black text-green-600 uppercase tracking-tighter bg-green-50 px-4 py-1.5 rounded-full border border-green-200 shadow-sm flex items-center gap-2">
               <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               ADATMINŐSÉG: AUDIT-READY
            </span>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Status Footer */}
      <div className="bg-[#0A2540] px-8 py-3 flex justify-between items-center text-white/40 text-[8px] font-black uppercase tracking-[0.4em]">
        <div className="flex gap-6">
          <span className="text-[#D4AF37] group-hover:text-white transition-colors">Targoo Engine V2: Online</span>
          <span>Security: SHA-256/AES-256</span>
        </div>
        <div className="flex gap-4">
           <span>Block Height: 842.102</span>
           <span className="text-white/80">Region: EU-Central-1</span>
        </div>
      </div>
    </motion.div>
  );
}
