import * as yup from 'yup';

const errorMessages = { requiredField: 'To pole jest wymagane!' };

export const formsSchema = yup.object({
    name: yup.string().required(errorMessages.requiredField),
    nick: yup.string().required(errorMessages.requiredField),
    adress: yup.string().required(errorMessages.requiredField),
    mail: yup
      .string()
      .email('Podaj poprawny adres e-mail')
      .required(errorMessages.requiredField),
    phoneNo: yup
      .string()
      .matches(/^\d{9}$/, 'Numer telefonu musi składać się z 9 cyfr')
      // .length(9, 'Numer telefonu musi składać się z 9 cyfr')
      .required(errorMessages.requiredField),
    comments: yup.string(),
    acceptReg: yup.boolean().oneOf([true], errorMessages.requiredField),
    payment: yup.string().required('Zaznacz jedną z form płatności'),
  
    //   additionalOptions: yup
    //     .mixed()
    //     .test('isUndefined', 'Wybierz conajmniej 1 wartość', (value) => {
    //       //   console.log(value);
    //       return value === false || (value instanceof Array && value.length > 0);
    //     }),
    additionalOptions: yup
      .array()
      .min(1, 'Wybierz conajmniej 1 wartość')
      .oneOf(
        ['enviroment-settings', 'github', 'additional-materials'],
        'Wybierz jedną z wartości'
      ),
    newAccount: yup.boolean(),
    password1: yup.string().when('newAccount', {
      is: true,
      then: () =>
        yup
          .string()
          .min(6, 'hasło musi zawierać conajmniej 6 znaków')
          .matches(/[a-z]/, 'hasło musi zawierać małe litery')
          .matches(/[A-Z]/, 'hasło musi zawierać duze litery')
          .matches(/\d/, 'hasło musi zawierać cyfry'),
    }),
    confirmPassword: yup.string().when('newAccount', {
      is: true,
      then: () =>
        yup
          .string()
          .required(errorMessages.requiredField)
          .oneOf([yup.ref('password1')], 'hasła muszą być takie same!'),
    }),
  });