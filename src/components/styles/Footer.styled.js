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
    margin: 0 2.5rem;

    li {
      margin-bottom: 1rem;
      white-space: nowrap;
    }
  }

  div:nth-child(4) {
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-left: auto;

    p {
      color: ${({ theme }) => theme.colors.grey};
      font-size: 10px;
    }
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    align-items: center;
    align-self: center;
    text-align: center;
    justify-content: center;
    padding-top: 1rem;
    div {
      align-self: center;
      margin-right: -1.5rem;
      margin-bottom: 1rem;
      img {
        margin: 1rem auto;
        padding-left: 1rem;
        
      }
    }

    div:nth-child(4) {
      align-items: center;
      justify-self: start;
      margin-left: 0;
      button {
          margin-left: 1rem;
        margin-bottom: 1rem;
       width: 100%;
      }
      p {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
