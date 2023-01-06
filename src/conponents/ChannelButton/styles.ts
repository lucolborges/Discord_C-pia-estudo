import styled, {css} from "styled-components";

import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  
  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;
  
  transition: background-color .2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    font-size: 15px;
    color: var(--senary);
    margin-left: 5px;
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

    & div + div {
      display: inline;
    }

  }

  & div + div {
    display: none;
  }
  
`;

export const HashTagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

const iconCss = css`
    width: 16px;
  height: 16px;
  
  color: var(--symbol);
  cursor: pointer;

  margin-left: 4px;

  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;


export const InviteIcon = styled(PersonAdd)`
  ${iconCss}
`;

export const SettingIcon  = styled(Settings)`
  ${iconCss}
`;
