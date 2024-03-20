import styled, { css } from "styled-components";

export const MenuContainer = styled.div`
  margin: 70px 10px 0px 10px;
  padding: 0px 20px;
`;

export const TabContainer = styled.div`
  height: 36px;
`;

export const TabButton = styled.button`
  height: 100%;
  font-size: 14px;
  background-color: white;
  padding: 8px 24px;
  border: none;
  ${(props) =>
    !props.disabled &&
    css`
      border-bottom: 3px solid black;
    `}
`;

export const WriteButton = styled.button`
  width: 132px;
  height: 36px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  border-color: transparent;
  color: white;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MySpaceContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
  height: 100vh;
  background-color: #f5f6f7;
`;

export const SearchBox = styled.div`
  height: 24px;
  display: flex;
  text-align: center;
  margin-bottom: 32px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 8px 20px 8px 20px;
  margin-right: 10px;
  border-radius: 30px;
  border: 1px solid #e5e5e5;
  background-color: white;
  color: #a3a3a3;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

export const SearchButton = styled(Button)`
  min-width: 170px;
`;

export const OrderButton = styled(Button)`
  min-width: 130px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
