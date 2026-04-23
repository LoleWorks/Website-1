import { motion } from 'framer-motion';
import {
  Sparkles,
  Smile,
  Stethoscope,
  Scan,
  Baby,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { useT } from '../i18n/LanguageContext.jsx';

const icons = [Stethoscope, Sparkles, Smile, Scan, Baby, ShieldCheck];
const accents = [
  'from-brand-500 to-mint-500',
  'from-mint-400 to-brand-400',
  'from-brand-600 to-brand-400',
  'from-mint-500 to-brand-500',
  'from-brand-400 to-mint-400',
  'from-brand-500 to-brand-700',
];

export default function Services() {
  const { t } = useT();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            {t.services.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-display mt-5 text-3xl sm:text-4xl md:text-5xl"
          >
            {t.services.titleA} <span className="gradient-text">{t.services.titleB}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600"
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.list.map((s, i) => {
            const Icon = icons[i];
            const accent = accents[i];
            return (
              <motion.a
                key={s.title}
                href="#book"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="card group relative overflow-hidden p-7 hover:shadow-xl hover:shadow-brand-500/10"
              >
                <div
                  aria-hidden
                  className={`absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
                />
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg shadow-brand-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  {t.services.book}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
