import React, {FC} from 'react';
import './header.css';
import {Avatar} from "../avatar/Avatar";

const Header: FC = () => {
  return (
    <header
      className="header"
    >
      <div className="header__title">
        Pv Duc
      </div>
      <nav
        className="navigation"
      >
        <div className="navigation__list">
          <div className="navigation__item">
            Menu 1
          </div>
          <div className="navigation__item">
            Menu 2
          </div>
          <div className="navigation__item">
            Menu 3
          </div>
        </div>
      </nav>
      <div className="header__action">
        <Avatar
          src="https://res.cloudinary.com/pv-duc/image/upload/v1580586133/z9vympwcdzz7l74e0p0j.png"
        />
        <span className="ml-4 mr-2">Pv Duc</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M6.41,9H17.59a1,1,0,0,1,.7,1.71l-5.58,5.58a1,1,0,0,1-1.42,0L5.71,10.71A1,1,0,0,1,6.41,9Z"/></svg>
      </div>
    </header>
  );
};

export { Header };
