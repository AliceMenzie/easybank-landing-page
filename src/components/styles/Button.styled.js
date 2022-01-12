import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  display: inline-block;
  padding: 0.7rem 2rem;

  border: none;
  cursor: pointer;
  background-color: limegreen;
  color: ${({ theme }) => theme.colors.white};
  white-space: nowrap;
  background-image: linear-gradient( 90deg, ${({ theme }) => theme.colors.lime}, ${({ theme }) => theme.colors.brightCyan} );
  font-size: 12px;
  font-weight: 400;
  
`;
