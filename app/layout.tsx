import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { I18nProvider } from "./providers/I18nProvider";
import { LocaleProvider } from "./providers/LocaleProvider";
import { ThemeProvider } from "./providers/ThemeProvider";
import '@/app/globals.css'
import { siteConfig } from './config';
import DynamicHead from "./providers/DynamicHead";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const defaultLocale = 'en';

const metadataMap = {
  cn: {
    title: '🦛HippoX - AI运行时和技能编排引擎',
    description: '一个可靠的AI运行时和技能编排引擎,具备自主决策能力.',
    openGraph: {
      title: '🦛HippoX - AI运行时和技能编排引擎',
      description: '一个可靠的AI运行时和技能编排引擎,具备自主决策能力.',
    },
  },
  en: {
    title: 'HippoX - An reliable AI runtime and skills orchestration engine.',
    description: 'An reliable AI runtime and skills orchestration engine with autonomous decision-making.',
    openGraph: {
      title: 'HippoX - An reliable AI runtime and skills orchestration engine.',
      description: 'An reliable AI runtime and skills orchestration engine with autonomous decision-making.',
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get('preferredLocale')?.value;
  const locale = savedLocale && (savedLocale === 'cn' || savedLocale === 'en')
    ? savedLocale as 'cn' | 'en'
    : defaultLocale;

  const t = metadataMap[locale];

  return {
    title: t.title,
    description: t.description,
    icons: {
      icon: '/logo.jpeg',
      shortcut: '/logo.jpeg',
      apple: '/logo.jpeg',
    },
    openGraph: {
      type: 'website',
      locale: locale === 'cn' ? 'zh_CN' : 'en_US',
      siteName: siteConfig.name,
      title: t.openGraph.title,
      description: t.openGraph.description,
      images: [
        {
          url: '/banner_1.png',
          width: 1200,
          height: 630,
          alt: 'HippoX',
        },
      ],
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} font-sans antialiased`}>
        <I18nProvider defaultLocale={defaultLocale}>
          <ThemeProvider>
            <LocaleProvider>
              <DynamicHead />
              {children}
            </LocaleProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}