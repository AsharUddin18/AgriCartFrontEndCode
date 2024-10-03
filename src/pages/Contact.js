import React from 'react';
import Layout from '../components/Layout/Layout';

export const Contact = () => {
  return (
    <Layout>
      <div className="contact-container" style={{ padding: '3rem', maxWidth: '900px', margin: 'auto', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem', lineHeight: '1.6', color: '#555' }}>
          Have questions or need assistance? Our team is here to help! Reach out to us through any of the methods below, and we'll get back to you as soon as possible.
        </p>

        <div className="contact-info" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center', maxWidth: '250px' }}>
            <h2 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>Email Us</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
              <a href="mailto:support@agricart.com" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: 'bold' }}>support@agricart.com</a>
            </p>
          </div>

          <div style={{ marginBottom: '2rem', textAlign: 'center', maxWidth: '250px' }}>
            <h2 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>Call Us</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>
              <a href="tel:+911234567890" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: 'bold' }}>+91 12345 67890</a>
            </p>
          </div>

          <div style={{ marginBottom: '2rem', textAlign: 'center', maxWidth: '250px' }}>
            <h2 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>Visit Us</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333' }}>123 Farm Lane, AgriCity, AG 45678</p>
          </div>
        </div>

        <h2 style={{ marginTop: '2.5rem', color: '#333' }}>Send Us a Message</h2>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem', width: '100%' }}>
          <input type="text" placeholder="Your Name" style={{ padding: '1rem', marginBottom: '1rem', width: '80%', maxWidth: '600px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <input type="email" placeholder="Your Email" style={{ padding: '1rem', marginBottom: '1rem', width: '80%', maxWidth: '600px', borderRadius: '5px', border: '1px solid #ddd' }} />
          <textarea placeholder="Your Message" rows="5" style={{ padding: '1rem', marginBottom: '1rem', width: '80%', maxWidth: '600px', borderRadius: '5px', border: '1px solid #ddd' }}></textarea>
          <button type="submit" style={{ padding: '1rem 2rem', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.3s ease' }} onMouseEnter={e => e.target.style.backgroundColor = '#45a049'} onMouseLeave={e => e.target.style.backgroundColor = '#4CAF50'}>Send Message</button>
        </form>

       

      </div>
    </Layout>
  );
}
