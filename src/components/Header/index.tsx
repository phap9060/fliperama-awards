import "dracula-ui/styles/dracula-ui.css";
import { Avatar, Text } from "dracula-ui";
import LogoTransp from "../../assets/LogoTransp.png";
import "./style.css";
export const Header = () => {
  return (
    <header className="header-box">
      <Avatar color="yellow" title="Fliperama Nerd Logo" src={LogoTransp} />
      <Text size="lg">Fliperama Awards</Text>
    </header>
  );
};
