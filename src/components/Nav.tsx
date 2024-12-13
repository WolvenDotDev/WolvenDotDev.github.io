import React from 'react';
import './nav.css';

interface NavProps {
  nav: string;
  setNav: (value: string | ((prevVar: string) => string)) => void;
}

const Navigations = [
  { id: 'About', label: 'About' },
  { id: 'Experience', label: 'Experience' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Contact', label: 'Contact Me' },
];

const Nav: React.FC<NavProps> = (props) => {
  const { nav, setNav } = props;
  return (
    <div id="Nav-Container">
      <nav id="Nav">
        {Navigations.map((n) => (
          <a
            onClick={() => setNav(n.id)}
            href={'#' + n.id}
            key={'Nav-' + n.id}
            id={'Nav-' + n.id}
            className={'nav-item ' + (n.id == nav && ' selected')}
          >
            {n.label}
          </a>
        ))}
      </nav>
      <div id="Nav-Alt">
        {Navigations.map((n) => (
          <div
            key={'Nav-Alt-' + n.id}
            id={'Nav-Alt-' + n.id}
            className={'nav-alt-item ' + (n.id == nav && ' selected')}
          >
            <hr className="nav-alt-bar" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
