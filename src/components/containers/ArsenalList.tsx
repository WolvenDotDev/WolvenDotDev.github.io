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
  1: 'w-20 h-20',
  2: 'w-12 h-12',
};

const Arsenal: React.FunctionComponent<ArsenalProps> = ({ arsenal }) => {
  const { title, grade } = arsenal;
  const id = title.replaceAll(' ', '');
  const size = sizes[grade];
  return (
    <div className={'bg-navy-2 rounded-full p-2 flex justify-center items-center text-center ' + size}>
      <div className="text-light-1">{title}</div>
    </div>
  );
};

const ArsenalList: React.FunctionComponent<ArsenalListProps> = ({ arsenalList }) => {
  const grades: number[] = [];
  arsenalList.forEach((ars) => {
    if (!grades.includes(ars.grade)) grades.push(ars.grade);
  });

  return (
    <div className="relative w-full flex flex-col gap-4 min-h-20 bg-navy-bg z-10 mx-4 py-4">
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
