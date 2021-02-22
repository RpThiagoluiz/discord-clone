//Components
import ChannelButton from "../ChannelButton";

//Styles
import { Container, Category, AddCategory } from "./styles";

const ChannelList = () => (
  <Container>
    <Category>
      <span>Text Channel</span>
      <AddCategory />
    </Category>

    <ChannelButton channelName="chat-free" />
    <ChannelButton channelName="Jobs" />
    <ChannelButton channelName="COD WarZone" />
    <ChannelButton channelName="Valheim" />
    <ChannelButton channelName="Rainbow Six" />
    <ChannelButton channelName="League of Legends" />
  </Container>
);

export default ChannelList;
