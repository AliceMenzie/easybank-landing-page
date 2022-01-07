import styled from "styled-components";

export const StyledMain = styled.main`
display: flex;
flex-direction: column;
border: 1px solid red;
margin-top: -2.5rem;
padding: 0rem 5rem;
padding-bottom: 5rem;
background-color: ${({ theme }) => theme.colors.lightGreyBlue};


h1{
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 2rem 0;
}
p {
    color: ${({theme})=> theme.colors.grey};
    width: 60ch;
    margin-bottom: 4rem;
    font-size: 15px;
    line-height: 1.25;
}

div{
    border: 1px solid red;
    display: flex;
    div {
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        padding-right: 1rem;

        img {
            max-width: 50px;
            padding-bottom: 1rem;
        }
        h2 {
            white-space: nowrap;
            font-size: 18px;
            padding-bottom: 1rem;
        }
        p {
            width: 20ch;
            line-height: 1.25;
        }
    }
}
`
