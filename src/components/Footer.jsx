import React from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import SportsIcon from '@mui/icons-material/Sports';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const scrollToSection = (sectionId) => {
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
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #212121 0%, #424242 100%)',
        color: '#FFFFFF',
        pt: { xs: 8, md: 10 },
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(211, 47, 47, 0.4)',
                }}
              >
                <SportsIcon sx={{ color: 'white', fontSize: 32 }} />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Bebas Neue", cursive',
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    lineHeight: 1,
                  }}
                >
                  ELITE TT
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    letterSpacing: '0.15em',
                    fontWeight: 600,
                  }}
                >
                  TABLE TENNIS CLUB
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Jacksonville's premier table tennis club dedicated to developing champions
              and fostering a passionate community of players at all levels.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[FacebookIcon, TwitterIcon, InstagramIcon, YouTubeIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#FFFFFF',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                mb: 3,
                letterSpacing: '0.05em',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['Home', 'About', 'Teams', 'Tournaments'].map((item) => (
                <Typography
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  sx={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#D32F2F',
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Programs */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                mb: 3,
                letterSpacing: '0.05em',
              }}
            >
              Programs
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {['Training', 'Gallery', 'Membership', 'Contact'].map((item) => (
                <Typography
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  sx={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#D32F2F',
                      transform: 'translateX(5px)',
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                mb: 3,
                letterSpacing: '0.05em',
              }}
            >
              Get in Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    mb: 0.5,
                    fontWeight: 600,
                  }}
                >
                  Address
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.6,
                  }}
                >
                  123 Champion Street
                  <br />
                  Jacksonville, FL 32202
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    mb: 0.5,
                    fontWeight: 600,
                  }}
                >
                  Contact
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  +1 (904) 555-SPIN
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  info@elitett.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            © 2026 Abbsium. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: '13px',
                  color: 'rgba(255, 255, 255, 0.6)',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#D32F2F',
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
