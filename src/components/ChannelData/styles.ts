import styled from "styled-components";

//Icon
import { ExpandMore } from "styled-icons/material";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;

  box-shadow: ${({ theme }) => theme.colors.components.shadow} 0px 1px 0px 0px;
  z-index: 2;

  background-color: ${({ theme }) => theme.colors.components.secondary};
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text.white};
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: ${({ theme }) => theme.colors.text.white};
`;
