import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { to: '/pomodoro', label: 'Pomodoro' },
  { to: '/shop', label: 'Loja' },
  { to: '/inventory', label: 'Inventário' },
  { to: '/history', label: 'Histórico' },
  { to: '/about', label: 'Sobre' },
];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="default"
      sx={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}
    >
      <Toolbar sx={{ maxWidth: '1120px', mx: 'auto', width: '100%' }}>
        <Typography
          component={RouterLink}
          to="/"
          variant="h6"
          sx={{ textDecoration: 'none', color: 'text.primary', fontWeight: 700 }}
        >
          tcc-prototype
        </Typography>

        <Box sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
          {navLinks.map((link) => (
            <Button
              key={link.to}
              component={RouterLink}
              to={link.to}
              color="inherit"
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <ThemeToggle />
          </Box>
          <Button
            component={RouterLink}
            to="/pomodoro"
            variant="contained"
            color="primary"
            sx={{ borderRadius: '999px', px: 3, textTransform: 'none' }}
          >
            Começar
          </Button>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton component={RouterLink} to={link.to}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem>
              <Button component={RouterLink} to="/pomodoro" variant="contained" color="primary" fullWidth>
                Começar
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
