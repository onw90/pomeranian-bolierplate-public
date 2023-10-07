import { useState } from 'react';
import * as yup from 'yup';

const schema = yup.object({
  inputValue: yup.string().length(4, 'Maks 4 znaki'),
});

export const ControlledForm = () => {
  const [inputValue, setInputValue] = useState('Hello');

  const handleOnSubmit = (event) => {
    event.preventDefault(); // tylko przy formularzu
    console.log('formSubmited');
    console.log('input value', inputValue);
    const validationResult = schema
      .validate({ inputValue })
      .then((data) => console.log(data)) // Promise!!!
      .catch(console.log); // sprawdzi czy inputValue zgadza się ze schema
    console.log(validationResult, 'validationResult');
  };

  return (
    <>
      <h2>controlled component</h2>
      <form onSubmit={handleOnSubmit}>
        {/* Warning: ControlledForm contains an input of type text with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components */}
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          //   value={inputValue} my kontrolujemy wartość value
        />
        <p>{}</p>
        <button type="submit">Submit</button>{' '}
        {/* moze byc type="button" i wtedy mamy inny button nie wysylajacy formularza ale wewnatrz formularza, domyslny typ to submit */}
      </form>
    </>
  );
};
