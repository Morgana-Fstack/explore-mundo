import React from 'react';
import { destinationsData } from '../data';

interface LandingPageProps {
  onNavigate: () => void;
}

const collageItems = [
  { src: destinationsData[0].image, className: 'col-span-2 row-span-2' }, // London
  { src: destinationsData[1].image, className: '' }, // Madrid
  { src: destinationsData[4].image, className: '' }, // Rome
  { src: destinationsData[5].image, className: '' }, // Rio
  { src: destinationsData[8].image, className: '' }, // Bariloche
  { src: destinationsData[6].image, className: 'col-span-2' }, // Salvador
  { src: destinationsData[3].image, className: 'col-span-2' }, // Athens
];

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Collage Background */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 sm:gap-2 opacity-80">
        {collageItems.map((item, index) => (
          <div
            key={index}
            className={`bg-cover bg-center transform transition-transform duration-500 hover:scale-105 ${item.className}`}
            style={{ backgroundImage: `url('${item.src}')` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60"></div>

      <div className="relative z-10 text-center p-4">
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          Explore Mundo
        </h1>
        <p
          className="mt-4 text-xl md:text-2xl font-light"
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
        >
          Viagens e suas belezas
        </p>
        <button
          onClick={onNavigate}
          className="mt-12 px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-orange-500 transition-transform transform hover:scale-105"
        >
          Clique aqui para ver os destinos e avaliações
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
