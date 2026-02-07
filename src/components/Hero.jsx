import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Hero = () => {
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
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: '#FFFFFF',
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(211, 47, 47, 0.08) 0%, rgba(211, 47, 47, 0) 70%)',
          animation: 'float 20s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
            '50%': { transform: 'translate(-50px, 50px) scale(1.1)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(33, 33, 33, 0.05) 0%, rgba(33, 33, 33, 0) 70%)',
          animation: 'float 25s ease-in-out infinite reverse',
        }}
      />

      {/* Diagonal Accent Line */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '3px',
          height: '200px',
          background: 'linear-gradient(180deg, #D32F2F 0%, transparent 100%)',
          transform: 'rotate(15deg)',
          opacity: 0.3,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                animation: 'slideInLeft 1s ease-out',
                '@keyframes slideInLeft': {
                  from: { opacity: 0, transform: 'translateX(-50px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                },
              }}
            >
              {/* Premium Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: 0.75,
                  borderRadius: '50px',
                  background: 'rgba(211, 47, 47, 0.08)',
                  border: '1px solid rgba(211, 47, 47, 0.2)',
                  mb: 3,
                  animation: 'fadeIn 1s ease-out 0.3s backwards',
                  '@keyframes fadeIn': {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#D32F2F',
                    animation: 'pulse 2s ease-in-out infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#D32F2F',
                    letterSpacing: '0.1em',
                  }}
                >
                  ELITE TRAINING CENTER
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '48px', sm: '64px', md: '76px' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 2,
                  color: '#212121',
                  animation: 'fadeIn 1s ease-out 0.5s backwards',
                }}
              >
                MASTER THE
                <br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  GAME
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '18px', md: '22px' },
                  fontWeight: 400,
                  color: '#757575',
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: '500px',
                  animation: 'fadeIn 1s ease-out 0.7s backwards',
                }}
              >
                Join our elite table tennis club and train with professional coaches.
                Compete, excel, and become a champion.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  flexWrap: 'wrap',
                  animation: 'fadeIn 1s ease-out 0.9s backwards',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => scrollToSection('membership')}
                  sx={{
                    px: 4,
                    py: 1.75,
                    fontSize: '16px',
                    fontWeight: 700,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                    boxShadow: '0 8px 24px rgba(211, 47, 47, 0.35)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 32px rgba(211, 47, 47, 0.45)',
                    },
                  }}
                >
                  Join the Club
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<CalendarMonthIcon />}
                  onClick={() => scrollToSection('tournaments')}
                  sx={{
                    px: 4,
                    py: 1.75,
                    fontSize: '16px',
                    fontWeight: 700,
                    borderRadius: '12px',
                    borderWidth: '2px',
                    borderColor: '#212121',
                    color: '#212121',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: '2px',
                      borderColor: '#212121',
                      background: '#212121',
                      color: '#FFFFFF',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  View Events
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                animation: 'slideInRight 1s ease-out',
                '@keyframes slideInRight': {
                  from: { opacity: 0, transform: 'translateX(50px)' },
                  to: { opacity: 1, transform: 'translateX(0)' },
                },
              }}
            >
              {/* Stats Card */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: '350px', md: '450px' },
                    background: 'linear-gradient(135deg, #F5F5F5 0%, #E0E0E0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontSize: '180px',
                      fontFamily: '"Bebas Neue", cursive',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      opacity: 0.9,
                      lineHeight: 1,
                    }}
                  >
                    TT
                  </Box>
                </Box>

                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    p: 3,
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography
                        sx={{
                          fontSize: '32px',
                          fontWeight: 700,
                          fontFamily: '"Bebas Neue", cursive',
                          color: '#D32F2F',
                          lineHeight: 1,
                        }}
                      >
                        500+
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '12px',
                          color: '#757575',
                          fontWeight: 600,
                          mt: 0.5,
                        }}
                      >
                        Members
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        sx={{
                          fontSize: '32px',
                          fontWeight: 700,
                          fontFamily: '"Bebas Neue", cursive',
                          color: '#D32F2F',
                          lineHeight: 1,
                        }}
                      >
                        15+
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '12px',
                          color: '#757575',
                          fontWeight: 600,
                          mt: 0.5,
                        }}
                      >
                        Coaches
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        sx={{
                          fontSize: '32px',
                          fontWeight: 700,
                          fontFamily: '"Bebas Neue", cursive',
                          color: '#D32F2F',
                          lineHeight: 1,
                        }}
                      >
                        25+
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '12px',
                          color: '#757575',
                          fontWeight: 600,
                          mt: 0.5,
                        }}
                      >
                        Tournaments
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
