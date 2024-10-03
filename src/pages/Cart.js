import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Button, Card, CardContent, IconButton, Typography, TextField, Grid, Paper, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/CartStyle.css';

const initialCartItems = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    quantity: 1,
    image: 'https://via.placeholder.com/100',
    description: 'A high-quality product.',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    quantity: 2,
    image: 'https://via.placeholder.com/100',
    description: 'Another amazing product.',
    rating: 4.0
  },
];

export const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleApplyPromo = () => {
    // Promo code functionality to be implemented
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Layout>
      <Box sx={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>
        {cartItems.length === 0 ? (
          <Typography variant="h6">Your cart is empty.</Typography>
        ) : (
          <>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ display: 'flex', mb: 2, boxShadow: 3 }}>
                <img src={item.image} alt={item.name} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{item.description}</Typography>
                  <Typography variant="body1">${item.price}</Typography>
                  <Typography variant="caption">Rating: {item.rating} / 5</Typography>
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    InputProps={{ inputProps: { min: 1 } }}
                    sx={{ width: '80px', mr: 2, mt: 1 }}
                  />
                  <IconButton onClick={() => handleRemoveItem(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </CardContent>
              </Card>
            ))}
            <Paper elevation={3} sx={{ padding: '1.5rem', mt: 2 }}>
              <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
              <Box sx={{ mt: 2 }}>
                <TextField
                  variant="outlined"
                  label="Promo Code"
                  placeholder="Enter promo code"
                  sx={{ mr: 2 }}
                />
                <Button variant="contained" color="secondary" onClick={handleApplyPromo}>
                  Apply
                </Button>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Proceed to Checkout
              </Button>
            </Paper>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Cart;
