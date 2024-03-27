import React, { createContext, useState } from "react";

interface IContext {
  state: { nickname: string };
  actions: {
    setNickname: (newNickname: string) => void;
  };
}

const NicknameContext = createContext<IContext>({
  state: { nickname: "" },
  actions: {
    setNickname: () => {},
  },
});

const NicknameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [nickname, setNickname] = useState("");

  const value: IContext = {
    state: { nickname },
    actions: {
      setNickname: (newNickname: string) => setNickname(newNickname),
    },
  };

  return (
    <NicknameContext.Provider value={value}>
      {children}
    </NicknameContext.Provider>
  );
};
export { NicknameProvider};

export default NicknameContext;
