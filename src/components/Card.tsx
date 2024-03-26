import React from 'react';

const colorList = ['bg-[#F04D1D]', 'bg-[#FF7364]', 'bg-[#A75EFF]', 'bg-[#1EBDFE]', 'bg-[#0DCF85]'];

const Card = ({ title, content, tagList }: { title: string; content: string; tagList: string[] }) => {
  const today = new Date();
  const formattedDate = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;

  return (
    <div>
      <div className="mr-[1.6rem] h-[23rem] w-[35.6rem] rounded-[0.8rem] border-[0.05rem] border-[#D4D4D4] bg-white">
        <div className="flex h-[5rem] w-[35.6rem] items-center justify-between border-b-[0.05rem] border-[#D4D4D4] px-[2rem]">
          <p className=" text-[1.6rem] font-bold text-[#525252]">{title}</p>
          <span className="text-[1.2rem] font-normal text-[#A3A3A3]">작성일: {formattedDate}</span>
        </div>
        <div className="flex h-[16.4rem] w-[35.6rem] flex-col py-[1.6rem]">
          <p className="px-[2.4rem] text-[1.4rem] text-[#737373]">{content}</p>
          <div className="flex flex-col items-center">
            <div className="my-[1.6rem] flex h-[5.2rem] w-[32.4rem] flex-col justify-center rounded-[0.8rem] border-2 border-[#E5E5E5] px-[1.6rem]">
              <p className="text-[1.2rem] font-bold text-[#A3A3A3]">
                문항수: <span className="font-normal">30개</span>
              </p>
              <p className="text-[1.2rem] font-bold text-[#A3A3A3]">
                예상소요시간: <span className="font-normal">30분</span>
              </p>
            </div>
          </div>
          <div className="flex px-[1.6rem]">
            {tagList.map((tag, index) => (
              <div>
                <span
                  className={`px-[1.2rem] py-[0.4rem] ${colorList[index]} mr-[0.8rem] rounded-[1.2rem] text-[1.2rem] font-bold text-white`}
                >
                  #{tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
