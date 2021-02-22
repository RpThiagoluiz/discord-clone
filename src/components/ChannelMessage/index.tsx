import { Container, Avatar, Message, Header, Content } from "./styles";

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}: Props) => (
  <Container className={hasMention ? "mention" : ""}>
    <Avatar className={isBot ? "bot" : ""} />
    <Message>
      <Header>
        <strong>{author}</strong>
        {isBot && <span>Bot</span>}
        <time>{date}</time>
      </Header>
      <Content>{content}</Content>
    </Message>
  </Container>
);

export default ChannelMessage;
