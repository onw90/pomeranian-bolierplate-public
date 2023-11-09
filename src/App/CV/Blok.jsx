import { Skill } from './Skill';

export const Blok = ({ skillname, key }) => {
  const key2 = key;
  console.log(key2);
  return <Skill skillName={skillname} />;
};
