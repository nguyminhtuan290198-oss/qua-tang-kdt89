/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ComboSection } from './components/ComboSection';
import { GiftCardBuilder } from './components/GiftCardBuilder';
import { ProductCatalog } from './components/ProductCatalog';
import { WhyChooseKDT } from './components/WhyChooseKDT';
import { OrderSteps } from './components/OrderSteps';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { ConsultationModal } from './components/ConsultationModal';
import { PRODUCTS, ComboItem, ProductItem } from './data/products';

export default function App() {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationPrefill, setConsultationPrefill] = useState<string>('');
  const [consultationRecipient, setConsultationRecipient] = useState<'Vợ' | 'Mẹ' | 'Người thân'>('Vợ');
  const [consultationNote, setConsultationNote] = useState<string>('');

  const handleToggleProduct = (product: ProductItem) => {
    setSelectedProductIds((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        return prev.filter((id) => id !== product.id);
      } else {
        return [...prev, product.id];
      }
    });
  };

  const handleSelectCombo = (combo: ComboItem) => {
    setConsultationPrefill(`${combo.name} (${combo.subtitle})`);
    if (combo.id === 'combo-me') {
      setConsultationRecipient('Mẹ');
    } else {
      setConsultationRecipient('Vợ');
    }
    setIsConsultationOpen(true);
  };

  const handleOpenConsultation = (prefillNote?: string) => {
    if (prefillNote) {
      setConsultationPrefill(prefillNote);
    } else if (selectedProductIds.length > 0) {
      const names = selectedProductIds
        .map((id) => PRODUCTS.find((p) => p.id === id)?.name)
        .filter(Boolean)
        .join(', ');
      setConsultationPrefill(names);
    }
    setIsConsultationOpen(true);
  };

  const handleAttachMessage = (message: string, recipientLabel: string) => {
    setConsultationNote(message);
    if (recipientLabel === 'Mẹ') {
      setConsultationRecipient('Mẹ');
    } else if (recipientLabel === 'Vợ') {
      setConsultationRecipient('Vợ');
    } else {
      setConsultationRecipient('Người thân');
    }
    setIsConsultationOpen(true);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedProductNames = selectedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id)?.name)
    .filter(Boolean) as string[];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* 1. Header with Top Bar Contract */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreProducts={handleExploreProducts}
        />

        {/* 3. 3 Suggested Combos */}
        <ComboSection onSelectCombo={handleSelectCombo} />

        {/* 4. Thoughtful 20/10 Greeting Card Builder */}
        <GiftCardBuilder onAttachMessage={handleAttachMessage} />

        {/* 5. 4 Product Groups with Budget Filter */}
        <ProductCatalog
          selectedProductIds={selectedProductIds}
          onToggleProduct={handleToggleProduct}
          onConsultProduct={(product) =>
            handleOpenConsultation(
              `${product.name}${product.modelCode ? ` (Mã: ${product.modelCode})` : ''}`
            )
          }
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 6. Why choose KDT-89 */}
        <WhyChooseKDT />

        {/* 7. Order Steps */}
        <OrderSteps onOpenConsultation={() => handleOpenConsultation()} />

        {/* 8. On-page Registration Form */}
        <RegistrationSection />
      </main>

      {/* 9. Official Footer */}
      <Footer />

      {/* 10. Mobile Sticky Action Bar */}
      <MobileStickyCTA
        onOpenConsultation={() => handleOpenConsultation()}
        selectedCount={selectedProductIds.length}
      />

      {/* 11. Consultation & Reservation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedProductNames={
          consultationPrefill ? [consultationPrefill] : selectedProductNames
        }
        initialRecipient={consultationRecipient}
        initialNote={consultationNote}
      />
    </div>
  );
}
