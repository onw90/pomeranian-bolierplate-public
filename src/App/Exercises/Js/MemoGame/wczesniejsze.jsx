import { useEffect, useState } from 'react';
import { MainHeader } from '../../../Components/MainHeader';
import { Button } from '../../../Components/Button';
import { Tile } from './Tile/index.jsx';

import './styles.css';

const formatTime = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
} // losowo ustawiane kafelki

function formatMoves(moves) {
  return Math.ceil(moves / 2);
}
//----------------------------------------------------------------
const MINUTE = 1; // 1 minuta
const ELEMENT_OPTIONS = [10, 16, 20];
export const MemoGame = () => {
  const [status, setStatus] = useState('notStarted'); // useState() musi być wewnątrz komponentu reactowego bo jest to funkcja reactowa
  const [moves, setMoves] = useState(0);
  const [duration, setDuration] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [getIsActiveTimer, setIsActiveTimer] = useState(false);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [selectedTilesTimeout, setSelectedTilesTimeout] = useState();
  const [elementsNumber, setElementsNumber] = useState(16);
  //-------------useEffects--------------------------------------
  useEffect(() => {
    let timerInterval;
    if (getIsActiveTimer) {
      timerInterval = setInterval(() => {
        setDuration((duration) => duration + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [getIsActiveTimer]);

  // refresh after tile select

  useEffect(() => {
    const areMatch = areSelectedTilesMatch();

    if (selectedTilesTimeout) {
      clearTimeout(selectedTilesTimeout);
    }

    setTiles((tiles) => {
      return tiles.map((tile) => {
        const isSelected = isTileSelected(tile.id);

        return {
          ...tile,
          isVisible: isSelected,
          isGuessed: tile.isGuessed || (isSelected && areMatch),
        };
      });
    });

    if (selectedTiles.length === 2 && !areMatch) {
      const timeout = setTimeout(() => {
        setSelectedTiles([]);
      }, 3000);

      setSelectedTilesTimeout(timeout);
    }
  }, [selectedTiles]);

  // map zwraca tablice o tylu elementach co tablica zrodlowa

  useEffect(() => {
    if (isGameFinished()) {
      setStatus('finished');
      setIsActiveTimer(false);
    }
  }, [tiles]);
  //---------handlers-------------------------------

  const handleStart = () => {
    setStatus('started');
    setMoves(0);
    setDuration(0);
    setIsActiveTimer(true);
    setTiles(getInitialTiles());
  };

  const handleStop = () => {
    setStatus('finished');
    setIsActiveTimer(false);
    setTiles([]);
  };

  const handleTileClick = (id) => () => {
    setMoves(moves + 1);
    selectTile(id);
  };

  //--------------tiles functions---------------------------------------
  const selectTile = (id) => {
    setSelectedTiles((selectedTiles) => {
      const newTile = tiles.find((tile) => tile.id === id); //wez taki tile w ktorym id sie rownaja?
      const newSelectedTiles = [];
      if (selectedTiles.length < 2) {
        newSelectedTiles.push(...selectedTiles, newTile);
        return newSelectedTiles;
      } else {
        return [newTile];
      }
    });
  };

  const isTileSelected = (id) => {
    return !!selectedTiles.find((selectedTile) => selectedTile.id === id);
  };

  const isGameFinished = () => {
    let isFinished = true;
    for (const tile of tiles) {
      isFinished = isFinished && tile.isGuessed;
    }
    return isFinished && tiles.length !== 0; // jak na pocz pusta tablica to gra nie jest skonczona
  };

  const areSelectedTilesMatch = () => {
    const [tile1, tile2] = selectedTiles;

    const areMatch =
      !!tile1 && !!tile2 && tile1.char === tile2.char && tile1.id !== tile2.id;

    return areMatch;
  };

  const getInitialTiles = () => {
    const characters = ['☀', '☁', '☯', '★', '♠', '♣', '♥', '♦'];
    const charsNumber = elementsNumber / 2;
    characters.length = charsNumber;
    const arrayOfTilesObjects = [];
    characters.forEach((char) => {
      arrayOfTilesObjects.push({
        id: `${char}-1`,
        char,
        isVisible: false,
        isGuessed: false,
      });
      arrayOfTilesObjects.push({
        id: `${char}-2`,
        char,
        isVisible: false,
        isGuessed: false,
      });
    });
    return shuffleArray(arrayOfTilesObjects);
  };

  //-------------------------------------------------------------------

  //-----------------------------------------------------------------
  return (
    <>
      <div className="memo-game">
        <MainHeader>MEMO</MainHeader>
        <p className="memo-description">
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
        </p>{' '}
        {status === 'finished' && (
          <div className="memo-result">
            Gratulacje! Twój wynik to {formatMoves(moves)} ruchów w czasie{' '}
            {formatTime(duration)} !
          </div>
        )}
        {/* conditional rendering of jsx w react */}
        {status !== 'started' && (
          <>
            <div className="memo-settings-container">
              <span className="memo-label">LICZBA ELEMENTÓW</span>
            </div>
            {ELEMENT_OPTIONS.map((option) => (
              <Button key={option}>{option} elementów</Button>
            ))}
            {/* <div className="memo-buttons">
              <Button
                variant={elementsNumber !== 8 ? 'primary' : 'secondary'}
                onClick={() => setElementsNumber(8)}
              >
                8 elementów
              </Button>
              <Button
                variant={elementsNumber !== 16 ? 'primary' : 'secondary'}
                onClick={() => setElementsNumber(16)}
              >
                16 elementów
              </Button>
              <Button
                variant={elementsNumber !== 20 ? 'primary' : 'secondary'}
                onClick={() => setElementsNumber(20)}
              >
                20 elementów
              </Button>
            </div> */}
            <div className="memo-settings-container">
              <span className="memo-label">PRZYCISKI STERUJĄCE</span>
              <Button variant="primary" onClick={handleStart}>
                Start
              </Button>
            </div>
          </>
        )}
        {status === 'started' && (
          <>
            <div className="memo-settings-container">
              <span className="memo-label">CZAS GRY</span>
              <span className="memo-output">{formatTime(duration)}</span>
            </div>
            <div className="memo-settings-container">
              <span className="memo-label">LICZBA RUCHÓW</span>
              <span className="memo-output">{formatMoves(moves)}</span>
            </div>
            <div className="memo-settings-container">
              <span className="memo-label">PRZYCISKI STERUJĄCE</span>
              <Button variant="tertiary" onClick={handleStop}>
                Stop
              </Button>
            </div>{' '}
          </>
        )}{' '}
        <div className="memo-tile-board">
          {tiles.map(({ id, char, isVisible, isGuessed }) => (
            <Tile
              key={id}
              onClick={handleTileClick(id)}
              char={char}
              isVisible={isVisible}
              isGuessed={isGuessed}
              isCorrect={selectedTiles.length < 2 || areSelectedTilesMatch()}
            />
          ))}
        </div>
      </div>
    </>
  );
};
