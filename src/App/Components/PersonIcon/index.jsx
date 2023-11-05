import person from '../../Images/person.svg';

export function PersonIcon({ size = '26px' }) {
  return (
    <img
      src={person}
      alt="personIcon"
      style={{ height: size, width: size }}
    ></img>
  );
}
