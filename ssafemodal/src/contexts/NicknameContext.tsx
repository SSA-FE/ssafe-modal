import React, { createContext, useState } from "react";

interface ContextType {
  state: { nickname: string };
  actions: {
    setNickname: (newNickname: string) => void;
  };
}

const NicknameContext = createContext<ContextType>({
  state: { nickname: "" },
  actions: {
    setNickname: () => {},
  },
});

const NicknameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [nickname, setNickname] = useState("");

  const value: ContextType = {
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

const { Consumer: NicknameConsumer } = NicknameContext;
export { NicknameProvider, NicknameConsumer };

export default NicknameContext;
