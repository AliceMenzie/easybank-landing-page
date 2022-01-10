import Hero from "./Hero";
import { Flex } from "./styles/Flex.styled";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
export default function Header() {
  return (
    <StyledHeader>
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
      {/* <Flex> */}
          <Hero/>
      {/* </Flex> */}
    </StyledHeader>
  );
}
