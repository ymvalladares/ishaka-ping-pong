import React from 'react';
import { Box, Container, Typography, Grid, Card, Chip, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const tournaments = [
  {
    title: 'Spring Championship 2026',
    date: 'March 15-17, 2026',
    location: 'Main Arena',
    participants: '128 Players',
    prize: '$5,000',
    status: 'Registration Open',
    category: 'Major',
    color: '#D32F2F',
  },
  {
    title: 'Youth Development Cup',
    date: 'April 5-6, 2026',
    location: 'Training Center',
    participants: '64 Players',
    prize: '$2,000',
    status: 'Coming Soon',
    category: 'Youth',
    color: '#F57C00',
  },
  {
    title: 'Summer Elite Invitational',
    date: 'June 20-22, 2026',
    location: 'Main Arena',
    participants: '32 Players',
    prize: '$10,000',
    status: 'Invite Only',
    category: 'Elite',
    color: '#1976D2',
  },
];

const Tournaments = () => {
  return (
    <Box
      id="tournaments"
      sx={{
        py: { xs: 10, md: 14 },
        background: '#FFFFFF',
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
          background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#D32F2F',
              letterSpacing: '0.15em',
              mb: 2,
            }}
          >
            TOURNAMENTS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '40px', md: '56px' },
              fontWeight: 700,
              mb: 3,
              color: '#212121',
            }}
          >
            UPCOMING
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
              EVENTS
            </Box>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '16px', md: '18px' },
              color: '#757575',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
            }}
          >
            Compete in professional tournaments and showcase your skills against the best
            players in the region. Join us for exciting matches and championship glory.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {tournaments.map((tournament, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  border: '2px solid #F5F5F5',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: `0 16px 48px ${tournament.color}25`,
                    borderColor: `${tournament.color}40`,
                  },
                }}
              >
                {/* Header Gradient */}
                <Box
                  sx={{
                    height: '120px',
                    background: `linear-gradient(135deg, ${tournament.color} 0%, ${tournament.color}CC 100%)`,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                      opacity: 1,
                    },
                  }}
                >
                  <EmojiEventsIcon sx={{ fontSize: 56, color: 'white', opacity: 0.9, zIndex: 1 }} />
                </Box>

                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                    <Chip
                      label={tournament.category}
                      size="small"
                      sx={{
                        background: `${tournament.color}15`,
                        color: tournament.color,
                        fontWeight: 700,
                        fontSize: '11px',
                        height: '24px',
                      }}
                    />
                    <Chip
                      label={tournament.status}
                      size="small"
                      sx={{
                        background: tournament.status === 'Registration Open' ? '#4CAF5015' : '#75757515',
                        color: tournament.status === 'Registration Open' ? '#4CAF50' : '#757575',
                        fontWeight: 700,
                        fontSize: '11px',
                        height: '24px',
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: '22px',
                      fontWeight: 700,
                      mb: 3,
                      color: '#212121',
                      lineHeight: 1.3,
                    }}
                  >
                    {tournament.title}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <CalendarMonthIcon sx={{ fontSize: 20, color: tournament.color }} />
                      <Typography sx={{ fontSize: '14px', color: '#616161' }}>
                        {tournament.date}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <LocationOnIcon sx={{ fontSize: 20, color: tournament.color }} />
                      <Typography sx={{ fontSize: '14px', color: '#616161' }}>
                        {tournament.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <PeopleIcon sx={{ fontSize: 20, color: tournament.color }} />
                      <Typography sx={{ fontSize: '14px', color: '#616161' }}>
                        {tournament.participants}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      p: 2,
                      borderRadius: '12px',
                      background: `${tournament.color}08`,
                      mb: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '12px',
                        color: '#757575',
                        mb: 0.5,
                        fontWeight: 600,
                      }}
                    >
                      Prize Pool
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '28px',
                        fontWeight: 700,
                        fontFamily: '"Bebas Neue", cursive',
                        color: tournament.color,
                      }}
                    >
                      {tournament.prize}
                    </Typography>
                  </Box>

                  <Button
                    fullWidth
                    variant="outlined"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.5,
                      borderRadius: '12px',
                      borderWidth: '2px',
                      borderColor: tournament.color,
                      color: tournament.color,
                      fontWeight: 700,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderWidth: '2px',
                        borderColor: tournament.color,
                        background: tournament.color,
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    {tournament.status === 'Registration Open' ? 'Register Now' : 'Learn More'}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Tournaments;
