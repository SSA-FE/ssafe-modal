import React from 'react';

const SurveyTag = ({ tagText, idx }: { tagText: string; idx: number }) => {
  const colorList = ['bg-[#F04D1D]', 'bg-[#FF7364]', 'bg-[#A75EFF]', 'bg-[#1EBDFE]', 'bg-[#0DCF85]'];
  return (
    <div
      className={`h-[3.2rem] w-[10rem] ${colorList[idx]} mx-[0.8rem] grid place-items-center rounded-md text-[1.2rem] font-bold text-white`}
    >
      {tagText}
    </div>
  );
};

export default SurveyTag;
