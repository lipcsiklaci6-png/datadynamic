"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
);

const IconLink = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);

const IconTrash = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);

export default function SecurityPrivacy() {
  const t = useTranslations("security");

  const cards = [
    {
      icon: <IconShield />,
      title: t("card1_title"),
      desc: t("card1_desc"),
    },
    {
      icon: <IconLink />,
      title: t("card2_title"),
      desc: t("card2_desc"),
    },
    {
      icon: <IconTrash />,
      title: t("card3_title"),
      desc: t("card3_desc"),
    },
  ];

  return (
    <section id="security" className="py-24 bg-[#F9FAFB] border-y border-[#0A2540]/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] mb-4">
            {t("title")}
          </h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-[#0A2540]/5 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-[#0A2540]/5 rounded-xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2540] mb-4">
                {card.title}
              </h3>
              <p className="text-[#0A2540]/60 leading-relaxed text-sm">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
