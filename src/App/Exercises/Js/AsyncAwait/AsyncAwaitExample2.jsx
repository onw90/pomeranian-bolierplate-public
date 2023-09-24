import { useState } from 'react';
//import './styles.css';
const DELAY = 500;
// https://javascript.info/promise-basics
export const AsyncAwaitExample2 = () => {
  const [results, setResults] = useState();
  const handleOnClick = async () => {
    // jak zwykla funkcja to async przed slowem function
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) resolve('Success');
        reject('Rejected');
      }, DELAY);
    });
    // promise
    //    .then(result) => setResults(result)
    //    .catch(error) => setResults(error)
    // try catch nie łapie błędów ktore są asynchroniczne
    try {
      await promise.then((result) => setResults(result));
      //setResults(result);
    } catch (error) {
      setResults(error);
    }
  };

  return (
    <div>
      <h3>Async Await Ex 2</h3>
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
//
