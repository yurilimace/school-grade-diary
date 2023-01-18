import styled, { css } from "styled-components";

export const SidemenuContainer = styled.div<{ startTransition?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 5%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  transition: width 0.3s linear 0.1s;
  padding-top: ${({ theme }) => theme.padding.xl};
  background-color: ${({ theme }) => theme.color.primary};
  justify-content: start;

  ${({ startTransition }) =>
    startTransition &&
    css`
      width: 15%;
    `};
`;

export const SideMenuHeader = styled.div`
  display: flex;
  width: 100%;
  color: white;
  align-items: center;
`;

export const SideMenuContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.margin.l};
  border: 1px solid red;
`;

export const SideMenuContentItem = styled.button<{ startTransition?: boolean }>`
  background-color: transparent;
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  text-align: start;
  border-color: transparent;
  opacity: 0.7;
  padding: ${({ theme }) => theme.padding.xs} ${({ theme }) => theme.padding.m};
  cursor: pointer;

  :hover {
    background-color: red;
  }

  & span {
    margin-left: ${({ theme }) => theme.margin.xs};
    transition: visibility 0.1s linear 0.1s;
  }
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border-radius: 15%;
  color: white;
  border: 1px solid white;
  opacity: 0.7;
  padding: ${({ theme }) => theme.padding.xs};
`;
