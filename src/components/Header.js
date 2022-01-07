import Hero from "./Hero";
import { Flex } from "./styles/Flex.styled";
import { StyledHeader, Nav, Logo } from "./styles/Header.styled";

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
        <button>Request Invite</button>
      </Nav>
      {/* <Flex> */}
          <Hero/>
      {/* </Flex> */}
    </StyledHeader>
  );
}
