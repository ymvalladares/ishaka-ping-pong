import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Teams from './components/Teams';
import Tournaments from './components/Tournaments';
import Training from './components/Training';
import Gallery from './components/Gallery';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D32F2F',
      light: '#FF5252',
      dark: '#B71C1C',
    },
    secondary: {
      main: '#212121',
      light: '#484848',
      dark: '#000000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Sora", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: '"Bebas Neue", cursive',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Sora", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.05em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 2px 8px rgba(0,0,0,0.05)',
    '0px 4px 16px rgba(0,0,0,0.08)',
    '0px 8px 24px rgba(0,0,0,0.12)',
    '0px 12px 32px rgba(0,0,0,0.15)',
    '0px 16px 48px rgba(0,0,0,0.18)',
    '0px 20px 56px rgba(0,0,0,0.20)',
    '0px 24px 64px rgba(0,0,0,0.22)',
    '0px 28px 72px rgba(0,0,0,0.24)',
    '0px 32px 80px rgba(0,0,0,0.26)',
    '0px 36px 88px rgba(0,0,0,0.28)',
    '0px 40px 96px rgba(0,0,0,0.30)',
    '0px 44px 104px rgba(0,0,0,0.32)',
    '0px 48px 112px rgba(0,0,0,0.34)',
    '0px 52px 120px rgba(0,0,0,0.36)',
    '0px 56px 128px rgba(0,0,0,0.38)',
    '0px 60px 136px rgba(0,0,0,0.40)',
    '0px 64px 144px rgba(0,0,0,0.42)',
    '0px 68px 152px rgba(0,0,0,0.44)',
    '0px 72px 160px rgba(0,0,0,0.46)',
    '0px 76px 168px rgba(0,0,0,0.48)',
    '0px 80px 176px rgba(0,0,0,0.50)',
    '0px 84px 184px rgba(0,0,0,0.52)',
    '0px 88px 192px rgba(0,0,0,0.54)',
    '0px 92px 200px rgba(0,0,0,0.56)',
  ],
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: '#FFFFFF' }}>
        <Navbar />
        <Hero />
        <About />
        <Teams />
        <Tournaments />
        <Training />
        <Gallery />
        <Membership />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
