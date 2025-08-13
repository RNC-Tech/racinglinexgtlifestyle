"use client";

import { useState } from 'react';
import Modals from './Modals';

export default function FloatingNavbar() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className="fixed top-12 left-1/2 transform -translate-x-1/2 z-50">
        {/* Main navbar container */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Navigation buttons - Mobile responsive */}
            <button 
              onClick={() => openModal('carClubs')}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full border border-white/20 transition-all duration-100 hover:scale-105 text-sm sm:text-lg font-medium whitespace-nowrap"
            >
              Car Clubs
            </button>
            <button 
              onClick={() => openModal('eventInfo')}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full border border-white/20 transition-all duration-100 hover:scale-105 text-sm sm:text-lg font-medium whitespace-nowrap"
            >
              Event Info
            </button>
            <button 
              onClick={() => openModal('sponsors')}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-full border border-white/20 transition-all duration-100 hover:scale-105 text-sm sm:text-lg font-medium whitespace-nowrap"
            >
              Sponsors
            </button>
          </div>
        </div>

      {/* Render modals */}
      <Modals activeModal={activeModal} closeModal={closeModal} />
    </>
  );
}
