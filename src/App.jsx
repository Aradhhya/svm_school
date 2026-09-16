import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/home/HomePage';
import About from './pages/about/About';
import AcademicsPage from './pages/academics/AcademicsPage';
import FacilitiesPage from './pages/facilities/FacilitiesPage';
import GalleryPage from './pages/gallery/GalleryPage';
import AdmissionPage from './pages/admission/AdmissionPage';
import ContactPage from './pages/contact/ContactPage';
import './App.css';

const VALID_PAGES = ['home', 'about', 'academics', 'facilities', 'gallery', 'admission', 'contact'];

const normalizePageHash = (rawHash) => {
  if (!rawHash) return 'home';
  const clean = rawHash.replace('#', '').toLowerCase().trim();
  if (clean === 'admissions' || clean.startsWith('admission')) {
    return 'admission';
  }
  if (clean === 'philosophy' || clean === 'our-philosophy') {
    return 'academics';
  }
  if (VALID_PAGES.includes(clean)) {
    return clean;
  }
  return null;
};

const getInitialPage = () => {
  if (typeof window !== 'undefined') {
    const matched = normalizePageHash(window.location.hash);
    if (matched) return matched;
  }
  return 'home';
};

function App() {
  const [activePage, setActivePage] = useState(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const matched = normalizePageHash(window.location.hash);
      if (matched) {
        setActivePage(matched);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
  };

  const renderPage = () => {
    switch (activePage.toLowerCase()) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <About />;
      case 'academics':
        return <AcademicsPage />;
      case 'facilities':
        return <FacilitiesPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'admission':
        return <AdmissionPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="svm-app">
      {/* Global Persistent Header across all pages */}
      <Header activePage={activePage} onNavigate={handleNavigate} />
      
      {/* Active Page View */}
      {renderPage()}

      {/* Global Persistent Footer across all pages */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
