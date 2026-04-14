import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import TourList from '../components/tours/TourList';
import TourForm from '../components/tours/TourForm';
import { createTour, updateTour, fetchTours } from '../api/tourApi';
import { CreateTourDto } from '../api/tourApi';

const ToursPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const handleCreate = async (values: CreateTourDto) => {
    try {
      await createTour(values);
      navigate('/tours');
    } catch (error) {
      console.error('Error creating tour:', error);
    }
  };

  const handleUpdate = async (id: number, values: Partial<CreateTourDto>) => {
    try {
      await updateTour(id, values);
      navigate('/tours');
    } catch (error) {
      console.error('Error updating tour:', error);
    }
  };

  const loadTourData = async (id: number): Promise<CreateTourDto> => {
    const tours = await fetchTours();
    const tour = tours.find(t => t.id === id);
    if (!tour) {
      throw new Error('Tour not found');
    }
    return {
      name: tour.name,
      description: tour.description || '',
      price: tour.price,
      startDate: tour.startDate ? new Date(tour.startDate) : undefined,
      endDate: tour.endDate ? new Date(tour.endDate) : undefined,
      hotelId: tour.hotel?.id
    };
  };

  return (
    <Routes>
      <Route path="/" element={<TourList />} />
      <Route path="/new" element={<TourForm onSubmit={handleCreate} />} />
      <Route 
        path="/edit/:id" 
        element={
          <TourForm 
            onSubmit={(values) => handleUpdate(parseInt(id || '0'), values)}
            loadInitialValues={() => loadTourData(parseInt(id || '0'))}
          />
        } 
      />
    </Routes>
  );
};

export default ToursPage;