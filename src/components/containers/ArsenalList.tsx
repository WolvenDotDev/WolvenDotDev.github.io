import React from 'react';
import './container.css';
import type { DArsenal } from '@/types/arsenal';

type ArsenalProps = {
  arsenal: DArsenal;
};

type ArsenalListProps = {
  arsenalList: DArsenal[];
};

const sizes: { [id: number]: string } = {
  1: 'w-32 h-32',
  2: 'w-16 h-16',
};

const Arsenal: React.FunctionComponent<ArsenalProps> = ({ arsenal }) => {
  const { title, grade, file, fileIdle, size } = arsenal;
  const iconSize = size ?? sizes[grade];
  const icon = '/assets/arsenal/' + file;
  const iconIdle = '/assets/arsenal/' + fileIdle;
  return (
    <div className={'arsenal-icon-container flex justify-center items-center text-center ' + iconSize}>
      <img alt={title} src={iconIdle} className="arsenal-icon-idle" />
      <img alt={title} src={icon} className="arsenal-icon" />
    </div>
  );
};

const ArsenalList: React.FunctionComponent<ArsenalListProps> = ({ arsenalList }) => {
  const grades: number[] = [];
  arsenalList.forEach((ars) => {
    if (!grades.includes(ars.grade)) grades.push(ars.grade);
  });

  return (
    <div className="relative w-full flex flex-col gap-8 min-h-20 bg-navy-bg z-10 mx-4 py-4">
      {grades.map((g) => (
        <div key={'Arsenal-Grade-' + g} className="flex gap-4">
          {arsenalList
            .filter((ars) => ars.grade == g)
            .map((ars, idx) => (
              <Arsenal arsenal={ars} key={`Exp-${idx}`} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ArsenalList;
