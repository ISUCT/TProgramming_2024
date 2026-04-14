import axios from 'axios';
import { Hotel } from './hotelApi';

const API_URL = 'http://localhost:3000/tours';

export interface Tour {
  id: number;
  name: string;
  description?: string;
  price: number;
  startDate?: Date;
  endDate?: Date;
  hotel?: Hotel & { country?: { id: number; name: string } };
}

export interface CreateTourDto {
  name: string;
  description?: string;
  price: number;
  startDate?: Date;
  endDate?: Date;
  hotelId?: number;
}

export const fetchTours = async (): Promise<Tour[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tours:', error);
    throw error;
  }
};

export const createTour = async (tourData: CreateTourDto): Promise<Tour> => {
  try {
    const response = await axios.post(API_URL, {
      ...tourData,
      hotelId: tourData.hotelId || undefined
    });
    return response.data;
  } catch (error) {
    console.error('Error creating tour:', error);
    throw error;
  }
};

export const updateTour = async (id: number, tourData: Partial<CreateTourDto>): Promise<Tour> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, {
      ...tourData,
      hotelId: tourData.hotelId || undefined
    });
    return response.data;
  } catch (error) {
    console.error('Error updating tour:', error);
    throw error;
  }
};

export const deleteTour = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting tour:', error);
    throw error;
  }
};