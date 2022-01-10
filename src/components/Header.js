import Hero from "./Hero";
import { StyledHeader } from "./styles/Header.styled";

import Navbar from "./Navbar";
export default function Header() {
  return (
    <StyledHeader>
      <Navbar />
      <Hero />
    </StyledHeader>
  );
}
