import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Card, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ fontSize: 28 }} />,
    title: 'Visit Us',
    details: '4911 Spring Park Road, Jacksonville, FL 32207',
    color: '#D32F2F',
  },
  {
    icon: <PhoneIcon sx={{ fontSize: 28 }} />,
    title: 'Call Us',
    details: '+1 (904) 885-4203',
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
    details: 'Check our schedule for a better info',
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Estilo reutilizable de los inputs originales
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      background: '#FFFFFF',
      '&:hover fieldset': { borderColor: '#D32F2F' },
      '&.Mui-focused fieldset': { borderColor: '#D32F2F', borderWidth: '2px' },
    },
    '& .MuiInputLabel-root.Mui-focused': { color: '#D32F2F' },
  };

  return (
    <Box id="contact" sx={{ py: { xs: 10, md: 14 }, background: '#FFFFFF', position: 'relative' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#D32F2F', letterSpacing: '0.15em', mb: 2 }}>
            CONTACT US
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '40px', md: '56px' }, fontWeight: 700, mb: 3, color: '#212121' }}>
            GET IN <br />
            <Box component="span" sx={{ background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              TOUCH
            </Box>
          </Typography>
          <Typography sx={{ fontSize: { xs: '18px', md: '20px' }, fontWeight: 500, color: '#424242', mb: 2 }}>
            Ready to elevate your game to the next level?
          </Typography>
          <Typography sx={{ fontSize: { xs: '16px', md: '18px' }, color: '#757575', maxWidth: '700px', mx: 'auto', lineHeight: 1.8 }}>
            Have questions about membership, training programs, or upcoming tournaments? We're here to help you start your table tennis journey.
          </Typography>
        </Box>

        {/* Layout Grid */}
        <Grid container spacing={4} alignItems="stretch">
          
          {/* LADO IZQUIERDO: Info Cards */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3} sx={{ height: '100%', justifyContent: { xs: 'flex-start', md: 'space-between' } }}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  sx={{
                    p: 3,
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    border: '2px solid #F5F5F5',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    flexGrow: 1,
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: `0 8px 32px ${info.color}20`,
                      borderColor: `${info.color}40`,
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                    <Box sx={{
                      width: 64, height: 64, borderRadius: '16px',
                      background: `linear-gradient(135deg, ${info.color}15 0%, ${info.color}08 100%)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: info.color, flexShrink: 0,
                    }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#212121', mb: 0.5 }}>{info.title}</Typography>
                      <Typography sx={{ fontSize: '14px', color: '#616161', lineHeight: 1.6 }}>{info.details}</Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* LADO DERECHO: Formulario */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: '24px',
                background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)',
                border: '2px solid #F5F5F5',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                height: '100%',
              }}
            >
              <Typography variant="h4" sx={{ fontSize: { xs: '28px', md: '32px' }, fontWeight: 700, mb: 1, color: '#212121' }}>
                Send Us a Message
              </Typography>
              <Typography sx={{ fontSize: '15px', color: '#757575', mb: 4 }}>
                Fill out the form below and we'll get back to you within 24 hours
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}><TextField fullWidth label="Your Name" name="name" onChange={handleChange} required sx={textFieldStyle} /></Grid>
                  <Grid item xs={12} sm={6}><TextField fullWidth label="Email Address" name="email" type="email" onChange={handleChange} required sx={textFieldStyle} /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Phone Number" name="phone" onChange={handleChange} sx={textFieldStyle} /></Grid>
                  <Grid item xs={12}><TextField fullWidth label="Your Message" name="message" multiline rows={6} onChange={handleChange} required sx={textFieldStyle} /></Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit" fullWidth variant="contained" endIcon={<SendIcon />}
                      sx={{
                        py: 2, fontSize: '16px', fontWeight: 700, borderRadius: '12px',
                        background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)',
                        boxShadow: '0 8px 24px rgba(211, 47, 47, 0.35)',
                        transition: 'all 0.3s ease',
                        '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 32px rgba(211, 47, 47, 0.45)' },
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

        {/* Google Maps */}
        <Box 
          sx={{
            mt: 8, 
            height: '450px', 
            borderRadius: '24px', 
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0, 0, 0, 0.12)',
            border: '2px solid #F0F0F0',
            position: 'relative',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.1234567890!2d-81.6234567890!3d30.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4911%20Spring%20Park%20Road%2C%20Jacksonville%2C%20FL%2032207!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pine Castle Gymnasium Location"
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;