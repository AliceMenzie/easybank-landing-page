import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  border: none;
  cursor: pointer;
  background-color: limegreen;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  background-image: linear-gradient( 90deg, ${({ theme }) => theme.colors.lime}, ${({ theme }) => theme.colors.brightCyan} );
  font-size: 10px;
`;
