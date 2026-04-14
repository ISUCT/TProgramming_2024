import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import CountryList from '../components/countries/CountryList';
import CountryForm from '../components/countries/CountryForm';
import { createCountry, updateCountry, fetchCountries } from '../api/countryApi';
import { CreateCountryDto } from '../api/countryApi';

const CountriesPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const handleCreate = async (values: CreateCountryDto) => {
    await createCountry(values);
    navigate('/countries');
  };

  const handleUpdate = async (id: number, values: Partial<CreateCountryDto>) => {
    await updateCountry(id, values);
    navigate('/countries');
  };

  const loadCountryData = async (id: number): Promise<CreateCountryDto> => {
    const countries = await fetchCountries();
    const country = countries.find(c => c.id === id);
    if (!country) {
      throw new Error('Country not found');
    }
    return { name: country.name };
  };

  return (
    <Routes>
      <Route path="/" element={<CountryList />} />
      <Route path="/new" element={<CountryForm onSubmit={handleCreate} />} />
      <Route 
        path="/edit/:id" 
        element={
          <CountryForm 
            onSubmit={(values) => handleUpdate(parseInt(id || '0'), values)}
            loadInitialValues={() => loadCountryData(parseInt(id || '0'))}
          />
        } 
      />
    </Routes>
  );
};

export default CountriesPage;