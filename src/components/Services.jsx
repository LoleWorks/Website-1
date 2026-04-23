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

const services = [
  {
    icon: Stethoscope,
    title: 'Dental Implants',
    desc: 'Titanium and zirconia implants with lifetime-grade materials and a 98.6% success rate.',
    accent: 'from-brand-500 to-mint-500',
  },
  {
    icon: Sparkles,
    title: 'Aesthetic Dentistry',
    desc: 'Veneers, whitening, and smile design tailored to your facial harmony.',
    accent: 'from-mint-400 to-brand-400',
  },
  {
    icon: Smile,
    title: 'Orthodontics',
    desc: 'Invisible aligners and modern braces for children, teens and adults.',
    accent: 'from-brand-600 to-brand-400',
  },
  {
    icon: Scan,
    title: '3D Diagnostics',
    desc: 'Digital scans, 3D CT imaging and guided treatment planning on day one.',
    accent: 'from-mint-500 to-brand-500',
  },
  {
    icon: Baby,
    title: 'Pediatric Care',
    desc: 'Gentle, anxiety-free experience for our youngest patients from age 3.',
    accent: 'from-brand-400 to-mint-400',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Care',
    desc: 'Professional cleanings, sealants and ongoing checkups to protect your smile.',
    accent: 'from-brand-500 to-brand-700',
  },
];

export default function Services() {
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
            What we do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-display mt-5 text-3xl sm:text-4xl md:text-5xl"
          >
            Complete dental care, <span className="gradient-text">thoughtfully delivered.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600"
          >
            From your very first consultation to the final polish — every step of your
            treatment is planned with precision and patient comfort in mind.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
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
                className={`absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br ${s.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30`}
              />
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-lg shadow-brand-500/20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Book consultation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
