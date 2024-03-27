import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 480px;

  background-color: white;
  padding: 32px;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  h2 {
    line-height: 28px;
    font-size: 20px;
    margin: 0;
  }
  span {
    color: orange;
    font-size: 14px;
  }
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  input {
    width: 100%;
    background-color: #f5f5f5;
    border: none;
    border-radius: 8px;
    height: 30px;
  }
`;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    height: 20px;
  }
`;

export const CompleteButton = styled.button`
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  font-weight: 800;
`;

export const CancelButton = styled.button`
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  color: grey;
`;
