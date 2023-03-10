import styled, {css} from "styled-components";

import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;

  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0,0,0,.2) 0 1px 0 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  background-color: var(--gray);
  position: relative;

  &::after {
    content: '';

    width: 10px;
    height: 10px;

    background-color: red;

    border-radius: 50%;

    position: absolute;
    right: -1px;
    bottom: -1px;
  }
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 13px;
    color: var(--white);
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

const cssIcons = css`
    width:  20px;
  height: 20px;

  color: var(--white);
  opacity: .7;

  cursor: pointer;

  transition: opacity .2s;

  &:hover {
    opacity: 1;
  }
`;

export const MicIcons = styled(Mic)`${cssIcons}`;

export const HeadphoneIcon = styled(Headset)`${cssIcons}`;

export const SettingsIcon = styled(Settings)`${cssIcons}`;


