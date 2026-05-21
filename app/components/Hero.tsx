/* eslint-disable @next/next/no-img-element */
'use client';

import { useI18n } from '../providers/I18nProvider';
import cnMessages from '@/messages/cn.json';
import enMessages from '@/messages/en.json';

export default function Hero() {
  const { locale } = useI18n();
  const isCn = locale === 'cn';
  const t = isCn ? cnMessages.HomePage : enMessages.HomePage;
  return (
    <div className="text-center">
      <div className="mb-5 flex justify-center">
        <img
          src="/banner_1.png"
          alt="Banner"
          className="w-full max-w-2xl rounded-lg object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold text-foreground">🦛{t.hero}</h1>
      <p className="text-sm text-muted-foreground mt-1">{t.tagline}</p>
    </div>
  );
}