import { MapPin, Phone, Globe, Instagram, Facebook } from 'lucide-react';
import { useT } from '../i18n/LanguageContext.jsx';

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-mint-500 text-white shadow-lg shadow-brand-500/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M12 5.5c-1.5-1.5-4.5-2.5-7-1-2.5 1.5-3 5-1 8 1 1.5 1.5 3 2 5 .5 1.5 1.5 3 3 3s2-1.5 2.5-3c.5-2 1-2 1.5-2s1 0 1.5 2c.5 1.5 1 3 2.5 3s2.5-1.5 3-3c.5-2 1-3.5 2-5 2-3 1.5-6.5-1-8-2.5-1.5-5.5-.5-7 1z"/>
                </svg>
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Scut<span className="gradient-text">Dent</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              {t.footer.about}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialBtn label="Instagram"><Instagram className="h-4 w-4" /></SocialBtn>
              <SocialBtn label="Facebook"><Facebook className="h-4 w-4" /></SocialBtn>
              <SocialBtn label="Website" href="https://scutdent.md">
                <Globe className="h-4 w-4" />
              </SocialBtn>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {t.footer.clinic}
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-brand-700">{t.footer.links.services}</a></li>
              <li><a href="#about" className="hover:text-brand-700">{t.footer.links.about}</a></li>
              <li><a href="#reviews" className="hover:text-brand-700">{t.footer.links.reviews}</a></li>
              <li><a href="#book" className="hover:text-brand-700">{t.footer.links.book}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              {t.footer.contact}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                <span>Strada Sfatul Țării 61A, Chișinău, MD-2004</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                <a href="tel:+37362019019" className="hover:text-brand-700">+373 620 19 019</a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="mt-0.5 h-4 w-4 flex-none text-brand-600" />
                <a href="https://scutdent.md" className="hover:text-brand-700" target="_blank" rel="noreferrer">scutdent.md</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ScutDent. {t.footer.rights}</p>
          <p>{t.footer.made}</p>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ children, label, href = '#' }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700"
    >
      {children}
    </a>
  );
}
