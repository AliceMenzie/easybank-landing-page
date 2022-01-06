import styled from "styled-components";

export const StyledHeader = styled.header`

&::before {
            content: "";
            position: absolute;
            background: url("../../images/image-mockups.png");
            background-size: 75%;
            width: 50%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: right center;
            left: 54rem;
            bottom: 5rem;
            z-index: -1;

}
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    z-index: 99999;

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

export const Image = styled.img`
    max-width: 50%;
    margin-right: -12rem;
    margin-top: -8rem;
    z-index: -2;
`