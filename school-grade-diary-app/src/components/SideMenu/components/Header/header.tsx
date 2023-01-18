import React, { Dispatch, SetStateAction } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { HeaderButton, HeaderContainer, HeaderTitle } from "./header.styles";

interface HeaderProps {
  startTransition: boolean;
  setStartTransition: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({
  startTransition,
  setStartTransition,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      {startTransition && <HeaderTitle> Untitled project </HeaderTitle>}
      <HeaderButton
        onClick={() => setStartTransition((prevState) => !prevState)}
      >
        {startTransition ? <FaMinus /> : <FaPlus />}
      </HeaderButton>
    </HeaderContainer>
  );
};
