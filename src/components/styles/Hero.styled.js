import styled from "styled-components";

export const StyledHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
`;

export const Image = styled.img`
  position: relative;
  bottom: 90px;
  right: -160px;
  width: 90%;
  z-index: -1;
`;
