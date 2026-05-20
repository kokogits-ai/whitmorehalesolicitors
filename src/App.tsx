/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TestimonialsPage from './pages/TestimonialsPage';
import InteractiveScreener from './components/InteractiveScreener';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScreenerOpen, setIsScreenerOpen] = useState(false);

  // Smooth scroll helper when switching pages
  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div id="firm-core-root" className="min-h-screen flex flex-col bg-[#fbfbfa] text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      
      {/* Header Panel */}
      <Header 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
        onOpenScreener={() => setIsScreenerOpen(true)} 
      />

      {/* Main Pages Canvas wrapper with top boundary offset */}
      <main id="view-portal" className="flex-grow">
        
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-500">
            <Home 
              onPageChange={handlePageChange} 
              onOpenScreener={() => setIsScreenerOpen(true)} 
            />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="animate-in fade-in duration-500">
            <About 
              onPageChange={handlePageChange} 
              onOpenScreener={() => setIsScreenerOpen(true)} 
            />
          </div>
        )}

        {currentPage === 'testimonials' && (
          <div className="animate-in fade-in duration-500">
            <TestimonialsPage 
              onOpenScreener={() => setIsScreenerOpen(true)} 
            />
          </div>
        )}

      </main>

      {/* Footer compliance & info */}
      <Footer 
        onPageChange={handlePageChange} 
        onOpenScreener={() => setIsScreenerOpen(true)} 
      />

      {/* Case Evaluator Modal Portal */}
      {isScreenerOpen && (
        <InteractiveScreener 
          onClose={() => setIsScreenerOpen(false)} 
        />
      )}
    </div>
  );
}
