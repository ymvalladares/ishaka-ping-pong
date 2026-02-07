import React from 'react';
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';

const programs = [
  {
    icon: <PersonIcon sx={{ fontSize: 40 }} />,
    title: 'Private Coaching',
    duration: '1-on-1 Sessions',
    description: 'Personalized training with certified coaches tailored to your skill level and goals.',
    schedule: 'Mon-Sat: 8AM-8PM',
    price: '$60/hour',
    color: '#D32F2F',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: 'Group Training',
    duration: 'Small Groups (4-6)',
    description: 'Dynamic group sessions focusing on technique, strategy, and competitive play.',
    schedule: 'Mon/Wed/Fri: 6PM-8PM',
    price: '$30/session',
    color: '#1976D2',
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    title: 'Youth Academy',
    duration: 'Ages 8-16',
    description: 'Comprehensive program for young players to develop fundamental skills and sportsmanship.',
    schedule: 'Tue/Thu: 4PM-6PM',
    price: '$120/month',
    color: '#F57C00',
  },
];

const scheduleData = [
  { day: 'Monday', morning: 'Open Play', afternoon: 'Group Training', evening: 'Private Sessions' },
  { day: 'Tuesday', morning: 'Youth Academy', afternoon: 'Open Play', evening: 'Competitive Squad' },
  { day: 'Wednesday', morning: 'Open Play', afternoon: 'Group Training', evening: 'Private Sessions' },
  { day: 'Thursday', morning: 'Youth Academy', afternoon: 'Open Play', evening: 'Elite Training' },
  { day: 'Friday', morning: 'Open Play', afternoon: 'Group Training', evening: 'Tournament Prep' },
  { day: 'Saturday', morning: 'All Programs', afternoon: 'Workshops', evening: 'Open Play' },
];

const Training = () => {
  return (
    <Box
      id="training"
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
            TRAINING PROGRAMS
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
            ELEVATE YOUR
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
              SKILLS
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
            Choose from our range of professional training programs designed to take your game
            to the next level, whether you're a beginner or an advanced player.
          </Typography>
        </Box>

        {/* Training Programs */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {programs.map((program, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  border: '2px solid #F5F5F5',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
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
                    background: program.color,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: `0 16px 48px ${program.color}25`,
                    borderColor: `${program.color}40`,
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '18px',
                    background: `linear-gradient(135deg, ${program.color}15 0%, ${program.color}08 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    color: program.color,
                  }}
                >
                  {program.icon}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontSize: '24px',
                    fontWeight: 700,
                    mb: 1,
                    color: '#212121',
                  }}
                >
                  {program.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '14px',
                    color: program.color,
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {program.duration}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '15px',
                    color: '#616161',
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {program.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    p: 2,
                    borderRadius: '12px',
                    background: '#F8F8F8',
                    mb: 2,
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: 20, color: '#757575' }} />
                  <Typography sx={{ fontSize: '14px', color: '#616161', fontWeight: 600 }}>
                    {program.schedule}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pt: 3,
                    borderTop: '2px solid #F5F5F5',
                  }}
                >
                  <Typography sx={{ fontSize: '14px', color: '#757575', fontWeight: 600 }}>
                    Starting at
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '28px',
                      fontWeight: 700,
                      fontFamily: '"Bebas Neue", cursive',
                      color: program.color,
                    }}
                  >
                    {program.price}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Weekly Schedule */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: '24px',
            background: '#FFFFFF',
            border: '2px solid #F5F5F5',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '32px', md: '42px' },
              fontWeight: 700,
              mb: 1,
              color: '#212121',
            }}
          >
            Weekly Schedule
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: '#757575',
              mb: 4,
            }}
          >
            Plan your training with our comprehensive weekly schedule
          </Typography>

          <Grid container spacing={2}>
            {scheduleData.map((item, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    background: index % 2 === 0 ? '#FAFAFA' : '#FFFFFF',
                    border: '1px solid #F0F0F0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(211, 47, 47, 0.04)',
                      borderColor: 'rgba(211, 47, 47, 0.2)',
                      transform: 'translateX(8px)',
                    },
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={2}>
                      <Typography
                        sx={{
                          fontSize: '18px',
                          fontWeight: 700,
                          color: '#212121',
                        }}
                      >
                        {item.day}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: '11px',
                                color: '#757575',
                                fontWeight: 700,
                                mb: 0.5,
                                letterSpacing: '0.1em',
                              }}
                            >
                              MORNING
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: '#424242',
                                fontWeight: 600,
                              }}
                            >
                              {item.morning}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: '11px',
                                color: '#757575',
                                fontWeight: 700,
                                mb: 0.5,
                                letterSpacing: '0.1em',
                              }}
                            >
                              AFTERNOON
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: '#424242',
                                fontWeight: 600,
                              }}
                            >
                              {item.afternoon}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <Box>
                            <Typography
                              sx={{
                                fontSize: '11px',
                                color: '#757575',
                                fontWeight: 700,
                                mb: 0.5,
                                letterSpacing: '0.1em',
                              }}
                            >
                              EVENING
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: '14px',
                                color: '#424242',
                                fontWeight: 600,
                              }}
                            >
                              {item.evening}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Training;
