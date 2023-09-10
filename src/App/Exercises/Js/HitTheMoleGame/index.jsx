import { useEffect, useState } from 'react';
import { MainHeader } from '../../../Components/MainHeader';
import { Button } from '../../../Components/Button';
import { Tile } from './Tile/index.jsx';

import './styles.css';

//----------------------------------------------------------------
const MINUTE = 60000;

export const HitTheMoleGame = () => {
  // status: notStarted | started | finished
  const [status, setStatus] = useState('notStarted'); // useState() musi być wewnątrz komponentu reactowego bo jest to funkcja reactowa
  const [score, setScore] = useState(0);
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [resultTime, setResultTime] = useState(0);
  const [molesNo, setMolesNo] = useState(0);
  //--------------------------------------------------------------
  const handleStartOnClick = () => {
    setStatus('started');
  };

  const handleStopOnClick = () => {
    setStatus('finished');
    setResultTime(duration - timeLeft);
  };

  return (
    <>
      <div className="hit-the-mole-game">
        <MainHeader>KRET</MainHeader>
        <p className="mole-description">
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </p>{' '}
        <div className="mole-result">
          Gratulację! Twój wynik to {score} złapane krety w czasie {resultTime}{' '}
          minut!
        </div>
        <div className="mole-settings-container">
          <span className="mole-label">CZAS GRY</span>
          <Button
            variant={duration !== MINUTE ? 'primary' : 'secondary'}
            onClick={() => setDuration(MINUTE)}
          >
            1 minuta
          </Button>
          <Button
            variant={duration !== 2 * MINUTE ? 'primary' : 'secondary'}
            onClick={() => setDuration(2 * MINUTE)}
          >
            2 minuty
          </Button>
          <Button
            variant={duration !== 3 * MINUTE ? 'primary' : 'secondary'}
            onClick={() => setDuration(3 * MINUTE)}
          >
            3 minuty
          </Button>
        </div>
        <div className="mole-settings-container">
          <span className="mole-label">LICZBA KRETÓW</span>
          <Button
            variant={molesNo !== 1 ? 'primary' : 'secondary'}
            onClick={() => setMolesNo(1)}
          >
            1 kret
          </Button>
          <Button
            variant={molesNo !== 2 ? 'primary' : 'secondary'}
            onClick={() => setMolesNo(2)}
          >
            2 krety
          </Button>
          <Button
            variant={molesNo !== 3 ? 'primary' : 'secondary'}
            onClick={() => setMolesNo(3)}
          >
            3 krety
          </Button>
        </div>
        <div className="mole-settings-container">
          <span className="mole-label">PRZYCISKI STERUJĄCE</span>
          <Button variant="primary" onClick={handleStartOnClick}>
            Start
          </Button>
        </div>
        <div className="mole-settings-container">
          <span className="mole-label">CZAS DO KOŃCA</span>
          <span className="mole-output">1:35</span>
        </div>
        <div className="mole-settings-container">
          <span className="mole-label">WYNIK</span>
          <span className="mole-output">16</span>
        </div>
        <div className="mole-settings-container">
          <span className="mole-label">PRZYCISKI STERUJĄCE</span>
          <Button variant="tertiary" onClick={handleStopOnClick}>
            Stop
          </Button>
        </div>{' '}
        <div>Started: {status}</div>
        <Tile isMole />
        <Tile tileStatus="correct" />
        <Tile isMole tileStatus="incorrect" />
        <Tile />
        <Tile />
      </div>
    </>
  );
};
