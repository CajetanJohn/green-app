import React, { useState, lazy, Suspense } from 'react';
import '../../assets/styles/mainScreen.css';

// Lazy load page components
const HomePage = lazy(() => import('./Homepage'));
const ChallengesPage = lazy(() => import('./Challenges'));
const NewsPage = lazy(() => import('./News'));
const ProfilePage = lazy(() => import('./UserProfile'));
const Navigation = lazy(() => import('../../components/Navigation')); // Assuming Navigation component is defined

const Main = () => {
  const [displayedPage, setDisplayedPage] = useState('home'); // State for displayed page

  // Function to handle page change
  const handlePageChange = (page) => {
    setDisplayedPage(page);
  };

  // Render different pages based on the displayedPage state
  const renderPage = () => {
    switch (displayedPage) {
      case 'home':
        return <HomePage />;
      case 'challenges':
        return <ChallengesPage />;
      case 'news':
        return <NewsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />; // Default to Home page if no valid page specified
    }
  };

  return (
    <div className="main-container">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="main-component-section">
          <div className="scrollable">
            {renderPage()}
          </div>
        </div>
        <Navigation className="navigation" displayedPage={displayedPage} onPageChange={handlePageChange} />
      </Suspense>
    </div>
  );
};

export default Main;
