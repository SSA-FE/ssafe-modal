import styled from "styled-components";

export const CardBlock = styled.div`
  width: 356px;
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  background-color: white;
  margin: 0px 20px 20px 0px;
`;

export const CardHeader = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d4d4d4;
  border-width: 0 0 1px;
`;
export const CardTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #525252;
`;
export const CardDate = styled.div`
  font-size: 12px;
  color: #a3a3a3;
`;
export const CardContents = styled.div`
  padding: 20px;
`;
export const Question = styled.div`
  color: #737373;
  font-size: 14px;
`;
export const QuestionInfo = styled.div`
  color: #a3a3a3;
  font-size: 12px;
  margin: 20px 0px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d4d4d4;
`;
export const CardTagBox = styled.div`
  display: flex;
  overflow: hidden;
`;
export const CardTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12px;
  margin: 0px 10px 0px 0px;
  padding: 10px 15px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #c5cae9;
`;
