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
  const [sum, setSum] = useState(0);
  const [counter, setCounter] = useState(0);
  const [lista, setLista] = useState([]);
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
    console.log('zlapalem blad w trying sth', error);
  }
  // asynchronicznośc pozwala na równoległe wykonanie operacji
  // kod JS jest wykonywany zwykle jednowątkowo (jeden procesor pracuje - jeden chomik)
  //////////////////////////////////////////////////
  // programownaie asynchroniczne problem wyścigów (race condition) tam gdzie wiele operacji moze byc wykonywanych jednoczesnie, pojawia sie problem nieoczekiwanych bledow

  // funkcja callback
  function jestemCallbackiem(num) {
    console.log('jestem callbackiem wywolana z parametrem', num);
  }

  // funkcja z callbackiem
  function handleOnClick(callback) {
    // console.log('wykorzystuję callback');
    callback(10);
  }

  const raceCondition = () => {
    let counter = 0;
    const delay = 2000;
    setInterval(() => {
      const newValue = counter + 10;
      console.log('dodano, wynik =', newValue);
      setTimeout(() => (counter = newValue), 0);
    }, delay);
    setInterval(() => {
      const newValue = counter - 10;
      console.log('minus, wynik =', newValue);
      setTimeout(() => (counter = newValue), 0);
    }, delay);
  };
  ///////
  // Promise 1. example ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // fetchData funkcja do generowania promisow - zwraca promise
  const fetchData = () => {
    //zwracamy naszą obietnicę (Promise)
    return new Promise((resolve, reject) => {
      // resolve ma sie wykonać jak sukces
      // reject ma sie wykonać jak jakiś błąd
      setTimeout(() => {
        // symulujemy sobie sytuacje z bledem / zachowanie serwera
        const data = { id: 1, name: 'Jan' };
        const err = Math.random() > 0.5 ? 'błąd serwera' : null;
        if (err) {
          // jezeli blad to odrzucamy obietnice (promise)
          reject(err);
        }
        // jezeli ok to wywiazujemy sie z obietnicy
        resolve(data);
      }, 1000);
    });
  };

  const handleFetchData = () => {
    fetchData().then(
      (data) => {
        console.log('Dane uzytkownika: ', JSON.stringify(data));
      },
      (error) => {
        console.log('Wystąpił błąd', error);
      }
    );
  };
  // inny sposob zapisu wykorzystania promisow
  const handleFetchData2 = () => {
    fetchData()
      .then((data) => {
        console.log('Dane uzytkownika: ', JSON.stringify(data));
      })
      .catch((error) => {
        console.log('Wystąpił błąd', error);
      });
  };
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Promise 2. example ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // Promise.resolve('Sukces');
  const resolvedPromise = Promise.resolve('Sukces');
  resolvedPromise
    .then((response) => console.log('Resolved value = ', response))
    .catch((error) => console.log('Rejected with error = ', error)); // tego z errorem nigdy nie bedzie bo obietnica od razu rozwiazana jw

  const rejectedPromise = Promise.reject('Failure');
  rejectedPromise
    .then((response) => console.log('Ex2: Resolved value = ', response)) // tego z response nigdy nie bedzie bo obietnica od razu nierozwiazana jw

    .catch((error) => console.log('Ex2: Rejected with error = ', error));
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //////// promises - states
  // 1. PENDING - stan poczatkowy, w ktorym promise nie zostal jeszcze rozswiazany ani odrzucony, w tym staie mozemy zarowno rozwiazac jak i odrzucic promise

  const handlePending = () => {
    const pendingPromise = new Promise((resolve, reject) => {});
    console.log('pending promise: ', pendingPromise);
  };
  // 2. FULFILLED - stan w ktorym obietnica zostala rozwiazana, w tym stanie NIE mozemy ani rozwiazac ani odrzucic promise

  const handleFulfilled = () => {
    const fulfilledPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('sukces');
      }, 500);
    });
    fulfilledPromise.then(() =>
      console.log('fulfilled promise: ', fulfilledPromise)
    );
  };
  // 3. REJECTED - stan w ktorym obietnica zostala odrzucona, w tym stanie NIE mozemy ani rozwiazac ani odrzucic promise
  const handleRejected = () => {
    const rejectedPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('błąd'));
      }, 500);
    });
    rejectedPromise
      .then(() => console.log('rejected promise: ', rejectedPromise))
      .catch((error) =>
        console.log('rejected promise: ', rejectedPromise, error.message)
      );
  };
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //
  const promiseFunction = (size, delay) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (size > 20) {
          reject('Size too large, max 20');
        } else {
          const tablica = Array(size)
            .fill(0)
            .map((_, index) => index)
            .map((id) => <li key={id}>{id}</li>);
          resolve(tablica);
        }
      }, delay);
    });

  const handleGetList = () => {
    promiseFunction(10, 1000)
      .then((result) => {
        setLista(result);
        //throw new Error('coś poszło nie tak!!!!!!!!!!!!!!!');
        return 'udało sie pobrać';
      })
      .then((message) => console.log('!!!!!chained promiseFunction', message))
      .catch((error) => console.log('błąd pobrania listy', error))
      .finally(() => console.log('Wyloguj uzytkownika'));
  };
  //
  //
  /////////////////////////////////
  return (
    <>
      <div className="promises-and-me">
        <h1>Promisy w JS</h1>
        <h2>Intro</h2>
        <button onClick={freeze}>Freez</button>
        <button onClick={() => handleOnClick(setSum)}>
          Przycisk z callbackiem
        </button>
        <p>suma: {sum}</p>
        <button onClick={() => handleOnClick(jestemCallbackiem)}>
          Przycisk z callbackiem 2
        </button>
        <button onClick={() => handleOnClick(raceCondition)}>
          Race condition
        </button>
        <h2>Promise</h2>
        <p>
          A Promise is a JavaScript object that links producing code and
          consuming code - obiekt który pozwala łączyc wykonanie asynchronicznej
          operacji z kodem oczekującym na jej zakończenie (wynik)
        </p>
        <button onClick={() => handleOnClick(handleFetchData)}>
          Fetch data
        </button>
        <button onClick={() => handleOnClick(handleFetchData2)}>
          Fetch data2
        </button>
        <h3>stany promisów</h3>
        <button onClick={handlePending}>Pending</button>
        <button onClick={handleFulfilled}>Fulfilled</button>
        <button onClick={handleRejected}>Rejected</button>
        <h2>Praktyka/Ćwiczenia</h2>
        <button onClick={handleGetList}>Pobierz listę</button>
        <p>lista elementów:</p>
        <ul>{lista}</ul>
      </div>
    </>
  );
};

// Podsumowanie zajęć:

//e - mdn: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise - tutorial: https://javascript.info/promise-basics UseEffect: https://www.w3schools.com/react/react_useeffect.asp
