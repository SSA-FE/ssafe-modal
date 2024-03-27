import BaseHeader from "../../BaseComponents/BaseHeader";
import {
  MenuContainer,
  MySpaceContainer,
  TabContainer,
  WriteButton,
  TabButton,
  SearchBox,
  SearchButton,
  SearchText,
  SearchIcon,
  OrderButton,
  CardBox,
} from "./MySpace.element";
import { Card } from "../../components/card/Card";
import { BiSolidSearch } from "react-icons/bi";
import { IoCaretDownSharp } from "react-icons/io5";
import { useState } from "react";
import { Modal } from "../../components/modals/Modal";
import SurveyForm from "../../components/forms/SurveyForm";
import { ITag } from "../../components/forms/SurveyForm";
import dummy from "./dummy.json";

export interface ICard {
  id: string;
  title: string;
  body: string;
  tags: ITag[];
  date: Date;
}

const MySpace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickWriteBtn = () => {
    setIsModalOpen(true);
  };
  const [cards, setCards] = useState<ICard[]>([]);
  const addCard = (newCard: ICard) => {
    setCards([...cards, newCard]);
  };
  return (
    <>
      <BaseHeader HeaderLogo="마이스페이스 👨‍💻" />
      <MenuContainer>
        <WriteButton onClick={handleClickWriteBtn}>새 설문 만들기</WriteButton>
        <TabContainer>
          <TabButton>보관함</TabButton>
          <TabButton disabled={true}>참여한 설문</TabButton>
        </TabContainer>
      </MenuContainer>
      <MySpaceContainer>
        <SearchBox>
          <SearchButton>
            <SearchText>프로젝트를 검색하세요</SearchText>
            <SearchIcon>
              <BiSolidSearch />
            </SearchIcon>
          </SearchButton>
          <OrderButton>
            <SearchText>최근에 수정된 순서</SearchText>
            <SearchIcon>
              <IoCaretDownSharp />
            </SearchIcon>
          </OrderButton>
        </SearchBox>
        <CardBox>
          {dummy.map((card, idx) => {
            const modifiedCard = { ...card, date: new Date(card.date) };
            return <Card key={idx} card={modifiedCard} />;
          })}
          {cards.map((card, idx) => (
            <Card key={idx} card={card} />
          ))}
        </CardBox>
        {isModalOpen && (
          <Modal
            title="새로운 설문지를 작성합니다."
            subtitle="새로운 설문지를 작성하기 위한 설정입니다."
            setIsModalOpen={setIsModalOpen}
            form={
              <SurveyForm addCard={addCard} setIsModalOpen={setIsModalOpen} />
            }
          />
        )}
      </MySpaceContainer>
    </>
  );
};
export default MySpace;
