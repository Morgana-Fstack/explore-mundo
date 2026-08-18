import React from 'react';
import { MapIcon } from './Icons';

interface TravelIntroPageProps {
  onContinue: () => void;
}

const TravelIntroPage: React.FC<TravelIntroPageProps> = ({ onContinue }) => {
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden p-6 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">
          A Maravilha de Viajar
        </h1>
        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Somos uma empresa empenhada em auxiliar você a conquistar o sonho da
          viagem tão sonhada. Deixe-nos cuidar dos detalhes enquanto você cria
          memórias inesquecíveis pelo mundo.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onContinue}
            className="group flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105"
          >
            <MapIcon />
            <span className="ml-3">Explorar Destinos</span>
          </button>
        </div>
      </div>
      <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `}</style>
    </main>
  );
};

export default TravelIntroPage;
