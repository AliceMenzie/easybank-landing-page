import styled from "styled-components";

export const StyledArticle = styled.article`
  padding: 0rem 5rem 5rem 5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 2rem 0;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.colors.lightGrey};

    div {
      display: flex;
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.white};
      max-width: 200px;

      h6 {
        padding: 1rem 1rem 0.5rem 1rem;
        font-size: 10px;
        color: ${({ theme }) => theme.colors.grey};
      }

      h3 {
        font-size: 14px;
        padding: 0rem 1rem;
        font-weight: 400;
      }

      p {
        font-size: 12px;
        padding: 1rem;
        color: ${({ theme }) => theme.colors.grey};
      }
    }

    img {
      float: left;
      width: 350px;
      height: 130px;
      object-fit: cover;
    }
  }
`;
