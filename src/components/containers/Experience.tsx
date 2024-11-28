import React from 'react';
import type { DExperience } from '@/types/experience';

type ExpProps = {
  experience: DExperience;
};

const Experience: React.FunctionComponent<ExpProps> = ({ experience }) => {
  const { title, company, description, jobdesc, date, skills } = experience;
  const id = title.replaceAll(' ', '');
  return (
    <div className="flex">
      <div className="w-1/4">{date}</div>
      <div className="w-3/4 flex flex-col">
        <h3>
          {title} · {company}
        </h3>
        <p>{description}</p>
        <ul className="text-neutral-1">
          {jobdesc.map((job, idx) => (
            <li key={`${id}-job-${idx}}`}>{job}</li>
          ))}
        </ul>
        <ul>{skills && skills.map((skill, idx) => <li key={`${id}-skill-${idx}}`}>{skill}</li>)}</ul>
      </div>
    </div>
  );
};

export default Experience;
