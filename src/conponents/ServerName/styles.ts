import styled from "styled-components";

import { ExpandMore } from '@styled-icons/material';

export const Container = styled.div`
  grid-area: SN;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 16px;
  background: var(--secondary);

  box-shadow: rgba(0,0,0,.2) 0 px 1px 0 0;
  z-index: 2;
  
`;
export const Title = styled.h1`
  font-weight: bold;
  font-size: 16px;
  color: var(--white);
`;

export const ExpandIcon= styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: var(--white);
  cursor: pointer;
`;