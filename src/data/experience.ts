export type DExperience = {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  description?: string;
  jobdesc: string[]; // Markdown
  date: string;
  skills?: string[];
};

const Experiences: DExperience[] = [
  {
    id: 'solecode',
    title: 'Software Engineer',
    company: 'Solecode',
    companyUrl: 'https://solecode.id',
    description:
      'Solecode is an IT consulting and services company specializing in rapid delivery, intuitive design, convenient experience, high agility, and better client collaboration.',
    jobdesc: [
      'Developing a **document storage management system** using **Java** with **Spring & ZK** framework, **streamlining business workflows** across all branches of an Indonesian financing company',
      'Led a team of 3, **restructuring** a Human Resource management app using **Flutter**, implementing **state management** with Riverpod, **caching**, and building reusable components, resulting in a **reduction of over 10,000 lines of code**',
      'Unified **React TypeScript** UI components into a **Storybook** UI library with **Vite, Tailwind,** and published it as an internal **npm package** to **reduce development time by 50%**',
      'Developed **core back-end logic** for an **oil reservoir and well management system** of an Indonesian oil and gas company using .NET MVC, **reducing development time** by **30%**',
      'Maintained a **Next.js fullstack boilerplate** to **bootstrap** future company **projects**',
      'Developed **back-end services** for a thesis management and **student study plan platform** for a private university in Jakarta, using **C#** with **ASP.NET Core, Redis, Azure CosmosDB,** and **Azure cloud services**',
    ],
    date: 'Feb 2023 - Present',
    skills: [
      'React',
      'Next.js',
      'TailwindCSS',
      'C#',
      '.NET',
      'Java',
      'Azure',
      'OracleDB',
      'Redis',
      'PostgreSQL',
      'Storybook',
      'Flutter',
      'Figma',
    ],
  },
  {
    id: 'dana',
    title: 'Front End SDET Intern',
    company: 'DANA',
    companyUrl: 'https://dana.id',
    description:
      'DANA Indonesia is a payment gateway company aiming to replace traditional wallets with their digital platform.',
    jobdesc: [
      'Ensured high-quality user experiences for lifestyle services and mini-program features through **automated testing** on iOS devices using Selenium and Xcode, **increasing test coverage to 95%**',
      '**Developed test suites** for **end-to-end, regression,** and **system integration tests** using XMind and Testrail',
      'Assisted in monitoring during high-traffic events and post-deployments, reporting issues in Jira with severity and priority classification',
    ],
    date: 'Aug 2021 - Feb 2022',
    skills: ['Cucumber', 'Java', 'Selenium'],
  },
  {
    id: 'blibli',
    title: 'SDET Intern',
    company: 'Blibli.com',
    companyUrl: 'https://www.blibli.com',
    description: 'Blibli.com is an omnichannel e-commerce platform and lifestyle ecosystem in Indonesia.',
    jobdesc: [
      '**Increased** regression **test coverage** to **95%** for checkout and promotion features',
      'Developed **test cases** using **Behavior Driven Development (BDD)** to enhance developer productivity',
      'Created **automated tests** for **API & UI testing** using Cucumber & Selenium',
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
      'Assisted and supervised students in coding assignments and practice using Olympia learning platform',
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
    companyUrl: 'https://www.itb.ac.id',
    jobdesc: ['*Cum Laude* (GPA 3.62)', 'Vice Head of Publications Department at Informatics Student Union (HMIF ITB)'],
    date: '2018 - 2022',
  },
];

export default Experiences;
