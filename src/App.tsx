import React, { useEffect, useState } from 'react';
import { fetchSheetData, DealData } from './services/googleSheets';
import DealDetailPage from './components/DealDetailPage';
import DealsList from './components/DealsList';
import './App.css';

interface Deal {
  id: string;
  image: string;
  title: string;
  description: string;
  conditions: string;
  validity: string;
  link: string;
}

const App: React.FC = () => {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = import.meta.env.VITE_DEALS_SHEET_URL as string;
        const dealsData: DealData[] = await fetchSheetData(url);
        const formattedData: Deal[] = dealsData.map((deal, index) => ({
          id: index.toString(),
          image: deal.Image,
          title: deal.Title,
          description: deal.Description,
          conditions: deal.Conditions,
          validity: deal.Expiration,
          link: deal.Link,
        }));
        setDeals(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDealSelect = (deal: Deal) => {
    setSelectedDeal(deal);
  };

  const handleBack = () => {
    setSelectedDeal(null);
  };

  return (
    <div>
      {selectedDeal ? (
        <DealDetailPage deal={selectedDeal} onBack={handleBack} />
      ) : (
        <DealsList deals={deals} onDealSelect={handleDealSelect} />
      )}
    </div>
  );
};

export default App;