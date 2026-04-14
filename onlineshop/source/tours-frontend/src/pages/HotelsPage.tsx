import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import HotelList from '../components/hotels/HotelList';
import HotelForm from '../components/hotels/HotelForm';
import { createHotel, updateHotel, fetchHotels } from '../api/hotelApi';
import { CreateHotelDto } from '../api/hotelApi';

const HotelsPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const handleCreate = async (values: CreateHotelDto) => {
    await createHotel(values);
    navigate('/hotels');
  };

  const handleUpdate = async (id: number, values: Partial<CreateHotelDto>) => {
    await updateHotel(id, values);
    navigate('/hotels');
  };

  const loadHotelData = async (id: number): Promise<CreateHotelDto> => {
    const hotels = await fetchHotels();
    const hotel = hotels.find(h => h.id === id);
    if (!hotel) {
      throw new Error('Hotel not found');
    }
    return {
      name: hotel.name,
      address: hotel.address,
      rooms: hotel.rooms,
      countryId: hotel.country?.id
    };
  };

  return (
    <Routes>
      <Route path="/" element={<HotelList />} />
      <Route path="/new" element={<HotelForm onSubmit={handleCreate} />} />
      <Route 
        path="/edit/:id" 
        element={
          <HotelForm 
            onSubmit={(values) => handleUpdate(parseInt(id || '0'), values)}
            loadInitialValues={() => loadHotelData(parseInt(id || '0'))}
          />
        } 
      />
    </Routes>
  );
};

export default HotelsPage;