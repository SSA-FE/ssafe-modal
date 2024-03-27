import React, { SetStateAction, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyTag from '@components/SurveyTag';
import { v4 as uuidv4 } from 'uuid';

type form = { id: string; title: string; content: string; tagList: string[] };

const SurveyModal = ({
  setModalOpen,
  formData,
  handleFormData,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: form;
  handleFormData: (data: form) => void;
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  useEffect(() => {
    setTitle(formData.title);
    setContent(formData.content);
    setTagList(formData.tagList);
  }, []);
  const makeTag = () => {
    if (tag.trim() === '') {
      return;
    }
    const newTagList = [...tagList, tag];
    setTagList(newTagList);
    setTag('');
  };

  const handleOkBtn = () => {
    const key = uuidv4();
    const form = { id: key, title, content, tagList };
    handleFormData(form);
    setModalOpen(false);
  };
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="border-black-500 relative flex h-[52.5rem] w-[67.2rem] flex-col rounded-md border-2 border-solid bg-white">
          <button
            className="absolute right-12 top-10 text-[2.5rem] font-bold"
            onClick={() => setModalOpen((prev) => !prev)}
          >
            X
          </button>
          <h1 className="ps-[4.5rem] pt-[3.2rem] text-[2rem] font-bold">새로운 설문지를 작성합니다.</h1>
          <h3 className="ps-[4.5rem] text-[1.4rem] text-gray-600">새로운 설문지를 만들기 위한 설정입니다.</h3>
          <div className="border-black-500 mx-auto mt-[2.4rem] flex h-[33.6rem] w-[60.8rem] flex-col rounded-md border-2 border-solid bg-[#FAFAFA]">
            <label htmlFor="surveyTitle" className="ms-[1.6rem] mt-[1.6rem] text-[1.4rem]">
              설문지 이름을 입력하세요
            </label>
            <input
              id="surveyTitle"
              className="border-black-500 mx-auto mt-[0.8rem] h-[3.2rem] w-[57.6rem] rounded-md border-2 border-solid bg-[#F5F5F5]"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              maxLength={22}
              value={title}
            ></input>
            <label htmlFor="surveyContent" className="ms-[1.6rem] mt-[3.2rem] text-[1.4rem]">
              설문지 설명을 입력하세요
            </label>
            <textarea
              id="surveyContent"
              className="border-black-500 mx-auto mt-[0.8rem] h-[9.6rem] w-[57.6rem] rounded-md border-2 border-solid bg-[#F5F5F5]"
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              value={content}
            ></textarea>
            <div className="mx-auto mt-[3.2rem] flex h-[3.2rem] w-[57.6rem] flex-row justify-start">
              {tagList.map((tag, index) => (
                <SurveyTag tagText={tag} idx={index}></SurveyTag>
              ))}
              <input
                className={`grid h-[3.2rem] w-[10rem] place-items-center rounded-md bg-[#D4D4D4] text-center text-[1.2rem] font-bold text-white ${tagList.length > 4 ? 'hidden' : ''}`}
                onChange={(e) => setTag(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') makeTag();
                }}
                maxLength={6}
                placeholder="#태그입력"
                value={tag}
              />
            </div>
          </div>
          <button
            className="border-black-600/100 absolute bottom-10 right-12 mt-[3.2rem] h-[3rem] w-[4rem] rounded-md border-2 border-solid text-[1.4rem] font-bold"
            onClick={handleOkBtn}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyModal;
