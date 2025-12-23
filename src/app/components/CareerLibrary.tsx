import { useState } from 'react';
import { Search, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Domain, Career } from '../../data';
import { searchCareers, domains } from '../../data';

interface CareerLibraryProps {
  domain: Domain;
  onSelectCareer: (career: Career) => void;
  onBack: () => void;
}

export function CareerLibrary({ domain, onSelectCareer, onBack }: CareerLibraryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCareers = searchCareers(searchQuery, domain);
  const domainInfo = domains.find(d => d.id === domain);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 pt-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Streams
          </button>
          
          <h1 className="text-3xl md:text-4xl mb-4 text-slate-900">
            Choose Your Dream Career
          </h1>
          <p className="text-lg text-slate-600">
            Select a career to assess your compatibility
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search for a career..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-2xl focus:outline-none focus:border-green-500 transition-colors"
          />
        </div>

        {/* Career Cards */}
        <div className="grid gap-4">
          {filteredCareers.map((career) => (
            <button
              key={career.id}
              onClick={() => onSelectCareer(career)}
              className="bg-white border-2 border-slate-200 rounded-2xl p-6 text-left hover:border-green-500 hover:shadow-lg transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl text-slate-900">
                      {career.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${domainInfo?.color}`}>
                      {domainInfo?.label}
                    </span>
                  </div>
                  <p className="text-slate-600">{career.description}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
              </div>
            </button>
          ))}
        </div>

        {filteredCareers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No careers found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}