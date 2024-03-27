import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { CompleteButton, FormFooter } from "./LoginForm.element";
import { useContext } from "react";
import NicknameContext from "../../contexts/NicknameContext";

export const LoginForm = () => {
  const navigate = useNavigate();
  const nickname = useInput();
  const { actions } = useContext(NicknameContext);

  const handleCompleteBtn = () => {
    navigate("/mySpace");
    actions.setNickname(nickname.value[0]);
  };

  return (
    <>
      <input onChange={nickname.onChange} maxLength={10} minLength={4} />
      <FormFooter>
        <CompleteButton
          onClick={handleCompleteBtn}
          disabled={nickname.value.length < 4}
        >
          확인
        </CompleteButton>
      </FormFooter>
    </>
  );
};
