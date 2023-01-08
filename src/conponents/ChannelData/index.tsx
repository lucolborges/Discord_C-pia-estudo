import React from 'react';

import ChannelMessage from '../ChannelMessage';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';

const ChannelData : React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage 
          isBot
          hasMention
          author='Eros Dog'
          date='08/01/2023'
          content='Hoje é sexta-feira'
        />
      </Messages>
      
      <InputWrapper>
        <Input placeholder='Conversarem #chat-livre' type="text"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData ;