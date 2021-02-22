import styled from "styled-components";

//Icons
import { AlternateEmail } from "styled-icons/material";

export const Container = styled.section`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.components.primary};
`;

export const Messages = styled.section`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.components.tertiary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.components.secondary};
  }
`;

export const InputWrapper = styled.section`
  width: 100%;

  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  border-radius: 7px;

  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.alert.chatInput};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.gray};
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;

    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;

  color: ${({ theme }) => theme.colors.text.gray};
`;
