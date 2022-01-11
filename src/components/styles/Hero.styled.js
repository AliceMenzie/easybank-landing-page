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
    /* border: 1px solid red; */
    width: 100%;
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
        /* padding-top: 2rem; */
        margin-top: -4rem;
        text-align: center;
        font-size: 3rem;
      }
      p {
        text-align: center;
      }
    }
    div:nth-child(2) {
      background-image: url("./images/bg-intro-mobile.svg");
      /* background-position: right; */
      background-position: bottom right;
      background-repeat: no-repeat;
      background-size: 130%;
      z-index: -2;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;

export const Image = styled.img`
  position: relative;
  bottom: 90px;
  right: -170px;
  width: 85%;
  z-index: -1;

  @media (min-width: ${({ theme }) => theme.large}) {
    bottom: 15rem;
  right: -25rem;
    width: 60%;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 85%;
    top: -12rem;
    left: 2.5rem;
  }
`;
