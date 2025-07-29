import React from 'react';
import Sidebar from '../components/Navbar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';
import FilterButtons from '../components/Filters/FilterButtons';
import CatererList from '../components/Caterer/CatererList';
import './HomePage.css';

const HomePage = () => {
  const handleFilter = (filter) => {
    console.log("Selected filter:", filter);
    // In future: connect with backend or filter CatererList state
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <HeroCarousel />
          <div className="promo-banner">
            Get up to <strong>30% OFF</strong> on your first catering order! Use code: <strong>FIRST30</strong>
          </div>
          <FilterButtons onFilterClick={handleFilter} />
          <CatererList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
