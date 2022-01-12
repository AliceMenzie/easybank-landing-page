import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey};


  @media (max-width: ${({ theme }) => theme.tablet}) {
    /* ul {
        display: none;
       
    
    border: solid;
    flex-direction: row;
      li {
        padding-left: 0.5rem;
        font-weight: 400;
        font-size: 10px;
      }
    } */

    button {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    background-color: transparent;
    border: 1px solid red;

    div:nth-child(1) {
      display: flex;
      justify-items: space-between;
      align-items: center;
    }
  
  img {
    border: 1px solid red;
    align-self: flex-start;
  }

  /* ul {
    
    border: 1px solid red;
    flex-direction: column;
    background-color: white;
    li {
      padding-left: 0.5rem;
      font-weight: 400;
      font-size: 10px;
    }
} */
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
    display: flex;
    flex-direction: row;
    list-style-type: none;
    li {
      padding-left: 1rem;
      font-weight: 400;
      font-size: 14px;
    }
 @media (max-width: ${({ theme }) => theme.tablet}) {
     /* display: none; */
     background-color: white;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    li {
        padding-left: 0.5rem;
        font-weight: 400;
        font-size: 10px;
      }
}
 @media (max-width: ${({ theme }) => theme.mobile}) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    background-color: white;
    li {
      padding-left: 0.5rem;
      font-weight: 400;
      font-size: 10px;
    }
 }
`

//  HAMBURGER

export const Hamburger = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    display: flex;
    border: ${({ isOpen }) => (isOpen ? "5px solid blue" : "1px solid red")};
    background-image: url(${({ isOpen }) => (isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg")});
    height: 2em;
    width: 2em;
    background-position: center;
    background-repeat: no-repeat;

    z-index: 10;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    border: ${({ isOpen }) => (isOpen ? "1px solid red" : "5px solid blue")};
    background-image: url(${({ isOpen }) => (isOpen ? "./images/icon-close.svg" : "./images/icon-hamburger.svg")});
  }
`;
