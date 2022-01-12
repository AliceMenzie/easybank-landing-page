import { Button } from "./styles/Button.styled";
import { StyledHero } from "./styles/Hero.styled";
import { Image } from "./styles/Hero.styled";

export default function Hero( {isOpen}) {
  return (
    <StyledHero isOpen={isOpen}>
      <div>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button className="btn">Request Invite</Button>
      </div>

      <div>
        <Image src="./images/image-mockups.png" alt="mobile phones" />
      </div>
    </StyledHero>
  );
}
