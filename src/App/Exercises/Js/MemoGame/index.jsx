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

//losowanie elementów z tablicy, aby nie były jednakowe za kazdym podejsciem do gry
function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const ELEMENT_OPTIONS = [8, 16, 20]; // ile tile'i ma sie wyswietlic jako plansza do gry
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
  const [elementsNumber, setElementsNumber] = useState(0); // wybieranie ilosci elementow na tablicy do gry 8,16,20
  const [moves, setMoves] = useState(0);
  const [duration, setDuration] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [isActiveTimer, setIsActiveTimer] = useState(false); // Flaga aktywności licznika
  const [selectedTilesTimeout, setSelectedTilesTimeout] = useState();
  const [] = useState();

  // useEffects: ////////////////////////////////////////////////////

  useEffect(() => {
    let timerInterval;

    if (isActiveTimer) {
      // uruchamiaj timer jak zmieni sie isActiveTimer - setIsActiveTimer jest zmieniany po wciśnieciu START
      timerInterval = setInterval(() => {
        setDuration((duration) => duration + 1); // co sekunde zwieksza wartosc stanu duration o 1
      }, 1000);
    }

    return () => {
      // czyszczenie timeInterval za kazdym razem jak zmienia sie isActiveTimer
      clearInterval(timerInterval);
    };
  }, [isActiveTimer]);

  // uruchamia sie po wybraniu kafelka w trakcie gry

  useEffect(() => {
    const areMatch = areSelectedTilesMatch();

    if (selectedTilesTimeout) {
      clearTimeout(selectedTilesTimeout); // czyszczenie timeoutu ustawionego na widocznosc pary niezgadnietej selectedTilesTimeout - zmienna w useState, zmieniana na koncu tego useEffecta
    }

    setTiles((tiles) => {
      return tiles.map((tile) => {
        const isSelected = isTileSelected(tile.id); // wysyła id wybranego tile'a do fun isTileSelected

        return {
          ...tile,
          isVisible: isSelected, // uzalezniamy isVisible od isSelected - jak wybrany drugi kafelek jest jednakowy jak pierwszy to true czyli kafelek jest widoczny
          isGuessed: tile.isGuessed || (isSelected && areMatch),
        };
      });
    });

    if (selectedTiles.length === 2 && !areMatch) {
      const timeout = setTimeout(() => {
        setSelectedTiles([]);
      }, 3000); // ustawiamy czas przez który niezgadnięta para jest widoczna (czerwone tło)

      setSelectedTilesTimeout(timeout); // selectedTilesTimeout = timeout
    }
  }, [selectedTiles]);

  // uruchamia sie przy zmianie tiles, na starcie, na stopie, po wybraniu kafla bo wtedy rusza useEffect (powyzej) ktory zmienia dane kafla?
  useEffect(() => {
    if (isGameFinished()) {
      setStatus('finished'); // zmien status na finished - wyswietl wynik z gratulacjami z conditional renderingu
      setIsActiveTimer(false); //zatrzymaj timer
    }
  }, [tiles]);
  // hanlders: /////////////////////////////////////

  const handleStart = () => {
    if (!elementsNumber) {
      // jesli elementsNumber nie ma wartości - jest 0 lub undefined
      setStatus('startError');
      return;
    }
    setStatus('started');
    setMoves(0);
    setDuration(0);
    setIsActiveTimer(true);
    setTiles(getInitialTiles());
  }; // jest funkcja

  // uchwyt dla eventu JS i React

  const handleStop = () => {
    setStatus('finished');
    setIsActiveTimer(false);
    setTiles([]);
    setElementsNumber(); // czyszczenie wyboru elementsNumber
  }; // jest funkcja

  const handleTileClick = (id) => () => {
    setMoves(moves + 1);
    selectTile(id);
  }; // zwraca funckje = () => () => {}, przekazujemy w onClicku do hanldera id i wiemy jakie id zostalo klikniete

  const selectTile = (id) => {
    setSelectedTiles((selectedTiles) => {
      const newTile = tiles.find((tile) => tile.id === id); //porownuje id wybranego tile z tilami w tablicy tiles, jesli id są rowne kafelek widoczny

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
      // dla kazdego char dodajemy w tablicy arrayOfTileObjects element np. słońce zdublowany - z id-1 (słońce-1) i id-2 (słońce-2)
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

    return shuffleArray(arrayOfTilesObjects); //mieszamy elementy arrayOfTilesObjects zeby elementy poukladaly sie losowo
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
