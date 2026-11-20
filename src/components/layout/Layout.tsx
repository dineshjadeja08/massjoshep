import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CookieBanner from './CookieBanner';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F7FA]">
      <Header />
      <main className="flex-grow pt-20 lg:pt-28">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Layout;
