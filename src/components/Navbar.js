import { Nav, Logo, Hamburger, Menu } from "./styles/Navbar.styled";
import { Button } from "./styles/Button.styled";

export default function Navbar( {isOpen, setIsOpen}) {
    
  
  return (
    <Nav>
      <div>
      <Logo src="./images/logo.svg" alt="easybank" />
      
      
        <Hamburger isOpen={isOpen} onClick={()=> setIsOpen(!isOpen)}/>
        
      </div>
      
      <Menu isOpen={isOpen}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </Menu>
      
      <Button>Request Invite</Button>
    </Nav>
  );
}
