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
    title: 'Bachelor of Computer Science - Bandung Institute of Technology',
    company: 'Bachelor of Computer Science - Bandung Institute of Technology',
    jobdesc: ['GPA: 3.62/4.00', 'Vice Head of Publications Department at Informatics Student Union (HMIF ITB)'],
    date: '2018-2022',
  },
];

const App: React.FC = () => {
  return (
    <main className="App lockup">
      <section id="About">
        <h6>Hi, my name is</h6>
        <h1>
          <span id="Gregorius">Gregorius</span> Jovan Kresnadi
        </h1>
        <h3 className="text-light-1 font-medium">Software Engineer · Designer · Cyclist</h3>
        <p>
          I currently work at Solecode delivering high-quality, high-functioning code focusing on Full Stack Web
          Development using C# and JavaScript. I love building things and scratching itches in the back of my head
          whenever something interesting comes to mind.
        </p>
        <br />
        <p>
          I also do occasional side projects to keep my tech arsenal fresh. Mainly I choose Next.JS, Tailwind, and
          GoLang as my preferred tools of the trade, but I try to diversify to not look everything as a nail.
        </p>
        <br />
        <p>
          If you don&apos;t see me coding, then you can find me either on two wheels, on foot, in the gym, or on my
          gaming rig.
        </p>
      </section>
      <section id="Experience" className="flex flex-col">
        <h1 className="section-header-pop-up">Experience</h1>
        {expList.map((exp, idx) => (
          <Experience experience={exp} key={`Exp-${idx}`} />
        ))}
      </section>
      <section id="Skills">
        <h1>Tech Arsenal</h1>
      </section>
      <section id="Projects">
        <h1>Projects</h1>
      </section>
      <section id="Contact">
        <h1>Get In Touch</h1>
      </section>
    </main>
  );
};

export default App;
