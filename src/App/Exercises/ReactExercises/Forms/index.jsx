import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { MainHeader } from '../../../Components/MainHeader';
import './styles.css';
import { formsSchema } from './formsSchema';

export const Forms = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formsSchema),
    defaultValues: { additionalOptions: [] },
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
                    id="blik"
                    value="blik"
                    // todo: skasować defaulty
                    //defaultChecked
                    {...register('payment')}
                  />
                  <label htmlFor="blik">blik</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="paypal"
                    value="paypal"
                    {...register('payment')}
                  />
                  <label htmlFor="paypal">paypal</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="transfer"
                    value="przelew-tradycyjny"
                    {...register('payment')}
                  />
                  <label htmlFor="transfer">przelew tradycyjny</label>
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
                  id="settings"
                  //name="additionalOptions"
                  value="enviroment-settings"
                  {...register('additionalOptions')}
                  //checked
                />
                <label htmlFor="settings">ustawienie środowiska</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="github"
                  value="github"
                  //name="additionalOptions"
                  {...register('additionalOptions')}
                />
                <label htmlFor="github">intro do GitHub</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="materials"
                  value="additional-materials"
                  //name="additionalOptions"
                  {...register('additionalOptions')}
                />
                <label htmlFor="materials">materiały dodatkowe</label>
              </div>
              <p className="form-error">{errors.additionalOptions?.message}</p>
            </div>
          </fieldset>
          <fieldset className="dane-do-zamowienia">
            <legend>DANE DO REALIZACJI ZAMÓWIENIA</legend>
            <div>
              <label className="form-label">Imię i nazwisko*</label>
              <br />
              <input
                aria-invalid={errors.name ? true : false}
                className="form-input"
                //defaultValue="Ola"
                {...register('name')}
              />
              <p className="form-error">{errors.name?.message}</p>
            </div>
            <div>
              <label className="form-label">Twój pseudonim*</label>
              <br />
              <input
                aria-invalid={errors.name ? true : false}
                className="form-input"
                //defaultValue="Olz"
                {...register('nick')}
              />
              <p className="form-error">{errors.nick?.message}</p>
            </div>
            <div>
              {' '}
              <label className="form-label">Adres do wysyłki*</label>
              <br />
              <input
                aria-invalid={errors.name ? true : false}
                className="form-input"
                //defaultValue="Warszawa"
                {...register('adress')}
              />
              <p className="form-error">{errors.adress?.message}</p>
            </div>
            <div>
              <label className="form-label">Adres e-mail*</label>
              <br />
              <input
                aria-invalid={errors.name ? true : false}
                className="form-input"
                //defaultValue="jankowalski@gmail.com"
                {...register('mail')}
              />
              <p className="form-error">{errors.mail?.message}</p>
            </div>
            <div>
              <label className="form-label">Numer kontaktowy*</label>
              <br />
              <input
                aria-invalid={errors.name ? true : false}
                className="form-input"
                //defaultValue="666666666"
                {...register('phoneNo')}
              />
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
                type="checkbox"
                id="zakladam-konto"
                name="zakladam-konto"
                {...register('newAccount')}
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
                type="password"
                // The aria-invalid attribute is used to indicate that the value entered into an input field is not in a format or a value the application will accept. This may include formats such as email addresses or telephone numbers. aria-invalid can also be used to indicate that a required field is empty.
                aria-invalid={errors.name ? true : false}
                id="haslo"
                className="form-input"
                {...register('password1')}
              />
            </div>
            <p className="form-error">{errors.password1?.message}</p>
            <div>
              <label htmlFor="confirm-password">Powtórz hasło</label>
            </div>
            <div>
              <input
                type="password"
                aria-invalid={errors.name ? true : false}
                id="confirm-password"
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
                  type="checkbox"
                  id="acceptReg"
                  name="acceptReg"
                  //defaultChecked
                  {...register('acceptReg')}
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
                  type="checkbox"
                  id="mailing-list"
                  name="mailing-list"
                  {...register('mailingList')}
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
