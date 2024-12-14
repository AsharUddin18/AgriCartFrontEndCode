import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Drawer,
  Menu,
  MenuItem,
} from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../pages/AuthContext"; // AuthContext import
import "../../styles/HeaderStyle.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false); // Mobile drawer state
  const [searchQuery, setSearchQuery] = useState(""); // Search input
  const [anchorEl, setAnchorEl] = useState(null); // For profile dropdown
  const { isLoggedIn, logout } = useAuth(); // Get auth state and logout function
  const navigate = useNavigate(); // For navigation

  // Toggle mobile drawer
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Open/close profile dropdown
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  // Logout user
  const handleLogout = () => {
    logout(); // Clear session and update state
    setAnchorEl(null); // Close the profile menu
    navigate("/"); // Redirect to home
  };

  // Mobile drawer menu
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "#1A3636", height: "100%", color: "white" }}
    >
      <Typography color={"#FFD700"} variant="h5" component="div" sx={{ flexGrow: 1, padding: "1rem 0" }}>
        AgriCart
      </Typography>
      <ul className="mobile-navigation" style={{ listStyle: "none", padding: 0 }}>
        {["Home", "Product", "About", "Contact"].map((text) => (
          <li key={text}>
            <Link
              to={`/${text.toLowerCase()}`}
              style={{ color: "white", textDecoration: "none", padding: "0.5rem", display: "block" }}
            >
              {text}
            </Link>
          </li>
        ))}
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/signup" style={{ color: "white", textDecoration: "none", padding: "0.5rem", display: "block" }}>
                SignUp
              </Link>
            </li>
            <li>
              <Link to="/login" style={{ color: "white", textDecoration: "none", padding: "0.5rem", display: "block" }}>
                Login
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <button
                onClick={handleProfileMenuOpen}
                style={{
                  color: "white",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem",
                  display: "block",
                  textAlign: "left",
                }}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  color: "white",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem",
                  display: "block",
                  textAlign: "left",
                }}
              >
                Logout
              </button>
            </li>
          </>
        )}
        <li>
          <Link to="/cart" style={{ color: "white", textDecoration: "none", padding: "0.5rem", display: "block" }}>
            <ShoppingCartIcon />
          </Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#1A3636" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <AgricultureIcon sx={{ color: "#FFD700" }} />
            <Typography color={"#FFD700"} variant="h5" component="div">
              AgriCart
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon sx={{ color: "#FFD700" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ bgcolor: "white", borderRadius: 1, mr: 2, ml: 2 }}
              />
              <Box sx={{ flexGrow: 1, display: "flex" }}>
                {["Home", "Product", "About", "Contact"].map((text) => (
                  <Link
                    key={text}
                    to={`/${text.toLowerCase()}`}
                    style={{ color: "white", textDecoration: "none", padding: "0.5rem", display: "block" }}
                  >
                    {text}
                  </Link>
                ))}
              </Box>
              {isLoggedIn ? (
                <>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    sx={{ color: "white" }}
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleProfileMenuClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Box sx={{ display: "flex" }}>
                  <Link to="/signup" style={{ color: "white", textDecoration: "none", padding: "0.5rem" }}>
                    SignUp
                  </Link>
                  <Link to="/login" style={{ color: "white", textDecoration: "none", padding: "0.5rem" }}>
                    Login
                  </Link>
                </Box>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: "block", sm: "none" } }}
          PaperProps={{
            sx: {
              bgcolor: "#1A3636",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
};

export default Header;
