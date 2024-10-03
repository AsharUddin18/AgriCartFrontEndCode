import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';

export const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Expanded sample products data categorized by type
  const products = {
    Seeds: [
      { id: 1, name: 'High-Yield Corn Seeds', description: 'Premium quality corn seeds for enhanced growth and yield.', image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Organic Tomato Seeds', description: 'Best quality tomato seeds for organic farming.', image: 'https://via.placeholder.com/150' },
      { id: 11, name: 'Sunflower Seeds', description: 'Bright and healthy sunflower seeds.', image: 'https://via.placeholder.com/150' },
      { id: 12, name: 'Carrot Seeds', description: 'Nutrient-rich carrot seeds for a bountiful harvest.', image: 'https://via.placeholder.com/150' },
    ],
    Fertilizers: [
      { id: 3, name: 'Organic Fertilizer', description: 'Eco-friendly fertilizer for sustainable farming.', image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Nitrogen Fertilizer', description: 'Highly effective nitrogen fertilizer to improve crop growth.', image: 'https://via.placeholder.com/150' },
      { id: 13, name: 'Phosphorus Fertilizer', description: 'Enhances root development and flowering.', image: 'https://via.placeholder.com/150' },
      { id: 14, name: 'Potassium Fertilizer', description: 'Boosts plant immunity and overall health.', image: 'https://via.placeholder.com/150' },
    ],
    Tools: [
      { id: 5, name: 'Hand Trowel', description: 'Durable hand trowel for gardening needs.', image: 'https://via.placeholder.com/150' },
      { id: 6, name: 'Pruning Shears', description: 'Sharp pruning shears for cutting and trimming.', image: 'https://via.placeholder.com/150' },
      { id: 15, name: 'Garden Fork', description: 'Heavy-duty fork for soil turning.', image: 'https://via.placeholder.com/150' },
      { id: 16, name: 'Weeder', description: 'Efficient tool for removing weeds.', image: 'https://via.placeholder.com/150' },
    ],
    Pesticides: [
      { id: 7, name: 'Natural Pesticide Spray', description: 'Safe pesticide spray for effective pest control.', image: 'https://via.placeholder.com/150' },
      { id: 8, name: 'Herbicide Concentrate', description: 'Highly effective herbicide concentrate for weed management.', image: 'https://via.placeholder.com/150' },
      { id: 17, name: 'Insect Repellent Spray', description: 'Protects plants from harmful insects.', image: 'https://via.placeholder.com/150' },
      { id: 18, name: 'Fungal Treatment', description: 'Treats and prevents fungal infections.', image: 'https://via.placeholder.com/150' },
    ],
    'Irrigation Equipment': [
      { id: 9, name: 'Drip Irrigation Kit', description: 'Complete drip irrigation kit for efficient water usage.', image: 'https://via.placeholder.com/150' },
      { id: 10, name: 'Sprinkler System', description: 'Automatic sprinkler system for hassle-free watering.', image: 'https://via.placeholder.com/150' },
      { id: 19, name: 'Soaker Hose', description: 'Ideal for watering garden beds evenly.', image: 'https://via.placeholder.com/150' },
      { id: 20, name: 'Rain Barrel', description: 'Collects and stores rainwater for irrigation.', image: 'https://via.placeholder.com/150' },
    ],
  };

  const handleSearch = () => {
    const section = document.getElementById(searchTerm);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="menu-container" style={{ padding: '3rem', maxWidth: '1200px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Our Products</h1>

        {/* Search Bar */}
        <div className="search-bar" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <input 
            type="text" 
            placeholder="Search for products by category..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              padding: '0.75rem', 
              width: '80%', 
              maxWidth: '500px', 
              borderRadius: '5px', 
              border: '1px solid #ddd',
              marginBottom: '1rem'
            }} 
          />
          <button 
            onClick={handleSearch}
            style={{ 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#4CAF50', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              marginLeft: '1rem'
            }}>
            Search
          </button>
        </div>

        {/* Product Categories Section */}
        {Object.keys(products).map((category) => (
          <div id={category} key={category} className="product-category-section" style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#333', marginBottom: '1rem' }}>{category}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              {products[category].map((product) => (
                <div key={product.id} className="product-card" style={productCardStyle}>
                  <img src={product.image} alt={product.name} style={productImageStyle} />
                  <h3 style={productTitleStyle}>{product.name}</h3>
                  <p style={productDescriptionStyle}>{product.description}</p>
                  <button style={productButtonStyle}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

// Style objects for reusability
const productCardStyle = {
  width: '250px',
  padding: '1rem',
  marginBottom: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  backgroundColor: '#fff',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer'
};

const productImageStyle = {
  width: '100%',
  borderRadius: '5px',
  marginBottom: '0.5rem'
};

const productTitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '0.5rem',
  color: '#333'
};

const productDescriptionStyle = {
  fontSize: '0.9rem',
  color: '#666',
  marginBottom: '1rem'
};

const productButtonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
};

export default Menu;
