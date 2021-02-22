//Styles
import { Button } from "./styles";
//Logo
import logo from "../../assets/images/logo.svg";

//Will be util in styles
export interface ButtonProps {
  isHome?: boolean;
  selected?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}: ButtonProps) => (
  <Button
    isHome={isHome}
    hasNotifications={hasNotifications}
    mentions={mentions}
    className={selected ? "active" : ""}
  >
    {isHome && <img src={logo} alt="logo" />}
  </Button>
);

export default ServerButton;
