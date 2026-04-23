import { motion } from 'framer-motion';
import { Star, Calendar, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 py-20 md:grid-cols-2 md:py-28 lg:py-32">
        <div className="relative z-10">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="section-eyebrow"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Chișinău · Est. care & implants
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="h-display mt-6 text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            A brighter smile, <br />
            <span className="gradient-text">crafted with care.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            At ScutDent we combine advanced implantology, aesthetic dentistry,
            and warm, personal care — so every visit feels effortless and every
            smile feels like yours again.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#book" className="btn-primary group">
              Book a Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-ghost">
              Explore Treatments
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['#60b1fa', '#4fd1c5', '#93cefd', '#1d5bd7'].map((c, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-white shadow"
                    style={{ background: `linear-gradient(135deg, ${c}, #ffffff55)` }}
                  />
                ))}
              </div>
              <div className="ml-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                  <span className="ml-1.5 text-sm font-semibold text-slate-800">5.0</span>
                </div>
                <p className="text-xs text-slate-500">193+ verified Google reviews</p>
              </div>
            </div>
            <div className="hidden items-center gap-2 text-sm text-slate-600 sm:flex">
              <ShieldCheck className="h-5 w-5 text-mint-500" />
              Licensed specialists & modern equipment
            </div>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto aspect-square w-full max-w-[520px]"
    >
      <div className="absolute inset-0 -z-10 animate-blob bg-gradient-to-br from-brand-200 via-brand-100 to-mint-400/60" />
      <div className="absolute -inset-6 -z-10 animate-blob bg-gradient-to-tr from-mint-400/30 via-white to-brand-300/50 blur-2xl" />

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"
      >
        <div className="relative grid h-56 w-56 place-items-center rounded-full bg-white shadow-2xl shadow-brand-500/20 sm:h-72 sm:w-72">
          <svg viewBox="0 0 64 64" className="h-28 w-28 sm:h-36 sm:w-36" fill="none">
            <defs>
              <linearGradient id="toothGrad" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="#3b90f6" />
                <stop offset="1" stopColor="#2dc0b3" />
              </linearGradient>
            </defs>
            <path
              d="M32 10c-5-5-14-7-21-2-7 4-9 15-3 24 3 5 4 9 6 15 2 5 5 9 9 9s6-4 7-9c1.5-6 3-6 4.5-6s3 0 4.5 6c1 5 3 9 7 9s7-4 9-9c2-6 3-10 6-15 6-9 4-20-3-24-7-5-16-3-21 2z"
              stroke="url(#toothGrad)"
              strokeWidth="2.8"
              strokeLinejoin="round"
              fill="white"
            />
            <path
              d="M24 22c-3 0-5 2-5 5"
              stroke="#93cefd"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </motion.div>

      <FloatingCard
        className="absolute -left-3 top-6 sm:-left-8"
        delay={0.4}
        icon={<Calendar className="h-5 w-5 text-brand-600" />}
        title="Next available"
        value="Today · 15:30"
      />
      <FloatingCard
        className="absolute -right-2 top-24 sm:-right-6"
        delay={0.6}
        icon={<Sparkles className="h-5 w-5 text-mint-500" />}
        title="Implant success"
        value="98.6%"
      />
      <FloatingCard
        className="absolute bottom-4 left-4 sm:bottom-8 sm:left-0"
        delay={0.8}
        icon={<Star className="h-5 w-5 fill-amber-400 text-amber-400" />}
        title="Google rating"
        value="5.0 / 5 · 193"
      />
    </motion.div>
  );
}

function FloatingCard({ icon, title, value, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`card flex items-center gap-3 px-4 py-3 shadow-xl shadow-brand-500/10 ${className}`}
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{title}</p>
        <p className="text-sm font-semibold text-slate-900">{value}</p>
      </div>
    </motion.div>
  );
}
