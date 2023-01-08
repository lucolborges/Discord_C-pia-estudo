import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';

const ChannelData : React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;
    if(div){
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef]);

  return (
    <Container>
      <Messages ref={messageRef}>

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
          author='Eros Dog'
          date='08/01/2023'
          content='Hoje é sexta-feira'        
        />
        ))}

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