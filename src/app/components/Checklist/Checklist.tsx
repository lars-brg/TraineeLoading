import Image from 'next/image'
import React from 'react'
import checklist from '/public/img/assets/checklist.svg'

type ChecklistProps = {
  title: string;
};

export const Checklist: React.FC<ChecklistProps> = ({ title }) => {
  return (
    <div className="flex flex-row gap-4">
      <Image
        alt=""
        src={checklist}
      />
      <p className="font-montserrat text-lg font-medium py-1 justify-start">{title}</p>
    </div>
  );
};