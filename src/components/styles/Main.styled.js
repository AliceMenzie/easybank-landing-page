import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  padding-top: 2.5rem;
  padding: 0rem 5rem;
  padding-bottom: 5rem;
  /* background-color: hsla(${({ theme }) =>
    theme.colors.lightGreyBlue}, .9); */

  z-index: -9999;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 2rem 0;
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    width: 60ch;
    margin-bottom: 4rem;
    font-size: 15px;
    line-height: 1.25;
  }

  div {
    display: flex;
    justify-content: space-around;
    div {
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
        width: 25ch;
        line-height: 1.25;
      }
    }
  }
`;
