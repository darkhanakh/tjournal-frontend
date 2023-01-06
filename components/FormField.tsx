import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

interface FormFieldProps {
  name: string;
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      name={name}
      label={label}
      error={!!errors[name]?.message}
      helperText={errors[name]?.message as string}
      className="mb-20"
      size="small"
      variant="outlined"
      type={name === 'password' && 'password'}
      fullWidth
    />
  );
};

export default FormField;
