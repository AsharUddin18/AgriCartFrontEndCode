import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';
import BannerImage from '../images/img12.jpg';  // Banner image
import CategoryImage1 from '../images/img1.jpg';  // Example category images
import CategoryImage2 from '../images/img2.jpg';
import CategoryImage3 from '../images/img3.jpg';

import '../styles/HomeStyle.css';

export const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className='heroSection'>
        <img src={BannerImage} alt='Agriculture Products' className='heroImage' />
        <div className='heroText'>
          <h1>Welcome to AgriCart</h1>
          <p>Your one-stop shop for top-quality agricultural products.</p>
          <Link to="/shop">
            <button className='heroButton'>Shop Now</button>
          </Link>
        </div>z
      </div>
      
      {/* Features Section */}
      <div className='features'>
        <h2>Why Choose Us</h2>
        <div className='featuresContainer'>
          <div className='feature'>
            <h3>Quality Products</h3>
            <p>We offer the best quality pesticides for all your agricultural needs.</p>
          </div>
          <div className='feature'>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered to your doorstep quickly and reliably.</p>
          </div>
          <div className='feature'>
            <h3>Expert Support</h3>
            <p>Our experts are available 24/7 to help you with any questions or concerns.</p>
          </div>
        </div>
      </div>

      {/* Promo Section */}
      <div className='promoSection'>
        <h2>Exclusive Offers</h2>
        <p>Check out our latest promotions and discounts on top-quality pesticides.</p>
        <Link to="/offers">
          <button className='promoButton'>VIEW OFFERS</button>
        </Link>
      </div>
      
      {/* Categories Section */}
      <div className='categoriesSection'>
        <h2>Shop by Category</h2>
        <div className='categoriesContainer'>
          <div className='categoryCard'>
            <img src={CategoryImage1} alt='Category 1' />
            <h3>Seeds & Fertilizers</h3>
            <p>High-quality seeds and fertilizers for healthy crops.</p>
            <Link to="/seeds-fertilizers">
              <button className='categoryButton'>Shop Now</button>
            </Link>
          </div>
          <div className='categoryCard'>
            <img src={CategoryImage2} alt='Category 2' />
            <h3>Pesticides</h3>
            <p>Effective pesticides to protect your crops from pests.</p>
            <Link to="/pesticides">
              <button className='categoryButton'>Shop Now</button>
            </Link>
          </div>
          <div className='categoryCard'>
            <img src={CategoryImage3} alt='Category 3' />
            <h3>Tools & Equipment</h3>
            <p>Durable tools and equipment for efficient farming.</p>
            <Link to="/tools-equipment">
              <button className='categoryButton'>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className='recommendationsSection'>
        <h2>Recommended for You</h2>
        <div className='recommendationsContainer'>
          <div className='recommendationCard'>
            <img src={CategoryImage1} alt='Recommended Product 1' />
            <h3>Top Seed Varieties</h3>
            <p>Choose from our best-selling seeds for a bountiful harvest.</p>
            <Link to="/recommended-seeds">
              <button className='recommendationButton'>Explore</button>
            </Link>
          </div>
          <div className='recommendationCard'>
            <img src={CategoryImage2} alt='Recommended Product 2' />
            <h3>Best Pesticides</h3>
            <p>Protect your crops with our most effective pesticides.</p>
            <Link to="/recommended-pesticides">
              <button className='recommendationButton'>Explore</button>
            </Link>
          </div>
          <div className='recommendationCard'>
            <img src={CategoryImage3} alt='Recommended Product 3' />
            <h3>Essential Tools</h3>
            <p>Get the tools you need for successful farming.</p>
            <Link to="/recommended-tools">
              <button className='recommendationButton'>Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
