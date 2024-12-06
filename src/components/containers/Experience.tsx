import React from 'react';
import type { DExperience } from '@/types/experience';
import './container.css';

type ExpProps = {
  experience: DExperience;
};

const Experience: React.FunctionComponent<ExpProps> = ({ experience }) => {
  const { title, company, description, jobdesc, date, skills } = experience;
  const id = title.replaceAll(' ', '');
  return (
    <div className="exp-card flex transition-colors duration-200 hover:opacity-100 hover:bg-light-1 hover:bg-opacity-5 rounded-lg p-4">
      <div className="w-1/4 text-light-1">{date}</div>
      <div className="w-3/4 flex flex-col gap-4">
        <h4>
          {title} · {company}
        </h4>
        {description && <p>{description}</p>}

        <ul className="text-neutral-1 list-disc text-justify pl-2 flex flex-col gap-2 jobdesc-list">
          {jobdesc.map((job, idx) => (
            <li key={`${id}-job-${idx}}`}>{job}</li>
          ))}
        </ul>
        <ul className="flex gap-3">
          {skills &&
            skills.map((skill, idx) => (
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

export default Experience;
