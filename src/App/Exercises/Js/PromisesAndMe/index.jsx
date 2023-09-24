//----------------------------------------------------------------
import { useState, useEffect } from 'react';
// let counter = 0;
// setInterval(() => {
//   counter = counter + 10;
//   console.log('dodano, wynik = ', counter);
// }, 100);
// setInterval(() => {
//   counter = counter - 10;
//   console.log('odjęto, wynik = ', counter);
// }, 100);

export const PromisesAndMe = () => {
  const [counter, setCounter] = useState(0);
  // kod synchroniczny
  // jedna linijka po linijce
  const test1 = () => {
    console.log('test1');
  };

  const test2 = () => {
    console.log('test2');
  };

  console.log(1);
  console.log(2);
  test1(); // wywołanie powoduje uruchomienie funkcji a nie napisanie kodu funkcji
  test2();

  // kod asynchroniczny
  // przyklady -> setTimeout, setInterval, oczekiwanie na odpowiedz serwera z treścią str/plikiem,
  // nie jest wykonywany po kolei
  // oczekuje na COŚ co zakończy się w czasie późniejszym
  console.log('before timeout');
  setTimeout(() => console.log('timeout 1', 10)); // jak 0 ms zamiast 10ms to i tak 'timeout 1' wyswietli sie jako ostatni komunikat / timeot z 0 wywoluje sie przed timeoutami z realnym opoznieniem ale po tych ktore napisane sa wprost bez opoznienia
  console.log('after timeout');
  // listaRzeczyDoZrobienia = [] jak JS zaczyna wywolywac kod synchroniczny, to robi to, poki sie nie skonczy i dopiero pozniej reaguje na te instrukcje, ktore maja byc wywolane np z opoznieniem
  // setTimeout - listaRzeczyDoZrobieniaPozniej = [] - wykonuje się asynchronicznie
  // kod synchroniczny blokuje przeglądarkę
  // asynchroniczność - wydajniejsze i bardziej płynne działanie przeglądarki
  const freeze = () =>
    Array(10000000)
      .fill(0)
      .map((_, index) => <li key={index}>{index}</li>);

  ///////////
  // problemy/wyzwania z obsługą błędów w kodzie asynchronicznym
  try {
    console.log('trying sth');
    setTimeout(() => {
      try {
        throw new Error('coś poszło nie tak');
      } catch (error) {
        console.log('błąd setTimeout', error.message);
      }
    }, 1000);
  } catch (error) {
    console.log('zlapalem blad', error);
  }
  // asynchronicznośc pozwala na równoległe wykonanie operacji
  // kod JS jest wykonywany zwykle jednowątkowo (jeden procesor pracuje - jeden chomik)
  //////////////////////////////////////////////////
  // programownaie asynchroniczne problem wyścigów (race condition) tam gdzie wiele operacji moze byc wykonywanych jednoczesnie, pojawia sie problem nieoczekiwanych bledow

  return (
    <>
      <div className="promises-and-me">
        <h1>Promisy w JS</h1>
        <button onClick={freeze}>Freez</button>
      </div>
    </>
  );
};
