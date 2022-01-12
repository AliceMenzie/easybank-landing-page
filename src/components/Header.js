import Hero from "./Hero";
import { StyledHeader } from "./styles/Header.styled";
import React, { useState} from "react";
import Navbar from "./Navbar";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledHeader>
      
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero isOpen={isOpen} />
    </StyledHeader>
  );
}
