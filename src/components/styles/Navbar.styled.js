import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey};
    

    ul {
        display: flex;
        list-style-type: none;
        li {
            padding-left: 1rem;
            font-weight: 400;
            font-size: 14px;
        }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        
        ul {
        li {
            padding-left: 0.5rem;
            font-weight: 400;
            font-size: 10px;
        } 

    }
        
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }

    

`

export const Logo = styled.img`
width: 7rem;

`