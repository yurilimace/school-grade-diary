import styled from "styled-components";

export const MenuSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.margin.xl};
`;

export const MenuItemContent = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0px;
`;

export const MenuItemLabel = styled.span`
  margin-left: ${({ theme }) => theme.margin.xs};
  text-align: center;
`;

export const MenuItemContainer = styled.div<{ expand?: boolean }>`
  background-color: transparent;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: ${({ expand }) => (expand ? "start" : "center")};
  align-items: center;

  :hover {
    background-color: red;
  }

  ${MenuItemContent} {
    padding-left: ${({ expand }) => expand && "48px"};
  }
`;
