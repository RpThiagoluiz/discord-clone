import styled from "styled-components";

//Icons
import { Mic, Headset, Settings } from "styled-icons/material";
//Avatar
import chicoAvatar from "../../assets/avatar/chico.jpg";

export const Container = styled.section`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: ${({ theme }) => theme.colors.components.quaternary};
  box-shadow: ${({ theme }) => theme.colors.components.shadow} 0px 1px 0px 0px;
`;

export const Profile = styled.section`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.section`
  width: 32px;
  height: 32px;

  border-radius: 50%;

  background: url(${chicoAvatar});
  background-size: contain;
`;

export const UserData = styled.section`
  margin-left: 8px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.white};
  }
  > span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.gray};
  }
`;

export const Icons = styled.section`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.text.white};
  opacity: 0.6;

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.text.white};
  opacity: 0.6;

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.text.white};
  opacity: 0.6;

  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
