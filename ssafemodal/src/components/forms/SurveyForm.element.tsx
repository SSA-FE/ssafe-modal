import styled from "styled-components";

interface TagInputProps {
  color: string;
}

export const SurveyFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #fafafa;
  padding: 16px 32px 16px 16px;

  border-radius: 8px;
`;
export const TagBox = styled.div`
  display: flex;
  flex-direction: row;
  /* overflow-x:scroll; */
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 16px;
    line-height: 24px;
  }

  input,
  textarea {
    width: 100%;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
  }

  input {
    height: 32px;
  }

  textarea {
    height: 96px;
    resize: none;
  }
`;

export const Tag = styled.li<TagInputProps>`
  display: inline-block;
  height: 32px;
  padding: 0px 24px;
  font-size: 12px;
  color: white;
  background-color: ${(props) => props.color};
  line-height: 32px;
  margin-right: 10px;
  font-weight: 700;
  border-radius: 4px;
`;

export const TagInput = styled.input`
  max-width: 100px; //왜 width: 100px은 되지 않는거지?
  height: 32px;
  padding: 0px 24px;

  color: black;
  line-height: 32px;
  font-weight: 700;

  border: none;
  outline: none;
  background-color: #f5f5f5;
  border-radius: 4px;

  &::placeholder {
    color: black;
    font-weight: 700;
  }
`;

export const ModalButton = styled.button`
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalFooterCancel = styled(ModalButton)`
  color: grey;
`;

export const ModalFooterConfirm = styled(ModalButton)`
  color: black;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
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
