import { useEffect, useState } from 'react';
import './styles.css';

export const SetTimeout = () => {
  //-------------------------------------------------------------
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeoutId, setTimeoutId] = useState();
  const [intervalId, setintervalId] = useState();
  const [message, setMessage] = useState('');
  //-------------------------------------------------------------------
  const handleOnClick = () => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setValue((prevValue) => prevValue + 1);
    }, 2000);
    setTimeoutId(id);
  };

  const handleCounter = () => {
    // if (intervalId) return;
    const id = setInterval(() => {
      console.log('ustawiam counter na +1');
      setCounter((prevValue) => prevValue + 1);
    }, 1000);
    setintervalId(id);
  };

  useEffect(() => {
    console.log('wykonano useEffect', value);
  }, [value]);
  //zawsze gdy odświezy sie komponent jest to wykonywane

  // useEffect(() => {
  //   /// ...
  //   return () => {
  //     clearInterval(intervalId);
  //     clearTimeout(timeoutId);
  //   };
  // }, [intervalId, timeoutId]);

  useEffect(() => {
    /// ...
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    /// ...
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    const id = setTimeout(() => setMessage('Hello !!!'), 3000);
    return () => clearTimeout(id);
  }, []);

  const handleStopCounter = () => {
    clearInterval(intervalId);
    setintervalId(undefined);
  };

  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <div>value = {value}</div>
      <div>counter = {counter}</div>
      <button style={{ padding: '1rem' }} type="button" onClick={handleOnClick}>
        +
      </button>
      <button style={{ padding: '1rem' }} type="button" onClick={handleCounter}>
        counter
      </button>
      <button
        style={{ padding: '1rem' }}
        type="button"
        onClick={handleStopCounter}
      >
        stop counter
      </button>
      <div>{message}</div>
    </div>
  );
};
