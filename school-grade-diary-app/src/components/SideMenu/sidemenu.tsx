import React, { useState } from "react";
import {
  ButtonMenu,
  SidemenuContainer,
  SideMenuContentContainer,
  SideMenuContentItem,
  SideMenuHeader,
} from "./sidemenu.styles";
import { FaCircle, FaPlus, FaMinus, FaHome } from "react-icons/fa";
import { Header } from "./components/Header/header";
import { MenuSection } from "./components/MenuSection/menuSection";
export const SideMenu = () => {
  const [startTransition, setStartTransition] = useState(false);
  const menu = [
    {
      label: "Home",
      icon: <FaHome size={25} />,
    },
    {
      label: "Turmas",
      icon: <FaHome size={25} />,
    },
  ];
  return (
    <SidemenuContainer startTransition={startTransition}>
      <Header
        startTransition={startTransition}
        setStartTransition={setStartTransition}
      />
      <MenuSection startTransition={startTransition} options={menu} />

      {/* <SideMenuHeader>
        <SideMenuContentItem
          onClick={() => setStartTransition((prevState) => !prevState)}
        >
          {startTransition ? <FaMinus /> : <FaPlus />}
        </SideMenuContentItem>
      </SideMenuHeader> */}

      {/*
      <SideMenuContentContainer>
        <SideMenuContentItem startTransition={startTransition}>
          <FaHome size={20} />
          <span> Home </span>
        </SideMenuContentItem>
        <SideMenuContentItem startTransition={startTransition}>
          <FaHome size={20} />
          <span> Home </span>
        </SideMenuContentItem>
        <SideMenuContentItem startTransition={startTransition}>
          <FaHome size={20} />
          <span> Home </span>
        </SideMenuContentItem>
        <SideMenuContentItem startTransition={startTransition}>
          <FaHome size={20} />
          <span> Home </span>
        </SideMenuContentItem>
      </SideMenuContentContainer> */}
    </SidemenuContainer>
  );
};
