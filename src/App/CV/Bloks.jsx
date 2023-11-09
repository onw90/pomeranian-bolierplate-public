import { Blok } from './Blok';

const bloks = [
  { skillname: 'React.js' },
  { skillname: 'JavaScript' },
  { skillname: 'Typescript' },
  { skillname: 'HMTL5' },
  { skillname: 'CSS' },
  { skillname: 'Jest' },
  { skillname: 'React Redux' },
  { skillname: 'Node.js' },
  { skillname: 'Python' },
  { skillname: 'REST API' },
  { skillname: 'Prettier' },
  { skillname: 'VSCode' },
  { skillname: 'Firebase' },
];

export const Bloks = () => {
  return <div className="bloks">{bloks.map(Blok)}</div>;
};
