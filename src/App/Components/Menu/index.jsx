import './styles.css';
import { RoundImage } from '../RoundImage';
import { SettingIcon } from '../SettingIcon';
import { ArrowIcon } from '../Arrow';

export const Menu = () => {
  return (
    <div className="header-menu">
      <div className="setting-icon">
        <button>
          <SettingIcon />
        </button>
      </div>
      <RoundImage url="https://media.licdn.com/dms/image/D4D03AQFHIG32CxPZNw/profile-displayphoto-shrink_800_800/0/1698699951569?e=1704931200&v=beta&t=P32MUq2jkzikLecF9-CKPfO9pB0YQxU3JG4NePbQkq4" />
      <p className="osoba">
        <span>
          <b>Aleksandra</b>
        </span>
        <span>kursant</span>
      </p>
      <div className="arrow">
        <button>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
