import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ServerName = ({ channelName, selected }: Props) => (
  <Container className={selected ? "active" : ""}>
    <div>
      <HashtagIcon />
      <span>{channelName}</span>
    </div>
    <div>
      <InviteIcon />
      <SettingsIcon />
    </div>
  </Container>
);

export default ServerName;
