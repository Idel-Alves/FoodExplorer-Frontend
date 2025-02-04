import styled from "styled-components";

export const Container = styled.div`
  width: 13.3rem;
  height: 3.2rem;
  display: flex;

  padding: .4rem .8rem;

  border-radius: 1rem;
  background-color: red;

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_300}` : "none"};
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_500};

  > button {
    display: flex;
    align-items: center;

    .button-delete {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .button-add {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > input {
    font-family: "Roboto";
    width: 100%;
    padding: 1rem 1.6rem;

    border: none;
    border-radius: .8rem;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.TITLE_200};

    &::placeholder {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }
  }
`