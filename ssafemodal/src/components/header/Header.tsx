import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea, HeaderLeft, Logo } from "./Header.element";

const Header = () => {
  return (
    <>
      <HeaderArea>
        <HeaderLeft>
          <Link to="/">
            <Logo>폼나는 싸패</Logo>
          </Link>
        </HeaderLeft>
      </HeaderArea>
    </>
  );
};

export default Header;
