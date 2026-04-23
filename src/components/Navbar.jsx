import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#book' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-200/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: -8, scale: 1.08 }}
            className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-mint-500 text-white shadow-lg shadow-brand-500/30"
          >
            <ToothIcon className="h-5 w-5" />
          </motion.span>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Scut<span className="gradient-text">Dent</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/60 px-2 py-1.5 backdrop-blur md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+37362019019"
            className="hidden items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-700 lg:flex"
          >
            <Phone className="h-4 w-4" />
            +373 620 19 019
          </a>
          <a href="#book" className="btn-primary !py-2.5 !px-5 text-xs">
            Book a Visit
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden"
          >
            <div className="container-px mx-auto max-w-7xl pb-5">
              <div className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {l.label}
                  </a>
                ))}
                <a href="#book" onClick={() => setOpen(false)} className="btn-primary mt-2">
                  Book a Visit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function ToothIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5.5c-1.5-1.5-4.5-2.5-7-1-2.5 1.5-3 5-1 8 1 1.5 1.5 3 2 5 .5 1.5 1.5 3 3 3s2-1.5 2.5-3c.5-2 1-2 1.5-2s1 0 1.5 2c.5 1.5 1 3 2.5 3s2.5-1.5 3-3c.5-2 1-3.5 2-5 2-3 1.5-6.5-1-8-2.5-1.5-5.5-.5-7 1z" />
    </svg>
  );
}
