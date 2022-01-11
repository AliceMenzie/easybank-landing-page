import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: ${({ theme }) => theme.colors.lightGrey}; */

  div:nth-child(1) {
    margin-left: 5rem;
    align-self: center;
  }
  div:nth-child(2) {
    width: 700px;
    height: 500px;
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
      justify-content: center;
      margin-left: 0rem;
      h1 {
        padding-top: 2rem;
        text-align: center;
        font-size: 3rem;
      }
      p {
        text-align: center;
      }
    }
    div:nth-child(2) {
      width: 700px;
      height: 500px;
      background-image: url("./images/bg-intro-mobile.svg");
      background-position: left;
      background-repeat: no-repeat;
      background-size: 140%;
      z-index: -2;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const Image = styled.img`
  position: relative;
  bottom: 90px;
  right: -160px;
  width: 90%;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 85%;
    top: -11.5rem;
    left: 5rem;
  }
`;
