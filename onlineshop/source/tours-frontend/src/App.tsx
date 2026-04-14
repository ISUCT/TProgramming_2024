import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import CountriesPage from './pages/CountriesPage'; 
import HotelsPage from './pages/HotelsPage';
import ToursPage from './pages/ToursPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tours Management
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/countries">Countries</Button>
          <Button color="inherit" component={Link} to="/hotels">Hotels</Button>
          <Button color="inherit" component={Link} to="/tours">Tours</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/countries/*" element={<CountriesPage />} />
          <Route path="/hotels/*" element={<HotelsPage />} />
          <Route path="/tours/*" element={<ToursPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;