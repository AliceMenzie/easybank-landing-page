import { Nav, Logo } from "./styles/Navbar.styled";
import { Button } from "./styles/Button.styled";

export default function Navbar() {
    
  return (
    <Nav>
      <Logo src="./images/logo.svg" alt="easybank" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <Button>Request Invite</Button>
    </Nav>
  );
}
