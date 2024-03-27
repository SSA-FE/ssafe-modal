import { useContext } from "react";
import { HeaderArea, HeaderLeft, HeaderRight, Logo, Profile } from "./Header.element";
import NicknameContext from "../../contexts/NicknameContext";

type Props = {
  HeaderLogo?: string;
};

const Header = ({ HeaderLogo }: Props) => {
  const {state} = useContext(NicknameContext);
  return (
    <>
      <HeaderArea>
        <HeaderLeft>
        <Logo>{HeaderLogo}</Logo>
        </HeaderLeft>
        <HeaderRight>
        {state.nickname && <Profile>{state.nickname}</Profile>}    
        </HeaderRight>
      </HeaderArea>
    </>
  );
};

export default Header;
