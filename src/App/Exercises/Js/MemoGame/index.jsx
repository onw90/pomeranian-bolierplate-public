import { useEffect, useState } from 'react';
import { Button, OptionButton } from '../../../Components/Button';
import { TimeTracker } from '../../../Components/TimeTracker';
import {
  GameSettings,
  GameSettingsOutput,
} from '../../../Components/GameSettings';
import { MainHeader } from '../../../Components/MainHeader';
import './styles.css';
import { Tile } from './Tile/index.jsx';

function formatMoves(moves) {
  return Math.ceil(moves / 2);
}

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [s[i], s[j]] = [s[j], s[i]];
  }

  return s;
}

const ELEMENT_OPTIONS = [8, 16, 20, 24];

const GAME_CHARACTERS = [
  '☀',
  '☁',
  '☯',
  '★',
  '♠',
  '♣',
  '♥',
  '♦',
  '♫',
  '♪',
  '⚬',
  '⚑',
];

export const MemoGame = () => {
  const [status, setStatus] = useState('notStarted');
  const [elementsNumber, setElementsNumber] = useState(0);
  const [moves, setMoves] = useState(0);
  const [duration, setDuration] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [isActiveTimer, setIsActiveTimer] = useState(false); // Flaga aktywności licznika
  const [selectedTilesTimeout, setSelectedTilesTimeout] = useState();
  const [] = useState();

  //react lifecycle hook

  useEffect(() => {
    let timerInterval;

    if (isActiveTimer) {
      timerInterval = setInterval(() => {
        setDuration((duration) => duration + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isActiveTimer]);

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

  useEffect(() => {
    if (isGameFinished()) {
      setStatus('finished');
      setIsActiveTimer(false);
    }
  }, [tiles]);

  const handleStart = () => {
    if (!elementsNumber) {
      setStatus('startError');
      return;
    }
    setStatus('started');
    setMoves(0);
    setDuration(0);
    setIsActiveTimer(true);
    setTiles(getInitialTiles());
  };

  // uchwyt dla eventu JS i React

  const handleStop = () => {
    setStatus('finished');
    setIsActiveTimer(false);
    setTiles([]);
    setElementsNumber();
  };

  const handleTileClick = (id) => () => {
    setMoves(moves + 1);
    selectTile(id);
  };

  const selectTile = (id) => {
    setSelectedTiles((selectedTiles) => {
      const newTile = tiles.find((tile) => tile.id === id);

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
    return selectedTiles.some((selectedTile) => selectedTile.id === id);
  };

  const isGameFinished = () => {
    const isEveryTilesGuessed = tiles.every((tile) => tile.isGuessed);

    return isEveryTilesGuessed && tiles.length !== 0;
  };

  const areSelectedTilesMatch = () => {
    const [tile1, tile2] = selectedTiles;

    const areMatch =
      !!tile1 && !!tile2 && tile1.char === tile2.char && tile1.id !== tile2.id;

    return areMatch;
  };

  const getInitialTiles = () => {
    const charsNumber = elementsNumber / 2;

    const characters = shuffleArray([...GAME_CHARACTERS]);

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

  return (
    <div className="memo-game">
      <MainHeader>Memo</MainHeader>

      <p className="memo-description">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>

      {status === 'finished' && (
        <div className="memo-result">
          Gratulację! Twój wynik to {formatMoves(moves)} ruchów w czasie{' '}
          <TimeTracker time={duration} />!
        </div>
      )}

      {status !== 'started' && (
        <>
          <GameSettings
            label="LICZBA ELEMENTÓW"
            errorMessage={
              status === 'startError' && !elementsNumber && 'Wybierz elementy'
            }
          >
            {ELEMENT_OPTIONS.map((option) => (
              <OptionButton
                isSelected={elementsNumber !== option}
                onClick={() => setElementsNumber(option)}
                key={option}
              >
                {option} elementów
              </OptionButton>
            ))}
          </GameSettings>
          <GameSettings label="przyciski sterujące">
            <Button onClick={handleStart}>Start</Button>
          </GameSettings>
        </>
      )}

      {/* conditional rendering of jsx w React  */}

      {status === 'started' && (
        <>
          <GameSettings label="CZAS GRY">
            <GameSettingsOutput>
              <TimeTracker time={duration} />
            </GameSettingsOutput>
          </GameSettings>

          <GameSettings label="LICZBA RUCHÓW">
            <GameSettingsOutput>{formatMoves(moves)}</GameSettingsOutput>
          </GameSettings>

          <GameSettings label="Przyciski sterujące">
            <Button onClick={handleStop} variant="tertiary">
              Stop
            </Button>
          </GameSettings>
        </>
      )}

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
  );
};
