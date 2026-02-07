import React from 'react';
import { Box, Container, Typography, Grid, Card, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';

const membershipPlans = [
  {
    name: 'Starter',
    price: '49',
    period: 'month',
    description: 'Perfect for beginners looking to learn the basics',
    features: [
      'Access to all facilities',
      '2 group training sessions/week',
      'Equipment rental included',
      'Access to open play hours',
      'Monthly skill assessments',
    ],
    color: '#757575',
    popular: false,
  },
  {
    name: 'Pro',
    price: '99',
    period: 'month',
    description: 'Ideal for serious players committed to improvement',
    features: [
      'All Starter benefits',
      'Unlimited group training',
      '2 private coaching sessions/month',
      'Tournament entry discounts',
      'Priority court booking',
      'Video analysis sessions',
    ],
    color: '#D32F2F',
    popular: true,
  },
  {
    name: 'Elite',
    price: '179',
    period: 'month',
    description: 'For competitive players pursuing excellence',
    features: [
      'All Pro benefits',
      'Unlimited private coaching',
      'Personalized training program',
      'Free tournament entries',
      'Nutrition consultation',
      'Sports psychology sessions',
      'Premium locker access',
    ],
    color: '#1976D2',
    popular: false,
  },
];

const Membership = () => {
  return (
    <Box
      id="membership"
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(211, 47, 47, 0.05) 0%, transparent 70%)',
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
            MEMBERSHIP
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
            CHOOSE YOUR
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
              PATH
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
            Select the membership plan that best fits your goals and commitment level.
            All plans include access to our world-class facilities and community.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {membershipPlans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: '24px',
                  background: plan.popular
                    ? 'linear-gradient(135deg, #FFFFFF 0%, #FAFAFA 100%)'
                    : '#FFFFFF',
                  border: plan.popular ? '3px solid #D32F2F' : '2px solid #F5F5F5',
                  boxShadow: plan.popular
                    ? '0 16px 48px rgba(211, 47, 47, 0.2)'
                    : '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                  '&:hover': {
                    transform: plan.popular ? 'scale(1.05) translateY(-8px)' : 'translateY(-8px)',
                    boxShadow: plan.popular
                      ? '0 20px 56px rgba(211, 47, 47, 0.25)'
                      : `0 12px 40px ${plan.color}20`,
                  },
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      px: 3,
                      py: 0.75,
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                      boxShadow: '0 4px 16px rgba(211, 47, 47, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    <StarIcon sx={{ fontSize: 16, color: '#FFFFFF' }} />
                    <Typography
                      sx={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        letterSpacing: '0.1em',
                      }}
                    >
                      MOST POPULAR
                    </Typography>
                  </Box>
                )}

                <Box sx={{ textAlign: 'center', mb: 4, mt: plan.popular ? 2 : 0 }}>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#212121',
                      mb: 1,
                    }}
                  >
                    {plan.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      color: '#757575',
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {plan.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 0.5 }}>
                    <Typography
                      sx={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: plan.color,
                      }}
                    >
                      $
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '56px',
                        fontWeight: 700,
                        fontFamily: '"Bebas Neue", cursive',
                        color: plan.color,
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '16px',
                        color: '#757575',
                        fontWeight: 600,
                      }}
                    >
                      /{plan.period}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                  {plan.features.map((feature, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        mb: 2,
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          fontSize: 20,
                          color: plan.color,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#424242',
                          lineHeight: 1.6,
                        }}
                      >
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  fullWidth
                  variant={plan.popular ? 'contained' : 'outlined'}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.75,
                    fontSize: '16px',
                    fontWeight: 700,
                    borderRadius: '12px',
                    ...(plan.popular
                      ? {
                          background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                          boxShadow: '0 8px 24px rgba(211, 47, 47, 0.35)',
                          '&:hover': {
                            boxShadow: '0 12px 32px rgba(211, 47, 47, 0.45)',
                          },
                        }
                      : {
                          borderWidth: '2px',
                          borderColor: plan.color,
                          color: plan.color,
                          '&:hover': {
                            borderWidth: '2px',
                            borderColor: plan.color,
                            background: plan.color,
                            color: '#FFFFFF',
                          },
                        }),
                  }}
                >
                  Get Started
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 5 },
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #212121 0%, #424242 100%)',
            textAlign: 'center',
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
              background: 'radial-gradient(circle, rgba(211, 47, 47, 0.2) 0%, transparent 70%)',
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '24px', md: '32px' },
              fontWeight: 700,
              color: '#FFFFFF',
              mb: 2,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Not Sure Which Plan Is Right for You?
          </Typography>
          <Typography
            sx={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 3,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Try our facilities with a free 7-day trial pass. No commitment required.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.75,
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '12px',
              background: '#FFFFFF',
              color: '#212121',
              position: 'relative',
              zIndex: 1,
              '&:hover': {
                background: '#F5F5F5',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Get Free Trial
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Membership;
