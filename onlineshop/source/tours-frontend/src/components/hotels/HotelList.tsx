import React, { useEffect, useState } from 'react';
import { fetchHotels, deleteHotel } from '../../api/hotelApi';
import { Hotel } from '../../api/hotelApi';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadHotels = async () => {
      const data = await fetchHotels();
      setHotels(data);
    };
    loadHotels();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteHotel(id);
    setHotels(hotels.filter(hotel => hotel.id !== id));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Rooms</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hotels.map((hotel) => (
            <TableRow key={hotel.id}>
              <TableCell>{hotel.id}</TableCell>
              <TableCell>{hotel.name}</TableCell>
              <TableCell>{hotel.address}</TableCell>
              <TableCell>{hotel.rooms}</TableCell>
              <TableCell>{hotel.country?.name}</TableCell>
              <TableCell>
                <IconButton onClick={() => navigate(`/hotels/edit/${hotel.id}`)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(hotel.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/hotels/new')}
        style={{ margin: '20px' }}
      >
        Add Hotel
      </Button>
    </TableContainer>
  );
};

export default HotelList;