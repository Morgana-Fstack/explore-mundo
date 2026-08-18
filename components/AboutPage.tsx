import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 border-b pb-4 border-stone-200">
          Sobre o Projeto
        </h1>
        <div className="space-y-4 text-stone-700 leading-relaxed text-lg">
          <div className="p-4 bg-stone-50 rounded-lg">
            <p><strong>Criado por:</strong> Morgana Petterle da Cunha</p>
            <p><strong>Localização:</strong> Curitiba, Paraná</p>
          </div>
          <div className="pt-4 mt-4 border-t border-stone-200">
            <h2 className="text-xl font-semibold text-stone-800 mb-2">Contexto Acadêmico</h2>
            <p>
              Este aplicativo foi criado como forma de trabalho prático para a disciplina:
            </p>
            <p className="font-semibold block mt-2 text-center p-3 bg-stone-100 rounded-md">
              DGT2812 — Desenvolvimento de Aplicativos Móveis
            </p>
            <p className="mt-4">A versão atual foi construída com React, TypeScript e Vite, com foco em responsividade e experiência de navegação.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
