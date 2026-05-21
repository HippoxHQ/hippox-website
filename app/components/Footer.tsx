'use client';

import { useI18n } from '../providers/I18nProvider';

export default function Footer() {
  const { locale } = useI18n();
  const isCn = locale === 'cn';

  return (
    <div className="text-center text-[10px] text-muted-foreground py-3 border-t border-border">
      Apache-2.0 License · Open Source
    </div>
  );
}