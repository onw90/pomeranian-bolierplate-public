import './styles.css';
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

//--------------------------------------------------------------------------------------------------------
export function JsFunctionBasics() {
  return (
    <div className="js-functions-basics">
      <h1>Funkcje</h1>
      <h2>Rodzaje funkcji</h2>
      <h2>liczba parametrów</h2>
      <h2>return(s)</h2>
      <h2>rekurencja</h2>
      <h2>argumenty/parametry funkcji</h2>
      <h2>default arguments</h2>
    </div>
  );
}
