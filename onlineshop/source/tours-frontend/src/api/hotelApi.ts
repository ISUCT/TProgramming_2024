import axios from 'axios';
import { Country } from './countryApi';
import { Tour } from './tourApi';

const API_URL = 'http://localhost:3000/hotels';

export interface Hotel {
  id: number;
  name: string;
  address: string;
  rooms: number;
  country?: Country;
  tours?: Tour[];
}

export interface CreateHotelDto {
  name: string;
  address: string;
  rooms: number;
  countryId?: number;
}

export const fetchHotels = async (): Promise<Hotel[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createHotel = async (hotelData: CreateHotelDto): Promise<Hotel> => {
  const response = await axios.post(API_URL, hotelData);
  return response.data;
};

export const updateHotel = async (id: number, hotelData: Partial<Hotel>): Promise<Hotel> => {
  const response = await axios.put(`${API_URL}/${id}`, hotelData);
  return response.data;
};

export const deleteHotel = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};