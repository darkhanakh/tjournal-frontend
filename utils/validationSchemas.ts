// @ts-ignore
import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Почта обязательная'),
  password: yup
    .string()
    .min(6, 'Минимум 6 символов')
    .required('Пароль обязательный'),
});

export const RegistrationFormSchema = yup
  .object()
  .shape({
    fullname: yup.string().required('Имя и фамилия обязательны'),
  })
  .concat(LoginFormSchema);
