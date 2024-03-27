import React, { SetStateAction, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginModal = ({ setModalOpen }: { setModalOpen: React.Dispatch<SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState('');
  const [nickNameError, setNickNameError] = useState(false);
  useEffect(() => {
    checkNickName();
  }, [nickName]);
  const handleNextBtn = () => {
    if (nickNameError) {
      setModalOpen((prev) => !prev);
      navigate('/myspace', { state: { nickName: nickName } });
    } else {
      alert('닉네임이 이상해요');
    }
  };
  const checkNickName = () => {
    if (nickName.length < 4) {
      setNickNameError(false);
    } else {
      setNickNameError(true);
    }
  };

  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="border-black-500 relative flex h-[23rem] w-[48rem] flex-col rounded-md border-2 border-solid bg-white">
          <h1 className="ps-[3.2rem] pt-[3.2rem] text-[2rem] font-bold">닉네임을 입력하세요</h1>
          <button
            className="absolute right-3 top-0 text-[2rem] font-bold"
            onClick={() => setModalOpen((prev) => !prev)}
          >
            X
          </button>
          <h3 className={`ps-[3.2rem] text-[1.4rem] text-orange-600 ${nickNameError ? 'invisible' : ''}`}>
            ⓘ 닉네임은 최소 네 글자 이상이어야 합니다.
          </h3>
          <input
            className="mx-auto mt-[3.2rem] h-[3.2rem] w-[41.6rem] rounded-md bg-[#F5F5F5]"
            placeholder="닉네임을 입력하세요"
            onChange={(e) => setNickName(e.target.value)}
          ></input>
          <button
            className="border-black-600/100 absolute bottom-2 right-3 mt-[3.2rem] h-[3rem] w-[4rem] border-2 border-solid text-[1.4rem] font-bold"
            onClick={handleNextBtn}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
