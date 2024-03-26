import React from 'react';

const Header = ({ headText, nickName }: { headText: string; nickName: string }) => {
  return (
    <header>
      <div className="fixed z-10 flex h-[5.6rem] w-full place-content-between items-center bg-white px-[3.2rem] text-[1.6rem] font-bold text-[#525252]">
        <span>{headText}</span>
        <span
          className={
            'h-[4rem] w-[4rem] rounded-full py-[1rem] text-center text-[1.4rem] font-bold text-white' +
            (nickName.length > 0 ? ' bg-[#F0AF32]' : ' bg-white')
          }
        >
          {nickName}
        </span>
      </div>
    </header>
  );
};

export default Header;
