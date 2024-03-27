import styled from "styled-components";

export const HeaderArea = styled.div`
  font-family: "Noto Sans KR";
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  padding: 8px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-width: 0px 0px 1.5px 0px;
  border-bottom-color: #e0e0e0;
`;

export const Logo = styled.div`
  margin: 10px;
  color: #263238;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  border-radius: 10px;
  text-decoration: none;
`;

export const Profile = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f0af32;
  color: white;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
`;
