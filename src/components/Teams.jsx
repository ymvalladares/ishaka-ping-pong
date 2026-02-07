import React from 'react';
import { Box, Container, Typography, Grid, Card, Avatar, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const teams = [
  {
    name: 'Senior Elite',
    level: 'Professional',
    members: 25,
    achievements: 'National Champions 2024',
    color: '#D32F2F',
  },
  {
    name: 'Competitive Squad',
    level: 'Advanced',
    members: 40,
    achievements: 'Regional Winners',
    color: '#1976D2',
  },
  {
    name: 'Development Team',
    level: 'Intermediate',
    members: 60,
    achievements: 'Rising Stars',
    color: '#388E3C',
  },
  {
    name: 'Youth Academy',
    level: 'Junior',
    members: 80,
    achievements: 'Future Champions',
    color: '#F57C00',
  },
];

const players = [
  {
    name: 'Alex Chen',
    role: 'Team Captain',
    ranking: 'National Rank #12',
    avatar: 'AC',
  },
  {
    name: 'Maria Santos',
    role: 'Top Female Player',
    ranking: 'Regional Rank #3',
    avatar: 'MS',
  },
  {
    name: 'James Kim',
    role: 'Youth Champion',
    ranking: 'U18 National #5',
    avatar: 'JK',
  },
];

const Teams = () => {
  return (
    <Box
      id="teams"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
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
            OUR TEAMS
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
            COMPETE AT YOUR
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
              LEVEL
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
            Join one of our competitive teams and train alongside players who share your
            passion and ambition. From beginners to national champions, we have a place for everyone.
          </Typography>
        </Box>

        {/* Teams Grid */}
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {teams.map((team, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  border: '2px solid #F5F5F5',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: team.color,
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 40px ${team.color}30`,
                    borderColor: `${team.color}40`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '14px',
                    background: `${team.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '28px',
                      fontWeight: 700,
                      fontFamily: '"Bebas Neue", cursive',
                      color: team.color,
                    }}
                  >
                    {team.members}
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '22px',
                    fontWeight: 700,
                    mb: 1,
                    color: '#212121',
                  }}
                >
                  {team.name}
                </Typography>
                <Chip
                  label={team.level}
                  size="small"
                  sx={{
                    mb: 2,
                    background: `${team.color}15`,
                    color: team.color,
                    fontWeight: 700,
                    fontSize: '12px',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#757575',
                    lineHeight: 1.6,
                  }}
                >
                  {team.achievements}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Featured Players */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #212121 0%, #424242 100%)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(211, 47, 47, 0.2) 0%, transparent 70%)',
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '32px', md: '42px' },
              fontWeight: 700,
              color: '#FFFFFF',
              mb: 1,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Featured Players
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 5,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Meet some of our top-ranked athletes
          </Typography>

          <Grid container spacing={4}>
            {players.map((player, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 3,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1,
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.12)',
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                      fontSize: '24px',
                      fontWeight: 700,
                      fontFamily: '"Bebas Neue", cursive',
                    }}
                  >
                    {player.avatar}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <Typography
                        sx={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: '#FFFFFF',
                        }}
                      >
                        {player.name}
                      </Typography>
                      <StarIcon sx={{ fontSize: 16, color: '#FFD700' }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '13px',
                        color: 'rgba(255, 255, 255, 0.6)',
                        mb: 0.5,
                      }}
                    >
                      {player.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        color: '#D32F2F',
                        fontWeight: 700,
                      }}
                    >
                      {player.ranking}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Teams;
