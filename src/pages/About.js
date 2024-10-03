import React from 'react';
import Layout from '../components/Layout/Layout';

export const About = () => {
  return (
    <Layout>
      <div className="about-container" style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: 'auto' }}>
        <h1>About AgriCart</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Welcome to <strong>AgriCart</strong>! We are a forward-thinking platform dedicated to transforming the agricultural shopping experience.
          Designed with farmers in mind, AgriCart simplifies the process of purchasing high-quality agricultural products, tools, and resources 
          to meet the unique needs of every farm.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Our Mission</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          At AgriCart, our mission is to empower farmers by providing them with a seamless online marketplace that connects them to the best products 
          and tools at competitive prices. We aim to enhance agricultural productivity and support sustainable farming practices through technology-driven 
          solutions.
        </p>

        <h2 style={{ marginTop: '2rem' }}>What Makes Us Unique?</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Our platform is built with a unique recommendation system that suggests products based on each farmer's specific needs, ensuring they get the 
          most suitable tools and resources for their crops. From seeds to fertilizers, and from tools to equipment, we cover all aspects of farming, 
          making sure you have everything you need in one place.
        </p>

        <h2 style={{ marginTop: '2rem' }}>Our Features</h2>
        <ul style={{ listStyleType: 'circle', textAlign: 'left', fontSize: '1.1rem', lineHeight: '1.8', margin: 'auto', maxWidth: '600px' }}>
          <li><strong>Intuitive Front-End:</strong> A user-friendly interface for easy navigation and a smooth shopping experience.</li>
          <li><strong>Integrated Back-End:</strong> Secure and efficient data management ensures fast processing of orders and secure transactions.</li>
          <li><strong>Personalized Recommendations:</strong> Advanced algorithms that suggest products tailored to individual needs.</li>
          <li><strong>Secure Payments:</strong> Multiple payment options with the highest level of security to safeguard your transactions.</li>
        </ul>

        <h2 style={{ marginTop: '2rem' }}>Join Our Community</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          AgriCart is more than just a marketplace; it’s a community of like-minded farmers, sharing knowledge, and resources. 
          Together, we can innovate, grow, and build a better future for agriculture.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1.5rem' }}>
          Ready to enhance your farming experience? Join us and explore the new age of agriculture with AgriCart!
        </p>
      </div>
    </Layout>
  );
}
