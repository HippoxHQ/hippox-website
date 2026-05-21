/* eslint-disable @next/next/no-img-element */
'use client';

import { useI18n } from '../providers/I18nProvider';
import { useTheme } from '../providers/ThemeProvider';
import { useState, useRef } from 'react';

export default function Header() {
  const { locale, setLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const isCn = locale === 'cn';
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLangMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setShowLangDropdown(true);
  };
  const handleLangMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowLangDropdown(false);
    }, 150);
  };
  const handleGithubClick = () => {
    window.open('https://github.com/HippoxHQ', '_blank');
  };
  const handleXClick = () => {
    window.open('https://x.com/HippoxAI', '_blank');
  };
  const handleCargoClick = () => {
    window.open('https://crates.io/crates/hippox', '_blank');
  };
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 h-14">
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.location.href = '/'}
          >
            <img
              src="/logo.jpeg"
              alt="HippoX Logo"
              className="w-7 h-7 rounded object-cover"
            />
            <span className="font-bold text-foreground text-base">
              HippoX
            </span>
          </div>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleXClick}
            className="p-1.5 rounded-lg border border-border hover:border-muted-foreground transition-colors cursor-pointer"
            aria-label="X (Twitter)"
            title={isCn ? '访问 X 账号' : 'Visit X account'}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleCargoClick}
            className="p-1.5 rounded-lg border border-border hover:border-muted-foreground transition-colors cursor-pointer"
            aria-label="Cargo"
            title={isCn ? 'Cargo 包管理器' : 'Cargo package manager'}
          >
            <svg
              className="w-4 h-4 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleGithubClick}
            className="p-1.5 rounded-lg border border-border hover:border-muted-foreground transition-colors cursor-pointer"
            aria-label="GitHub"
            title={isCn ? '访问 GitHub 组织' : 'Visit GitHub organization'}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="none"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.56 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 rounded-lg border border-border hover:border-muted-foreground transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <div
            className="relative"
            onMouseEnter={handleLangMouseEnter}
            onMouseLeave={handleLangMouseLeave}
          >
            <button
              type="button"
              className="px-3 py-1 rounded-lg border border-border hover:border-muted-foreground transition-colors cursor-pointer text-sm font-medium text-muted-foreground"
            >
              {isCn ? 'CN' : 'EN'}
            </button>
            {showLangDropdown && (
              <div
                className="absolute right-0 mt-1 w-24 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                onMouseEnter={handleLangMouseEnter}
                onMouseLeave={handleLangMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => { setLocale('cn'); setShowLangDropdown(false); }}
                  className="block w-full text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  中文
                </button>
                <button
                  type="button"
                  onClick={() => { setLocale('en'); setShowLangDropdown(false); }}
                  className="block w-full text-left px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}