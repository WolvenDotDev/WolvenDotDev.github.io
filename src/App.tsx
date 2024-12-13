import type { DExperience } from '@/types/experience';
import type { DProject } from '@/types/project';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { BlueSky, File, GitHub, LinkedIn, Mail } from './assets/Icons';
import Experience from './components/containers/Experience';
import Project from './components/containers/Project';
import Nav from './components/Nav';

// #region Data
const expList: DExperience[] = [
  {
    id: 'solecode',
    title: 'Software Engineer',
    company: 'Solecode',
    jobdesc: [
      'Develop UI components and backend services for a resource management website of an Indonesian oil and gas company using C# ASP.NET MVC framework',
      'Maintain code boilerplate for a Next.JS repository to be used in future company client projects',
      'Develop back end services for a thesis management & student study plan website of a world-class private university in Jakarta, using C# .NET Core framework and Azure cloud service',
    ],
    date: 'Feb 2023 - Present',
    skills: ['JavaScript', 'C#', '.NET', 'Azure'],
  },
  {
    id: 'dana',
    title: 'Front End SDET Intern',
    company: 'DANA',
    jobdesc: [
      'Assure the quality of user experience on features of lifestyle services and mini programs by performing manual tests, increasing test coverage up to 95%',
    ],
    date: 'Aug 2021 – Feb 2022',
    skills: ['Java', 'Cucumber'],
  },
  {
    id: 'blibli',
    title: 'SDET Intern',
    company: 'Blibli.com',
    jobdesc: [
      'Increase test coverage to up to 95% on checkout and promotion features by creating automation for API testing and UI testing using Cucumber, Java, and Kafka',
    ],
    date: 'Jun - Aug 2022',
    skills: ['Java', 'Cucumber', 'Kafka'],
  },
  {
    id: 'lab-assistant',
    title: 'Programming Lab Assistant',
    company: 'Bandung Institute of Technology',
    description:
      'Course management in ITB is divided into several laboratories. Programming Lab manages Data Structure, Object Oriented Programming, and Web Based Development',
    jobdesc: ['Assist and supervise students in coding practice', 'Arrange and grade students’ project assignments'],
    date: '2020 - 2022',
    skills: ['Java', 'C++', 'JavaScript', 'React.JS'],
  },
  {
    id: 'itb',
    title: 'Bachelor of Science in Informatics',
    company: 'Bandung Institute of Technology',
    jobdesc: ['GPA: 3.62/4.00', 'Vice Head of Publications Department at Informatics Student Union (HMIF ITB)'],
    date: '2018-2022',
  },
];

const projectList: DProject[] = [
  {
    id: 'porsee',
    title: 'Porsee',
    iconFile: 'PorseeIcon.svg',
    file: '',
    url: 'https://porsee-website-demo.vercel.app/',
    description:
      'Porsee is an Indonesian food catering service delivering fresh ready-to-cook ingredients to your doorstep. Porsee aims to bring restaurant quality food to your home kitchen, complete with the experience of cooking it yourself. I developed the website using NextJS and Firebase as the Backend, deployed to a Digital Ocean droplet with Docker to support containerization.',
    date: '2023',
    techs: ['NextJS', 'Typescript', 'Tailwind', 'Figma', 'Firebase', 'Digital Ocean', 'Docker'],
  },
  {
    id: 'wolvendev',
    title: 'wolven.dev',
    iconFile: 'WolvenDev.png',
    file: '',
    url: 'https://wolven.dev/',
    description:
      "It's basically this website... \n I used Vite React with Typescript, and Tailwind to style and the occasional vanilla CSS to help out with complex animations.",
    date: '2023',
    techs: ['Vite', 'React', 'Figma', 'Typescript', 'Tailwind'],
  },
];
// #endregion

const App: React.FC = () => {
  const [hovered, setHovered] = useState('');
  const [nav, setNav] = useState('About');
  const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef(null);

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) console.log(entry);
    });
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    rootMargin: '0px',
    threshold: 0.4,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <>
      <Nav nav={nav} setNav={setNav} />
      <main className="App">
        <section id="About" className={'py-4 my-12 lg:mt-32 px-5' + (nav == 'About' ? ' section-active' : '')}>
          <h6 className="mb-1 text-accent-1 text-opacity-70">Hi, my name is</h6>
          <h1 className="mb-4" id="FullName">
            Gregorius <span id="Jovan">Jovan</span> Kresnadi
          </h1>
          <h4 className="text-light-1 font-medium mb-4">
            Software Engineer <span className="text-white-1">·</span> Designer <span className="text-white-1">·</span>{' '}
            Cyclist
          </h4>
          <div className="mb-8 flex items-center gap-6">
            <a href="https://github.com/Wolven.Dev" target="_blank" rel="noreferrer">
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
            to keep my tech arsenal fresh. Mainly I choose Next.JS, Tailwind, and Go as my preferred tools of the trade,
            but I try to diversify to not look everything as a nail.
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
          id="Experience"
          className={'pt-20 mb-16 relative flex flex-col' + (isVisible ? ' section-active' : '')}
          ref={containerRef}
        >
          <div className="section-header-pop-up">
            <h2 className="section-header-text">Experience</h2>
          </div>
          <div className="flex flex-col lg:gap-4 gap-8 bg-navy-bg z-10">
            {expList.map((exp) => (
              <Experience experience={exp} key={`Exp-${exp.id}`} />
            ))}
          </div>
          <div className="mt-8 flex justify-center items-center ">
            <a
              id="Resume"
              className="hover:text-accent-2 flex pb-2 border-b-2 border-b-accent-1 gap-2 items-center"
              href="/Resume_Gregorius Jovan Kresnadi.pdf"
              target="_blank"
            >
              <h4>Check Out Full Résumé</h4>
              <File className="w-6 h-6 link-icon" />
            </a>
          </div>
        </section>
        <section
          id="Projects"
          className={'pt-20 mb-12 relative flex flex-col w-full' + (nav == 'Projects' ? ' section-active' : '')}
        >
          <div className="section-header-pop-up">
            <h2 className="section-header-text">Projects</h2>
          </div>
          <div className="flex flex-col gap-8 bg-navy-bg z-10">
            {projectList.map((proj) => (
              <Project project={proj} key={`Proj-${proj.id}`} />
            ))}
          </div>
        </section>
        <section id="Contact" className="flex mt-8 mb-16">
          <a
            onMouseLeave={() => {
              setHovered('hovered');
            }}
            onBlur={() => {
              setHovered('hovered');
            }}
            onMouseOver={() => {
              setHovered('hover');
            }}
            onFocus={() => {
              setHovered('hover');
            }}
            id="MailToButton"
            className={'font-mono text-lg ' + hovered}
            href="mailto:jovan.kresnadi@wolven.dev"
          >
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
          <div className="text-white-1">© 2024 wolven.dev</div>
        </footer>
      </main>
    </>
  );
};

export default App;
