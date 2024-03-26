import { useState } from 'react';
import Modal from '@components/Modal';
import Header from '@components/Header';

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('login');
  type form = { id: string; title: string; content: string; tagList: string[] };
  const [formData, setFormData] = useState<form>({id:'', title: '', content: '', tagList: [] });
  const receiveFormData = (data: form) => {
    setFormData(data);
    console.log('Received form data:', data);
  };
  //

  const showModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div>
      <Header headText={'폼나는 싸패'} nickName={''} />
      <div className="flex h-screen items-center justify-center">
        <div className="h-[45rem] text-center">
          <p className="mb-[1.6rem] text-[1.6rem] font-bold text-[#4B5563]">데이터 수집을 위한 올인원 툴</p>
          <h1 className="mb-[1.6rem] text-[4.8rem] font-bold text-black">
            폼을 만들고 분석하는
            <br />
            가장 합리적인 방법
          </h1>
          <p className="text-[1.8rem] text-[#1E293B]">
            폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
            <br />
            모든 핵심 과정을 왈라에서 한번에 해결하실 수 있습니다.
          </p>
          <button
            onClick={() => showModal(modalType)}
            className="mt-[9.7rem] h-[6.4rem] w-[32rem] rounded-[3.2rem] bg-[#6ED1F9] text-[2.4rem] font-bold text-white"
          >
            로그인
          </button>
        </div>
        {modalOpen && (
          <Modal
            modalType={modalType}
            setModalOpen={setModalOpen}
            formData={formData}
            receiveFormData={receiveFormData}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
