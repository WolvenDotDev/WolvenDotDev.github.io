import React from 'react';
import type { DProject } from '@/types/project';
import './container.css';

type ProjectProps = {
  project: DProject;
};

const Project: React.FunctionComponent<ProjectProps> = ({ project }) => {
  const { id, title, iconFile, description, url, techs } = project;
  const icon = '/assets/projects/' + iconFile;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="project-card flex flex-col gap-4 transition-colors duration-200 hover:opacity-100 hover:bg-light-1 hover:bg-opacity-5 rounded-lg p-4 cursor-pointer"
    >
      <div className="flex gap-2">
        <img src={icon} alt="" className="w-8 aspect-square" />
        <h3 className="title">{title}</h3>
        <i className="link-icon fa fa-link"></i>
      </div>
      {description && <p className="lg:mx-3">{description}</p>}

      <ul className="flex flex-wrap gap-3">
        {techs &&
          techs.map((skill, idx) => (
            <li
              className="bg-navy-3/60 rounded-full py-1 px-3 text-sm font-medium text-light-1"
              key={`${id}-skill-${idx}}`}
            >
              {skill}
            </li>
          ))}
      </ul>
    </a>
  );
};

export default Project;
