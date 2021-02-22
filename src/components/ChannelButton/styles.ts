import styled from "styled-components";

//Icons
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  cursor: pointer;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.components.senary};

    opacity: 0.7;
    transition: opacity 0.3s;
  }

  > div svg {
    display: none;
  }

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.components.quinary};
    > div span {
      color: ${({ theme }) => theme.colors.text.white};
      opacity: 1;
    }

    > div svg {
      display: flex;
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: ${({ theme }) => theme.colors.alert.symbol};
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: ${({ theme }) => theme.colors.alert.symbol};

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.white};
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: ${({ theme }) => theme.colors.alert.symbol};

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.white};
  }
`;
