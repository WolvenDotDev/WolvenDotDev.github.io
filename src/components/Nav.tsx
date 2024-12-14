import React from 'react';
import './nav.css';

interface NavProps {
  nav: string[];
  setNav: React.Dispatch<React.SetStateAction<string[]>>;
}

const Navigations = [
  { id: 'About', label: 'About' },
  { id: 'Experience', label: 'Experience' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Contact', label: 'Contact Me' },
];

const Nav: React.FC<NavProps> = (props) => {
  const { nav, setNav } = props;

  const pushNavigation = (n: string) => {
    setNav((prevState) => {
      if (!prevState.includes(n)) return prevState.concat([n]);
      else return prevState;
    });
  };

  return (
    <div id="Nav-Container">
      <nav id="Nav">
        {Navigations.map((n) => (
          <a
            onClick={() => pushNavigation(n.id)}
            href={'#' + n.id}
            key={'Nav-' + n.id}
            id={'Nav-' + n.id}
            className={'nav-item ' + (nav[nav.length - 1] == n.id && ' selected')}
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
            className={'nav-alt-item ' + (nav[nav.length - 1] == n.id && ' selected')}
          >
            <hr className="nav-alt-bar" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
