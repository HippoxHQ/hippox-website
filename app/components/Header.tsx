'use client';

import { useI18n } from '../providers/I18nProvider';
import { useTheme } from '../providers/ThemeProvider';
import { useState, useRef } from 'react';
import cnMessages from '@/messages/cn.json';
import enMessages from '@/messages/en.json';

const navItems = {
  en: [
    { label: 'Features', dropdown: ['Skill-Driven', 'Autonomous Decision', 'Easy Extend', 'Dynamic Loading'] },
    { label: 'Ecosystem', dropdown: ['Satellites', 'Plugins', 'Integrations', 'Community'] },
    { label: 'Resources', dropdown: ['Documentation', 'API Reference', 'Examples', 'Blog'] },
    { label: 'Community', dropdown: ['GitHub', 'Discord', 'Twitter', 'Discussions'] },
  ],
  cn: [
    { label: '核心特性', dropdown: ['Skill驱动', '自主决策', '易于扩展', '动态加载'] },
    { label: '生态系统', dropdown: ['卫星项目', '插件', '集成', '社区'] },
    { label: '资源', dropdown: ['文档', 'API参考', '示例', '博客'] },
    { label: '社区', dropdown: ['GitHub', 'Discord', 'Twitter', '讨论区'] },
  ]
};

export default function Header() {
  const { locale, setLocale } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const isCn = locale === 'cn';
  const items = isCn ? navItems.cn : navItems.en;
  const headerText = isCn ? cnMessages.Header : enMessages.Header;
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (idx: number) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(idx);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

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

  const handleNavClick = (label: string) => {};
  const handleDocsClick = () => {};
  const handleGithubClick = () => {
    window.open('https://github.com', '_blank');
  };
  const handleDropdownClick = (sub: string) => {};

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 h-14">
        <div className="flex items-center gap-2">
          <img
            src="/logo.jpeg"
            alt="HippoX Logo"
            className="w-7 h-7 rounded object-cover"
          />
          <span className="font-bold text-foreground text-base">
            HippoX
          </span>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => handleNavClick(item.label)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
                {openDropdown === idx && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {item.dropdown.map((sub, subIdx) => (
                      <button
                        key={subIdx}
                        type="button"
                        onClick={() => handleDropdownClick(sub)}
                        className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleDocsClick}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {headerText.docs}
            </button>
            <button
              type="button"
              onClick={handleGithubClick}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {headerText.github}
            </button>
          </div>

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
              className="p-1.5 rounded-lg border border-border hover:border-muted-foreground transition-colors cursor-pointer text-sm text-muted-foreground"
            >
              {isCn ? '中文' : 'EN'}
            </button>
            {showLangDropdown && (
              <div
                className="absolute right-0 mt-1 w-28 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
                onMouseEnter={handleLangMouseEnter}
                onMouseLeave={handleLangMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => { setLocale('cn'); setShowLangDropdown(false); }}
                  className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  中文
                </button>
                <button
                  type="button"
                  onClick={() => { setLocale('en'); setShowLangDropdown(false); }}
                  className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
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