import './styles.css';
import mole from '../../../../Images/mole.svg';

// isMole: true | false
// tileStatus: correct | incorrect | neutral
export const Tile = ({ isMole, onClick, tileStatus = 'neutral' }) => {
  return (
    <button className={`mole-tile mole-tile-${tileStatus}`} onClick={onClick}>
      {isMole && <img src={mole} alt="mole" />}
    </button>
  );
};
