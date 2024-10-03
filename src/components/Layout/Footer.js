import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Typography, Grid, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#40534C', color: 'white', p: 3 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>About Us</Typography>
          <Typography variant="body2">
            AgriCart is your go-to source for all your agricultural needs. We provide a wide range of products to help you achieve the best yields and quality.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <MuiLink component={Link} to="/home" color="inherit" underline="none">Home</MuiLink>
            </li>
            <li>
              <MuiLink component={Link} to="/product" color="inherit" underline="none">Products</MuiLink>
            </li>
            <li>
              <MuiLink component={Link} to="/about" color="inherit" underline="none">About</MuiLink>
            </li>
            <li>
              <MuiLink component={Link} to="/contact" color="inherit" underline="none">Contact</MuiLink>
            </li>
            <li>
              <MuiLink component={Link} to="/signup" color="inherit" underline="none">SignUp</MuiLink>
            </li>
            <li>
              <MuiLink component={Link} to="/login" color="inherit" underline="none">Login</MuiLink>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Typography variant="body2">Email: support@agricart.com</Typography>
          <Typography variant="body2">Phone: +1 234 567 890</Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>Follow Us</Typography>
          <Box sx={{
            "& svg": {
              fontSize: "40px",
              cursor: 'pointer',
              mr: 2,
              color: 'inherit'
            },
            "& .facebook:hover": {
              color: '#3b5998',
              transform: 'translateY(-3px)',
              transition: 'all 400ms'
            },
            "& .twitter:hover": {
              color: '#1DA1F2',
              transform: 'translateY(-3px)',
              transition: 'all 400ms'
            },
            "& .instagram:hover": {
              color: '#E1306C',
              transform: 'translateY(-3px)',
              transition: 'all 400ms'
            }
          }}>
            <FacebookIcon className="facebook" />
            <TwitterIcon className="twitter" />
            <InstagramIcon className="instagram" />
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography variant='body2'>&copy; {new Date().getFullYear()} AgriCart. All Rights Reserved.</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
