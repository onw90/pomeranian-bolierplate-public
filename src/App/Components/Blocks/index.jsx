import './styles.css';
import { Blok } from '../Blok';
import cvIconSrc from '../../Images/tiles/personalcard.svg';
import editIconSrc from '../../Images/tiles/edit.svg';
import bookIconSrc from '../../Images/tiles/book.svg';
import codeIconSrc from '../../Images/tiles/code.svg';
import gamePadSrc from '../../Images/tiles/game-pad.svg';
import formSrc from '../../Images/tiles/form-icon.svg';
import faqSrc from '../../Images/faq.svg';

const blocks = [
  {
    title: 'Moje CV',
    description: 'Podglad cv wraz z doświadczeniem',
    link: '/CV',
    iconSrc: cvIconSrc,
  },
  {
    title: 'Tech stack',
    description: 'Stack technologiczny realizowany na kursie',
    link: '/tech-stack',
    iconSrc: codeIconSrc,
  },
  {
    title: 'Ćwiczenia',
    description: 'wszystkie wykonane ćwiczenia',
    link: '/exercises',
    iconSrc: editIconSrc,
  },
  {
    title: 'Formularz',
    description: 'przykładowy formularz zamówienia z walidacją yup',
    link: '/exercises/react/forms',
    iconSrc: formSrc,
  },
  {
    title: 'Gry',
    description: 'Dwie gry o kilku podobnych funkcjonalnościach',
    link: '/exercises/js/games',
    iconSrc: gamePadSrc,
  },
  {
    title: 'To do lista z API',
    description: 'To do lista z komunikacją z serwerem',
    link: '/exercises/react/etodo-with-server',
    iconSrc: faqSrc,
  },
];

export const Blocks = () => {
  return <div className="blocks">{blocks.map(Blok)}</div>;
};
