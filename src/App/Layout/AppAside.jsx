import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import bookIconSrc from '../Images/tiles/book.svg';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <div className="aside-icon">
              <HouseIcon />
            </div>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          {/* <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li> */}
          <li className="aside-row">
            <div className="aside-icon">
              <EditIcon />
            </div>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row">
            <div className="aside-icon">
              <PersonalCardIcon />
            </div>
            <NavLink to="cv">Moje CV</NavLink>
          </li>
          <li className="aside-row">
            <div className="aside-icon">
              <CalendarIcon />
            </div>
            <NavLink to="calendar">Kalendarz</NavLink>
          </li>
          <li className="aside-row">
            {/* <ElementIcon /> */}
            <div className="aside-icon">
              {' '}
              <img src={bookIconSrc} alt="blog" />
            </div>
            <NavLink to="blog">Blog</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
