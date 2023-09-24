import { useEffect, useState } from 'react';
import './styles.css';
import { LocalSeeSharp } from '@mui/icons-material';

const LOCAL_KEY = 'local-nicks';

//----------------------------------------------------------------
export const SavedInput = () => {
  //---------------------------------
  const localNicks = localStorage.getItem(LOCAL_KEY); // teskt

  const parsedNicks = localNicks ? JSON.parse(localNicks) : []; // teraz mamy JSON

  const [nicks, setNicks] = useState([]);
  const [nickInput, setNickInput] = useState('');

  const handleAdd = () => {
    const newNicks = [...nicks, nickInput];
    setNicks(newNicks);
    setNickInput('');
    localStorage.setItem(LOCAL_KEY, JSON.stringify(nicks));
  };
  return (
    <>
      <div className="">
        <input
          type="text"
          name="nick"
          id="nick"
          onChange={(element) => setNickInput(element.target.value)}
          value={nickInput}
        />
      </div>
      <div className="">
        <button onClick={handleAdd}>Dodaj</button>
      </div>
      <div>
        <h2>Lista nicków</h2>
        <ul>
          {nicks.map((nick) => (
            <li key={nick}>
              {nick}
              <button onClick={() => setNicks(nicks.filter((n) => n !== nick))}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
