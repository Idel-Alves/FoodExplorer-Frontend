import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  font-weight: 500;
  padding: 0 1.6rem;

  border: 0;
  border-radius: .5rem;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin: 0 .8rem;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.RED_200};
`