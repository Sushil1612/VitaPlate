import React from 'react';
import CatererCard from './CatererCard';
import './CatererList.css';

const sampleCaterers = [
  {
    id: 1,
    name: 'Rasoi Caterers',
    rating: 4.2,
    time: '20–30 mins',
    type: 'North Indian, Punjabi, Tandoor',
    location: 'Sadashiv Peth',
    image: 'https://cloudkitchens.com/static/3bbb9400de0c3a2668dcf2abb8d9f499/Blog-Stock-Images-26-convert.io_.webp',
  },
  {
    id: 2,
    name: 'Shree Krupa Foods',
    rating: 4.1,
    time: '25–35 mins',
    type: 'South Indian, Snacks',
    location: 'Shivajinagar',
    image: 'https://content.jdmagicbox.com/comp/service_catalogue/caterers-9999p1662.1662.211128014014.s6b4-ajhwz6k.jpg',
  },
  {
    id: 3,
    name: 'Vita Thali Services',
    rating: 4.3,
    time: '30–40 mins',
    type: 'Home-style Thalis, Rice Meals',
    location: 'Kothrud',
    image: 'https://www.cateringpune.com/cdn/shop/files/pexels-anilsharma65-10580198.jpg?v=1725900371&width=3840',
  },
  {
    id: 4,
    name: 'Annapurna Swaad',
    rating: 4.5,
    time: '20–25 mins',
    type: 'Gujarati, Rajasthani, Pure Veg',
    location: 'Deccan Gymkhana',
    image: 'https://www.arlingtontx.com/wp-content/uploads/2021/11/mexican-food-catering-spread.png',
  },
  {
    id: 5,
    name: 'Rasoi Caterers',
    rating: 4.2,
    time: '20–30 mins',
    type: 'North Indian, Punjabi, Tandoor',
    location: 'Sadashiv Peth',
    image: 'https://cloudkitchens.com/static/3bbb9400de0c3a2668dcf2abb8d9f499/Blog-Stock-Images-26-convert.io_.webp',
  },
  {
    id: 6,
    name: 'Shree Krupa Foods',
    rating: 4.1,
    time: '25–35 mins',
    type: 'South Indian, Snacks',
    location: 'Shivajinagar',
    image: 'https://content.jdmagicbox.com/comp/service_catalogue/caterers-9999p1662.1662.211128014014.s6b4-ajhwz6k.jpg',
  },
  {
    id: 7,
    name: 'Vita Thali Services',
    rating: 4.3,
    time: '30–40 mins',
    type: 'Home-style Thalis, Rice Meals',
    location: 'Kothrud',
    image: 'https://www.cateringpune.com/cdn/shop/files/pexels-anilsharma65-10580198.jpg?v=1725900371&width=3840',
  },
  {
    id: 8,
    name: 'Annapurna Swaad',
    rating: 4.5,
    time: '20–25 mins',
    type: 'Gujarati, Rajasthani, Pure Veg',
    location: 'Deccan Gymkhana',
    image: 'https://www.arlingtontx.com/wp-content/uploads/2021/11/mexican-food-catering-spread.png',
  },
];

const CatererList = () => {
  return (
    <div className="caterer-list">
      {sampleCaterers.map((caterer) => (
        <CatererCard key={caterer.name} caterer={caterer} />
      ))}
    </div>
  );
};

export default CatererList;
