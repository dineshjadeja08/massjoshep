import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services/Services';
import ServiceDetail from './pages/services/ServiceDetail';
import DedicatedTeam from './pages/services/DedicatedTeam';
import IndustryDetail from './pages/industries/IndustryDetail';
import Industries from './pages/industries/Industries';
import Work from './pages/work/Work';
import CaseStudyDetail from './pages/work/CaseStudyDetail';
import Insights from './pages/insights/Insights';
import InsightDetail from './pages/insights/InsightDetail';
import BlogStudio from './pages/insights/BlogStudio';
import Careers from './pages/careers/Careers';
import CareerDetail from './pages/careers/CareerDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import TrustCenter from './pages/company/TrustCenter';
import Partners from './pages/company/Partners';
import Resources from './pages/resources/Resources';
import Engineering from './pages/company/Engineering';
import Security from './pages/company/Security';
import Europe from './pages/regions/Europe';
import MiddleEast from './pages/regions/MiddleEast';
import Australia from './pages/regions/Australia';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/trust" element={<TrustCenter />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/architecture" element={<Engineering />} />
            <Route path="/security" element={<Security />} />
            
            {/* Regional Landing Pages */}
            <Route path="/europe" element={<Europe />} />
            <Route path="/middle-east" element={<MiddleEast />} />
            <Route path="/australia" element={<Australia />} />
            
            {/* Industry Pages */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/:slug" element={<IndustryDetail />} />
            
            <Route path="/services" element={<Services />} />
            <Route path="/services/dedicated-team" element={<DedicatedTeam />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudyDetail />} />
            
            {/* Blog & Insights */}
            <Route path="/blog" element={<Insights />} />
            <Route path="/blog/studio" element={<BlogStudio />} />
            <Route path="/blog/:slug" element={<InsightDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/studio" element={<BlogStudio />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/admin" element={<BlogStudio />} />
            
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<CareerDetail />} />
            
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
