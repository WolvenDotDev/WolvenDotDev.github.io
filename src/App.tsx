import React from 'react';
import './App.css';
import type { DExperience } from '@/types/experience';
import type { DArsenal } from '@/types/arsenal';
import Experience from './components/containers/Experience';
import ArsenalList from './components/containers/ArsenalList';

const expList: DExperience[] = [
  {
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
    title: 'Front End SDET Intern',
    company: 'DANA',
    jobdesc: [
      'Assure the quality of user experience on features of lifestyle services and mini programs by performing manual tests, increasing test coverage up to 95%',
    ],
    date: 'Aug 2021 – Feb 2022',
    skills: ['Java', 'Cucumber'],
  },
  {
    title: 'SDET Intern',
    company: 'Blibli.com',
    jobdesc: [
      'Increase test coverage to up to 95% on checkout and promotion features by creating automation for API testing and UI testing using Cucumber, Java, and Kafka',
    ],
    date: 'Jun - Aug 2022',
    skills: ['Java', 'Cucumber', 'Kafka'],
  },
  {
    title: 'Programming Lab Assistant',
    company: 'Bandung Institute of Technology',
    description:
      'Course management in ITB is divided into several laboratories. Programming Lab manages Data Structure, Object Oriented Programming, and Web Based Development',
    jobdesc: ['Assist and supervise students in coding practice', 'Arrange and grade students’ project assignments'],
    date: '2020 - 2022',
    skills: ['Java', 'C++', 'JavaScript', 'React.JS'],
  },
  {
    title: 'B.Sc. in Informatics',
    company: 'Bandung Institute of Technology',
    jobdesc: ['GPA: 3.62/4.00', 'Vice Head of Publications Department at Informatics Student Union (HMIF ITB)'],
    date: '2018-2022',
  },
];

const arsenalList: DArsenal[] = [
  { id: 'react', title: 'React', file: 'react.svg', fileIdle: 'react-idle.svg', grade: 1 },
  { id: 'next', title: 'Next.JS', file: 'nextjs.svg', fileIdle: 'nextjs-idle.svg', grade: 1 },
  { id: 'c-sharp', title: 'C#', file: 'c-sharp.svg', fileIdle: 'c-sharp-idle.svg', grade: 1 },
  { id: 'figma', title: 'Figma', file: 'figma.svg', fileIdle: 'figma-idle.svg', grade: 1 },
  { id: 'go', title: 'Go', file: 'go.svg', fileIdle: 'go-idle.svg', grade: 2, size: 'w-24 h-16' },
  { id: 'tailwind', title: 'Tailwind', file: 'tailwind.svg', fileIdle: 'tailwind-idle.svg', grade: 1 },
  { id: 'javascript', title: 'JavaScript', file: 'javascript.svg', fileIdle: 'javascript-idle.svg', grade: 2 },
  { id: 'mysql', title: 'MySQL', file: 'mysql.svg', fileIdle: 'mysql-idle.svg', grade: 2 },
  { id: 'firebase', title: 'Firebase', file: 'firebase.svg', fileIdle: 'firebase-idle.svg', grade: 2 },
  { id: 'java', title: 'Java', file: 'java.svg', fileIdle: 'java-idle.svg', grade: 2 },
  { id: 'oracle', title: 'Oracle', file: 'oracle.svg', fileIdle: 'oracle-idle.svg', grade: 2 },
];

const App: React.FC = () => {
  return (
    <main className="App">
      <section id="About" className="mt-40 mb-32 px-5">
        <h6 className="mb-1 text-accent-1 text-opacity-70">Hi, my name is</h6>
        <h1 className="mb-4">
          <span id="Gregorius">Gregorius</span> Jovan Kresnadi
        </h1>
        <h3 className="text-light-1 font-medium mb-12">Software Engineer · Designer · Cyclist</h3>
        <p className="text-justify">
          I currently work at{' '}
          <span>
            <a href="https://www.solecode.id/" target="_blank" rel="noreferrer">
              Solecode
            </a>
          </span>{' '}
          delivering high-quality, high-functioning code focusing on Full Stack Web Development using C# and JavaScript.
          I love building things and scratching itches in the back of my head whenever something interesting comes to
          mind.
        </p>
        <br />
        <p>
          I also do occasional{' '}
          <span>
            <a className="section-title" href="#Projects">
              side projects
            </a>
          </span>{' '}
          to keep my tech arsenal fresh. Mainly I choose Next.JS, Tailwind, and GoLang as my preferred tools of the
          trade, but I try to diversify to not look everything as a nail.
        </p>
        <br />
        <p>
          If you don&apos;t see me coding, then you can find me either on{' '}
          <span>
            <a href="https://www.instagram.com/sang.pemuja.baja" target="_blank" rel="noreferrer">
              two wheels
            </a>
          </span>
          , on foot, in the gym, or on my gaming rig.
        </p>
      </section>
      <section id="Experience" className="mt-16 mb-24 relative flex flex-col">
        <div className="section-header-pop-up">
          <h2 className="section-header-text">Experience</h2>
        </div>
        <div className="flex flex-col gap-4 bg-navy-bg z-10">
          {expList.map((exp, idx) => (
            <Experience experience={exp} key={`Exp-${idx}`} />
          ))}
        </div>
      </section>
      <section id="Skills" className="mt-16 mb-24 relative flex flex-col w-full">
        <div className="section-header-pop-up">
          <h2 className="section-header-text">Tech Arsenal</h2>
        </div>
        <ArsenalList arsenalList={arsenalList} />
      </section>
      <section id="Projects" className="mt-16 mb-24 relative">
        <div className="section-header-pop-up">
          <h2 className="section-header-text">Projects</h2>
        </div>
      </section>
      <section id="Contact" className="mt-16 mb-24 relative">
        <div className="section-header-pop-up">
          <h2 className="section-header-text">Get In Touch</h2>
        </div>
      </section>
    </main>
  );
};

export default App;
