import React, { useState, useEffect, useRef } from 'react';
import {
  CompassIcon,
  SearchIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from './Icons';
import { Destination } from '../data';

interface HeaderProps {
  destinations: Destination[];
  onSelectDestination: (id: string) => void;
  onShowAbout: () => void;
  onShowHome: () => void;
  onShowContact: () => void;
}

const Header: React.FC<HeaderProps> = ({
  destinations,
  onSelectDestination,
  onShowAbout,
  onShowHome,
  onShowContact,
}) => {
  const [isDestinationsMenuOpen, setIsDestinationsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideDesktopMenu =
        !menuRef.current || !menuRef.current.contains(target);
      const isOutsideMobileMenu =
        !mobileMenuRef.current || !mobileMenuRef.current.contains(target);

      if (isOutsideDesktopMenu && isOutsideMobileMenu) {
        setIsDestinationsMenuOpen(false);
      }
    };

    if (isDestinationsMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDestinationsMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileLinkClick = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  const handleDestinationClick = (id: string) => {
    onSelectDestination(id);
    setIsDestinationsMenuOpen(false);
    setIsMobileMenuOpen(false);
    setSearchQuery('');
  };

  const normalizedQuery = searchQuery.trim().toLocaleLowerCase('pt-BR');
  const searchResults = normalizedQuery
    ? destinations.filter((destination) =>
        `${destination.name} ${destination.location}`
          .toLocaleLowerCase('pt-BR')
          .includes(normalizedQuery),
      )
    : [];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={onShowHome}
              className="flex items-center focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-md p-1 -ml-1"
            >
              <CompassIcon />
              <span className="ml-2 text-xl font-bold text-stone-900 tracking-wider">
                Explore Mundo
              </span>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-1">
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() =>
                    setIsDestinationsMenuOpen(!isDestinationsMenuOpen)
                  }
                  className="flex items-center text-stone-800 bg-stone-100 hover:bg-stone-200 px-4 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm"
                  aria-haspopup="true"
                  aria-expanded={isDestinationsMenuOpen}
                >
                  <span>Destinos</span>
                  <ChevronDownIcon />
                </button>
                {isDestinationsMenuOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-20">
                    {destinations.map((dest) => (
                      <a
                        key={dest.id}
                        href="#"
                        className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDestinationClick(dest.id);
                        }}
                      >
                        {dest.location}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onShowAbout();
                }}
                className="text-stone-600 hover:bg-stone-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sobre Nós
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onShowContact();
                }}
                className="text-stone-600 hover:bg-stone-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contato
              </a>
            </nav>
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Pesquisar destino..."
                aria-label="Pesquisar destino"
                className="bg-stone-100 placeholder-stone-500 text-stone-900 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500 w-48 transition-all"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                <SearchIcon />
              </div>
              {searchQuery && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-md shadow-lg ring-1 ring-black/5 py-1 z-20">
                  {searchResults.length > 0 ? (
                    searchResults.map((destination) => (
                      <button
                        key={destination.id}
                        type="button"
                        onClick={() => handleDestinationClick(destination.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                      >
                        {destination.name} — {destination.location}
                      </button>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-sm text-stone-500">
                      Nenhum destino encontrado.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-800 hover:bg-stone-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            <div className="relative" ref={mobileMenuRef}>
              <button
                onClick={() =>
                  setIsDestinationsMenuOpen(!isDestinationsMenuOpen)
                }
                className="w-full flex items-center justify-between text-stone-800 bg-stone-100 hover:bg-stone-200 px-3 py-2 rounded-md text-base font-medium"
                aria-haspopup="true"
                aria-expanded={isDestinationsMenuOpen}
              >
                <span>Destinos</span>
                <ChevronDownIcon />
              </button>
              {isDestinationsMenuOpen && (
                <div className="mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1">
                  {destinations.map((dest) => (
                    <a
                      key={dest.id}
                      href="#"
                      className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDestinationClick(dest.id);
                      }}
                    >
                      {dest.location}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleMobileLinkClick(onShowAbout);
              }}
              className="block text-stone-600 hover:bg-stone-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Sobre Nós
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleMobileLinkClick(onShowContact);
              }}
              className="block text-stone-600 hover:bg-stone-200 px-3 py-2 rounded-md text-base font-medium"
            >
              Contato
            </a>
            <div className="relative pt-2">
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Pesquisar destino..."
                aria-label="Pesquisar destino"
                className="w-full bg-stone-100 placeholder-stone-500 text-stone-900 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <div className="absolute inset-y-0 left-0 top-2 pl-3 flex items-center pointer-events-none text-stone-400">
                <SearchIcon />
              </div>
              {searchQuery && (
                <div className="mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black/5 py-1">
                  {searchResults.length > 0 ? (
                    searchResults.map((destination) => (
                      <button
                        key={destination.id}
                        type="button"
                        onClick={() => handleDestinationClick(destination.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                      >
                        {destination.name} — {destination.location}
                      </button>
                    ))
                  ) : (
                    <p className="px-4 py-2 text-sm text-stone-500">
                      Nenhum destino encontrado.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
