import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Tours Management System
      </Typography>
      <Typography variant="body1" paragraph>
        This application allows you to manage countries, hotels, and tours.
      </Typography>
      <Box display="flex" justifyContent="space-around" mt={4}>
        <Link to="/countries" style={{ textDecoration: 'none' }}>
          <Paper elevation={2} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Countries</Typography>
          </Paper>
        </Link>
        <Link to="/hotels" style={{ textDecoration: 'none' }}>
          <Paper elevation={2} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Hotels</Typography>
          </Paper>
        </Link>
        <Link to="/tours" style={{ textDecoration: 'none' }}>
          <Paper elevation={2} style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Tours</Typography>
          </Paper>
        </Link>
      </Box>
    </Paper>
  );
};

export default HomePage;