import Header from '@components/Header';
import LoginModal from '@/components/LoginModal';
import useModal from '@/hooks/useModal';
const HomePage = () => {
  const { modalType, modalOpen, openModal, closeModal } = useModal();
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
            onClick={() => openModal('login')}
            className="mt-[9.7rem] h-[6.4rem] w-[32rem] rounded-[3.2rem] bg-[#6ED1F9] text-[2.4rem] font-bold text-white"
          >
            로그인
          </button>
        </div>
        {modalOpen && (
          <div className="modal-overlay">{modalType === 'login' && <LoginModal setModalOpen={closeModal} />}</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
