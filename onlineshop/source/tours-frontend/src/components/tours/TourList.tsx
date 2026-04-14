import React, { useEffect, useState } from 'react';
import { fetchTours, deleteTour } from '../../api/tourApi';
import { Tour } from '../../api/tourApi';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  IconButton,
  CircularProgress,
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TourList: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loadTours = async () => {
    try {
      setIsLoading(true);
      const data = await fetchTours();
      setTours(data);
    } catch (err) {
      setError('Failed to load tours');
      console.error('Error loading tours:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTours();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      setIsDeleting(id);
      await deleteTour(id);
      await loadTours();
    } catch (err) {
      setError('Failed to delete tour');
      console.error('Error deleting tour:', err);
    } finally {
      setIsDeleting(null);
    }
  };

  const formatPrice = (price: number | string) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    return isNaN(numericPrice) ? '-' : `$${numericPrice.toFixed(2)}`;
  };

  const formatDate = (dateString?: string | Date) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? '-' : date.toLocaleDateString();
  };

  const formatHotelInfo = (hotel?: any) => {
    if (!hotel) return '-';
    return `${hotel.name}${hotel.country ? ` (${hotel.country.name})` : ''}`;
  };

  const handleCloseError = () => {
    setError(null);
  };

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Dates</TableCell>
              <TableCell>Hotel (Country)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tours.length > 0 ? (
              tours.map((tour) => (
                <TableRow key={tour.id} hover>
                  <TableCell>{tour.id}</TableCell>
                  <TableCell>{tour.name}</TableCell>
                  <TableCell>{tour.description || '-'}</TableCell>
                  <TableCell>{formatPrice(tour.price)}</TableCell>
                  <TableCell>
                    {formatDate(tour.startDate)} - {formatDate(tour.endDate)}
                  </TableCell>
                  <TableCell>
                    {formatHotelInfo(tour.hotel)}
                  </TableCell>
                  <TableCell>
                    <IconButton 
                      onClick={() => navigate(`/tours/edit/${tour.id}`)}
                      color="primary"
                      disabled={isDeleting === tour.id}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton 
                      onClick={() => handleDelete(tour.id)}
                      color="error"
                      disabled={isDeleting === tour.id}
                    >
                      {isDeleting === tour.id ? <CircularProgress size={24} /> : <Delete />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No tours available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => navigate('/tours/new')}
            sx={{ mt: 2 }}
          >
            Add Tour
          </Button>
        </Box>
      </TableContainer>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default TourList;