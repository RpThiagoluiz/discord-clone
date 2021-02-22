import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon,
} from "./styles";

const UserInfo = () => (
  <Container>
    <Profile>
      <Avatar />
      <UserData>
        <strong>WebDev Thiago</strong>
        <span>#4609</span>
      </UserData>
    </Profile>
    <Icons>
      <MicIcon />
      <HeadphoneIcon />
      <SettingsIcon />
    </Icons>
  </Container>
);

export default UserInfo;
