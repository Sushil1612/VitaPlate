import React from 'react';
import './FilterButtons.css';

const filters = [
  "Filter", "Sort By", "Ratings 4.0+",
  "Pure Veg", "Rs. 300–600", "Less than Rs. 300"
];

const FilterButtons = ({ onFilterClick }) => {
  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <button
          key={filter}
          className="filter-button"
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
