import React from "react";
import { FaHome } from "react-icons/fa";
import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemLabel,
  MenuSectionContainer,
} from "./menuSection.styles";

interface MenuSectionProps {
  startTransition: boolean;
  options: Array<{ label: string; icon: JSX.Element }>;
}

export const MenuSection = ({ startTransition, options }: MenuSectionProps) => {
  return (
    <MenuSectionContainer>
      {options.map((option) => (
        <MenuItemContainer>
          <MenuItemContainer expand={startTransition}>
            <MenuItemContent>
              {option.icon}
              {startTransition && (
                <MenuItemLabel> {option.label} </MenuItemLabel>
              )}
            </MenuItemContent>
          </MenuItemContainer>
        </MenuItemContainer>
      ))}
    </MenuSectionContainer>
  );
};
