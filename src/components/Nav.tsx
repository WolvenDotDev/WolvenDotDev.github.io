import React, { useEffect, useRef, useState } from 'react';
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
  const { nav } = props;
  const navWrapper = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleTapOutside(event: TouchEvent) {
    if (navWrapper.current && !navWrapper.current.contains(event.target as HTMLElement)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('touchstart', handleTapOutside);
    return () => {
      document.removeEventListener('touchstart', handleTapOutside);
    };
  }, [navWrapper]);

  return (
    <div id="Nav-Container">
      <nav id="Nav" ref={navWrapper} className={isOpen ? 'open' : ''}>
        {Navigations.map((n) => (
          <a
            onClick={() => setIsOpen(false)}
            href={'#' + n.id}
            key={'Nav-' + n.id}
            id={'Nav-' + n.id}
            className={'nav-item ' + (nav[nav.length - 1] == n.id && ' selected')}
          >
            {n.label}
          </a>
        ))}
      </nav>
      <div id="Nav-Alt" role="button" tabIndex={0} onKeyDown={() => setIsOpen(true)} onClick={() => setIsOpen(true)}>
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
