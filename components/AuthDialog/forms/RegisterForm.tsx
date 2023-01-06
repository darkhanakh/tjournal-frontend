import React from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  LoginFormSchema,
  RegistrationFormSchema,
} from '../../../utils/validationSchemas';
import FormField from '../../FormField';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm<LoginFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(RegistrationFormSchema),
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
          <FormField name="fullname" label="Имя пользователя" />
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!isValid}
              type="submit"
              color="primary"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
            <Button color="primary" onClick={onOpenLogin}>
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
