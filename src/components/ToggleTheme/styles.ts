import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ToggleLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.white};
`;

//props do styled components
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.alert.discord,
    offColor: theme.colors.mentions.detail,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
