'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Дашборд', href: '/', icon: '📊' },
  { name: 'Память', href: '/memory', icon: '🧠' },
  { name: 'Документы', href: '/documents', icon: '📄' },
  { name: 'Задачи', href: '/tasks', icon: '✅' },
  { name: 'Поиск', href: '/search', icon: '🔍' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Меню">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <span className="topbar-title">🧠 Second Brain</span>
        </div>
        <span className="topbar-user">Вардгес</span>
      </div>

      {/* Mobile overlay */}
      {open && <div className="sidebar-overlay" onClick={() => setOpen(false)} />}

      {/* Sidebar */}
      <nav className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-section">Навигация</div>
        {navigation.map((item) => {
          const isActive = pathname === item.href || 
            (item.href !== '/' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
            >
              <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
}