import React from 'react';
import { ShieldCheck, Package, Truck, Wrench, CheckCircle2, PhoneCall, Plus } from 'lucide-react';
import { ProductItem } from '../data/products';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
  onConsultProduct?: (product: ProductItem) => void;
  isSelected?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onConsultProduct,
  isSelected,
}) => {
  // Category-specific visual icon/illustration representation
  const renderProductIllustration = () => {
    switch (product.category) {
      case 'rice_cooker_appliances':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100/50 p-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-orange-200/60 flex items-center justify-center text-orange-600 mb-2">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11h16a1 1 0 0 1 1 1v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a1 1 0 0 1 1-1Z" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <line x1="12" y1="15" x2="12" y2="17" />
              </svg>
            </div>
            <span className="text-[11px] font-medium text-amber-900 tracking-tight">Thiết bị gia dụng nhà bếp</span>
          </div>
        );
      case 'kitchen_stoves':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 to-red-100/40 p-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-rose-200/60 flex items-center justify-center text-rose-600 mb-2">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="14" rx="2" />
                <circle cx="8" cy="13" r="3" />
                <circle cx="16" cy="13" r="3" />
                <line x1="12" y1="6" x2="12" y2="20" />
              </svg>
            </div>
            <span className="text-[11px] font-medium text-rose-900 tracking-tight">Bếp nấu hiện đại</span>
          </div>
        );
      case 'water_heaters':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100/50 p-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-sky-200/60 flex items-center justify-center text-sky-600 mb-2">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4" />
                <rect x="6" y="6" width="12" height="15" rx="3" />
                <path d="M10 12h4" />
                <circle cx="12" cy="16" r="1" />
              </svg>
            </div>
            <span className="text-[11px] font-medium text-sky-900 tracking-tight">Máy nước nóng gia đình</span>
          </div>
        );
      case 'air_conditioners':
        return (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-100/40 p-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-teal-200/60 flex items-center justify-center text-teal-600 mb-2">
              <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="9" rx="2" />
                <line x1="6" y1="12" x2="18" y2="12" />
                <path d="M6 18c1-1 2-1 3 0s2 1 3 0 2-1 3 0 2 1 3 0" />
              </svg>
            </div>
            <span className="text-[11px] font-medium text-teal-900 tracking-tight">Máy lạnh làm mát</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`group flex flex-col rounded-2xl bg-white border transition-all duration-200 overflow-hidden shadow-xs hover:shadow-md ${
        isSelected ? 'border-rose-500 ring-2 ring-rose-500/20' : 'border-neutral-200 hover:border-neutral-300'
      }`}
    >
      {/* Product Image Area */}
      <div className="relative aspect-[16/11] w-full overflow-hidden border-b border-neutral-150 bg-neutral-100">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={(e) => {
              // Hide image on error and display illustration fallback
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
        ) : (
          renderProductIllustration()
        )}

        {/* Clean category label */}
        <div className="absolute top-2.5 left-2.5 bg-neutral-900/85 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-xs">
          {product.categoryLabel}
        </div>

        {/* Highlight Tag */}
        {product.highlightTag && (
          <div className="absolute top-2.5 right-2.5 bg-rose-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
            {product.highlightTag}
          </div>
        )}

        {/* Model badge at bottom of image if available */}
        {product.modelCode && (
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-xs text-neutral-800 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-neutral-200">
            Mã: {product.modelCode}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Product Name */}
          <h3 className="font-bold text-base text-neutral-900 tracking-tight line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Quick Specs */}
          {product.specs && (
            <div className="mt-1 text-[11px] font-medium text-neutral-500">
              {product.specs}
            </div>
          )}

          {/* Practical gift value note */}
          <p className="mt-1.5 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
            {product.practicalValue}
          </p>

          {/* Price Grid */}
          <div className="mt-3 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs text-neutral-500">Giá chương trình:</span>
              <span className="text-xs sm:text-sm font-bold text-rose-600 font-mono tabular-nums">
                {product.programPrice}
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 mt-1 pt-1 border-t border-neutral-200/60 text-[11px] text-neutral-500">
              <span>Giá tham khảo:</span>
              <span className="font-mono tabular-nums">{product.referencePrice}</span>
            </div>
          </div>

          {/* Key Specs & Status Checklist */}
          <div className="mt-3 space-y-1.5 text-xs">
            <div className="flex items-center justify-between text-neutral-600">
              <span className="inline-flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-neutral-400" />
                Số lượng còn:
              </span>
              <span className="font-medium text-neutral-800 font-mono">
                {product.stockStatus}
              </span>
            </div>

            <div className="flex items-center justify-between text-neutral-600">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                Bảo hành:
              </span>
              <span className="font-medium text-neutral-800">
                {product.warranty}
              </span>
            </div>

            {/* Delivery & Installation Condition (Special focus for AC & water heaters) */}
            <div className="pt-1.5 border-t border-neutral-150">
              <div className="flex items-start gap-1.5 text-[11px] text-neutral-600 leading-tight">
                <Truck className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-neutral-800 font-medium">Giao / Lắp: </strong>
                  {product.deliveryCondition}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons: Nhờ sale tư vấn (Pulse/Rung nhẹ) & Chọn món */}
        <div className="mt-4 pt-3 border-t border-neutral-150 flex items-center gap-2">
          {/* Nút Nhờ sale tư vấn với hiệu ứng pulse nhẹ thu hút sự chú ý */}
          <button
            type="button"
            onClick={() => {
              if (onConsultProduct) {
                onConsultProduct(product);
              } else {
                onSelect(product);
              }
            }}
            className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 active:scale-[0.98] shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer animate-gentle-pulse hover:shadow-md"
            title="Bấm để nhờ Sale KDT-89 báo giá ưu đãi và kiểm tra kho món này"
          >
            <PhoneCall className="w-3.5 h-3.5 text-white shrink-0 animate-subtle-wiggle" />
            <span className="truncate">Nhờ sale tư vấn</span>
          </button>

          {/* Nút Chọn món để lưu vào danh sách gom đơn */}
          <button
            type="button"
            onClick={() => onSelect(product)}
            className={`py-2.5 px-2.5 rounded-xl text-xs font-semibold flex items-center justify-center transition-all cursor-pointer border shrink-0 ${
              isSelected
                ? 'bg-rose-50 text-rose-700 border-rose-300 ring-1 ring-rose-300'
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border-neutral-200'
            }`}
            title={isSelected ? 'Đã chọn món này (Bấm để bỏ chọn)' : 'Lưu món này vào danh sách'}
          >
            {isSelected ? (
              <CheckCircle2 className="w-4 h-4 text-rose-600" />
            ) : (
              <Plus className="w-4 h-4 text-neutral-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
