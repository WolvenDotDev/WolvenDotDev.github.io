import React from 'react';
import './App.css';
import type { DExperience } from '@/types/experience';
import Experience from './components/containers/Experience';

const expList: DExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Solecode',
    jobdesc: [
      'Develop UI components and backend services for a resource management website of an Indonesian oil and gas company using C# ASP.NET MVC framework',
      'Maintain code boilerplate for a Next.JS repository to be used in future company client projects',
      'Develop back end services for a thesis management & student study plan website of a world‑class private university in Jakarta, using C# .NET Core framework and Azure cloud service',
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

const App: React.FC = () => {
  return (
    <main className="App">
      <section id="About" className="px-5">
        <h6 className="mb-1 text-neutral-1">Hi, my name is</h6>
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
            <a href="#Projects">side projects</a>
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
      <section id="Experience" className="flex flex-col gap-4">
        <h2 className="section-header-pop-up" id="ExperienceTitle">
          Experience
        </h2>
        <div className="flex flex-col gap-4 bg-navy-bg z-10">
          {expList.map((exp, idx) => (
            <Experience experience={exp} key={`Exp-${idx}`} />
          ))}
        </div>
      </section>
      <section id="Skills">
        <h2>Tech Arsenal</h2>
      </section>
      <section id="Projects">
        <h2>Projects</h2>
      </section>
      <section id="Contact">
        <h2>Get In Touch</h2>
      </section>
    </main>
  );
};

export default App;
