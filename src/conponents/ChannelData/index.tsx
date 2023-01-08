import React from 'react';

import ChannelMessage from '../ChannelMessage';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';

const ChannelData : React.FC = () => {
  return (
    <Container>
      <Messages>
        <ChannelMessage 
          author='Eros Dog'
          date='08/01/2023'
          content='Hoje é sexta-feira'
        />
      </Messages>

      <Messages>
        <ChannelMessage 
          isBot
          hasMention
          author='Diego Ferreira'
          date='08/02/2023'
          content={
            <>
              <Mention>@Guilherme Rods</Mention>, me carrega no lol e cs de novo, por favor?
            </>
          }
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