import styled from "styled-components";

export const HeaderArea = styled.div`
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
  border:none;
  background-color: white;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.div`
  width: flex;
  height: flex;
  margin: 10px 30px;
  color: #263238;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  text-decoration: none;
  /* &: Link; */
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
