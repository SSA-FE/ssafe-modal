import { ChangeEvent, useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const inputProps = {
    value: inputValue,
    onChange: onChange,
  };

  return inputProps;
};
