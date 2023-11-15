import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { FAQIcon } from '../Components/Icons/FAQIcon';
import { GameIcon } from '../Components/Icons/GameIcon';
import { GamePadIcon } from '../Components/Icons/GamePadIcon';
import timerIcon from '../Images/timerIcon.jpeg';
import { FormIcon } from '../Components/Icons/FormIcon';
import { SettingIcon } from '../Components/SettingIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';

export function AppAside({ isAsideVisible }) {
  return (
    <aside className={isAsideVisible ? 'aside-show' : ''}>
      <nav>
        <ul>
          <li className="aside-row">
            <div className="aside-icon">
              <HouseIcon />
            </div>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>

          <li className="aside-row">
            <div className="aside-icon">
              <PersonalCardIcon />
            </div>
            <NavLink to="cv">Moje CV</NavLink>
          </li>

          <li className="aside-row">
            <div className="aside-icon">
              <EditIcon />
            </div>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>

          <li className="aside-row">
            <div className="aside-icon">
              <GameIcon />
            </div>
            <NavLink to="exercises/js/hit-the-mole">Gra | KRET</NavLink>
          </li>

          <li className="aside-row">
            <div className="aside-icon">
              <GamePadIcon />
            </div>
            <NavLink to="exercises/js/memo">Gra | MEMO</NavLink>
          </li>

          <li className="aside-row">
            <div className="aside-icon">
              <FAQIcon />
            </div>
            <NavLink to="exercises/react/etodo-with-server">
              To do lista
            </NavLink>
          </li>

          <li className="aside-row">
            <div className="aside-icon">
              <FormIcon />
            </div>
            <NavLink to="exercises/react/forms">Formularz</NavLink>
          </li>

          <li className="aside-row">
            <div className="aside-icon">
              <img src={timerIcon} alt="timer" className="timer-icon" />
            </div>
            <NavLink to="exercises/js/timer">Timer</NavLink>
          </li>

          <li className="aside-row">
            <div className="aside-icon">
              <SettingIcon />
            </div>
            <NavLink to="exercises/react/autorization-with-firebase">
              Zaloguj...
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
