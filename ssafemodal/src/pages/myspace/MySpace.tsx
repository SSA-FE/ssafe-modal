import BaseHeader from "../../components/header/Header";
import {
  MenuContainer,
  MySpaceContainer,
  TabContainer,
  WriteButton,
  TabButton,
  SearchBox,
  SearchButton,
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
import dummy from "../../dummy.json";
import { useModal } from "../../hooks/useModal";
import { Modalv2 } from "../../components/modals/Modalv2";

export interface ICard {
  id: string;
  title: string;
  content: string;
  tags: ITag[];
  date: Date;
}

const MySpace = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const handleClickWriteBtn = () => {
    // setIsModalOpen(true);
    openModal();
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
            프로젝트를 검색하세요
            <BiSolidSearch />
          </SearchButton>
          <OrderButton>
            최근에 수정된 순서
            <IoCaretDownSharp />
          </OrderButton>
        </SearchBox>
        <CardBox>
          {dummy.map((card) => {
            const modifiedCard = { ...card, date: new Date(card.date) };
            return <Card key={card.id} card={modifiedCard} />;
          })}
          {cards.map((card, idx) => (
            <Card key={card.id} card={card} />
          ))}
        </CardBox>
        {/* {isModalOpen && (
          <Modal
            title="새로운 설문지를 작성합니다."
            subtitle="새로운 설문지를 작성하기 위한 설정입니다."
            setIsModalOpen={setIsModalOpen}
            form={<SurveyForm addCard={addCard} setIsModalOpen={openModal} />}
          />
        )} */}
        {/* {isModalOpen && (
          <Modalv2 type="SURVEY" closeModal={closeModal}></Modalv2>
        )} */}
      </MySpaceContainer>
    </>
  );
};
export default MySpace;
