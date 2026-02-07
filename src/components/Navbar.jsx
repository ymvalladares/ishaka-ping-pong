import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SportsIcon from '@mui/icons-material/Sports';

const menuItems = ['Home', 'About', 'Teams', 'Tournaments', 'Training', 'Gallery', 'Membership', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (item) => {
    const sectionId = item.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(255, 255, 255, 0.85)'
            : 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.2)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            py: 1.5,
            px: { xs: 2, md: 6 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              cursor: 'pointer',
            }}
            onClick={() => scrollToSection('Home')}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(211, 47, 47, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05) rotate(5deg)',
                },
              }}
            >
              <SportsIcon sx={{ color: 'white', fontSize: 28 }} />
            </Box>
            <Box>
              <Box
                sx={{
                  fontFamily: '"Bebas Neue", cursive',
                  fontSize: { xs: '20px', md: '24px' },
                  fontWeight: 700,
                  color: scrolled ? '#212121' : '#212121',
                  letterSpacing: '0.05em',
                  lineHeight: 1,
                }}
              >
                ISHAKA TT
              </Box>
              <Box
                sx={{
                  fontSize: '10px',
                  color: scrolled ? '#757575' : '#616161',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                }}
              >
                TABLE TENNIS CLUB
              </Box>
            </Box>
          </Box>

          {isMobile ? (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                color: scrolled ? '#212121' : '#212121',
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    color: scrolled ? '#212121' : '#212121',
                    fontWeight: 600,
                    fontSize: '14px',
                    px: 2.5,
                    py: 1,
                    borderRadius: '10px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: -1,
                    },
                    '&:hover': {
                      color: '#FFFFFF',
                      transform: 'translateY(-2px)',
                      '&::before': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => scrollToSection(item)}
                sx={{
                  borderRadius: '12px',
                  py: 1.5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                    color: '#FFFFFF',
                    transform: 'translateX(8px)',
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
