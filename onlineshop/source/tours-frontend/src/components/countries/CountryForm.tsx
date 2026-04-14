import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Paper, Typography } from '@mui/material';
import { CreateCountryDto } from '../../api/countryApi';
import { useNavigate } from 'react-router-dom';

interface CountryFormProps {
  onSubmit: (values: CreateCountryDto) => Promise<void>;
  loadInitialValues?: () => Promise<CreateCountryDto>;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .max(20, 'Name must be 20 characters or less')
    .required('Name is required'),
});

const CountryForm: React.FC<CountryFormProps> = ({ onSubmit, loadInitialValues }) => {
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState<CreateCountryDto>({ name: '' });
  const [isLoading, setIsLoading] = useState(!!loadInitialValues);

  useEffect(() => {
    if (loadInitialValues) {
      const loadData = async () => {
        try {
          const data = await loadInitialValues();
          setInitialValues(data);
        } catch (error) {
          console.error('Failed to load country data:', error);
          navigate('/countries');
        } finally {
          setIsLoading(false);
        }
      };
      loadData();
    }
  }, [loadInitialValues, navigate]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
      await onSubmit(values);
      navigate('/countries');
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Paper style={{ padding: '20px', maxWidth: '500px', margin: '20px auto' }}>
      <Typography variant="h6" gutterBottom>
        {loadInitialValues ? 'Edit Country' : 'Add Country'}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />
        <Button 
          color="primary" 
          variant="contained" 
          type="submit"
          style={{ marginTop: '20px' }}
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
        <Button 
          color="secondary" 
          variant="outlined" 
          onClick={() => navigate('/countries')}
          style={{ marginTop: '20px', marginLeft: '10px' }}
        >
          Cancel
        </Button>
      </form>
    </Paper>
  );
};

export default CountryForm;