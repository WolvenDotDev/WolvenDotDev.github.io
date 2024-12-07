import React from 'react';
import type { DProject } from '@/types/project';
import './container.css';

type ProjectProps = {
  project: DProject;
};

const Project: React.FunctionComponent<ProjectProps> = ({ project }) => {
  const { id, title, file, description, date, techs } = project;
  return (
    <div className="exp-card flex transition-colors duration-200 hover:opacity-100 hover:bg-light-1 hover:bg-opacity-5 rounded-lg p-4">
      <div className="w-1/4 text-light-1">{date}</div>
      <div className="w-3/4 flex flex-col gap-4">
        <h4>{title}</h4>
        {description && <p>{description}</p>}

        <ul className="flex gap-3">
          {techs &&
            techs.map((skill, idx) => (
              <li
                className="bg-opacity-90 bg-navy-2 rounded-full py-1 px-3 text-sm font-medium text-light-1"
                key={`${id}-skill-${idx}}`}
              >
                {skill}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
