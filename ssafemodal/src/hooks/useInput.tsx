import { ChangeEvent, useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return [inputValue, handleChange] as const;
};

