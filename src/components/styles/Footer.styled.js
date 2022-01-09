import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: hsl(233, 26%, 24%);
    color: white;
    display: flex;
    /* align-items: center; */
    /* justify-content: space-; */
    padding: 5rem 5rem 2.5rem 5rem;

    div {
        align-items: space-between;
        justify-content: space-between;
    }


    img {
        margin-bottom: 3rem;
    }

    ul {
        font-family: inherit;
        font-weight: 300;
        font-size: 12px;
        list-style-type: none;
        margin: 0 2.5rem ;

        li {
            margin-bottom: 1rem;
            white-space: nowrap;
        }
    }

    

    div:nth-child(4){
        white-space: nowrap;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-left: auto;

        button {
        border-radius: 50px;
        padding: 0.5rem 1.5rem;
        border: none;
        cursor: pointer;
        background-color: limegreen;
        color: ${({ theme }) => theme.colors.white};
        white-space: nowrap;
        display: block;
    }

        p {
            color: ${({ theme }) => theme.colors.grey};
            font-size: 10px;
        }
    }
`