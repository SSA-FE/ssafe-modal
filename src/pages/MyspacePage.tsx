import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@components/Header';
import Card from '@components/Card';
import SearchSVG from '@assets/search.svg?react';
import ArrowSVG from '@assets/arrow.svg?react';
import useModal from '@/hooks/useModal';
import SurveyModal from '@/components/SurveyModal';
type form = { id: string; title: string; content: string; tagList: string[] };

const MyspacePage = () => {
  const [surveyDataList, setSurveyDataList] = useState<form[]>([]);
  const location = useLocation();
  const nickName = location.state ? location.state.nickName : '';
  const { modalType, modalOpen, openModal, closeModal, formData, handleFormData } = useModal();
  useEffect(() => {
    if (formData.id !== '') {
      let updatedList = [...surveyDataList];
      let found = false;
      updatedList.forEach((element, index) => {
        if (element.id === formData.id) {
          updatedList[index] = formData;
          found = true;
        }
      });
      if (!found) {
        updatedList.push(formData);
      }
      setSurveyDataList(updatedList);
    }
  }, [formData, surveyDataList]);

  return (
    <div className="h-screen w-full bg-[#FAFAFA]">
      <Header headText={'마이스페이스 💌'} nickName={`${nickName[0]}`} />
      <div className="relative top-[5.6rem] h-[8rem] border-b border-[#E5E5E5] bg-white px-[3.2rem]">
        <button
          onClick={() =>
            openModal('survey', {
              id: '',
              title: '',
              content: '',
              tagList: [],
            })
          }
          className="mb-[0.78rem] h-[3.6rem] w-[13.2rem] rounded-[0.4rem] bg-[#262626] text-[1.4rem] font-bold text-white opacity-20 hover:opacity-100"
        >
          새 설문 만들기
        </button>
        <div>
          <button className="mr-[1.6rem] h-[3.6rem] w-[8.7rem] border-b-2 border-[#262626] text-[1.4rem] font-bold text-[#262626]">
            보관함
          </button>
          <button className="h-[3.6rem] w-[11.6rem] text-[1.4rem] font-bold text-[#A3A3A3] ">참여한 설문</button>
        </div>
      </div>
      <div className="relative top-[9rem] mb-[3.2rem] flex px-[3.2rem]">
        <div className="mr-[1.6rem] flex h-[3.6rem] w-[21.7rem] items-center justify-center rounded-[1.8rem] border border-[#E5E5E5] bg-white">
          <span className="mr-[3.2rem] text-[1.4rem] font-bold text-[#A3A3A3]">프로젝트를 검색하세요</span>
          <SearchSVG />
        </div>
        <div className="flex h-[3.6rem] w-[17.9rem] items-center justify-center rounded-[1.8rem] border border-[#E5E5E5] bg-white">
          <span className="mr-[1.6rem] text-[1.4rem] font-bold text-[#A3A3A3]">최근에 수정된 순서</span>
          <ArrowSVG />
        </div>
      </div>
      <div className="px-[3.2rem]">
        <div className="relative top-[9rem] grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
          {surveyDataList.map((data) => (
            <Card
              key={data.id}
              formData={data}
              onClick={() =>
                openModal('survey', {
                  id: data.id,
                  title: data.title,
                  content: data.content,
                  tagList: data.tagList,
                })
              }
            />
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay">
          {modalType === 'survey' && (
            <SurveyModal setModalOpen={closeModal} formData={formData} handleFormData={handleFormData} />
          )}
        </div>
      )}
    </div>
  );
};

export default MyspacePage;
