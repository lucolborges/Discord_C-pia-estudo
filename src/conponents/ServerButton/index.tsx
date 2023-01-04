import React from 'react';

import Logo from '../../assets/Logo.svg';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = (props : Props) => {
  return (
    <Button
      isHome={props.isHome}
      hasNotifications={props.hasNotifications}
      mentions={props.mentions}
      className={props.selected ? 'active' : ''}
    >
      {props.isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;