import styled from "styled-components";

export const StyledSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;

  li {
    list-style-type: none;

    a {
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.5rem;
      height: 20px;
      width: 20px;

      &:hover {
        color: ${({ theme }) => theme.colors.lime};
        cursor: pointer;
      }
    }
  }
`;
