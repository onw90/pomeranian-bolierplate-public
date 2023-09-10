import { useEffect, useState } from 'react';
import './styles.css';
//----------------------------------------------------------------
export const Banner = () => {
  const defaultText = ' I love JS    ';
  const [textBanner, setTextBanner] = useState(defaultText);

  const handleOnClick = () => {
    setInterval(() => {
      setTextBanner((text) => {
        const newText = [...text]; //robimy nową tablicę zeby był do niej dostep wewnątrz  i zeby nie mutowalo, zawiera kolejne litery ze zmiennej text
        const firstLetter = newText.shift(); //zabiera litere z poczatku
        newText.push(firstLetter); //wkleja litere na koniec
        return newText.join(''); // łączy wszystkie litery i podaje string
      });
    }, 200);
  };
  //----------------------------------------------------------------
  // useEffect(() => {
  //   let id;
  //   if (toggle === true) {
  //     id = setInterval(() => setToggle(!toggle), 200);
  //   }
  //   return () => clearInterval(id);
  // }, [toggle]);
  //------------------------------------------------------------------

  return (
    <>
      <div className="banner">
        {/* {toggle && <p className="text-z-prawej">I love JS</p>} */}
        {/* <p
          className={`text-banner ${toggle ? 'text-z-lewej' : 'text-z-prawej'}`}
        > */}
        <p>{textBanner}</p>
      </div>
      <button onClick={handleOnClick}>Start</button>
    </>
  );
};
