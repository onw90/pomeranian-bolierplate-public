import { NumberInputValidator } from '././InputValidator';
import './style.css';
import { useState, useEffect } from 'react';

export function TryCatchAndFinally() {
  const [getUserData, setUserData] = useState(null); // getter i setter zachowuja sie dynamicznie, w zaleznosci co wykonuje uzytkownik na onChangu dane sie nadpisują i jest reakcja
  const [getError, setError] = useState(null); // asynchroniczność - nie dzieje się w 1 momencie tylko js kolejkuje

  // syntatic sugar async/await do obslugi funkcji asynchronicznych
  // It's the syntax within a programming language that is designed to make things easier to read or express. Syntactic sugar is usually a shorthand for a common operation that could also be expressed in an alternate, more verbose, form.
  const fetchData = async () => {
    try {
      // syntatic sugar await // fetch() - funkcja odpowiedzialna za pobieranie danych // restfull API //promise
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      //exeption - rzuć tym wyjątkiem // nadpisywanie domyslnego erroru API --> idea throw new Error("")
      throw new Error(
        'Ups kodzik polozyl się w piatek. Dzisiaj nie wychodze z pracy'
      );
      setError(error);
    } finally {
      console.log('Wykonam się niezalenie czy API się połozy czy nie');
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // wykona się 1 raz bo oczekuje na pustą tablicę

  return (
    <div className="container--errors-protothypes-this">
      {/* // optional chaining - wywolaj tylko wtedy jak istnieją dane w getUserData */}
      Name: {getUserData?.name}
      <br></br>
      <br></br>
      Username: {getUserData?.username}
      <br></br>
      <br></br>
      Username2: {getUserData?.company.name}
      <br></br>
      <br></br>
      Error: {getError && getError?.message}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <NumberInputValidator />
    </div>
  );
}
