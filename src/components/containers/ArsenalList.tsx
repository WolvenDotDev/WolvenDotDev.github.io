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
  1: 'text-lg font-medium',
  2: 'text-md',
};

const ArsenalList: React.FunctionComponent<ArsenalListProps> = ({ arsenalList }) => {
  const grades: number[] = [];
  arsenalList.forEach((ars) => {
    if (!grades.includes(ars.grade)) grades.push(ars.grade);
  });

  return (
    <div className="relative w-full flex gap-16 py-4 pl-4">
      {grades.map((g) => (
        <ul key={'Arsenal-Grade-' + g} className={'flex flex-col gap-4 justify-between ' + sizes[g]}>
          {arsenalList
            .filter((ars) => ars.grade == g)
            .map((ars) => (
              <li key={'Arsenal-' + ars.id}>{ars.title}</li>
            ))}
        </ul>
      ))}
    </div>
  );
};

export default ArsenalList;
