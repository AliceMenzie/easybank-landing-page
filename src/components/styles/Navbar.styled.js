import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey};

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: ${({ isOpen }) => (isOpen ? "row" : "column")};
    div:nth-child(1){
      display: flex;
      align-items: center;
      justify-content: space-around;
      align-self: center;
      width: 100%;
      background-color: white;
      padding: 1rem;
    }
  
    button {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    background-color: transparent;
    flex-wrap: wrap;
    div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: white;
      padding: 1rem;
    }

    img {
      align-self: center;
    }

    button {
      display: none;
    }
  }
`;

// ------------------------ LOGO

export const Logo = styled.img`
  width: 7rem;
`;

// ---------------------- MENU

export const Menu = styled.ul`
box-shadow:${({ isOpen }) => (isOpen ? "rgba(150, 153, 167, 0.45) 0px 54px 55px, rgba(150, 153, 167, 0.12) 0px -12px 30px, rgba(150, 153, 167, 0.12) 0px 4px 6px, rgba(150, 153, 167, 0.17) 0px 12px 13px, rgba(150, 153, 167, 0.09) 0px -3px 5px" : "none")};

display: flex;
    flex-direction: row;
    list-style-type: none;
    li {
      padding-left: 1rem;
      font-weight: 400;
      font-size: 14px;
    }
  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    align-items: center;
    flex-direction: row;
  justify-content: center;
  list-style-type: none;
  border-radius: 5px;
  padding: unset;
  width: 80%;

    background-color: white;
  li {
    align-self: center;
    padding: 1rem;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    align-items: center;
    flex-direction: column;
  justify-content: center;
  list-style-type: none;
  border-radius: 5px;
  padding: unset;
  width: 80%;

    background-color: white;
  li {
    align-self: center;
    padding: 1rem;
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.darkBlue};
    }

    /* &:before {
    content: "";
    position: absolute;
    display: ${({ isOpen }) => (isOpen ? "unset" : "none")};
    top: -2rem;
    bottom: 0;
    left: 0;
    right: 0;   //absolutely position element covers entire page
    background: rgb(150, 153, 167);
    opacity: .5;
    z-index: -1;
  } */


  }
`;

// ---------------------- HAMBURGER

export const Hamburger = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    background-image: url(${({ isOpen }) => isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"});
    height: 2em;
    width: 2em;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    z-index: 10;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    background-image: url(${({ isOpen }) => isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"});
    z-index: 99999;
  }
`;
