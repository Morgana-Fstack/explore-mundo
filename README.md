# 🌍 Explore Mundo

Aplicação web responsiva para explorar destinos, conhecer atrações e consultar avaliações de viajantes.

O projeto foi desenvolvido como trabalho prático da disciplina **DGT2812 — Desenvolvimento de Aplicativos Móveis**, da Universidade Estácio, em 2026. A implementação atual utiliza React e TypeScript.

## Funcionalidades

- apresentação responsiva de destinos nacionais e internacionais;
- detalhes, descrições e avaliações de cada local;
- busca rápida por nome ou localização;
- navegação adaptada para dispositivos móveis;
- formulário de solicitação de orçamento.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS

## Como executar

Pré-requisito: Node.js 18 ou superior.

```bash
git clone https://github.com/Morgana-Fstack/DGT2812-Desenvolvimento-de-Aplicativos-M-veis-com-Flutter.git
cd DGT2812-Desenvolvimento-de-Aplicativos-M-veis-com-Flutter
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## Validação

```bash
npm run typecheck
npm run build
```

## Estrutura principal

```text
├── components/       # Componentes reutilizáveis e páginas
├── App.tsx           # Navegação e composição da aplicação
├── data.ts           # Conteúdo dos destinos
├── index.tsx         # Ponto de entrada do React
├── index.html        # Documento HTML base
├── vite.config.ts    # Configuração do Vite
└── tsconfig.json     # Configuração do TypeScript
```

## Autora

**Morgana Petterle da Cunha**<br>
Tecnóloga em Desenvolvimento Full Stack — Universidade Estácio<br>
[LinkedIn](https://linkedin.com/in/morgana-petterle) · [GitHub](https://github.com/Morgana-Fstack)
