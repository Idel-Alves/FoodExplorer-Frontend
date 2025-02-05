import styled from "styled-components";

export const Container = styled.button`
  img {
    width: 2.8rem;
  }
  .circle {
    width: 1.8rem;
    height: 1.8rem;

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