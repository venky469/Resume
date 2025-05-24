import React, { useState } from 'react';
import { navLinks } from '../data/navLinks';
import { Menu, X, Circle } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-500 text-white shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-64 bg-white shadow-sm transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 z-40 h-full py-6 flex flex-col`}
      >
        <div className="px-6 mb-6">
          <h2 className="text-gray-500 text-sm font-medium uppercase">  </h2>
        </div>

        <nav className="flex-1">
          <ul>
            {navLinks.map((link) => {
              const Icon = (Icons[link.icon as keyof typeof Icons] as LucideIcon) || Circle;

              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`flex items-center px-6 py-3 text-sm ${
                      link.id === 'dashboard'
                        ? 'text-blue-600 bg-blue-50 border-r-4 border-blue-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={18} className="mr-3" />
                    <span>{link.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
