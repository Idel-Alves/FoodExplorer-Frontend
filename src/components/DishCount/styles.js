import styled from "styled-components";

export const Container = styled.button`
  img {
    width: 3.2rem;
  }
  .circle {
    width: 2rem;
    height: 2rem;

    position: relative;
    right: -2rem;
    top: -3.5rem;
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    background: ${({ theme }) => theme.COLORS.RED_200};

    span {
      font-size: 1.4rem;
      font-weight: 500;
      color: white;
    }
  }
`