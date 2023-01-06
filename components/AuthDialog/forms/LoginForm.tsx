import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validationSchemas';
import FormField from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm<LoginFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField name="name" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!isValid}
              type="submit"
              color="primary"
              variant="contained"
            >
              Войти
            </Button>
            <Button color="primary" variant="text" onClick={onOpenRegister}>
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
