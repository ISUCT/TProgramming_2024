import axios from 'axios';
import { Hotel } from './hotelApi';

const API_URL = 'http://localhost:3000/countries';

export interface Country {
  id: number;
  name: string;
  hotels?: Hotel[];
}

export interface CreateCountryDto {
  name: string;
}

export const fetchCountries = async (): Promise<Country[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createCountry = async (countryData: CreateCountryDto): Promise<Country> => {
  const response = await axios.post(API_URL, countryData);
  return response.data;
};

export const updateCountry = async (id: number, countryData: Partial<Country>): Promise<Country> => {
  const response = await axios.put(`${API_URL}/${id}`, countryData);
  return response.data;
};

export const deleteCountry = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};