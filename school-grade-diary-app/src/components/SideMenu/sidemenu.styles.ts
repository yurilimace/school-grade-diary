import styled, { css } from "styled-components";

export const SidemenuContainer = styled.div<{ startTransition?: boolean }>`
  width: 5%;
  border: 1px solid black;
  transition: width 0.3s linear 0.1s;

  ${({ startTransition }) =>
    startTransition &&
    css`
      width: 10%;
    `}
`;
