import styled from "styled-components";

export const Container = styled.section`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.components.tertiary};
  padding: 11px 0;

  max-height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.components.quaternary};

  margin-bottom: 8px;
`;
