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
    description: 'Solecode is an IT consulting and services company specializing in rapid delivery, intuitive design, convenient experience, high agility, and better client collaboration.',
    jobdesc: [
      'Refactored a Human Resource management app using Dart & Flutter, refining UI logic and rebuilding the overall project structure',
      'Developed back-end services and web pages for a budget monitoring system using Blazor .NET Web Framework, Tailwind CSS, and PostgreSQL DBMS',
      'Developed a UI component library in React TypeScript with Vite, utilizing Tailwind CSS, and Storybook as a front-end workshop for UI development, and publishing it as an npm package for future projects',
      'Built UI components and back-end services for a resource management website of an Indonesian oil and gas company using C# with ASP.NET MVC framework and Razor Pages',
      'Maintained a Next.js code boilerplate for streamlined development in future projects',
      'Developed back-end services for a thesis management website and a student study plan platform for a world-class private university in Jakarta, using C# with ASP.NET Core framework, Azure CosmosDB as NoSQL database, and Azure cloud services',
    ],
    date: 'Feb 2023 - Present',
    skills: ['React', 'Next.js', 'TailwindCSS', 'C#', '.NET', 'Azure', 'OracleDB', 'Storybook', 'Flutter', 'Figma'],
  },
  {
    id: 'dana',
    title: 'Front End SDET Intern',
    company: 'DANA',
    description: 'DANA Indonesia is a payment gateway company aiming to replace traditional wallets with their digital platform.',
    jobdesc: [
      'Ensured high-quality user experiences for lifestyle services and mini-program features through automated testing on iOS devices using Selenium and XCode, increasing test coverage to 95%',
      'Developed test suites for end-to-end, regression, and system integration tests using XMind and Testrail',
      'Assisted in on-duty monitoring during high-traffic events and post-deployments, reporting issues in JIRA with severity and priority classification',
    ],
    date: 'Aug 2021 - Feb 2022',
    skills: ['Cucumber', 'Java', 'Selenium'],
  },
  {
    id: 'blibli',
    title: 'SDET Intern',
    company: 'Blibli.com',
    description: 'Blibli.com is an omnichannel e-commerce platform and lifestyle ecosystem in Indonesia.',
    jobdesc: [
      'Increased regression test coverage to 95% for checkout and promotion features by developing test cases using Behavior Driven Development and creating automated tests for API & UI testing using Cucumber & Selenium',
      'Maintained sanity tests and integration tests at 100% coverage.',
    ],
    date: 'Jun - Aug 2021',
    skills: ['Cucumber', 'Selenium', 'Java', 'Kafka'],
  },
  {
    id: 'lab-assistant',
    title: 'Programming Lab Assistant',
    company: 'Institut Teknologi Bandung',
    description:
      'Course management in ITB is divided into several laboratories. Programming Lab manages Data Structure & Algorithm, Object Oriented Programming, and Web Development.',
    jobdesc: [
      'Assisted and supervised students in coding lessons and practice using Olympia learning platform',
      'Managed the development of project assignments for the Data Structures & Algorithm course',
      'Designed and graded project assignments for the Object Oriented Programming course',
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
