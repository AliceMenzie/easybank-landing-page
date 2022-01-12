import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: ${({ theme }) => theme.colors.lightGrey}; */

  div:nth-child(1) {
    margin-left: 5rem;
    margin-top: 2rem;
    align-self: center;
  }

  div:nth-child(2) {
    max-width: 100%;
    height: 400px;
    background-image: url("./images/bg-intro-desktop.svg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: 200%;
    z-index: -2;
  }

  div {
    h1 {
      width: 15ch;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
    p {
      padding: 2rem 0;
      width: 45ch;
      color: ${({ theme }) => theme.colors.grey};
    }

    button {
      border-radius: 50px;
      padding: 0.5rem 1.5rem;
      border: none;
      cursor: pointer;
      background-color: limegreen;
      color: ${({ theme }) => theme.colors.white};
      white-space: nowrap;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    div:nth-child(1) {
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: stretch;
      margin-left: 0rem;
      h1 {
        margin-top: -4rem;
        text-align: center;
        font-size: 2.5rem;
      }
      p {
        text-align: center;
        font-size: 12px;
        
      }
    }
    div:nth-child(2) {
      background-image: url("./images/bg-intro-mobile.svg");
      background-position: bottom left;
      background-repeat: no-repeat;
      background-size: 100%;
      z-index: -2;
      padding-top: 5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    div:nth-child(2) {
      margin-top: ${({ isOpen }) => (isOpen ? "-26.5rem" : "-10rem")};
    }
  }
`

export const Image = styled.img`
  position: relative;
  bottom: 90px;
  right: -12rem;
  max-width: 80%;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.large}) {
    bottom: 15rem;
    right: -25rem;
    max-width: 65%;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 30rem;
    top: -17rem;
    left: 25%;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
    width: 85%;
    top: -2rem;
    left: 2.5rem;
  }
`;


