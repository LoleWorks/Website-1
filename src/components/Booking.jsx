import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const services = [
  'General consultation',
  'Dental implant',
  'Teeth whitening',
  'Veneers / smile design',
  'Orthodontics',
  'Pediatric care',
  'Other',
];

export default function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: services[0],
    date: '',
    notes: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="book" className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-900 via-brand-700 to-mint-600 p-6 text-white shadow-2xl shadow-brand-900/30 sm:p-10 lg:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-mint-400/30 blur-3xl"
          />

          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
                Book an appointment
              </span>
              <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl md:text-5xl">
                Let's bring back your <span className="text-mint-400">best smile.</span>
              </h2>
              <p className="mt-4 max-w-md text-white/80">
                Leave your details — one of our coordinators will confirm your visit within
                a few hours. Same-day appointments often available.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <InfoRow icon={MapPin} title="Visit us">
                  Strada Sfatul Țării 61A, Chișinău, MD-2004, Moldova
                </InfoRow>
                <InfoRow icon={Phone} title="Call us">
                  <a className="hover:underline" href="tel:+37362019019">
                    +373 620 19 019
                  </a>
                </InfoRow>
                <InfoRow icon={Clock} title="Open hours">
                  Mon – Sat · 09:00 – 18:00
                </InfoRow>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl bg-white p-6 text-slate-800 shadow-2xl shadow-brand-900/20 sm:p-8">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-8 text-center"
                  >
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-mint-500/10 text-mint-500">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="h-display text-2xl">You're booked in!</h3>
                    <p className="max-w-sm text-slate-600">
                      Thank you, {form.name || 'friend'}. A coordinator will reach out at{' '}
                      <span className="font-semibold">{form.phone || 'your number'}</span> to
                      confirm your appointment.
                    </p>
                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: '',
                          phone: '',
                          service: services[0],
                          date: '',
                          notes: '',
                        });
                      }}
                      className="btn-ghost mt-2"
                    >
                      Book another visit
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-4" onSubmit={onSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Your name"
                        value={form.name}
                        onChange={onChange('name')}
                        required
                        placeholder="Alex Popescu"
                      />
                      <Field
                        label="Phone"
                        value={form.phone}
                        onChange={onChange('phone')}
                        required
                        type="tel"
                        placeholder="+373 ..."
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Service
                      </label>
                      <select
                        value={form.service}
                        onChange={onChange('service')}
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                      >
                        {services.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <Field
                      label="Preferred date"
                      value={form.date}
                      onChange={onChange('date')}
                      type="date"
                    />

                    <div>
                      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Notes (optional)
                      </label>
                      <textarea
                        value={form.notes}
                        onChange={onChange('notes')}
                        rows={3}
                        placeholder="Tell us a bit about what you'd like to address..."
                        className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full group">
                      <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      Request Appointment
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      By booking you agree to be contacted about your appointment.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 flex-none place-items-center rounded-2xl bg-white/10 backdrop-blur">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
          {title}
        </p>
        <p className="text-white/95">{children}</p>
      </div>
    </div>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
      />
    </div>
  );
}
