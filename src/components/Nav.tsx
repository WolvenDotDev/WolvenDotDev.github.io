import React from 'react';
import './nav.css';

interface NavProps {}

const Nav: React.FC<NavProps> = ({}) => {
  return (
    // <div id="Nav-Region">
      <div id="Nav-Container">
        <div id="Nav-Alt">
          <hr id="Nav-Alt-About" className="nav-alt-item" />
          <hr id="Nav-Alt-Experience" className="nav-alt-item" />
          <hr id="Nav-Alt-Projects" className="nav-alt-item" />
          <hr id="Nav-Alt-Contact" className="nav-alt-item" />
        </div>
        <nav id="Nav">
          <div id="Nav-About" className="nav-item">
            About
          </div>
          <div id="Nav-Experience" className="nav-item">
            Experience
          </div>
          <div id="Nav-Projects" className="nav-item">
            Projects
          </div>
          <div id="Nav-Contact" className="nav-item">
            Contact Me
          </div>
        </nav>
      </div>
    // </div>
  );
};

export default Nav;
