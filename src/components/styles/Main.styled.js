import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  padding-top: 2.5rem;
  padding: 0rem 5rem;
  padding-bottom: 5rem;
  /* background-color: ${({ theme }) => theme.colors.lightGreyBlue}; */
  z-index: -9999;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 4.5rem 0 2rem;
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
    width: 60ch;
    margin-bottom: 4rem;
    font-size: 15px;
    line-height: 1.25;
  }

  div {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
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

  @media (max-width: ${({ theme }) => theme.tablet}) {
    align-self: center;
    justify-content: center;
    align-items: center;

    h1 {
      width: 11ch;

      text-align: center;
    }
    p {
      width: 100%;
      text-align: center;
    }
    div {
      flex-direction: column;
      div {
        align-items: center;
        justify-content: center;
        padding: 0;
        p {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;
