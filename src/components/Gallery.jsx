import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const galleryImages = [
  {
    title: 'Tournament Finals',
    category: 'Competitions',
    color: '#D32F2F',
  },
  {
    title: 'Youth Training',
    category: 'Training',
    color: '#F57C00',
  },
  {
    title: 'Champions Celebration',
    category: 'Events',
    color: '#1976D2',
  },
  {
    title: 'Professional Match',
    category: 'Competitions',
    color: '#D32F2F',
  },
  {
    title: 'Group Session',
    category: 'Training',
    color: '#F57C00',
  },
  {
    title: 'Elite Players',
    category: 'Team',
    color: '#388E3C',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Box
      id="gallery"
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
            GALLERY
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
            MOMENTS OF
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
              EXCELLENCE
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
            Explore highlights from our tournaments, training sessions, and community events.
            Every image tells a story of dedication and achievement.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {galleryImages.map((image, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
                '@keyframes fadeInUp': {
                  from: { opacity: 0, transform: 'translateY(30px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Box
                onClick={() => setSelectedImage(image)}
                sx={{
                  position: 'relative',
                  height: index === 0 || index === 3 ? '400px' : '280px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.02)',
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
                    '& .overlay': {
                      opacity: 1,
                    },
                    '& .zoom-icon': {
                      opacity: 1,
                      transform: 'translate(-50%, -50%) scale(1)',
                    },
                  },
                }}
              >
                {/* Image Placeholder with Gradient */}
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(135deg, ${image.color}40 0%, ${image.color}20 100%)`,
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
                      background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                      opacity: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '72px',
                      fontFamily: '"Bebas Neue", cursive',
                      fontWeight: 700,
                      color: image.color,
                      opacity: 0.3,
                      zIndex: 1,
                    }}
                  >
                    TT
                  </Typography>
                </Box>

                {/* Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '12px',
                      color: image.color,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      mb: 1,
                    }}
                  >
                    {image.category}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                    }}
                  >
                    {image.title}
                  </Typography>
                </Box>

                {/* Zoom Icon */}
                <Box
                  className="zoom-icon"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(0.8)',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <ZoomInIcon sx={{ fontSize: 32, color: image.color }} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Box
            sx={{
              display: 'inline-flex',
              px: 4,
              py: 1.5,
              borderRadius: '50px',
              border: '2px solid #212121',
              color: '#212121',
              fontWeight: 700,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: '#212121',
                color: '#FFFFFF',
                transform: 'translateY(-2px)',
              },
            }}
          >
            VIEW ALL PHOTOS
          </Box>
        </Box>
      </Container>

      {/* Modal for enlarged image */}
      <Modal
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '90%',
            maxWidth: '1000px',
            maxHeight: '90vh',
            outline: 'none',
          }}
        >
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              top: -60,
              right: 0,
              color: '#FFFFFF',
              background: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box
              sx={{
                width: '100%',
                height: '70vh',
                borderRadius: '24px',
                overflow: 'hidden',
                background: `linear-gradient(135deg, ${selectedImage.color}40 0%, ${selectedImage.color}20 100%)`,
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
                  background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  opacity: 1,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '200px',
                  fontFamily: '"Bebas Neue", cursive',
                  fontWeight: 700,
                  color: selectedImage.color,
                  opacity: 0.3,
                }}
              >
                TT
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;
