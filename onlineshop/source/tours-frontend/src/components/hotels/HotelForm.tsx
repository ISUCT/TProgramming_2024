import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  TextField, 
  Button, 
  Paper, 
  Typography, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Select,
  CircularProgress,
  Box
} from '@mui/material';
import { CreateHotelDto } from '../../api/hotelApi';
import { fetchCountries } from '../../api/countryApi';
import { Country } from '../../api/countryApi';
import { useNavigate } from 'react-router-dom';

interface HotelFormProps {
  onSubmit: (values: CreateHotelDto) => Promise<void>;
  loadInitialValues?: () => Promise<CreateHotelDto>;
}

interface HotelFormValues {
  name: string;
  address: string;
  rooms: number;
  countryId?: number;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .max(40, 'Name must be 40 characters or less')
    .required('Name is required'),
  address: Yup.string()
    .max(100, 'Address must be 100 characters or less')
    .required('Address is required'),
  rooms: Yup.number()
    .required('Rooms is required')
    .positive('Rooms must be positive')
    .integer('Rooms must be an integer'),
  countryId: Yup.number()
    .nullable()
    .optional(),
});

const HotelForm: React.FC<HotelFormProps> = ({ onSubmit, loadInitialValues }) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<Country[]>([]);
  const [initialValues, setInitialValues] = useState<HotelFormValues>({ 
    name: '',
    address: '',
    rooms: 0,
    countryId: undefined
  });
  const [isLoading, setIsLoading] = useState(!!loadInitialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Загружаем список стран
        const countriesData = await fetchCountries();
        setCountries(countriesData);

        // Загружаем начальные данные для редактирования (если есть)
        if (loadInitialValues) {
          const hotelData = await loadInitialValues();
          setInitialValues({
            name: hotelData.name,
            address: hotelData.address,
            rooms: hotelData.rooms,
            countryId: hotelData.countryId
          });
        }
      } catch (error) {
        console.error('Error loading data:', error);
        navigate('/hotels');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [loadInitialValues, navigate]);

  const handleSubmit = async (values: HotelFormValues) => {
    setIsSubmitting(true);
    try {
      const submitValues: CreateHotelDto = {
        name: values.name,
        address: values.address,
        rooms: values.rooms,
        countryId: values.countryId
      };
      await onSubmit(submitValues);
      navigate('/hotels');
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik<HotelFormValues>({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: handleSubmit,
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Paper sx={{ padding: 3, maxWidth: 600, margin: '20px auto' }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 3 }}>
        {loadInitialValues ? 'Edit Hotel' : 'Create Hotel'}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          label="Hotel Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          margin="normal"
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Number of Rooms"
          name="rooms"
          type="number"
          value={formik.values.rooms}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.rooms && Boolean(formik.errors.rooms)}
          helperText={formik.touched.rooms && formik.errors.rooms}
          margin="normal"
          InputProps={{ inputProps: { min: 1 } }}
          sx={{ mb: 2 }}
        />

        <FormControl fullWidth margin="normal" sx={{ mb: 3 }}>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            label="Country"
            name="countryId"
            value={formik.values.countryId || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.countryId && Boolean(formik.errors.countryId)}
          >
            <MenuItem value="">
              <em>Select a country</em>
            </MenuItem>
            {countries.map((country) => (
              <MenuItem key={country.id} value={country.id}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/hotels')}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting || !formik.isValid}
          >
            {isSubmitting ? (
              <>
                <CircularProgress size={24} sx={{ mr: 1 }} />
                Saving...
              </>
            ) : (
              'Save Hotel'
            )}
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default HotelForm;