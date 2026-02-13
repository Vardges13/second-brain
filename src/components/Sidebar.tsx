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
import { useState, useEffect } from 'react';

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  // Mobile hamburger button
  const HamburgerButton = () => (
    <button
      className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      style={{ minHeight: '44px', minWidth: '44px' }}
    >
      {isMobileMenuOpen ? (
        <X className="h-6 w-6" />
      ) : (
        <Menu className="h-6 w-6" />
      )}
    </button>
  );

  // Backdrop for mobile overlay
  const Backdrop = () => (
    isMobileMenuOpen && isMobile ? (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        onClick={closeMobileMenu}
      />
    ) : null
  );

  return (
    <>
      <HamburgerButton />
      <Backdrop />
      
      <aside
        className={`
          fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-700 z-40 transition-all duration-300 ease-in-out
          ${isMobile 
            ? `w-80 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`
            : 'w-64 translate-x-0'
          }
        `}
      >
        {/* Logo */}
        <div className="h-16 border-b border-gray-700 flex items-center justify-center px-4">
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-indigo-400" />
            <span className="text-xl font-bold text-white">
              Second Brain
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <div className="space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out
                    ${isActive 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }
                  `}
                  style={{ minHeight: '44px' }}
                >
                  <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-gray-700 p-4 text-center">
          <span className="text-xs text-gray-400">
            Система управления знаниями
          </span>
        </div>
      </aside>
    </>
  );
}