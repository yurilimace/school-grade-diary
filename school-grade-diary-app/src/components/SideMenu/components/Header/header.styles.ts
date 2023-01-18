import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  color: white;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.span`
  margin-right: ${({ theme }) => theme.margin.s};
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  border-radius: 15%;
  color: white;
  border: 1px solid white;
  opacity: 0.7;
  padding: ${({ theme }) => theme.padding.xs};
`;
