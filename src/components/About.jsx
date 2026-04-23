import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useT } from '../i18n/LanguageContext.jsx';

export default function About() {
  const { t } = useT();

  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl shadow-slate-200/60">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-200 to-mint-400/80 p-6">
                <div className="flex h-full flex-col justify-between text-white">
                  <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
                    {t.about.established}
                  </div>
                  <div>
                    <p className="font-display text-3xl font-semibold">{t.about.years}</p>
                    <p className="text-sm opacity-90">{t.about.yearsSub}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest opacity-80">
                    {t.about.patients}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold">{t.about.patientsValue}</p>
                  <p className="mt-auto text-sm opacity-90">{t.about.patientsSub}</p>
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl bg-white p-5 shadow-inner">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    {t.about.rating}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold text-slate-900">5.0</p>
                  <p className="mt-auto text-sm text-slate-500">{t.about.reviewsSub}</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-3xl bg-gradient-to-br from-mint-400 to-brand-500 shadow-xl shadow-brand-500/30 sm:block"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="section-eyebrow">{t.about.eyebrow}</span>
          <h2 className="h-display mt-5 text-3xl sm:text-4xl md:text-5xl">
            {t.about.titleA} <span className="gradient-text">{t.about.titleB}</span>
          </h2>
          <p className="mt-5 text-slate-600">{t.about.body}</p>

          <ul className="mt-8 space-y-3.5">
            {t.about.points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-mint-500" />
                <span className="text-slate-700">{p}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#book" className="btn-primary">{t.about.team}</a>
            <a
              href="https://scutdent.md"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              {t.about.website}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
