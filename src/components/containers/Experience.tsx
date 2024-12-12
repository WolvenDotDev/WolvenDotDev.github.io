import React from 'react';
import type { DExperience } from '@/types/experience';
import './container.css';

type ExpProps = {
  experience: DExperience;
};

const Experience: React.FunctionComponent<ExpProps> = ({ experience }) => {
  const { id, title, company, description, jobdesc, date, skills } = experience;
  return (
    <div className="exp-card flex flex-col lg:gap-4 gap-6 transition-colors duration-200 hover:opacity-100 hover:bg-light-1 hover:bg-opacity-5 rounded-lg p-4">
      <div className="flex lg:flex-row flex-col-reverse items-baseline">
        <h6 className="text-light-1 lg:w-1/5">{date}</h6>
        <h4 className="lg:w-4/5">
          {title} · {company}
        </h4>
      </div>
      <div className="flex justify-end">
        <div className="lg:w-4/5 flex flex-col gap-4">
          {description && <p>{description}</p>}

          <ul className="text-neutral-1 list-disc text-justify pl-2 flex flex-col gap-2 jobdesc-list">
            {jobdesc.map((job, idx) => (
              <li key={`${id}-job-${idx}}`}>{job}</li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-3">
            {skills &&
              skills.map((skill, idx) => (
                <li
                  className="bg-navy-3/60 rounded-full py-1 px-3 text-sm font-medium text-light-1"
                  key={`${id}-skill-${idx}}`}
                >
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
