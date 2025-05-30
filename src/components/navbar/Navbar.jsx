import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import logo from '../assets/company-logo.png';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Link to="/">
        <img src={logo} width={100} alt="Logo" />
      </Link>
      <Divider sx={{ my: 2 }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        color="success"
        position="fixed"
        sx={{
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: 'block', sm: 'none' }, flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} width={65} alt="Logo" style={{ cursor: 'pointer' }} />
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}>
            <Link to="/">
              <img src={logo} width={80} alt="Logo" style={{ cursor: 'pointer', marginLeft: '20px' }} />
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              flexGrow: 1,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: '#fff',
                  mx: 1,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  transition: 'all 0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: 'none' },
              ml: 'auto',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          anchor="right"
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;