import styled from "styled-components";

import { Add } from "styled-icons/material";

export const Container = styled.section`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;

  background-color: ${({ theme }) => theme.colors.components.secondary};
`;

export const Category = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase;

    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.gray};
  }
`;

export const AddCategory = styled(Add)`
  width: 21px;
  height: 21px;

  color: ${({ theme }) => theme.colors.alert.symbol};
  cursor: pointer;
`;
