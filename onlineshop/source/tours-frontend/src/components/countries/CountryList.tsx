import React, { useEffect, useState } from 'react';
import { fetchCountries, deleteCountry } from '../../api/countryApi';
import { Country } from '../../api/countryApi';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    loadCountries();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteCountry(id);
    setCountries(countries.filter(country => country.id !== id));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.id}>
              <TableCell>{country.id}</TableCell>
              <TableCell>{country.name}</TableCell>
              <TableCell>
                <IconButton onClick={() => navigate(`/countries/edit/${country.id}`)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(country.id)}>
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
        onClick={() => navigate('/countries/new')}
        style={{ margin: '20px' }}
      >
        Add Country
      </Button>
    </TableContainer>
  );
};

export default CountryList;