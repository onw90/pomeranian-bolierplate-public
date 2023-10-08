import * as yup from 'yup';

const errorMessages = { requiredField: 'To pole jest wymagane!' };

export const registerSchema = yup.object({
  email: yup
    .string()
    .email('Podaj poprawny adres e-mail')
    .required(errorMessages.requiredField),
  password: yup.string().min(6, 'hasło musi zawierać conajmniej 6 znaków'),
  confirmPassword: yup
    .string()
    .required(errorMessages.requiredField)
    .oneOf([yup.ref('password')], 'hasła muszą być takie same!'),
});


export const loginSchema = registerSchema.pick(['email','password'])

