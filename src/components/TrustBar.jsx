import { motion } from 'framer-motion';
import { Award, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { useT } from '../i18n/LanguageContext.jsx';

export default function TrustBar() {
  const { t } = useT();
  const stats = [
    { icon: Users, value: '12,000+', label: t.stats.patients },
    { icon: Award, value: '15+', label: t.stats.years },
    { icon: ShieldCheck, value: '98.6%', label: t.stats.success },
    { icon: HeartHandshake, value: '5.0', label: t.stats.rating },
  ];

  return (
    <section className="container-px mx-auto max-w-7xl -mt-4 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 sm:grid-cols-4"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex items-center gap-4 bg-white px-6 py-6"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <s.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{s.value}</p>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
