import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { fetchSheetData } from './services/googleSheets';
import './App.css';
import DealDetailPage from './components/DealDetailPage';
import DealsList from './components/DealsList';

const App: React.FC = () => {
  const [deals, setDeals] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dealsData = await fetchSheetData(process.env.REACT_APP_DEALS_SHEET_URL as string);
        const formattedData = dealsData.map((deal: any, index: number) => ({
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DealsList deals={deals} />} />
        <Route path="/deal/:id" element={<DealDetailPage deals={deals} />} />
      </Routes>
    </Router>
  );
};

export default App;