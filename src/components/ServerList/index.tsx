//Components
import ServerButton from "../ServerButton";

//Styles
import { Container, Separator } from "./styles";

const ServerList = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={96} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={28} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={6} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={2} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
    </Container>
  );
};

export default ServerList;
