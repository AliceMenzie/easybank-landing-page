import styled from "styled-components";

export const StyledHeader = styled.header`



`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;

    ul {
        display: flex;
        list-style-type: none;
        li {
            padding-left: 1rem;
        }
    }

    button {
        border-radius: 50px;
        padding: 0.5rem 1.5rem;
        border: none;
        cursor: pointer;
        background-color: limegreen;
        color: white;
        
        
    }

`
export const Logo = styled.img`
width: 10rem;


`