import React, { useEffect, useState } from 'react';
import { Input, Button, Dropdown, Menu } from 'antd';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import DealCard from './DealCard';
import './DealsList.css';
import { fetchSheetData } from '../services/googleSheets';

interface DealsListProps {
  deals: any[];
}

const DealsList: React.FC<DealsListProps> = ({ deals }) => {
  const [filteredDeals, setFilteredDeals] = useState(deals);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'ascend' | 'descend'>('ascend');

  useEffect(() => {
    setFilteredDeals(deals);
  }, [deals]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = deals.filter((deal) =>
      deal.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDeals(filtered);
  };

  const handleSort = () => {
    const newOrder = sortOrder === 'ascend' ? 'descend' : 'ascend';
    setSortOrder(newOrder);
    const sorted = [...filteredDeals].sort((a, b) => {
      if (newOrder === 'ascend') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
    setFilteredDeals(sorted);
  };

  const menu = (
    <Menu onClick={handleSort}>
      <Menu.Item key="1">
        {sortOrder === 'ascend' ? <SortAscendingOutlined /> : <SortDescendingOutlined />} מיין לפי כותרת
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="deals-list-container">
      <div className="toolbar">
      
        <Dropdown overlay={menu} className="sort-dropdown">
          <Button>
            מיין לפי כותרת {sortOrder === 'ascend' ? <SortAscendingOutlined /> : <SortDescendingOutlined />}
          </Button>
        </Dropdown>
        <Input.Search
          placeholder="חפש הטבה"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 200, direction: 'rtl', textAlign: 'right' }}
          className="search-input"
        />
      </div>
      <div className="deals-list">
        {filteredDeals.map((deal) => (
          <DealCard key={deal.id} {...deal} />
        ))}
      </div>
    </div>
  );
};

export default DealsList;