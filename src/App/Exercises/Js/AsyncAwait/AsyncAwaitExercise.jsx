import { useState, useEffect } from 'react';
//import './styles.css';
//

/*

napisać useEffect'a oraz stworzyć Promise'a,
który zostanie spełniony i wyświetli nam 
"I'm resolved :)"  używamy async/await
użyjmy useState do zapisania odpowiedzi z promisa.

*/

const DELAY = 500;

const getSomeResult = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I'm resolved :)");
    }, DELAY);
  });
};

// https://javascript.info/promise-basics
export const AsyncAwaitExercise = () => {
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
      <h3>AsyncAwaitExercise</h3>

      <button type="button" onClick={() => setResults('')}>
        Reset
      </button>
      <div>Result: {results}</div>
    </div>
  );
};
//
