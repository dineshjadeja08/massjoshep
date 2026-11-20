import React, { useState, useEffect } from 'react';
import { Search, X, FileText, Briefcase, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Mock results for Algolia
  const mockResults = [
    { type: 'Service', title: 'Custom Web Application Development', url: '/services/web-development', icon: <Briefcase className="w-4 h-4 text-accent-600" /> },
    { type: 'Resource', title: 'The Cost of Legacy Tech in UAE', url: '/resources', icon: <FileText className="w-4 h-4 text-accent-600" /> },
    { type: 'Insight', title: 'Why We Scope Before We Build', url: '/insights/why-we-scope-before-we-build', icon: <Bookmark className="w-4 h-4 text-accent-600" /> }
  ].filter(res => res.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-navy-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Search Input */}
        <div className="relative flex items-center border-b border-gray-200">
          <Search className="w-6 h-6 text-gray-400 absolute left-4" />
          <input 
            type="text" 
            autoFocus
            className="w-full pl-14 pr-12 py-5 text-lg text-navy-900 focus:outline-none placeholder-gray-400"
            placeholder="Search services, insights, and resources..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="absolute right-4 p-1 rounded-md hover:bg-gray-100 text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-2 bg-gray-50">
          {query.length > 0 ? (
            mockResults.length > 0 ? (
              <ul className="space-y-1">
                {mockResults.map((result, idx) => (
                  <li key={idx}>
                    <button 
                      className="w-full text-left px-4 py-3 hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-200 rounded-lg flex items-center transition-all group"
                      onClick={() => {
                        onClose();
                        navigate(result.url);
                      }}
                    >
                      <div className="bg-navy-50 p-2 rounded-md mr-4 group-hover:bg-navy-100">
                        {result.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-0.5">{result.type}</p>
                        <p className="text-navy-900 font-medium">{result.title}</p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 font-medium">No results found for "{query}"</p>
                <p className="text-sm text-gray-400 mt-1">Try searching for "Web" or "Legacy"</p>
              </div>
            )
          ) : (
            <div className="p-4 text-center">
              <p className="text-sm text-gray-400 font-medium mb-4 uppercase tracking-wider">Algolia Integration Ready</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 cursor-pointer hover:border-accent-500" onClick={() => setQuery('Web')}>Web Apps</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 cursor-pointer hover:border-accent-500" onClick={() => setQuery('Design')}>UX Design</span>
                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 cursor-pointer hover:border-accent-500" onClick={() => setQuery('UAE')}>UAE Logistics</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="bg-white px-4 py-3 border-t border-gray-200 text-xs text-gray-400 flex justify-between items-center">
          <span>Press <strong>Esc</strong> to close</span>
          <span className="flex items-center">Search by <strong className="text-blue-500 ml-1">Algolia</strong></span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
