import React from "react";
import { Link } from "react-router-dom";
import { HeaderArea, Logo } from "./Header.element";

const Header = () => {
  return (
    <>
      <HeaderArea>
        <Link to="/">
          <Logo>폼나는 싸패</Logo>
        </Link>
      </HeaderArea>
    </>
  );
};

export default Header;
