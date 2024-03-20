import {
  InputGroup,
  SurveyFormBlock,
  Tag,
  TagBox,
  TagInput,
} from "./SurveyForm.element";
import { KeyboardEvent } from "react";
import { ICard } from "../MySpace";
import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { ChangeEvent } from "react";
import uuid from "react-uuid";
import { ModalFooter,ModalFooterCancel,ModalFooterConfirm } from "./SurveyForm.element";
interface ISurveyFormType {
  addCard: (card:ICard) => void;
  setIsModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITag{
  value: string,
  color: string
}


const SurveyForm: React.FC<ISurveyFormType> = ({
  setIsModalOpen,
  addCard
}) => {
  const colors = ["#F04D1D","#A75EFF","#1EBDFE","#0DCF85"];
  const [title, handleTitleChange] = useInput();
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<ITag[]>([]);
  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleTagAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTag = {value:(e.target as HTMLInputElement).value, color:colors[Math.floor(Math.random()*colors.length)]}
      setTags([...tags, newTag]);
    }
  };

  const handleCompleteBtn = () => {
    const newCard = {
      id:uuid(),
      title:title,
      body:body,
      tags:tags,
      date:new Date(),
    }
    addCard(newCard);
    setIsModalOpen(false);
  };
  

  return (
    <>
    <SurveyFormBlock>
      <InputGroup>
        <label htmlFor="title">설문지 이름을 입력하세요.</label>
        <input id="title" name="title" onChange={handleTitleChange} />
      </InputGroup>
      <InputGroup>
        <label htmlFor="body">설문지 내용을 입력하세요.</label>
        <textarea id="body" name="body" onChange={handleBodyChange} />
      </InputGroup>
      <TagBox>
        {tags?.map((tag: ITag, idx: number) => (
          <Tag key={idx} color={tag.color}> {"#" + tag.value} </Tag>
        ))}
        <TagInput onKeyDown={handleTagAdd} placeholder="#태그입력" />
      </TagBox>
    </SurveyFormBlock>
      <ModalFooter>
      <ModalFooterCancel onClick={()=>setIsModalOpen(false)}>
        {"취소하기"}
      </ModalFooterCancel>
      <ModalFooterConfirm onClick={()=>handleCompleteBtn()}>{"확인"}</ModalFooterConfirm>
    </ModalFooter>
    </>
  );
};

export default SurveyForm;



// const SurveyForm: React.FC<ISurveyFormType> = ({
//   handleTitleChange,
//   handleBodyChange,
//   tags,
//   setTags,
//   addCard
// }) => {
//   const handleTagAdd = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       setTags([...tags, (e.target as HTMLInputElement).value]);
//     }
//   };

//   return (
//     <SurveyFormBlock>
//       <InputGroup>
//         <label htmlFor="title">설문지 이름을 입력하세요.</label>
//         <input id="title" name="title" onChange={handleTitleChange} />
//       </InputGroup>
//       <InputGroup>
//         <label htmlFor="body">설문지 내용을 입력하세요.</label>
//         <textarea id="body" name="body" onChange={handleBodyChange} />
//       </InputGroup>
//       <ul>
//         {tags?.map((tag: string, idx: number) => (
//           <Tag key={idx}> {"#" + tag} </Tag>
//         ))}
//         <TagInput onKeyDown={handleTagAdd} placeholder="#태그입력" />
//       </ul>
//     </SurveyFormBlock>
//   );
// };

// export default SurveyForm;
