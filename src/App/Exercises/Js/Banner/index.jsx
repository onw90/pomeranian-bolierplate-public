import { useEffect, useState } from 'react';
import './styles.css';
//----------------------------------------------------------------
export const Banner = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = () => {
    setToggle(true);
  };
  //----------------------------------------------------------------
  useEffect(() => {
    let id;
    if (toggle === true) {
      id = setInterval(() => setToggle(!toggle), 200);
    }
    return () => clearInterval(id);
  }, [toggle]);
  //

  return (
    <>
      <div className="banner">
        {toggle && <p className="text-z-prawej">I love JS</p>}
        {!toggle && <p className="text-z-lewej">I love JS</p>}
      </div>
      <button onClick={handleOnClick}>Start</button>
    </>
  );
};
