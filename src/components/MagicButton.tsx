import { Star } from 'lucide-react';
import { ThemeType } from '../types/portfolio';

interface MagicButtonProps {
  currentTheme: ThemeType;
  onThemeChange: () => void;
}

export function MagicButton({ onThemeChange }: MagicButtonProps) {
  return (
    <button
      onClick={onThemeChange}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Change theme"
    >
      <Star className="w-6 h-6 text-white fill-white group-hover:rotate-12 transition-transform duration-300" />
    </button>
  );
}