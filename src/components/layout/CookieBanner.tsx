import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookie-consent');
  });

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-navy-900 text-white p-4 border-t border-navy-800 shadow-2xl"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-xs md:text-sm text-gray-300 md:pr-8">
              We use necessary cookies to ensure our website functions securely and reliably. By continuing to use this site, you agree to our <Link to="/cookie-policy" className="text-accent-400 underline hover:text-accent-300">Cookie Policy</Link>.
            </div>
            <div className="flex shrink-0 space-x-4">
              <button 
                onClick={acceptCookies} 
                className="bg-white text-navy-900 px-5 py-2 rounded-sm font-semibold text-xs md:text-sm hover:bg-gray-100 transition-colors"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;