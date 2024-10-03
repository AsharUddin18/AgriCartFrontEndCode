import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, TextField, InputAdornment, Drawer } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../styles/HeaderStyle.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#1A3636', height: '100%', color: 'white' }}>
      <Typography color={'#FFD700'} variant="h5" component="div" sx={{ flexGrow: 1, padding: '1rem 0' }}>
        AgriCart
      </Typography>
      <ul className="mobile-navigation" style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to={'/'} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/product'} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}>
            Product
          </Link>
        </li>
        <li>
          <Link to={'/about'} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}>
            About
          </Link>
        </li>
        <li>
          <Link to={'/contact'} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}>
            Contact
          </Link>
        </li>
        <li>
          <Link to={'/signup'} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}>
            SignUp
          </Link>
        </li>
        <li>
          <Link to={'/login'} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}>
            Login
          </Link>
        </li>
        <li>
          <Link to={'/cart'} style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}>
            <ShoppingCartIcon />
          </Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: '#1A3636' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <AgricultureIcon sx={{ color: '#FFD700' }} /> {/* Update logo color */}
            <Typography color={'#FFD700'} variant="h5" component="div">
              AgriCart
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          '&:hover': {
                            color: '#FFD700', // Update search icon color
                            transform: 'scale(1.1)',
                            transition: 'all 0.3s ease-in-out',
                          }
                        }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: 'white', borderRadius: 1, mr: 2, ml: 2 }}
              />
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                <ul className="navigation-menu" style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
                  {['Home', 'Product', 'About', 'Contact'].map((text, index) => (
                    <li key={index}>
                      <Link
                        to={`/${text.toLowerCase()}`}
                        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}
                        className="nav-link"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <ul className="navigation-menu" style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
                  {['SignUp', 'Login', 'Cart'].map((text, index) => (
                    <li key={index}>
                      <Link
                        to={`/${text.toLowerCase()}`}
                        style={{ color: 'white', textDecoration: 'none', padding: '0.5rem', display: 'block' }}
                        className="nav-link"
                      >
                        {text === 'Cart' ? <ShoppingCartIcon
                          sx={{
                            '&:hover': {
                              color: '#FFD700', // Update cart icon color
                              transform: 'scale(1.1)',
                              transition: 'all 0.3s ease-in-out',
                            }
                          }}
                        /> : text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' } }}
            PaperProps={{
              sx: {
                bgcolor: '#1A3636',
                color: 'white',
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
      <style jsx>{`
        .mobile-navigation li a:hover,
        .navigation-menu li a:hover {
          background-color: rgba(255, 215, 0, 0.2);
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
          transform: scale(1.05);
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Header;
