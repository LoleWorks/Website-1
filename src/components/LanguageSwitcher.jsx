import { motion } from 'framer-motion';
import { useT } from '../i18n/LanguageContext.jsx';

const langs = [
  { code: 'ro', label: 'RO' },
  { code: 'ru', label: 'RU' },
];

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useT();

  return (
    <div
      className={`relative flex items-center gap-0.5 rounded-full border border-slate-200/70 bg-white/70 p-0.5 backdrop-blur ${
        compact ? 'text-xs' : 'text-xs'
      }`}
    >
      {langs.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            className={`relative z-10 rounded-full px-3 py-1.5 font-semibold transition-colors ${
              active ? 'text-white' : 'text-slate-600 hover:text-brand-700'
            }`}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-600 to-mint-500 shadow-md shadow-brand-500/30"
              />
            )}
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
