import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 28 }} />,
    title: 'Visit Us',
    details: '123 Champion Street, Sports District, Jacksonville, FL 32202',
    color: '#D32F2F',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 28 }} />,
    title: 'Call Us',
    details: '+1 (904) 555-SPIN',
    color: '#1976D2',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 28 }} />,
    title: 'Email Us',
    details: 'info@elitett.com',
    color: '#388E3C',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 28 }} />,
    title: 'Hours',
    details: 'Mon-Sat: 6AM-10PM, Sun: 8AM-8PM',
    color: '#F57C00',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        background: '#FFFFFF',
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
            CONTACT US
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
            GET IN
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
              TOUCH
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
            Have questions about membership, training programs, or upcoming tournaments?
            We're here to help you start your table tennis journey.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Info Cards */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: '20px',
                      background: '#FFFFFF',
                      border: '2px solid #F5F5F5',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(8px)',
                        boxShadow: `0 8px 32px ${info.color}20`,
                        borderColor: `${info.color}40`,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '16px',
                          background: `linear-gradient(135deg, ${info.color}15 0%, ${info.color}08 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: info.color,
                          flexShrink: 0,
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: 700,
                            color: '#212121',
                            mb: 0.5,
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            color: '#616161',
                            lineHeight: 1.6,
                          }}
                        >
                          {info.details}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)',
                border: '2px solid #F5F5F5',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '28px', md: '32px' },
                  fontWeight: 700,
                  mb: 1,
                  color: '#212121',
                }}
              >
                Send Us a Message
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  color: '#757575',
                  mb: 4,
                }}
              >
                Fill out the form below and we'll get back to you within 24 hours
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: '#FFFFFF',
                          '&:hover fieldset': {
                            borderColor: '#D32F2F',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#D32F2F',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#D32F2F',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: '#FFFFFF',
                          '&:hover fieldset': {
                            borderColor: '#D32F2F',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#D32F2F',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#D32F2F',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: '#FFFFFF',
                          '&:hover fieldset': {
                            borderColor: '#D32F2F',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#D32F2F',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#D32F2F',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: '#FFFFFF',
                          '&:hover fieldset': {
                            borderColor: '#D32F2F',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#D32F2F',
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#D32F2F',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      endIcon={<SendIcon />}
                      sx={{
                        py: 2,
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
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Map Placeholder */}
        <Box
          sx={{
            mt: 8,
            height: '400px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
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
              background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23000000\' fill-opacity=\'0.03\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
              opacity: 1,
            },
          }}
        >
          <Box sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <LocationOnIcon sx={{ fontSize: 64, color: '#D32F2F', mb: 2 }} />
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#424242',
                mb: 1,
              }}
            >
              Find Us Here
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                color: '#757575',
              }}
            >
              123 Champion Street, Jacksonville, FL 32202
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
