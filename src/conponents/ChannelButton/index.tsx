import React from 'react';

import {Container, HashTagIcon, InviteIcon, SettingIcon } from './styles';

export interface Props {
  channelName: string;
  selectec ?: boolean;
}

const ChannelButton: React.FC<Props> = ({channelName, selectec}) => {
  return (
    <Container className={selectec ? 'ative' : ''}>
      <div>
        <HashTagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;