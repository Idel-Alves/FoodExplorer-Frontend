import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.9rem 2.7rem;
  background: ${({ theme }) => theme.COLORS.DARK_800};
  animation: downtop 700ms reverse backwards;

  > .logo {
    display: flex;
    align-items: center;
    gap: .6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    h1 {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    img {
      width: 2.2rem;
    }
  }

  > p {
    font-size: 1.2rem;
  }

  @media (min-width: 1143px) {
    padding: 2.4rem 12.3rem;
    .logo {
      h1 {
        font-size: 2.4rem;
        margin-left: 1rem;
      }

      img {
        width: 3rem;
        height: 3rem;
      }
    }

    > p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    .logo {
      gap: .6rem;
    }
  }

  @keyframes downtop {
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}
`