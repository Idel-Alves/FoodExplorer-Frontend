import styled from "styled-components";

export const Container = styled.div`
  width: 364px;

  display: flex;
  flex-direction: column;

  margin-top: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: .8rem;
`

export const TextareaInput = styled.textarea`
  width: 36.4rem;
  height: 17.2rem;

  font-family: "Roboto";
  font-weight: 400;
  font-size: 1.6rem;

  resize: none;
  padding: 1.4rem;

  border: 0;
  border-radius: .8rem;

  background: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`