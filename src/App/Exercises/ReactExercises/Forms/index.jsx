import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MainHeader } from '../../../Components/MainHeader';
import './styles.css';

const schema = yup.object({
  name: yup.string().required('To pole jest wymagane'),
  nick: yup.string().required('To pole jest wymagane'),
  adress: yup.string().required('To pole jest wymagane'),
  mail: yup
    .string()
    .email('Podaj poprawny adres e-mail')
    .required('To pole jest wymagane'),
  phoneNo: yup
    .string()
    .matches(/^\d{9}$/, 'Numer telefonu musi składać się z 9 cyfr')
    // .length(9, 'Numer telefonu musi składać się z 9 cyfr')
    .required('To pole jest wymagane'),
  comments: yup.string(),
  acceptReg: yup.boolean().oneOf([true], 'Pole obowiązkowe!'),
  payment: yup.string().required('Zaznacz jedną z form płatności'),
  //   produkt: yup.string().oneOf([true], 'Zaznacz choć jedną opcję!'),
  //additionalOptions: yup.string(),
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
  //confirmPassword: yup
  //     .string()
  //     .required('Pole jest wymagane!')
  //     .oneOf([yup.ref('password1')], 'hasła muszą być takie same!'),
});

export const Forms = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <MainHeader>FORMULARZ ZAMÓWIENIA</MainHeader>
      <div className="form-containter">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="zamowienie-produktu">
            <legend>ZAMÓWIENIE PRODUKTU</legend>
            <div>
              <label htmlFor="produkt" className="form-label">
                Wybierz produkt*
              </label>
              <div>
                <select id="produkt">
                  <option value="kurs front-end" {...register('produkt')}>
                    kurs front-end
                  </option>
                  <option value="kurs back-end" {...register('produkt')}>
                    kurs back-end
                  </option>
                  <option
                    value="kurs grafika komputerowa"
                    {...register('produkt')}
                  >
                    kurs grafika komputerowa
                  </option>
                </select>{' '}
              </div>
              <p className="form-error">{errors.produkt?.message}</p>
            </div>
            <fieldset>
              <legend htmlFor="payment-form" className="form-label">
                Wybierz formę płatności*
              </legend>
              <div className="payment-form">
                <div>
                  <input
                    type="radio"
                    id="0"
                    name="payment"
                    value="blik"
                    {...register('payment')}
                  />
                  <label htmlFor="0">blik</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="1"
                    name="payment"
                    value="paypal"
                    {...register('payment')}
                  />
                  <label htmlFor="1">paypal</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="2"
                    name="payment"
                    value="przelew-tradycyjny"
                    {...register('payment')}
                  />
                  <label htmlFor="2">przelew tradycyjny</label>
                </div>
              </div>
              <p className="form-error">{errors.payment?.message}</p>
            </fieldset>
            <div className="additional-options">
              <label className="form-label">
                Opcje dodatkowe do zamówienia
              </label>{' '}
              <div>
                <input
                  type="checkbox"
                  id="0"
                  name="additionalOptions"
                  value="false"
                  {...register('additionalOptions')}
                  //checked
                />
                <label htmlFor="0">ustawienie środowiska</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="1"
                  name="additionalOptions"
                  {...register('additionalOptions')}
                />
                <label htmlFor="1">intro do GitHub</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="2"
                  name="additionalOptions"
                  {...register('additionalOptions')}
                />
                <label htmlFor="2">materiały dodatkowe</label>
              </div>
              <p className="form-error">{errors.additionalOptions?.message}</p>
            </div>
          </fieldset>
          <fieldset className="dane-do-zamowienia">
            <legend>DANE DO REALIZACJI ZAMÓWIENIA</legend>
            <div>
              <label className="form-label">Imię i nazwisko*</label>
              <br />
              <input className="form-input" {...register('name')} />
              <p className="form-error">{errors.name?.message}</p>
            </div>
            <div>
              <label className="form-label">Twój pseudonim*</label>
              <br />
              <input className="form-input" {...register('nick')} />
              <p className="form-error">{errors.nick?.message}</p>
            </div>
            <div>
              {' '}
              <label className="form-label">Adres do wysyłki*</label>
              <br />
              <input className="form-input" {...register('adress')} />
              <p className="form-error">{errors.adress?.message}</p>
            </div>
            <div>
              <label className="form-label">Adres e-mail*</label>
              <br />
              <input className="form-input" {...register('mail')} />
              <p className="form-error">{errors.mail?.message}</p>
            </div>
            <div>
              <label className="form-label">Numer kontaktowy*</label>
              <br />
              <input className="form-input" {...register('phoneNo')} />
              <p className="form-error">{errors.phoneNo?.message}</p>
            </div>
            <div>
              <label className="form-label">
                Dodatkowe uwagi do zamówienia
              </label>
              <br />
              <textarea className="form-textarea" {...register('comments')} />
              <p className="form-error">{errors.comments?.message}</p>
            </div>
          </fieldset>
          <fieldset className="zakladanie-konta">
            <legend>ZAKŁADANIE KONTA</legend>
            <p className="form-text">Chcę załozyć konto razem z zamówieniem</p>
            <div>
              <input
                {...register('newAccount')}
                type="checkbox"
                id="zakladam-konto"
                name="zakladam-konto"
                //checked
              />
              <label htmlFor="zakladam-konto">zakładam konto</label>
              <p className="form-error">{errors.newAccount?.message}</p>
            </div>
            <div>
              <label htmlFor="haslo">Moje hasło</label>
            </div>
            <div>
              <input
                id="haslo"
                type="password"
                className="form-input"
                {...register('password1')}
              />
            </div>
            <p className="form-error">{errors.password1?.message}</p>
            <div>
              <label>Powtórz hasło</label>
            </div>
            <div>
              <input
                type="password"
                className="form-input"
                {...register('confirmPassword')}
              />
              <p className="form-error">{errors.confirmPassword?.message}</p>
            </div>
          </fieldset>
          <fieldset className="zgody-newsletter">
            <legend>ZGODY I NEWSLETTER</legend>
            <div>
              <p className="form-text">
                Realizując zamówienie, akceptujesz regulamin naszego sklepu
              </p>
              <div>
                <input
                  {...register('acceptReg')}
                  type="checkbox"
                  id="acceptReg"
                  name="acceptReg"
                  //checked
                />
                <label htmlFor="acceptReg">akceptuję regulamin*</label>
                <p className="form-error">{errors.acceptReg?.message}</p>
              </div>
            </div>
            <div>
              <p className="form-text">
                Dołącz do naszego newslettera z promocjami dla naszych klientów
              </p>
              <div>
                <input
                  {...register('mailingList')}
                  type="checkbox"
                  id="mailing-list"
                  name="mailing-list"
                  //checked
                />
                <label htmlFor="mailing-list">
                  zapisuję się na listę mailingową{' '}
                </label>
                <p className="form-error">{errors.mailingList?.message}</p>
              </div>
            </div>
          </fieldset>
          {/* ////////////////////////////////// */}

          <input
            type="submit"
            className="form-button"
            value="SKŁADAM ZAMÓWIENIE"
          />
        </form>
      </div>
    </>
  );
};
