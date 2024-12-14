export type DProject = {
  id: string;
  title: string;
  iconFile: string;
  file?: string;
  url?: string;
  description: string;
  date: string;
  techs: string[];
};

const projects: DProject[] = [
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

export default projects;
