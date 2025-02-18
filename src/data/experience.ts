export type DExperience = {
  id: string;
  title: string;
  company: string;
  description?: string;
  jobdesc: string[];
  date: string;
  skills?: string[];
};

const Experiences: DExperience[] = [
  {
    id: 'solecode',
    title: 'Software Engineer',
    company: 'Solecode',
    jobdesc: [
      'Develop a UI component library to be used in future company client projects using React Typescript with Vite, TailwindCSS, and Storybook as a front-end workshop for UI development, with the final deliverable as an npm package',
      'Develop UI components and backend services for a resource management website of an Indonesian oil and gas company using C# ASP.NET MVC framework',
      'Maintain code boilerplate for a NextJS repository to be used in future company client projects',
      'Develop back end services for a thesis management & student study plan website of a world-class private university in Jakarta, using C# .NET Core framework and Azure cloud service',
    ],
    date: 'Feb 2023 - Present',
    skills: ['React', 'NextJS', 'TailwindCSS', 'C#', '.NET', 'Azure', 'OracleDB', 'Storybook'],
  },
  {
    id: 'dana',
    title: 'Front End SDET Intern',
    company: 'DANA',
    jobdesc: [
      'Assure the quality of user experience on features of lifestyle services and mini programs by performing manual tests, increasing test coverage up to 95%',
      'Develop test suites and test cases for end-to-end tests, regression tests, and system integration tests',
    ],
    date: 'Aug 2021 - Feb 2022',
    skills: ['Cucumber', 'Java', 'Selenium'],
  },
  {
    id: 'blibli',
    title: 'SDET Intern',
    company: 'Blibli.com',
    jobdesc: [
      'Increase regression test coverage to up to 95% on checkout and promotion features by developing test cases using Behavior Driven Development and creating automation for API & UI testing using Cucumber & Selenium.',
      'Maintain sanity test and integration test at 100% coverage',
    ],
    date: 'Jun - Aug 2021',
    skills: ['Cucumber', 'Selenium', 'Java', 'Kafka'],
  },
  {
    id: 'lab-assistant',
    title: 'Programming Lab Assistant',
    company: 'Institut Teknologi Bandung',
    description:
      'Course management in ITB is divided into several laboratories. Programming Lab manages Data Structure & Algorithm, Object Oriented Programming, and Web Development',
    jobdesc: [
      'Assist and supervise students in coding lessons and practice using Olympia learning platform',
      'Manage development of students’ project assignment for Data Structures & Algorithm course',
      'Arrange and grade students’ project assignment for Object Oriented Programming course',
    ],
    date: '2020 - 2022',
    skills: ['Java', 'C++', 'C#'],
  },
  {
    id: 'itb',
    title: 'Bachelor of Science in Informatics',
    company: 'Institut Teknologi Bandung',
    jobdesc: ['GPA: 3.62/4.00', 'Vice Head of Publications Department at Informatics Student Union (HMIF ITB)'],
    date: '2018 - 2022',
  },
];

export default Experiences;
