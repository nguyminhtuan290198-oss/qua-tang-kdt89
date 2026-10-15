import React from 'react';
import { PhoneCall, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { KDTLogo } from './KDTLogo';

interface HeaderProps {
  onOpenConsultation: (prefillProduct?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark with Official Logo */}
        <a href="#hero" className="flex items-center gap-2 shrink-0 group">
          <KDTLogo size="md" variant="full" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-600">
          <a href="#combos" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            Combo gợi ý
          </a>
          <a href="#products" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            Quà 20/10
          </a>
          <a href="#budget" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            Theo ngân sách
          </a>
          <a href="#why-kdt" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            Lợi thế KDT-89
          </a>
          <a href="#order-steps" className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0">
            Cách đặt hàng
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onOpenConsultation()}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            <Heart className="w-4 h-4 fill-white/20" />
            <span>Nhờ sale tư vấn</span>
          </button>
        </div>
      </div>
    </header>
  );
};
