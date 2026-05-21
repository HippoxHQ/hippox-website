'use client';

import { useI18n } from '../providers/I18nProvider';
import cnMessages from '@/messages/cn.json';
import enMessages from '@/messages/en.json';

export default function Hero() {
  const { locale } = useI18n();
  const isCn = locale === 'cn';
  const t = isCn ? cnMessages.HomePage : enMessages.HomePage;
  const handleNoop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <img
          src="/banner_1.png"
          alt="Banner"
          className="w-full max-w-2xl rounded-lg object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold text-foreground">{t.hero}</h1>
      <p className="text-sm text-muted-foreground mt-1">{t.tagline}</p>
      <div className="flex justify-center gap-3 mt-3">
        <button onClick={handleNoop} className="px-4 py-1.5 text-sm bg-muted text-foreground rounded hover:bg-muted/80 cursor-pointer border border-border">
          {t.cta}
        </button>
        <button onClick={handleNoop} className="px-4 py-1.5 text-sm border border-border rounded hover:border-muted-foreground transition-colors cursor-pointer">
          {t.docs}
        </button>
      </div>
    </div>
  );
}