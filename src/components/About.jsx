import React from 'react';
import { Box, Container, Typography, Grid, Card } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import StarIcon from '@mui/icons-material/Star';

const achievements = [
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 40 }} />,
    title: 'Championship Winners',
    description: 'Multiple national and regional tournament victories',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: 'Professional Community',
    description: 'Connect with passionate players at all skill levels',
  },
  {
    icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
    title: 'World-Class Facilities',
    description: 'State-of-the-art equipment and training environments',
  },
  {
    icon: <StarIcon sx={{ fontSize: 40 }} />,
    title: 'Expert Coaching',
    description: 'Train under certified professional coaches',
  },
];

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        background: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(211, 47, 47, 0.03) 0%, transparent 70%)',
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
            ABOUT US
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
            WHERE CHAMPIONS
            <br />
            ARE MADE
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
            Founded in 2010, Elite TT has become the premier destination for table tennis
            excellence. We combine professional training, competitive opportunities, and a
            vibrant community to help players of all levels reach their full potential.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {achievements.map((achievement, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  border: '1px solid #F5F5F5',
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
                    height: '4px',
                    background: 'linear-gradient(90deg, #D32F2F 0%, #B71C1C 100%)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(211, 47, 47, 0.15)',
                    borderColor: 'rgba(211, 47, 47, 0.2)',
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(211, 47, 47, 0.1) 0%, rgba(183, 28, 28, 0.1) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    color: '#D32F2F',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {achievement.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    mb: 1.5,
                    color: '#212121',
                  }}
                >
                  {achievement.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#757575',
                    lineHeight: 1.7,
                  }}
                >
                  {achievement.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Mission Statement */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 6 },
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #F5F5F5 0%, #FAFAFA 100%)',
            border: '2px solid #F0F0F0',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(211, 47, 47, 0.08) 0%, transparent 70%)',
            }}
          />
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '32px', md: '42px' },
                  fontWeight: 700,
                  color: '#212121',
                  mb: { xs: 2, md: 0 },
                }}
              >
                Our
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
                  Mission
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                sx={{
                  fontSize: { xs: '16px', md: '18px' },
                  color: '#424242',
                  lineHeight: 1.8,
                  fontWeight: 500,
                }}
              >
                To cultivate a thriving table tennis community where players of all ages
                and skill levels can pursue excellence through expert coaching, competitive
                opportunities, and a supportive environment. We believe in the power of sport
                to transform lives, build character, and create lasting connections.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
