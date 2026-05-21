'use client';

import { useEffect } from 'react';
import { useI18n } from '@/app/providers/I18nProvider';
import { siteConfig } from '@/app/config';

export default function DynamicHead() {
    const { locale } = useI18n();
    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]');
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        document.documentElement.lang = locale;
    }, [locale]);
    return null;
}