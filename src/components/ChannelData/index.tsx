import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData = () => (
  <Container>
    <Messages />
    <InputWrapper>
      <Input type="text" placeholder="Talk here... # free-chat" />
      <InputIcon />
    </InputWrapper>
  </Container>
);

export default ChannelData;
