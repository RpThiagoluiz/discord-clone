import styled from "styled-components";

//Avatar
import anonymousAvatar from "../../assets/avatar/anonymous.svg";

export const Container = styled.section`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;

  background-color: ${({ theme }) => theme.colors.components.secondary};

  max-height: calc(100vh - 46px);

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

export const Role = styled.div`
  margin-top: 20px;

  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.gray};
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;

  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: 13px;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.text.white};
    opacity: 0.7;

    /*  '...' when text pass  */

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;

    background-color: ${({ theme }) => theme.colors.alert.discord};
    color: ${({ theme }) => theme.colors.text.white};

    padding: 4px 5px;
    border-radius: 4px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  border-radius: 50px;

  background: url(${anonymousAvatar});
  background-color: ${({ theme }) => theme.colors.components.primary};

  &.bot {
    background-color: ${({ theme }) => theme.colors.mentions.detail};
  }
`;
