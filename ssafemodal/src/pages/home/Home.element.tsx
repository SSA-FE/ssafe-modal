import styled from "styled-components";

export const Container = styled.div`
  font-family: "Noto Sans KR";
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  margin: 50px 0px;
`;

export const SubTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 20px;
`;

export const SignupButton = styled.button`
  width: 260px;
  height: 50px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #81d4fa;
  border-radius: 50px;
  border-color: transparent;
  cursor: pointer;
`;
