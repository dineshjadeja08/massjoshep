import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      return localStorage.getItem('cookie-consent') !== 'true';
    } catch {
      return true;
    }
  });

  const acceptCookies = () => {
    try {
      localStorage.setItem('cookie-consent', 'true');
    } catch {
      // Ignore write errors (e.g., storage disabled)
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 40, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 30, opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          role="region"
          aria-label="Cookie consent"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-96 max-w-[400px] rounded-xl bg-[#0B1F3A] text-white p-4 sm:p-5 border border-slate-700/90 shadow-2xl backdrop-blur-md"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#14B8A6]/20 text-[#14B8A6] shrink-0">
                <Cookie className="w-4 h-4" />
              </span>
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-slate-200">
                Privacy & Cookies
              </h3>
            </div>
            <button
              type="button"
              onClick={acceptCookies}
              aria-label="Dismiss cookie notice"
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            We use essential cookies to maintain secure sessions, telemetry, and platform functionality. By continuing to browse, you agree to our{' '}
            <Link
              to="/cookie-policy"
              className="text-[#14B8A6] underline hover:text-teal-300 transition-colors font-medium"
            >
              Cookie Policy
            </Link>.
          </p>

          <div className="flex items-center justify-end gap-2.5">
            <button
              type="button"
              onClick={acceptCookies}
              className="w-full sm:w-auto bg-[#14B8A6] hover:bg-teal-400 text-[#0B1F3A] font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-all shadow-sm text-center"
            >
              Acknowledge & Close
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
