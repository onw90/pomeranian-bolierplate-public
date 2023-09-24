import { useState } from 'react';
//import './styles.css';
const DELAY = 500;
const times = 1e6;

const getSomeResults = (max = 10000, delay = DELAY) =>
  new Promise((resolve, _reject) => {
    setTimeout(() => {
      console.time('inner - ' + max);
      const result = Array(max)
        .fill(0)
        .map((_, index) => ({ index }));
      console.timeEnd('inner - ' + max);
      resolve('Success: ' + result.length);
    }, DELAY);
  });

// https://javascript.info/promise-basics
export const ComplexPromises = () => {
  const [results, setResults] = useState();
  const handleOneByOne = async () => {
    console.time('promise-one-by-one');
    const p1 = await getSomeResults(times);
    const p2 = await getSomeResults(times * 2);
    const p3 = await getSomeResults(times * 3);
    console.timeEnd('promise-one-by-one');
    setResults([p1, p2, p3].join(', '));
  };

  const handleAll = async () => {
    console.time('promise-all');
    const p1 = getSomeResults(times);
    const p2 = getSomeResults(times * 2);
    const p3 = getSomeResults(times * 3);
    // const p1 = Promise.reject('Failed :(');
    // const p2 = Promise.reject('Failed :(');
    // const p3 = Promise.reject('Failed :(');
    const allDone = await Promise.all([p1, p2, p3]);
    // is rejected, when any of the promises in the given array reject
    // rejection reason is the reason of the FIRST promise that rejected
    console.timeEnd('promise-all');
    setResults(allDone.join(', '));
  };
  // najbardziej uniwersalne: bo kazda sie wykona i dostaniemy info
  const handleAllSettled = async () => {
    console.time('promise-all-settled');
    const p1 = getSomeResults(times);
    const p2 = getSomeResults(times * 2);
    const p3 = Promise.reject('Failed :(');
    // const p1 = Promise.reject('Failed :(');
    // const p2 = Promise.reject('Failed :(');
    // const p3 = Promise.reject('Failed :(');
    const allSettled = await Promise.allSettled([p1, p2, p3]);
    //return an array of results (both rejected and fulfilled)
    //each result contains information about
    console.timeEnd('promise-all-settled');
    setResults(
      allSettled
        .map(({ status, value, reason }) => `${status}, ${value}, ${reason}`)
        .join(' | ')
    );
  };

  const handleAny = async () => {
    console.time('promise-any');
    const p1 = getSomeResults(times);
    const p2 = Promise.reject('Failed :(');
    const p3 = Promise.reject('Failed :(');
    const anyFullfilled = await Promise.any([p1, p2, p3]);
    // promise fulfills when any of the inputs fulfilles
    // it rejects when all of the promises reject
    // it fulfills with FIRST promise fulfilment value
    console.timeEnd('promise-any');
    setResults(anyFullfilled);
  };

  const handleRace = async () => {
    console.time('promise-race');
    const p1 = getSomeResults(times);
    const p2 = getSomeResults(times * 2);
    const p3 = getSomeResults(times * 3);
    // const p1 = Promise.reject('Failed :(');
    // const p2 = Promise.reject('Failed :(');
    // const p3 = Promise.reject('Failed :(');
    const raceFirst = await Promise.race([p1, p2, p3]);
    // creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected
    //
    console.timeEnd('promise-race');
    setResults(raceFirst);
  };

  return (
    <div>
      <h3>Complex Promises</h3>
      <button onClick={handleOneByOne}>Handle One by one</button>
      <button onClick={handleAll}>Handle All</button>
      <button onClick={handleAllSettled}>Handle All Settled</button>
      <button onClick={handleAny}>Handle Any</button>
      <button onClick={handleRace}>Handle Race</button>
      <button type="button" onClick={() => setResults('')}>
        Reset
      </button>
      <div>Result: {results}</div>
    </div>
  );
};
//
// Podsumowanie - linki
// try/catch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
// Async/await: https://kursjs.pl/kurs/ajax/async-await
// Promise api: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Promise
