import menuMobile from '../../Images/menuMobile.svg';

export function MenuIcon({ size = '26px' }) {
  return (
    <img
      src={menuMobile}
      alt="menu"
      style={{ height: size, width: size }}
    ></img>
  );
}
