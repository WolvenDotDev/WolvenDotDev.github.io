import React from 'react';
import './App.css';
import type { DExperience } from '@/types/experience';
import type { DProject } from '@/types/project';
import Experience from './components/containers/Experience';
import Project from './components/containers/Project';

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
    techs: ['NextJS', 'Typescript', 'Tailwind', 'Firebase', 'Digital Ocean', 'Docker'],
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
    techs: ['Vite', 'React', 'Typescript', 'Tailwind CSS'],
  },
];

const App: React.FC = () => {
  return (
    <main className="App">
      <section id="About" className="mt-40 mb-32 px-5">
        <h6 className="mb-1 text-accent-1 text-opacity-70">Hi, my name is</h6>
        <h1 className="mb-4" id="FullName">
          Gregorius <span id="Jovan">Jovan</span> Kresnadi
        </h1>
        <h3 className="text-light-1 font-medium mb-12">
          Software Engineer <span className="text-white-1">·</span> Designer <span className="text-white-1">·</span>{' '}
          Cyclist
        </h3>
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
          to keep my tech arsenal fresh. Mainly I choose Next.JS, Tailwind, and Go as my preferred tools of the trade,
          but I try to diversify to not look everything as a nail.
        </p>
        <br />
        <p>
          If you don&apos;t see me coding, you can find me either on{' '}
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
          {expList.map((exp) => (
            <Experience experience={exp} key={`Exp-${exp.id}`} />
          ))}
        </div>
      </section>
      <section id="Projects" className="mt-16 mb-24 relative flex flex-col w-full">
        <div className="section-header-pop-up">
          <h2 className="section-header-text">Projects</h2>
        </div>
        <div className="flex flex-col gap-8 bg-navy-bg z-10">
          {projectList.map((proj) => (
            <Project project={proj} key={`Proj-${proj.id}`} />
          ))}
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
