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
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CreateTourDto } from '../../api/tourApi';
import { fetchHotels } from '../../api/hotelApi';
import { Hotel } from '../../api/hotelApi';
import { useNavigate } from 'react-router-dom';

interface TourFormProps {
  onSubmit: (values: CreateTourDto) => Promise<void>;
  loadInitialValues?: () => Promise<CreateTourDto>;
}

interface TourFormValues {
  name: string;
  description: string;
  price: number;
  startDate: Date | null;
  endDate: Date | null;
  hotelId?: number;
}

const TourForm: React.FC<TourFormProps> = ({ onSubmit, loadInitialValues }) => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [isLoading, setIsLoading] = useState(!!loadInitialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(50, 'Name must be 50 characters or less'),
    description: Yup.string()
      .max(200, 'Description must be 200 characters or less'),
    price: Yup.number()
      .required('Price is required')
      .positive('Price must be positive'),
    startDate: Yup.mixed()
      .nullable()
      .test('is-date', 'Invalid date', (value) => {
        if (!value) return true;
        return value instanceof Date && !isNaN(value.getTime());
      }),
    endDate: Yup.mixed()
      .nullable()
      .test('is-date', 'Invalid date', (value) => {
        if (!value) return true;
        return value instanceof Date && !isNaN(value.getTime());
      }),
    hotelId: Yup.number().nullable()
  });

  const formik = useFormik<TourFormValues>({
    initialValues: {
      name: '',
      description: '',
      price: 0,
      startDate: null,
      endDate: null,
      hotelId: undefined
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Добавляем проверку дат перед отправкой
        if (values.startDate && values.endDate && values.endDate <= values.startDate) {
          formik.setFieldError('endDate', 'End date must be after start date');
          return;
        }

        const submitValues: CreateTourDto = {
          name: values.name,
          description: values.description || undefined,
          price: values.price,
          startDate: values.startDate || undefined,
          endDate: values.endDate || undefined,
          hotelId: values.hotelId
        };
        await onSubmit(submitValues);
        navigate('/tours');
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    enableReinitialize: true
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const hotelsData = await fetchHotels();
        setHotels(hotelsData);

        if (loadInitialValues) {
          const tourData = await loadInitialValues();
          formik.setValues({
            name: tourData.name,
            description: tourData.description || '',
            price: tourData.price,
            startDate: tourData.startDate ? new Date(tourData.startDate) : null,
            endDate: tourData.endDate ? new Date(tourData.endDate) : null,
            hotelId: tourData.hotelId
          });
        }
      } catch (error) {
        console.error('Error loading data:', error);
        navigate('/tours');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [loadInitialValues, navigate]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto', my: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 3 }}>
          {loadInitialValues ? 'Edit Tour' : 'Create Tour'}
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="Tour Name"
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
            multiline
            rows={4}
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            margin="normal"
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Price"
            name="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            margin="normal"
            InputProps={{ inputProps: { min: 0 } }}
            sx={{ mb: 2 }}
          />

          <DatePicker
            label="Start Date"
            value={formik.values.startDate}
            onChange={(date) => formik.setFieldValue('startDate', date)}
            slotProps={{
              textField: {
                fullWidth: true,
                margin: 'normal',
                error: formik.touched.startDate && Boolean(formik.errors.startDate),
                helperText: formik.touched.startDate && formik.errors.startDate,
              },
            }}
            sx={{ mb: 2 }}
          />

          <DatePicker
            label="End Date"
            value={formik.values.endDate}
            onChange={(date) => formik.setFieldValue('endDate', date)}
            slotProps={{
              textField: {
                fullWidth: true,
                margin: 'normal',
                error: formik.touched.endDate && Boolean(formik.errors.endDate),
                helperText: formik.touched.endDate && formik.errors.endDate,
              },
            }}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth margin="normal" sx={{ mb: 3 }}>
            <InputLabel id="hotel-label">Hotel</InputLabel>
            <Select
              labelId="hotel-label"
              label="Hotel"
              name="hotelId"
              value={formik.values.hotelId || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.hotelId && Boolean(formik.errors.hotelId)}
            >
              <MenuItem value="">
                <em>Select a hotel</em>
              </MenuItem>
              {hotels.map((hotel) => (
                <MenuItem key={hotel.id} value={hotel.id}>
                  {hotel.name} ({hotel.country?.name})
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate('/tours')}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting || !formik.isValid || !formik.dirty}
            >
              {isSubmitting ? (
                <>
                  <CircularProgress size={24} sx={{ mr: 1 }} />
                  Saving...
                </>
              ) : (
                'Save Tour'
              )}
            </Button>
          </Box>
        </form>
      </Paper>
    </LocalizationProvider>
  );
};

export default TourForm;
