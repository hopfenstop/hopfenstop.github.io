import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { navigate } from 'gatsby';
import HttpsIcon from '@mui/icons-material/Https';
import DescriptionIcon from '@mui/icons-material/Description';
import StorefrontIcon from '@mui/icons-material/Storefront';

const navItems = [
  { title: 'Kioske', url: '/', icon: <StorefrontIcon color='action' /> },
  {
    title: 'Impressum',
    url: '/imprint',
    icon: <DescriptionIcon color='action' />,
  },
  {
    title: 'Datenschutz',
    url: '/data_protection',
    icon: <HttpsIcon color='action' />,
  },
];

const drawerWidth = 240;

const NavBar = ({ pageTitle }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleOnClick = (url) => {
    navigate(url);
  };

  const drawer = (pageTitle) => (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        HopfenStop
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              sx={{ alignItems: 'center' }}
              onClick={() => handleOnClick(item.url)}
            >
              {' '}
              {item.icon}
              <ListItemText style={{ marginLeft: 10 }} primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = document.querySelector('body');

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='sticky' sx={{ bgcolor: '#e0ab16', top: 0, left: 0 }}>
        <Toolbar
          disableGutters
          sx={{
            marginLeft: 3,
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='div'
            textAlign='center'
            sx={{ fontSize: 24, fontWeight: 600 }}
          >
            {pageTitle}
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              marginLeft: 'auto',
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.title}
                sx={{ color: '#fff' }}
                onClick={() => handleOnClick(item.url)}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer(pageTitle)}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
