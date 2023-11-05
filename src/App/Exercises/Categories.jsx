import React from 'react';
import { NavLink } from 'react-router-dom';

import js from '../Images/tech-stack/js.svg';
import react from '../Images/tech-stack/react.svg';

import './categories.css';
import { HtmlIcon } from '../Components/Icons/HtmlIcon';

export const Categories = () => {
  return (
    <div>
      <h2>Kategorie</h2>
      <div className="exercises-categories">
        <NavLink className="exercise-card exercise-category" to="html-css">
          <HtmlIcon />
          <span>HTML & CSS</span>
        </NavLink>
        <NavLink className="exercise-card exercise-category" to="js">
          <img src={js} alt="jsIcon" />
          <span>JS</span>
        </NavLink>
        <NavLink className="exercise-card  exercise-category" to="react">
          <img src={react} alt="reactIcon" />
          <span>React</span>
        </NavLink>
      </div>
    </div>
  );
};
