import { Flex } from "./styles/Flex.styled";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";

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
      <Flex>
          <div>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button>Request Invite</button>
        </div>
        <Image src="./images/bg-intro-desktop.svg" alt="mobile phones"/>
        {/* <Image src="./images/image-mockups.png" alt="mobile phones"/> */}
      </Flex>
    </StyledHeader>
  );
}
