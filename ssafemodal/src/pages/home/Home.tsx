import BaseHeader from "../../BaseComponents/BaseHeader";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TextBoard,
  SubTitle,
  Title,
  Description,
  SignupButton,
} from "./Home.element";

import { Modal } from "../../components/modals/Modal";
import { LoginForm } from "../../components/forms/LoginForm";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickLoginBtn = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <BaseHeader HeaderLogo="폼나는싸패" />
      <Container>
        <TextBoard>
          <SubTitle>데이터 수집을 위한 올인원 툴</SubTitle>
          <Title>
            폼을 만들고 분석하는
            <br />
            가장 합리적인 방법
          </Title>
          <Description>
            폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
            <br />
            모든 핵심 과정을 폼나는싸패에서 한번에 해결하실 수 있습니다. branch
            test
          </Description>
        </TextBoard>
        <SignupButton onClick={handleClickLoginBtn}>로그인</SignupButton>
        <Link to="/mySpace">
          <SignupButton>Move to MySpace</SignupButton>
        </Link>
        {isModalOpen && (
          <Modal
            title={"닉네임을 입력하세요."}
            subtitle={"닉네임은 최소 4글자 이상이어야 합니다."}
            setIsModalOpen={setIsModalOpen}
            form={<LoginForm />}
          />
        )}
      </Container>
    </>
  );
};

export default Home;
