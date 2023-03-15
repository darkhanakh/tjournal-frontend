import React, { useState } from 'react';
import { setCookie } from 'nookies';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  LoginFormSchema,
  RegistrationFormSchema,
} from '../../../utils/validationSchemas';
import FormField from '../../FormField';
import { UserApi } from '../../../utils/api/user';
import { CreateUserDto, LoginDto } from '../../../utils/api/types';
import Alert from '@material-ui/lab/Alert';
import { setUserData } from '../../../redux/reducers/user.slice';
import { useAppDispatch } from '../../../redux/hooks';
import { Api } from '../../../utils/api';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const dispatch = useAppDispatch();

  const form = useForm<LoginFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(RegistrationFormSchema),
  });

  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = form;

  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const data = await Api().user.register(dto);
      setCookie(null, 'rtoken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (e) {
      console.warn('Ошибка при создания аккаунта', e);
      if (e.response) {
        setErrorMessage(e.response.data.message);
      }
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField name="fullName" label="Имя пользователя" />
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          {errorMessage && (
            <Alert severity="error" className="mb-20">
              {errorMessage}
            </Alert>
          )}
          <div className="d-flex align-center justify-between">
            <Button
              disabled={!isValid || isSubmitting}
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
