import { useState } from 'react';

export const PromisyExample4 = () => {
  const [results, setResults] = useState();
  const handleOnClick = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Something went wrong')), 0); // czeka z rejectem i robi na koncu wiec promise rozwiazany
      let result = 0;
      for (let i = 0; i < 10000; i++) {
        result++;
      }
      resolve(result);
    });

    promise
      .then((res) => {
        console.log('Wynik:', res);
        setResults(res);
      })
      .catch((err) => setResults(err.message));
  };

  return (
    <div>
      <h3>Przykład 4 - Promisy i asynchroniczność</h3>
      <button type="button" onClick={handleOnClick}>
        Start
      </button>
      <button type="button" onClick={() => setResults('')}>
        Reset
      </button>
      <div>Result: {results}</div>
    </div>
  );
};
