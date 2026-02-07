import React from 'react';
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
  { 
    day: 'Monday', 
    shortDay: 'MON',
    sessions: [
      { time: '6:30 PM - 9:30 PM', activity: 'Open Practice' }
    ]
  },
  { 
    day: 'Tuesday', 
    shortDay: 'TUE',
    sessions: [
      { time: 'By Appointment', activity: 'Closed' }
    ]
  },
  { 
    day: 'Wednesday', 
    shortDay: 'WED',
    sessions: [
      { time: '6:30 PM - 9:30 PM', activity: 'Open Practice' }
    ]
  },
  { 
    day: 'Thursday', 
    shortDay: 'THU',
    sessions: [
      { time: 'By Appointment', activity: 'Closed' }
    ]
  },
  { 
    day: 'Friday', 
    shortDay: 'FRI',
    sessions: [
      { time: '6:30 PM - 9:30 PM', activity: 'Open Practice' }
    ]
  },
  { 
    day: 'Saturday', 
    shortDay: 'SAT',
    sessions: [
      { time: '2:30 PM - 5:30 PM', activity: 'Open Practice' }
    ]
  },
  { 
    day: 'Sunday', 
    shortDay: 'SUN',
    sessions: [
      { time: '4:30 PM - 7:30 PM', activity: 'Open Practice' }
    ]
  },
];

const clubInfo = {
  location: '4911 Spring Park Road, Jacksonville, FL 32207',
  venue: 'Pine Castle Gymnasium',
  tables: '8 Butterfly Tables',
  cost: '$15 per evening',
  president: 'Jean-Marie Kanani',
  contact: '904-885-4203'
};

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

        {/* Premium Schedule Section */}
        <Box
          sx={{
            borderRadius: '32px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.12)',
            border: '2px solid #F0F0F0',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              background: 'linear-gradient(90deg, #D32F2F 0%, #FF5722 50%, #D32F2F 100%)',
            }
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              pb: { xs: 3, md: 4 },
              borderBottom: '2px solid #F0F0F0',
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#D32F2F',
                    letterSpacing: '0.15em',
                    mb: 2,
                  }}
                >
                  PRACTICE SCHEDULE
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: '32px', md: '48px' },
                    fontWeight: 700,
                    color: '#212121',
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Table Tennis Practice
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: '15px', md: '17px' },
                    color: '#616161',
                    lineHeight: 1.7,
                    maxWidth: '600px',
                  }}
                >
                  Our club holds practices inside the gymnasium at Pine Castle with high ceilings 
                  and air conditioning to keep you cool. We have 8 Butterfly tables to play on and 
                  everyone is welcome to join us.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.08) 0%, rgba(255, 87, 34, 0.08) 100%)',
                    border: '2px solid rgba(211, 47, 47, 0.2)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#757575',
                      letterSpacing: '0.1em',
                      mb: 1,
                    }}
                  >
                    COST PER SESSION
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '48px',
                      fontWeight: 700,
                      color: '#D32F2F',
                      fontFamily: '"Bebas Neue", cursive',
                      lineHeight: 1,
                    }}
                  >
                    $15
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#757575',
                      mt: 0.5,
                    }}
                  >
                    per evening session
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Weekly Schedule Grid */}
          <Box sx={{ p: { xs: 4, md: 6 } }}>
            <Grid container spacing={3}>
              {scheduleData.map((item, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: '20px',
                      background: '#FFFFFF',
                      border: '2px solid #F0F0F0',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #D32F2F 0%, #FF5722 100%)',
                        transform: 'scaleX(0)',
                        transformOrigin: 'left',
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      },
                      '&:hover': {
                        background: '#FAFAFA',
                        borderColor: 'rgba(211, 47, 47, 0.3)',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 32px rgba(211, 47, 47, 0.15)',
                        '&::before': {
                          transform: 'scaleX(1)',
                        },
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: '14px',
                          background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.1) 0%, rgba(255, 87, 34, 0.1) 100%)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '2px solid rgba(211, 47, 47, 0.2)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#757575',
                            letterSpacing: '0.05em',
                          }}
                        >
                          {item.shortDay}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '22px',
                          fontWeight: 700,
                          color: '#212121',
                        }}
                      >
                        {item.day}
                      </Typography>
                    </Box>

                    {item.sessions.map((session, sessionIndex) => (
                      <Box key={sessionIndex} sx={{ mb: sessionIndex < item.sessions.length - 1 ? 2 : 0 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          <AccessTimeIcon sx={{ fontSize: 16, color: '#D32F2F' }} />
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: 600,
                              color: '#D32F2F',
                              letterSpacing: '0.02em',
                            }}
                          >
                            {session.time}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            fontSize: '15px',
                            color: '#424242',
                            fontWeight: 600,
                            pl: 3,
                          }}
                        >
                          {session.activity}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Club Information Footer */}
          <Box
            sx={{
              p: { xs: 4, md: 6 },
              pt: { xs: 3, md: 4 },
              borderTop: '2px solid #F0F0F0',
              background: '#FAFAFA',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <LocationOnIcon sx={{ fontSize: 20, color: '#D32F2F', mt: 0.3 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#757575',
                        letterSpacing: '0.1em',
                        mb: 0.5,
                      }}
                    >
                      LOCATION
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#212121',
                        lineHeight: 1.6,
                      }}
                    >
                      {clubInfo.location}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '13px',
                        color: '#616161',
                        mt: 0.5,
                      }}
                    >
                      {clubInfo.venue}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <PhoneIcon sx={{ fontSize: 20, color: '#D32F2F', mt: 0.3 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#757575',
                        letterSpacing: '0.1em',
                        mb: 0.5,
                      }}
                    >
                      CONTACT
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#212121',
                        lineHeight: 1.6,
                      }}
                    >
                      {clubInfo.contact}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <AccountCircleIcon sx={{ fontSize: 20, color: '#D32F2F', mt: 0.3 }} />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#757575',
                        letterSpacing: '0.1em',
                        mb: 0.5,
                      }}
                    >
                      CLUB PRESIDENT
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#212121',
                        lineHeight: 1.6,
                      }}
                    >
                      {clubInfo.president}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Training;