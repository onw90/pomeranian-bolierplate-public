import { Blok } from './Blok';

const bloks = [
  { skillname: 'React.js' },
  { skillname: 'JavaScript' },
  { skillname: 'CSS' },
  { skillname: 'Typescript' },
  { skillname: 'HMTL5' },
  { skillname: 'Elementor' },
  { skillname: 'React Redux' },
  { skillname: 'Sass' },
  { skillname: 'Python' },
  { skillname: 'Redux Persist' },
  { skillname: 'Node.js' },
  { skillname: 'Jest' },
  { skillname: 'REST API' },
  { skillname: 'React Router' },
  { skillname: 'Prettier' },
  { skillname: 'VSCode' },
  { skillname: 'Firebase' },
  { skillname: 'URL State' },
  { skillname: 'Radix UI' },
  { skillname: 'Mterial UI' },
  { skillname: 'Wordpress' },
];

export const Bloks = () => {
  return <div className="bloks">{bloks.map(Blok)}</div>;
};
