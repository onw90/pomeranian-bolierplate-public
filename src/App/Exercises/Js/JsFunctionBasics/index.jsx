import { useState } from 'react';
import './styles.css';

function examples() {
  //---------------FUNCKJE--------------------------------------------------------------------------------
  // NAMED FUNCTIONS
  function sum(first, second) {
    return first + second;
  }
  console.log('przyklad named function: ', sum(2, 3));

  // FUNKCJA ANONIMOWA
  // function (first, second) {
  //     return first + second
  // }

  // przykład zastosowania
  // const result = [1,5,3].map((item)=> item*2);
  // console.log(result)

  const result = [1, 5, 3].map(function (item) {
    return item * 2;
  });
  console.log('przyklad funkcja anonimowa: ', result);

  // FUNCKJA STRZAŁKOWA
  //(liczba) => {return liczba + 5;};
  //(liczba) => liczba+5
  const dodaj5 = (liczba) => liczba + 5; //zmienna przechowuje w sobie funkcje
  const dodaj = (licz1, licz2) => licz1 + licz2;
  // przykład zastosowania 1
  const result2 = [1, 5, 3].map((item) => item * 2);
  console.log('przyklad funkcja strzalkowa: ', result2);
  // przykład zastosowania 2
  const result3 = [1, 5, 3].map(function (item) {
    return item * 2;
  });
  console.log('przyklad funkcja anonimowa: ', result3);
  // przykład zastosowania 3
  console.log(dodaj5(10));

  //---------------LICZBA PARAMETRÓW--------------------------------------------------------------------
  console.log('parametry-za duzo', dodaj5(1, 1, 1, 1, 1));
  console.log('parametry2-za duzo', dodaj(1, 1, 1, 1, 1, 1));
  // za duzo parametrow nie psuje funckji
  console.log('parametry3-za malo', dodaj(1));
  // za malo parametrow - podaje NaN - not a number lub undefined

  //---------------RETURN---------------------------------------------------------------------------------
  const nicNieZwraca = () => {
    console.log('nic nie zwrócę');
    //   return zwracam
  };
  console.log(nicNieZwraca());
  // funklcja ktora nic nie zwraca zwraca undefined - z undefined mozemy coś zrobić, np przypisać do zmiennej

  let abc;
  console.log('abc', abc);
  let sz = 7;
  console.log('sz', sz);

  //mozna zwrócić wszystkei typy zmiennych
  //
  //jak zwrocic obiekt w arrow function
  //
  const obiekt = {
    imie: 'Ola',
    city: 'London',
  };
  const zwracamObiekt = () => {
    return obiekt;
  };
  console.log(zwracamObiekt());

  const zwracamObiekt2 = () => 'hello';
  const zwracamObiekt3 = () => {
    return 'hello';
  };
  const zwracamObiekt4 = () => {
    /// coć
    // do something else
    // ...
    return { hello: 'hello' };
  };
  console.log(zwracamObiekt4());

  //---------------------REKURENCJA------------------------------------------------------------------------------
  // tree structure
  // scrapping / parsing / crawling
  const dzialFirmy = {
    name: 'XYZ',
    manager: 'Mmmm',
    children: [
      { name: 'A', manager: 'Adam' },
      {
        name: 'B',
        manager: 'Piotr',
        children: [
          { name: 'D', manager: 'Ala' },
          { name: 'E', manager: 'Pawel' },
        ],
      },
      { name: 'C', manager: 'Anna' },
    ],
  };

  // funkcja wywołuje sama siebie
  const addNumbersTo = (value) => {
    if (value === 1) return 1;
    return value + addNumbersTo(value - 1);
  };
  console.time('timer-rekurancja: ');
  console.log('addNumbersTo', addNumbersTo(10000));
  console.timeEnd('timer-rekurancja: ');
  //addNumbersTo(1) = 1
  //1 step addNumbersTo(1) => return 1
  //addNumbersTo(2) = 1 + 2
  //1 step addNumbersTo(2) => return 2 + addNumbers(1)
  //2 step addNumbersTo(1) => return 1
  //addNumbersTo(3) = 1 + 2 + 3
  //1 step addNumbersTo(2) => return 3 + addNumbers(2)
  //2 step addNumbersTo(1) => return 2 + addNumbers(1)
  //3 step addNumbersTo(1) => return 1

  // to samo bez rekurencji
  const addNumbersToReduce = (value) =>
    Array(value)
      .fill(0)
      .reduce((prev, _, index) => prev + index + 1, 0);
  // dodawanie kolejnych indeksów tablicy
  console.time('timer-reduce: ');
  console.log('addNumbersToReduce', addNumbersToReduce(10000));
  console.timeEnd('timer-reduce: ');
  //---------------ARGUMENTY I PARAMETRY FUNKCJI----------------------------------------------------------

  const multiSumSum = (multi, val1, val2) => {
    return multi * (val1 + val2);
  };
  console.log('multiSumSum', multiSumSum(2, 1, 1));
  console.log('multiSumSum', multiSumSum(...[2, 1, 1]));
  console.log('multiSumSum', multiSumSum(2, ...[1, 1]));

  const multiSumSumMore = (multi, val1, val2, ...args) => {
    const sumArgs = args.reduce((prev, curr) => prev + curr, 0);
    return multi * (val1 + val2 + sumArgs);
  };

  console.log('multiSumSumMore', multiSumSumMore(2, 1, 1));
  console.log('multiSumSumMore', multiSumSumMore(2, 1, 1, 1));
  console.log('multiSumSumMore', multiSumSumMore(2, 1, 1, 2));
  console.log(
    'multiSumSumMore',
    multiSumSumMore(2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
  );
  console.log(
    'multiSumSumMore',
    multiSumSumMore(2, ...[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  );

  const multiSumSumMore2 = (multi, ...args) => {
    const sumArgs = args.reduce((prev, curr) => prev + curr, 0);
    return multi * sumArgs;
  };

  console.log('multiSumSumMore2', multiSumSumMore2(2, 1, 1));
  console.log('multiSumSumMore2', multiSumSumMore2(2, 1));

  function multiSumSumNoArgs() {
    const [multi, val1, val2] = arguments;
    return multi * (val1 + val2);
  }

  console.log('multiSumSumNoArgs', multiSumSumNoArgs(2, 1, 1));

  //---------------DEFAULT ARGUMENTS----------------------------------------------------------
  // wartość domyślna argumentu - nie musimy go podawać w funkcji
  const multiplyAdd = (val1, val2, addMe = 0) => val1 * val2 + addMe;
  console.log('multiplyAdd', multiplyAdd(3, 2));

  //-------------------!!!referencja vs value && passing arguments to functions!!!----------------------------
  console.log('liczba', 3); //wartość
  console.log('tekst', 'Hello'); //wartość
  const tekst = 'Hello';
  let tekst2 = tekst;
  console.log('tekst', tekst); //wartość
  console.log('obiekt', { name: 'Adam', surname: 'Szut' }); //adres
  const obiekt1 = { name: 'Adam', surname: 'Szut' };
  console.log('obiekt', obiekt1); // adres
  console.log(
    'wynik porownania wartosci',
    tekst === tekst2 && tekst === 'Hello'
  ); // wartość
  console.log(
    'wynik porownania referencji',
    obiekt1 === { name: 'Adam', surname: 'Szut' }
  ); // adres dlatego FALSE bo 2 rózne referencje!!!
  // przyklady modyfikacji:
  tekst2 = 'Bey';
  console.log('wartosc po zmianie', tekst2 === tekst, tekst2, tekst);
  let obiekt2 = obiekt1; // skopiowalismy tylko adres
  console.log('wartosc po zmianie adresu/referencji', obiekt1 === obiekt2);
  console.log(obiekt2);
  obiekt2.name = 'Pawel';
  obiekt2.surname = 'Zatocki';
  console.log(obiekt2);
  console.log('po zmianie dalej to samo', obiekt1 === obiekt2);
  console.log('obiekt1: ', obiekt1); // chcielismy pisac do Adama a piszemy do Pawla bo pod tym adresem jest juz Pawel a nie Adam
  //referencja --> adres:    tablice, obiekty
  const tab1 = [1];
  const tab2 = [1];
  console.log(tab1 === tab2);

  //-----------------------------
  const razyDwa = (valueObj) => {
    valueObj.value = valueObj.value * 2;
    return valueObj.value;
  };

  let wartosc = { value: 2 };
  console.log(wartosc);
  console.log('razyDwa:', razyDwa(wartosc));
  console.log(wartosc);
  //---------ZASIĘG---------------------------------------------------------
  //ZASIEG ogranicza sie do klamerek {}
  // const minus = (value1, value2) => {
  //   let multi = 2;
  //   for (let index = 0; index < 2; index++) {
  //     let firstIteration = index === 0;
  //     if (firstIteration) {
  //       multi + 10;
  //     }
  //     multi += 1;
  //   }
  // console.log(firstIteration);
  //   console.log(multi);
  //   return multi * (value1 - value2);
  // };
  //console.log('minus', minus(10, 1)); //

  const dodawaj = (value) => {
    return (innerValue) => innerValue + value;
  };
  const dodawajDo5 = dodawaj(5);

  console.log('dodawaj(5)', dodawaj(5)(3));
  //currying
  console.log('dodawaj(5)', dodawajDo5(5));
}

//--------------------------------------------------------------------------------------------------------
export function JsFunctionBasics() {
  const [items, setItems] = useState(['Hello', 'bey']); // tu powstaje tablica items i ma jakis adres
  const handleOnClick = () => {
    items.push('Abc'); // tu powstaje nowy adres (nowej tablicy) a my potem chcemy wyswietlac tablice spod starego adresu items - dlatego nie mamy po kliknieciu kolejnych itemsów widzianych na www w spanach
    setItems([...items]); // spread operator - mamy nowy adres więc wyswietlamy dobrze kolejne elementy
    // lub setItems([...items], 'Abc');
  };
  console.log('my items', items);

  examples();

  return (
    <div className="js-functions-basics">
      <h1>Funkcje</h1>
      <h2>Rodzaje funkcji</h2>
      <h2>liczba parametrów</h2>
      <h2>return(s)</h2>
      <h2>rekurencja</h2>
      <h2>argumenty/parametry funkcji</h2>
      <h2>default arguments</h2>
      <h2>referencja vs value && passing arguments to functions</h2>
      <div>
        <button onClick={handleOnClick}>Dodaj element do tablicy</button>
      </div>
      <div>
        {items.map((item) => (
          <span style={{ margin: '1rem' }}>{item}</span>
        ))}{' '}
        {/* mapujemy kolejne elementy tablicy na spany wyswietlane na www */}
      </div>
      <h2>zasieg zmiennych</h2>
    </div>
  );
}
