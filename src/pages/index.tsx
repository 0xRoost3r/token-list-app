import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { InfinityTokens } from '../components/InfinityTokens';
import { TokenTable } from '../components/TokenTable';
import { CreateTokenModal } from '../components/CreateTokenModal';
import { infinityTokens } from '../constants/tokens';
import { tokens } from '../constants/tokens';

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState('progress');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    supply: '',
    description: '',
    website: '',
    twitter: '',
    telegram: ''
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <Header 
        isMobile={isMobile} 
        onCreateClick={() => setIsCreateModalOpen(true)} 
      />

      {isMobile && (
        <button 
          className="fixed bottom-4 right-4 btn btn-primary btn-circle shadow-lg z-10"
          onClick={() => setIsCreateModalOpen(true)}
        >
          +
        </button>
      )}

      <CreateTokenModal 
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        formData={formData}
        onInputChange={handleInputChange}
      />

      <div className="container mx-auto px-4 mt-6">
        <InfinityTokens tokens={infinityTokens} />

        <div className="tabs tabs-boxed bg-base-200 mb-6 overflow-x-auto">
          <a 
            className={`tab whitespace-nowrap ${activeTab === 'progress' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('progress')}
          >
            Progress Ranking
          </a>
          <a 
            className={`tab whitespace-nowrap ${activeTab === 'gainers' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('gainers')}
          >
            24 Hours Gainers Ranking
          </a>
        </div>

        <TokenTable tokens={tokens} isMobile={isMobile} />

        <div className="flex justify-center mt-4">
          <div className="btn-group">
            <button className="btn btn-outline btn-sm md:btn-md">«</button>
            <button className="btn btn-outline btn-sm md:btn-md btn-active">1</button>
            <button className="btn btn-outline btn-sm md:btn-md">2</button>
            <button className="btn btn-outline btn-sm md:btn-md">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
