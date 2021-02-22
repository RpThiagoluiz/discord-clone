import styled from "styled-components";

//Icon
import { Hashtag } from "styled-icons/heroicons-outline";

export const Container = styled.section`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;
  background-color: ${({ theme }) => theme.colors.components.primary};

  box-shadow: ${({ theme }) => theme.colors.components.shadow} 0px 1px 0px 0px;
  z-index: 2;
`;
export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: ${({ theme }) => theme.colors.alert.symbol};
`;
export const Title = styled.h1`
  margin-left: 9px;

  font-size: 16px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.text.white};
`;

export const Separador = styled.div`
  height: 24px;
  width: 1px;

  margin: 0 13px;

  background-color: ${({ theme }) => theme.colors.alert.symbol};
  opacity: 0.2;
`;

export const Description = styled.span`
  font-size: 15px;

  color: ${({ theme }) => theme.colors.text.gray};
`;
