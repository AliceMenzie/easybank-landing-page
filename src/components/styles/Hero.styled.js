import styled from "styled-components";

export const StyledHero = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid pink;

&::before {
            content: "";
            position: absolute;
            background: url("../../images/image-mockups.png");
            background-size: 75%;
            width: 50%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: right center;
            left: 36em;
            bottom: 15rem;
            z-index: -1;

}

div {
    margin: 0rem 5rem;
    padding-bottom: 5rem;

    h1 {
        color: ${({ theme }) => theme.colors.darkBlue};
    }
    p {
        padding: 2rem 0;
        color: ${({theme}) => theme.colors.grey};
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


`

export const Image = styled.img`
    max-width: 70%;
    margin-right: -12rem;
    margin-top: -6rem;
    z-index: -2;
`