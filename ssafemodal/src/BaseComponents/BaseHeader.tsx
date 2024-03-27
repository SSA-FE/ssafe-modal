import { HeaderArea, Logo, Profile } from "../components/header/Header.element";
import { NicknameConsumer } from "../contexts/NicknameContext";

type Props = {
  HeaderLogo?: string;
};

const BaseHeader = ({ HeaderLogo }: Props) => {
  return (
    <>
      <HeaderArea>
        <Logo>{HeaderLogo}</Logo>
        <NicknameConsumer>
          {({ state }: { state: { nickname: string } }) => {
            return state.nickname && <Profile>{state.nickname}</Profile>;
          }}
        </NicknameConsumer>
      </HeaderArea>
    </>
  );
};

export default BaseHeader;
