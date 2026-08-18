import React, { useState } from 'react';
import Header from './components/Header';
import DestinationImage from './components/DestinationImage';
import TitleSection from './components/TitleSection';
import ButtonSection from './components/ButtonSection';
import TextSection from './components/TextSection';
import ReviewSection from './components/ReviewSection';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { destinationsData } from './data';
import TravelIntroPage from './components/TravelIntroPage';

type View = 'landing' | 'travelIntro' | 'destinations' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [selectedDestinationId, setSelectedDestinationId] =
    useState<string>('london');

  const handleSelectDestination = (id: string) => {
    setSelectedDestinationId(id);
    setCurrentView('destinations');
  };

  if (currentView === 'landing') {
    return <LandingPage onNavigate={() => setCurrentView('travelIntro')} />;
  }

  const currentDestination =
    destinationsData.find((d) => d.id === selectedDestinationId) ||
    destinationsData[0];

  const renderContent = () => {
    if (currentView === 'travelIntro') {
      return (
        <TravelIntroPage onContinue={() => setCurrentView('destinations')} />
      );
    }
    if (currentView === 'about') {
      return <AboutPage />;
    }
    if (currentView === 'contact') {
      return <ContactPage />;
    }

    // Default to destinations view
    return (
      <main className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <DestinationImage
            imageUrl={currentDestination.image}
            altText={currentDestination.location}
          />
          <div className="p-6 md:p-8">
            <TitleSection
              title={currentDestination.name}
              location={currentDestination.location}
            />
            <ButtonSection onQuoteClick={() => setCurrentView('contact')} />
            <TextSection description={currentDestination.description} />
            <ReviewSection reviews={currentDestination.reviews} />
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className="bg-stone-100 text-stone-800 min-h-screen font-sans antialiased">
      <Header
        destinations={destinationsData}
        onSelectDestination={handleSelectDestination}
        onShowAbout={() => setCurrentView('about')}
        onShowHome={() => setCurrentView('landing')}
        onShowContact={() => setCurrentView('contact')}
      />
      {renderContent()}
    </div>
  );
};

export default App;
