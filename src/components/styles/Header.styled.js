import styled from "styled-components";

export const StyledHeader = styled.header`


`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.grey};
    z-index: 99999;

    ul {
        display: flex;
        list-style-type: none;
        li {
            padding-left: 1rem;
            font-weight: 400;
            font-size: 14px;
        }
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

`
export const Logo = styled.img`
width: 10rem;

`

