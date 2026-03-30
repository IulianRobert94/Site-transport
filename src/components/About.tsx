'use client';

import { useLanguage } from '@/context/LanguageContext';

const features = [
  <svg key="gps" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="fleet" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>,
  <svg key="team" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="coverage" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export default function About() {
  const { t } = useLanguage();

  const featureLabels = [
    t.about.feature1,
    t.about.feature2,
    t.about.feature3,
    t.about.feature4,
  ];

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - image / visual */}
          <div className="relative">
            <div className="relative bg-slate-800 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* Abstract truck illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
              <svg
                className="relative w-3/4 text-slate-600"
                viewBox="0 0 400 250"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Truck body */}
                <rect x="20" y="80" width="260" height="120" rx="8" />
                {/* Truck cab */}
                <path d="M280 120 L280 200 L380 200 L380 150 L340 120 Z" />
                <rect x="290" y="130" width="50" height="35" rx="4" fill="#1e293b" />
                {/* Wheels */}
                <circle cx="80" cy="205" r="22" fill="#0f172a" />
                <circle cx="80" cy="205" r="12" fill="#475569" />
                <circle cx="200" cy="205" r="22" fill="#0f172a" />
                <circle cx="200" cy="205" r="12" fill="#475569" />
                <circle cx="330" cy="205" r="22" fill="#0f172a" />
                <circle cx="330" cy="205" r="12" fill="#475569" />
                {/* Accent line */}
                <rect x="20" y="80" width="260" height="8" rx="4" fill="#f97316" />
              </svg>

              {/* Orange accent */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500 rounded-xl opacity-80" />
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-orange-500 rounded-lg opacity-40" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 rounded-2xl p-4 shadow-xl">
              <div className="text-white font-bold text-2xl">15+</div>
              <div className="text-orange-100 text-sm">{t.hero.stat1Label}</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow-xl">
              <div className="text-white font-bold text-2xl">500+</div>
              <div className="text-slate-400 text-sm">{t.hero.stat2Label}</div>
            </div>
          </div>

          {/* Right - text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
              {t.about.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.about.title}
            </h2>
            <p className="text-slate-400 text-lg mb-4 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t.about.description2}
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {featureLabels.map((label, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3"
                >
                  <div className="text-orange-500 shrink-0">{features[i]}</div>
                  <span className="text-slate-300 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
