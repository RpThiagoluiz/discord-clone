import styled from "styled-components";

//avatar
import anonymousAvatar from "../../assets/avatar/anonymous.svg";

export const Container = styled.section`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background-color: ${({ theme }) => theme.colors.mentions.message};
    border-left: 2px solid ${({ theme }) => theme.colors.mentions.detail};
    padding-left: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;

export const Avatar = styled.section`
  width: 40px;
  height: 40px;

  border-radius: 50px;

  background: url(${anonymousAvatar});
  background-size: 28px 28px;
  background-repeat: no-repeat;
  background-position: center;

  background-color: ${({ theme }) => theme.colors.components.secondary};

  &.bot {
    background-color: ${({ theme }) => theme.colors.mentions.detail};
  }
`;

export const Message = styled.section`
  min-height: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 17px;
`;

export const Header = styled.section`
  display: flex;
  align-items: center;

  > strong {
    color: ${({ theme }) => theme.colors.text.white};
  }

  > span {
    margin-left: 6px;

    background-color: ${({ theme }) => theme.colors.alert.discord};
    color: ${({ theme }) => theme.colors.text.white};

    padding: 4px 5px;

    border-radius: 5px;

    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }

  > time {
    margin-left: 6px;
    color: ${({ theme }) => theme.colors.text.gray};
    font-size: 13px;
  }
`;

export const Content = styled.section`
  text-align: left;
  font-size: 16px;

  color: ${({ theme }) => theme.colors.text.white};
`;
