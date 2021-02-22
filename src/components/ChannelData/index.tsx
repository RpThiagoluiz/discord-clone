import { useRef, useEffect } from "react";

//Components
import ChannelMessage from "../ChannelMessage";

import {
  Container,
  Messages,
  InputWrapper,
  Input,
  InputIcon,
  Mention,
} from "./styles";

const ChannelData = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Anonimous"
          date="21/02/2121"
          content={
            <>
              <Mention>@WebDev Thiago</Mention>, WOW! nice bro.
            </>
          }
          hasMention
          isBot
        />
        {Array.from(Array(31).keys()).map((el) => (
          <ChannelMessage
            key={el}
            author="Bot Script"
            date="21/02/2021"
            content="Bot Is on BABY!"
          />
        ))}
        <ChannelMessage
          author="Thiago"
          date="21/02/2021"
          content="Finish it today!"
        />
        <ChannelMessage author="Chico" date="21/02/2021" content="Gratz !!!" />

        <ChannelMessage
          author="Tonha"
          date="21/02/2021"
          content="When will lunch be served?"
        />

        <ChannelMessage
          author="Anonimous"
          date="28/03/2121"
          content={
            <>
              <Mention>@WebDev Thiago</Mention>, WOW! nice bro.
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Bentinho"
          date="28/03/2121"
          content="What's up guys? What I lose?"
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Talk here... #Free-chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
