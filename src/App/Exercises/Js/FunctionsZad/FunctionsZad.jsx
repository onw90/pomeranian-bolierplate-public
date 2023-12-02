// import styles.css from './'

export const FunctionsZad = () => {
  //---------------------------------------------
  const fun1 = (value) => {
    if (value === 0) return 0;
    if (value === 1) return 1;
    return fun1(value - 2) + fun1(value - 1);
  };
  // console.log(fun1(1));
  //--------------------------------------------
  function fun2(...args) {
    let i = 0;
    for (const arg of args) {
      if (isNaN(arg)) {
        return 'złe wejście';
      } else {
        i = i + arg;
      }
    }
    return i;
  }
  // console.log(fun2(5, 3, 2));

  //-----------------------------------------------
  const fun3 = () => {};
  const fun4 = () => {};

  //----------------------------------------------
  function foo() {
    for (var i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log('i=', i);
      }, 2000);
    }
  }
  foo();
  // po zakonczeniu petli zmienna var ma wartosc 100 i taka wartosc bedzie wypisana 100x w consollogu bo var = 100 W TYM MOMENCIE
  // jakby dać let i = 0... to dostaniemy wszystkie wartosci i od 0 do 99
  function foo2() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log('i=', i);
      }, 2000);
    }
  }
  foo2();

  const sentence = 'Ala ma kota';
  const reversedSentence = (str) => {
    return str.split(' ').reverse().join(' ');
  };
  console.log('reverse sentence', reversedSentence(sentence));

  const arr1 = [
    'bar',
    'lar',
    'car',
    'dar',
    'var',
    'bar',
    'lar',
    'car',
    'dar',
    'var',
  ];

  const newArr1 = [...new Set([...arr1])];
  console.log('newArr1', newArr1);

  const noDuplicates = [];

  for (const el of arr1) {
    if (!noDuplicates.includes(el)) {
      noDuplicates.push(el);
    }
  }
  console.log('noDuplicates', noDuplicates);

  const nestedArr = [['a'], ['b'], [['c'], ['d']]];

  const flatArr = nestedArr.flat(Infinity);
  console.log('flat', flatArr);
  return (
    <>
      <div className="fun1">fun1(4) = {fun1(4)}</div>
      <div className="fun2">fun2(1,1,1) = {fun2(1, 1, 1)}</div>
      <div>{reversedSentence(sentence)}</div>
      <div>
        {newArr1} = {noDuplicates}
      </div>
      {/* <div className="fun3">fun3()</div> */}
      {/* <div className="fun4">fun4()</div> */}
    </>
  );
};
