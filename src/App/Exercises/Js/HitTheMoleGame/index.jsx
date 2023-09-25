import { useEffect, useState } from 'react';
import { MainHeader } from '../../../Components/MainHeader';
import { Button, OptionButton } from '../../../Components/Button';
import { GameSettings } from '../../../Components/GameSettings';
import { Tile } from './Tile/index.jsx';

import './styles.css';
import { CongratsHeader } from '../../../Components/CongratsHeader';

//----------------------------------------------------------------
const MINUTE = 1; // 1 minuta
const MOLES_SPEED = [1000, 500, 350];
const MOLES_OPTIONS = [1, 2, 3];

export const HitTheMoleGame = () => {
  // status: notStarted | started | finished
  // getter i setter [getStatus, setStatus] = useState()
  const [status, setStatus] = useState('notStarted'); // useState() musi być wewnątrz komponentu reactowego bo jest to funkcja reactowa
  const [score, setScore] = useState(0);
  const [duration, setDuration] = useState(MINUTE);
  const [getTimeLeft, setTimeLeft] = useState(0);
  const [getResultTime, setResultTime] = useState(0);
  const [molesNo, setMolesNo] = useState(1);
  const [tiles, setTiles] = useState([]);
  const [moles, setMoles] = useState([]);
  const [getMinutes, setMinutes] = useState(MINUTE);
  const [getSeconds, setSeconds] = useState(0);
  const [getIsActiveTimer, setIsActiveTimer] = useState(false);
  const [molesTimeouts, setMolesTimeouts] = useState({});

  //---------------------------------------------------
  //-------------------------------------------------
  const getDecrementTime = () => {
    setTimeLeft(`${getMinutes}:${getSeconds}`);

    if (getMinutes <= 0 && getSeconds <= 0) {
      setStatus('finished');
      setIsActiveTimer(false);
    }
    if (getSeconds === 0) {
      setMinutes((prevMinutes) => prevMinutes - 1);
      setSeconds(59);
    } else {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }
  };

  //---------------------------------------------------------------
  const getGameMinutesByGameMode = () => {
    let timeResult = '';

    if (getMinutes === 0 || getMinutes === 1 || getMinutes === 2) {
      timeResult = '0';
    } else if (getMinutes === 1) {
      timeResult = '0';
    } else if (getMinutes === 2) {
      timeResult = '0';
    } else {
      timeResult = duration - getMinutes;
    }

    return timeResult;
  };
  //useEffect sluzy do efektow ubocznych, zapytań asynchronicznych (np. odpytywanie API), lifecycle hook - wplywa na zywotnosc komponentu przyjmuje funkcje anonimowa i tablice zaleznosci
  //---------------------------------------------------------------
  // setInterval() -> ustawiamy czas do odliczania
  useEffect(() => {
    let timerInterval;

    if (getIsActiveTimer) {
      timerInterval = setInterval(getDecrementTime, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [getIsActiveTimer, getSeconds, getMinutes]); // jak zmienne w tablicy sie zmienia - uzyj useEffect

  //--------------------------------------------------------------
  const handleStart = () => {
    setStatus('started');
    setResultTime(duration);
    setSeconds(0);
    setScore(0);
    setMinutes(duration);
    setIsActiveTimer(true);
    setTiles(getInitialTiles());
    shuffleMoles();
  };

  const handleStop = () => {
    setStatus('finished');
    setIsActiveTimer(false);
    setTimeLeft(`${getMinutes}:${getSeconds}`);
    setResultTime(
      `${getGameMinutesByGameMode()}m : ${
        getSeconds === 0 ? '0' : 60 - getSeconds
      }s`
    );
    setMolesTimeouts((prevTimeouts) => {
      for (const index in prevTimeouts) {
        clearTimeout(prevTimeouts[index]);
      }
      return {};
    });
    setSeconds(0);
  };

  const handleTileClick = (position) => () => {
    if (isMoleOnPosition(position)) {
      setScore(score + 1);
      moveMole(position);
    } else {
      setScore(score - 1);
    }
  };
  //------------------------------------------------------------------
  const getInitialTiles = () => {
    const emptyTilesMatrix = Array(molesNo * 5 + 5);
    const tilesMatrix = emptyTilesMatrix.fill(0);
    const ArrayOfTileObjects = tilesMatrix.map((_, index) => ({ index }));
    return tilesMatrix.map((_, index) => ({ index })); // map() zawsze zwraca tablicę, tu tablica obiektow {} ktore posiadaja index
    // return Array(molesNo * 5 + 5)
    //   .fill(0)
    //   .map((_, index) => ({ index }));
  };
  //-------------------------------------------------------------------
  const isMoleOnPosition = (position) => {
    return moles.find((mole) => mole.position === position);
  };

  //----------losujemy liczbę i później wykorzystujemy ją do ustawienia kreta w losowym miejscu-------------------
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const createMole = (newMoles, id) => {
    const maxPosition = molesNo * 5 + 5;
    let newPosition = getRandomInt(maxPosition);
    while (newMoles.find((mole) => mole.position === newPosition)) {
      newPosition = getRandomInt(maxPosition);
    }
    const timeout = setTimeout(function () {
      moveMole(newPosition);
    }, MOLES_SPEED[molesNo - 1]);
    setMolesTimeouts((prevTimeouts) => {
      if (prevTimeouts[id]) {
        clearTimeout(prevTimeouts[id]);
      }
      return {
        ...prevTimeouts,
        [id]: timeout,
      };
    });
    return {
      position: newPosition,
      id,
    };
  };

  const shuffleMoles = () => {
    const newMoles = [];

    for (let i = 0; i < molesNo; i++) {
      newMoles.push(createMole(newMoles, i));
    }
    setMoles(newMoles);
  };

  const moveMole = (position) => {
    setMoles((currentMoles) => {
      const currentMole = currentMoles.find(
        (mole) => mole.position === position
      );
      if (currentMole) {
        const newMolesPositions = currentMoles.filter(
          (mole) => mole.position !== position
        );
        const newMole = createMole(newMolesPositions, currentMole.id);
        newMolesPositions.push(newMole);
        console.log(JSON.stringify(newMole), new Date().toISOString());
        return newMolesPositions;
      }
    });
  };
  //-----------------------------------------------------------------
  return (
    <>
      <div className="hit-the-mole-game">
        <MainHeader>KRET</MainHeader>
        <p className="mole-description">
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p>{' '}
        {status === 'finished' && (
          <CongratsHeader time={getTimeLeft} score={score} />
        )}
        {/* conditional rendering of jsx w react */}
        {status !== 'started' && (
          <>
            <GameSettings label="CZAS GRY">
              {MOLES_OPTIONS.map((option) => (
                <OptionButton
                  isSelected={duration !== option * MINUTE}
                  onClick={() => {
                    setDuration(option * MINUTE);
                    setMinutes(option * MINUTE);
                  }}
                  key={option}
                >
                  {option} min
                </OptionButton>
              ))}
            </GameSettings>
            <GameSettings label="liczba kretów">
              {MOLES_OPTIONS.map((option) => (
                <OptionButton
                  isSelected={molesNo !== option}
                  onClick={() => setMolesNo(option)}
                  key={option}
                >
                  {option} moles
                </OptionButton>
              ))}
            </GameSettings>
            <GameSettings label="przyciski sterujące">
              <Button variant="tertiary" onClick={handleStart}>
                Start
              </Button>
            </GameSettings>
          </>
        )}
        {status === 'started' && (
          <>
            <GameSettings label="czas do końca">
              <span className="mole-output">{getTimeLeft}</span>
            </GameSettings>
            <GameSettings label="wynik">
              <span className="mole-output">{score}</span>
            </GameSettings>
            <GameSettings label="przyciski sterujące">
              <Button variant="tertiary" onClick={handleStop}>
                Stop
              </Button>
            </GameSettings>
            {/* <div>Started (roboczy div): {status}</div> */}
            <div className="mole-tile-board">
              {/* destrukturyzacja  -> dla kazdego tiles bierzemy zmienna index (key), tiles to zmienna z useState!!! setTiles ustawia ilosc kafli wykorzystujac funkcje getInitialTiles */}
              {tiles.map(({ index }) => (
                // key to property deklarowana i wymagana w React
                <Tile
                  key={index}
                  isMole={isMoleOnPosition(index)}
                  onClick={handleTileClick(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
// jsx - on zostanie skompilowany na js a ten zrobi z tego html
// onChange, onClick, on+coś -> specjalny "props", funckja i interakcja z uzytkownikiem
//onClick w JS : addEventListener("click", function()...)
// handle - uchwyt do clicka do eventu JS i react
