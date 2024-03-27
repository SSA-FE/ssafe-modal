import {
  FormFooter,
  InputGroup,
  SurveyFormBlock,
  Tag,
  TagBox,
  TagInput,
} from "./SurveyForm.element";
import { ICard } from "../../pages/myspace/MySpace";
import { useInput } from "../../hooks/useInput";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import uuid from "react-uuid";
import { CompleteButton, CancelButton } from "./SurveyForm.element";
import { CARD_COLORS } from "../../palette";

interface ISurveyForm {
  addCard: (card: ICard) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITag {
  value: string;
  color: string;
}

const SurveyForm: React.FC<ISurveyForm> = ({ setIsModalOpen, addCard }) => {
  const title = useInput();
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<ITag[]>([]);
  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTagAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTag = {
        value: (e.target as HTMLInputElement).value,
        color: CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)],
      };
      setTags([...tags, newTag]);
      (e.target as HTMLInputElement).value = "";
    }
  };

  const handleCompleteBtn = () => {
    if (title && content) {
      const newCard = {
        id: uuid(),
        title: title.value,
        content: content,
        tags: tags,
        date: new Date(),
      };
      addCard(newCard);
      setIsModalOpen(false);
    }
    if (!title || !content) {
      //TODO: disable처리
      alert("제목과 본문을 채워주세요.");
    }
  };

  return (
    <>
      <SurveyFormBlock>
        <InputGroup>
          <label htmlFor="title">설문지 이름을 입력하세요.</label>
          <input id="title" name="title" onChange={title.onChange} />
        </InputGroup>
        <InputGroup>
          <label htmlFor="body">설문지 내용을 입력하세요.</label>
          <textarea id="body" name="body" onChange={handleBodyChange} />
        </InputGroup>
        <TagBox>
          {tags?.map((tag: ITag, idx: number) => (
            <Tag key={idx} color={tag.color}>
              {"#" + tag.value}
            </Tag>
          ))}
          <TagInput onKeyDown={handleTagAdd} placeholder="#태그입력" />
        </TagBox>
      </SurveyFormBlock>
      <FormFooter>
        <CancelButton onClick={() => setIsModalOpen(false)}>
          취소하기
        </CancelButton>
        <CompleteButton onClick={() => handleCompleteBtn()}>
          {"확인"}
        </CompleteButton>
      </FormFooter>
    </>
  );
};

export default SurveyForm;
