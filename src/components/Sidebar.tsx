'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Brain, 
  FileText, 
  CheckSquare, 
  Search, 
  BarChart3,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { name: 'Дашборд', href: '/', icon: BarChart3 },
  { name: 'Память', href: '/memory', icon: Brain },
  { name: 'Документы', href: '/documents', icon: FileText },
  { name: 'Задачи', href: '/tasks', icon: CheckSquare },
  { name: 'Поиск', href: '/search', icon: Search },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '256px',
    height: '100vh',
    backgroundColor: '#111827',
    borderRight: '1px solid #374151',
    display: 'flex',
    flexDirection: 'column' as const,
    zIndex: 40,
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '64px',
    borderBottom: '1px solid #374151',
    padding: '0 1rem',
  };

  const navStyle = {
    flex: 1,
    padding: '1.5rem 1rem',
  };

  const linkStyle = (isActive: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    borderRadius: '0.375rem',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    transition: 'background-color 0.3s ease',
    backgroundColor: isActive ? '#3b82f6' : 'transparent',
    color: isActive ? 'white' : '#d1d5db',
  });

  const iconStyle = {
    marginRight: '0.75rem',
    width: '20px',
    height: '20px',
    flexShrink: 0,
  };

  const footerStyle = {
    borderTop: '1px solid #374151',
    padding: '1rem',
    textAlign: 'center' as const,
    fontSize: '0.75rem',
    color: '#9ca3af',
  };

  return (
    <div style={sidebarStyle}>
      {/* Logo */}
      <div style={logoStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Brain style={{ height: '32px', width: '32px', color: '#3b82f6' }} />
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>
            Second Brain
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={navStyle}>
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              style={linkStyle(isActive)}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = '#1f2937';
                  e.currentTarget.style.color = 'white';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#d1d5db';
                }
              }}
            >
              <item.icon style={iconStyle} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={footerStyle}>
        Система управления знаниями
      </div>
    </div>
  );
}