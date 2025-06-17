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
    id: 'gradleVisualizer',
    title: 'Gradle Visualizer',
    iconFile: 'GradleVisualizer.svg',
    url: 'https://tree-self.vercel.app/',
    description:
      'Gradle Visualizer is a web tool to visualize complex Gradle dependencies into a tree-like interactive 3D graph. It allows users to easily navigate and understand the dependency structure and identify potential issues. In this freelance project, I helped refactor the codebase and add additional functionalities. It uses React Three Fiber, a React renderer for Three.js, integrated into a Next.js app.',
    date: '2025',
    techs: ['Next.js', 'Three.js', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 'porsee',
    title: 'Porsee',
    iconFile: 'PorseeIcon.svg',
    file: '',
    url: 'https://porsee-website-demo.vercel.app/',
    description:
      'Porsee is an Indonesian food catering service delivering fresh ready-to-cook ingredients to your doorstep. Porsee aims to bring restaurant quality food to your home kitchen, complete with the experience of cooking it yourself. I developed the website using Next.js and Firebase as the Backend, deployed to a Digital Ocean droplet with Docker to support containerization.',
    date: '2023',
    techs: ['Next.js', 'Typescript', 'TailwindCSS', 'Figma', 'Firebase', 'Digital Ocean', 'Docker'],
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
    techs: ['Vite', 'React', 'Typescript', 'TailwindCSS', 'Figma'],
  },
];

export default projects;
