import styled from "styled-components";

export const Container = styled.div`
    .favorites-list {
    display: flex;
    align-items: center;
    margin-bottom: 3.2rem;
    animation: downtop 1s 0.3s reverse backwards;

    img {
      width: 7.2rem;
      margin-bottom: .5rem;
    }

    .favorites-wrapper {
      display: flex;
      align-items: center;

      gap: .5rem;

      span {
        font-weight: 500;
        font-size: 2.1rem;
      }

      .item {
        display: flex;
        flex-direction: column;

        margin-left: 1.3rem;
        margin-right: 4.8rem;
      }

      a {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 1.4rem;

        color: ${({ theme }) => theme.COLORS.RED_100};
      }
    }
  }

    @media (min-width: 1143px) {
        > .favorites-list {
        margin-bottom: 4.8rem;
        animation: swipeleft 1s 0.3s backwards;
        }

    }

    @keyframes downtop {
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}

  @keyframes swipeleft {
  0% {
    opacity: 0;
    transform: translateX(-15px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`;