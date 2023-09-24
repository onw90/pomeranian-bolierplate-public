import { useState, useEffect } from 'react';
//import './styles.css';
const DELAY = 500;

const getSomeResult = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) resolve('Success');
      reject('Rejected');
    }, DELAY);
  });

// https://javascript.info/promise-basics
export const AsyncAwaitExample3 = () => {
  const [results, setResults] = useState();

  useEffect(() => {
    const handleAsync = async () => {
      try {
        const result = await getSomeResult();
        setResults(result);
      } catch (error) {
        setResults(error);
      }
    };
    handleAsync();
  }, []);

  return (
    <div>
      <h3>Async Await Ex 3</h3>

      <button type="button" onClick={() => setResults('')}>
        Reset
      </button>
      <div>Result: {results}</div>
    </div>
  );
};
//
