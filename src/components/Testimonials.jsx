import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Emma P.',
    role: 'Google review · 5 months ago',
    rating: 5,
    text: `Super professional people — from the reception to the doctor. Not being from Chișinău, I'm so glad I chose this clinic. I wholeheartedly recommend ScutDent, both for the prices and the quality of care.`,
  },
  {
    name: 'Cristina Pirau',
    role: 'Local Guide · 7 months ago',
    rating: 5,
    text: `I've been a patient at ScutDent for over five years, and I can confidently say that my experiences have consistently been positive. The team is professional, friendly and truly cares about their patients.`,
  },
  {
    name: 'Daniela Nagit',
    role: 'Google review · 3 months ago',
    rating: 5,
    text: `Thank you to the ScutDent team for their seriousness and professionalism. I've had several treatments in the past months and everything was excellent — we felt in very good hands.`,
  },
  {
    name: 'Andrei T.',
    role: 'Google review · 2 months ago',
    rating: 5,
    text: `Professional implant placement and quick treatment. Clean, modern clinic with incredibly warm staff. This is the only clinic I trust with my family's dental care.`,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const current = reviews[index];

  return (
    <section id="reviews" className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/50 to-white py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-10 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute right-[5%] bottom-10 h-72 w-72 rounded-full bg-mint-400/30 blur-3xl" />
      </div>

      <div className="container-px mx-auto max-w-5xl">
        <div className="text-center">
          <span className="section-eyebrow">What patients say</span>
          <h2 className="h-display mt-5 text-3xl sm:text-4xl md:text-5xl">
            Loved by <span className="gradient-text">193+ patients</span> on Google
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400" />
            ))}
            <span className="ml-2 text-sm font-semibold text-slate-800">
              5.0 average rating
            </span>
          </div>
        </div>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card relative mx-auto max-w-3xl p-8 sm:p-12"
            >
              <Quote className="absolute -top-6 left-6 h-14 w-14 text-brand-100" />
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed text-slate-700 sm:text-xl">
                "{current.text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-mint-500 text-sm font-bold text-white">
                  {current.name
                    .split(' ')
                    .map((w) => w[0])
                    .join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{current.name}</p>
                  <p className="text-xs text-slate-500">{current.role}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-700"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % reviews.length)}
              className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-brand-300 hover:text-brand-700"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
