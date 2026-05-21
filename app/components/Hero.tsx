/* eslint-disable @next/next/no-img-element */
'use client';

import { useI18n } from '../providers/I18nProvider';
import cnMessages from '@/messages/cn.json';
import enMessages from '@/messages/en.json';
import { useState } from 'react';

export default function Hero() {
  const { locale } = useI18n();
  const isCn = locale === 'cn';
  const t = isCn ? cnMessages.HomePage : enMessages.HomePage;
  const [copied, setCopied] = useState(false);
  const installCommand = 'cargo add hippox';
  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      <div className="mt-6 flex justify-center">
        <div className="inline-flex items-center gap-3 bg-muted/50 backdrop-blur-sm border border-border rounded-full pl-4 pr-2 py-1.5 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground font-mono">$</span>
            <code className="text-sm font-mono text-foreground font-medium tracking-wide">{installCommand}</code>
          </div>
          <button
            onClick={handleCopy}
            className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 ${copied
              ? 'bg-green-500/20 text-green-600 dark:text-green-400'
              : 'bg-muted hover:bg-muted-foreground/20 text-muted-foreground hover:text-foreground'
              }`}
          >
            {copied ? (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}