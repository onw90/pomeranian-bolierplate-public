import { useState } from 'react';

export function NumberInputValidator() {
  const [getInputValue, setInputValue] = useState('');
  const [getErrorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    try {
      //parseInt() - konwertuje na liczbe calkowita, drugi parametr zaokraglenie
      const intValue = parseInt(value, 10);
      //jezeli liczna nie jest numberem intigerem
      if (isNaN(intValue)) {
        throw new Error('Wprowadzona wartość nie jest liczbą całkowitą');
      }

      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleInputValidate = (event) => {
    const inputValue = event.target.value;
    //console.log(event.target);
    setInputValue(inputValue);
    //console.log(inputValue);
    validate(inputValue);
  };

  return (
    <div className="container--number-input-validator">
      {/* // onChange - to event tak jak onClick, onKeyDown*/}
      <input
        type="text"
        placeholder="Wprowadź litere"
        value={getInputValue}
        onChange={handleInputValidate}
      />
      <br></br>
      <br></br>
      Error: {getErrorMessage && getErrorMessage}
    </div>
  );
}
