import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
      title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro (Carvão)'}
      className={`p-2 rounded-lg border border-[#DFD4C4] dark:border-[#38332E] bg-[#FAF7F1] dark:bg-[#1B1917] text-[#1B1917] dark:text-[#FAF7F1] hover:bg-[#F0E9DE] dark:hover:bg-[#282522] transition-colors focus:outline-none focus:ring-2 focus:ring-[#4C5B3C] ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[#B8763C] transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#3A3532] transition-transform duration-300 rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};
