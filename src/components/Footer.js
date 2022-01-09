import { Logo } from "./styles/Header.styled";
import { StyledFooter } from "./styles/Footer.styled";
import Socials from "./Socials";

export default function Footer() {
  return (
    <StyledFooter>
      <div>
      <Logo src="./images/logo-footer.svg" alt="easybank" />
      {/* Socials Go Here */}
      <Socials/>
      </div>
      <ul>
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
      <ul>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </ul>
      <div>
      <button>Request Invite</button>
      <p>&copy; Easybank. All Rights Reserved</p>
      
      </div>
      
    </StyledFooter>
  );
}
