import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  margin-bottom: .8rem;
  border-radius: .5rem;

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
  
    border-radius: .5rem;

    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`