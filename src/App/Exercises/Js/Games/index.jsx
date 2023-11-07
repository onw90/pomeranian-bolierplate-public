import gamePadSrc from '../../../Images/tiles/game-pad.svg';
import gameSrc from '../../../Images/tiles/game.svg';
import { Blok } from '../../../Components/Blok';
import './styles.css';

const blocks = [
  {
    title: 'KRET',
    description:
      'Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w którym się pojawił',
    link: '/exercises/js/hit-the-mole',
    iconSrc: gameSrc,
  },
  {
    title: 'MEMO',
    description:
      'Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary',
    link: '/exercises/js/memo',
    iconSrc: gamePadSrc,
  },
];

export const Games = () => {
  return <div className="blocks">{blocks.map(Blok)}</div>;
};
