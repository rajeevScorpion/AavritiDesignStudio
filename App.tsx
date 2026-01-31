import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Only scroll to top if not navigating to a hash on the same page
    if (!window.location.hash) {
        window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <CustomCursor />
      <div className="flex flex-col min-h-screen font-sans selection:bg-brand-accent selection:text-white dark:selection:bg-brand-neon dark:selection:text-brand-black bg-brand-white dark:bg-brand-black transition-colors duration-500">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
            {/* Redirect old routes or handle them if direct access needed */}
            <Route path="/studio" element={<Home />} /> 
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;