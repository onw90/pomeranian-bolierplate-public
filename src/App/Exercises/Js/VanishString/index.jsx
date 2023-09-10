import { useEffect, useState } from 'react';
import './styles.css';
//----------------------------------------------------------------
export const VanishString = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnClick = () => {
    setIsVisible(true); // bo setIsVisible to funkcja
  };
  //----------------------------------------------------------------
  useEffect(() => {
    let id;
    if (isVisible === true) {
      id = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
    return () => clearTimeout(id);
  }, [isVisible]);
  //

  //
  return (
    <div className="vanish-string">
      <button onClick={handleOnClick}>Pokaz napis!</button>
      {isVisible && <div className="napis">Jestem znikającym napisem</div>}
    </div>
  );
};
