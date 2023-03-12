import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validationSchemas';
import FormField from '../../FormField';
import { LoginDto } from '../../../utils/api/types';
import { UserApi } from '../../../utils/api';
import { setCookie } from 'nookies';
import { useAppDispatch } from '../../../redux/hooks';
import { setUserData } from '../../../redux/reducers/user.slice';

interface LoginFormProps {
  onOpenRegister: () => void;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch();
  const form = useForm<LoginFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = form;

  const onSubmit = async (dto: LoginDto) => {
    try {
      const data = await UserApi.login(dto);
      setCookie(null, 'rtoken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (e) {
      console.warn('Ошибка в входе в аккаунт', e);
      if (e.response) {
        setErrorMessage(e.response.data.message);
      }
    }
  };
  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
