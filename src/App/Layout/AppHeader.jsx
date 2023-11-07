import React from 'react';

import './styles/header.css';
import logo from '../Images/start-it-logo.svg';
import { MenuIcon } from '../Components/MenuIcon';
import { PersonIcon } from '../Components/PersonIcon';
import { SettingIcon } from '../Components/SettingIcon';
import { RoundImage } from '../Components/RoundImage';
import { ArrowIcon } from '../Components/Arrow';

export function AppHeader({ toggleAside }) {
  return (
    <header>
      <div className="header-menu">
        <button onClick={toggleAside} className="menu-icon">
          <MenuIcon />
        </button>

        <img src={logo} alt="pomeranian-logo" className="logo" />

        <button className="person-icon">
          <PersonIcon />
        </button>
        <div className="img-and-info">
          {/* <button className="setting-icon">
            <SettingIcon />
          </button> */}
          <RoundImage url="https://media.licdn.com/dms/image/D4D03AQFHIG32CxPZNw/profile-displayphoto-shrink_800_800/0/1698699951569?e=1704931200&v=beta&t=P32MUq2jkzikLecF9-CKPfO9pB0YQxU3JG4NePbQkq4" />
          <p className="osoba">
            <span>
              <b>Aleksandra</b>
            </span>
            <span className="zawod">Junior Front-End Dev</span>
          </p>
          {/* <button className="arrow-icon">
            <ArrowIcon />
          </button> */}
        </div>
      </div>
    </header>
  );
}
