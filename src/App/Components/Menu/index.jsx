import './styles.css';
import { RoundImage } from '../RoundImage';
import { SettingIcon } from '../SettingIcon';
import { ArrowIcon } from '../Arrow';
import { PersonIcon } from '../PersonIcon';
import { MenuIcon } from '../MenuIcon';
import logo from '../../Images/start-it-logo.svg';

export const Menu = () => {
  return (
    <div className="header-menu">
      <button className="menu-icon">
        <MenuIcon />
      </button>

      <img src={logo} className="logo" />

      <button className="setting-icon">
        <SettingIcon />
      </button>

      <button className="person-icon">
        <PersonIcon />
      </button>
      <div className="img-and-info">
        <RoundImage url="https://media.licdn.com/dms/image/D4D03AQFHIG32CxPZNw/profile-displayphoto-shrink_800_800/0/1698699951569?e=1704931200&v=beta&t=P32MUq2jkzikLecF9-CKPfO9pB0YQxU3JG4NePbQkq4" />
        <p className="osoba">
          <span>
            <b>Aleksandra</b>
          </span>
          <span>kursant</span>
        </p>
        <button className="arrow-icon">
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
