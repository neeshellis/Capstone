
import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import LoginForm from '../components/LoginForm';

export default function NavBar() {
  // Add state for menu functionality
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Add click handlers
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ 
              mr: 2,
              display: { xs: 'block', md: 'none' } 
            }}
            onClick={handleMenuClick} 
          >
            <MenuIcon />
          </IconButton>

         
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'menu-button',
            }}
          >
            <MenuItem 
              component={NavLink} 
              to="/home" 
              onClick={handleMenuClose}
            >
              Home
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/accommodation" 
              onClick={handleMenuClose}
            >
              Accommodation
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/adventures" 
              onClick={handleMenuClose}
            >
              Adventures
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/reviews" 
              onClick={handleMenuClose}
            >
              Reviews
            </MenuItem>
            <MenuItem 
              component={NavLink} 
              to="/contact" 
              onClick={handleMenuClose}
            >
              Contact
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          
          <Button 
            color="inherit" 
            component={NavLink} 
            to="/home"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' } 
            }}
          >
            Home
          </Button>

          <Button 
            color="inherit" 
            component={NavLink} 
            to="/accommodation"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          >
            Accommodation
          </Button>

          <Button 
            color="inherit" 
            component={NavLink} 
            to="/adventures"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          >
            Adventures
          </Button>
          
          <Button 
            color="inherit" 
            component={NavLink} 
            to="/reviews"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          >
            Reviews
          </Button>

          <Button 
            color="inherit" 
            component={NavLink} 
            to="/contact"
            sx={{ 
              textTransform: 'none',
              display: { xs: 'none', md: 'block' }
            }}
          >
            Contact
          </Button>
<div>
              <IconButton >
                <AccountCircle />
              </IconButton>
          </div>






        </Toolbar>
      </AppBar>
    </Box>
  );
}