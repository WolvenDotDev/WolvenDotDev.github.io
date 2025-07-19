import React from 'react';
import './App.css';
import { BlueSky, File, GitHub, LinkedIn, Mail } from './assets/Icons';
import Experience from './components/containers/Experience';
import Project from './components/containers/Project';
import Nav from './components/Nav';
import expList from './data/experience';
import projectList from './data/projects';
import useNavigation from './hooks/useNavigation';

const App: React.FC = () => {
  const viewportWidth = window.innerWidth;
  const isMobile = viewportWidth < 768;
  const sections = [
    {
      id: 'About',
      threshold: isMobile ? 0.3 : 1,
    },
    {
      id: 'Experience',
      threshold: isMobile ? 0.15 : 0.3,
    },
    {
      id: 'Projects',
      threshold: isMobile ? 0.2 : 0.4,
    },
    {
      id: 'Contact',
      threshold: 1,
    },
  ];
  const [navRefs, nav, setNav] = useNavigation(sections);

  return (
    <>
      <Nav nav={nav} setNav={setNav} />
      <main className="App">
        <section
          ref={navRefs['About'].ref}
          id="About"
          className={'py-4 my-12 lg:mt-32 px-4' + (nav.includes('About') ? ' section-active' : '')}
        >
          <h6 className="mb-1 text-accent-1 text-opacity-70">Hi, my name is</h6>
          <h1 className="mb-4" id="FullName">
            Gregorius <span id="Jovan">Jovan</span> Kresnadi
          </h1>
          <h4 className="text-light-1 font-medium mb-4">
            Software Engineer <span className="text-white-1">·</span> Designer <span className="text-white-1">·</span>{' '}
            Cyclist
          </h4>
          <div className="mb-8 flex items-center gap-6">
            <a href="https://github.com/WolvenDotDev" target="_blank" rel="noreferrer">
              <GitHub className="home-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gregorius-jovan-kresnadi/" target="_blank" rel="noreferrer">
              <LinkedIn className="home-icon" />
            </a>
            <a href="https://bsky.app/profile/wolven.dev" target="_blank" rel="noreferrer">
              <BlueSky className="home-icon" />
            </a>
            <a href="mailto:jovan.kresnadi@wolven.dev">
              <Mail className="home-icon" />
            </a>
          </div>
          <p className="text-justify">
            I currently work at{' '}
            <a href="https://www.solecode.id/" target="_blank" rel="noreferrer">
              Solecode
            </a>{' '}
            delivering high-quality, high-functioning code focusing on Full Stack Web Development using C# and
            JavaScript. I love building things and scratching itches in the back of my head whenever something
            interesting comes to mind.
          </p>
          <br />
          <p>
            I also do occasional{' '}
            <a className="section-title" href="#Projects">
              side projects
            </a>{' '}
            to keep my tech arsenal fresh. Mainly I choose React, Next.js, Tailwind, and Go as my preferred tools of the
            trade, but I try to diversify to not look everything as a nail.
          </p>
          <br />
          <p>
            If you don&apos;t see me coding, you can find me either on{' '}
            <a href="https://www.instagram.com/sang.pemuja.baja" target="_blank" rel="noreferrer">
              two wheels
            </a>
            , on foot, in the gym, or on my gaming rig.
          </p>
        </section>
        <section
          ref={navRefs['Experience'].ref}
          id="Experience"
          className={'pt-20 mb-16 relative flex flex-col' + (nav.includes('Experience') ? ' section-active' : '')}
        >
          <div className="section-header-pop-up">
            <h2 className="section-header-text">Experience</h2>
          </div>
          <div className="exp-container flex flex-col lg:gap-4 gap-8 bg-navy-bg z-10">
            {expList.map((exp) => (
              <Experience experience={exp} key={`Exp-${exp.id}`} />
            ))}
          </div>
          <div className="mt-8 flex justify-center items-center ">
            <a
              id="Resume"
              className="flex flex-row gap-2 items-center"
              href="/Resume_Gregorius Jovan Kresnadi.pdf"
              target="_blank"
            >
              <h5>Check Out Full Résumé</h5>
              <File className="w-4 h-4 link-icon" />
            </a>
          </div>
        </section>
        <section
          ref={navRefs['Projects'].ref}
          id="Projects"
          className={'pt-20 mb-12 relative flex flex-col w-full' + (nav.includes('Projects') ? ' section-active' : '')}
        >
          <div id="Projects-Target"> </div>
          <div className="section-header-pop-up">
            <h2 className="section-header-text">Projects</h2>
          </div>
          <div className="flex flex-col gap-8 bg-navy-bg z-10">
            {projectList.map((proj) => (
              <Project project={proj} key={`Proj-${proj.id}`} />
            ))}
          </div>
        </section>
        <section
          ref={navRefs['Contact'].ref}
          id="Contact"
          className={'flex mt-8 mb-16 ' + (nav.includes('Contact') ? ' section-active' : '')}
        >
          <a id="MailToButton" className="font-mono text-lg" href="mailto:jovan.kresnadi@wolven.dev">
            <h3>Get In Touch</h3>
          </a>
        </section>
        <footer className="w-full my-8 flex flex-col items-center gap-2 text-neutral-1 text-xs font-light text-center">
          <div>Designed & built by yours truly.</div>
          <div>
            Icons by{' '}
            <a target="_blank" href="https://icons8.com" rel="noreferrer">
              Icons8
            </a>{' '}
            &{' '}
            <a target="_blank" href="https://fontawesome.com/" rel="noreferrer">
              FontAwesome
            </a>
            . Text is set either in the{' '}
            <a target="_blank" href="https://rsms.me/inter/" rel="noreferrer">
              Inter
            </a>{' '}
            or{' '}
            <a target="_blank" href="https://fonts.google.com/specimen/Roboto+Mono" rel="noreferrer">
              Roboto Mono
            </a>{' '}
            typeface.
          </div>
          <div className="text-white-1">© 2025 wolven.dev</div>
        </footer>
      </main>
    </>
  );
};

export default App;
