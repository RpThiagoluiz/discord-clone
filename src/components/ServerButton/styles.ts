import styled from "styled-components";

//Button interface Props
import { ButtonProps } from ".";

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  //Button not will be squeezed
  flex-shrink: 0;

  width: 48px;
  height: 48px;

  position: relative;

  background-color: ${({ isHome, theme }) =>
    isHome ? theme.colors.homeSelect : theme.colors.components.primary};

  margin-bottom: 8px;

  border-radius: 50%;

  opacity: 0.8;
  transition: all 0.2s ease-in-out;

  > img {
    width: 36px;
    height: 36px;
  }

  &::before {
    content: "";
    width: 9px;
    height: 9px;

    display: ${({ hasNotifications }) =>
      hasNotifications ? "inline" : "none"};

    position: absolute;
    left: -17px;
    top: calc(50% -4.5px);

    background-color: ${({ theme }) => theme.colors.alert.notification};
    border-radius: 50%;
  }
  &::after {
    content: "${({ mentions }) => mentions && mentions}";
    width: auto;
    height: 16px;

    display: ${({ mentions }) =>
      mentions && mentions > 0 ? "inline" : "none"};

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    background-color: ${({ theme }) => theme.colors.mentions.color};

    border-radius: 12px;
    border: 4px solid ${({ theme }) => theme.colors.components.quaternary};

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text.white};
  }

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${({ isHome, theme }) =>
      isHome ? theme.colors.homeSelect : theme.colors.alert.discord};

    opacity: 1;
  }
`;
