import { StyledHero } from "./styles/Hero.styled"
import { Image } from "./styles/Hero.styled"
export default function Hero() {
    return (
        <StyledHero>
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
        </StyledHero>
    )
}
