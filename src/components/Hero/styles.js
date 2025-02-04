import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 38.3rem;
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  margin: 4.4rem 0 0;
  border-radius: .2rem;
  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  animation: topdown 1s 0.3s backwards;

  > img {
    position: absolute;
    width: 19.1rem;
    height: 14.9rem;
    right: 20.7rem;
    top: -3rem;

    #invert {
      transform: scaleX(-1);
    }
  }

  > div {
    width: 20.2rem;
    margin-right: .8rem;

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;

      font-family: "Roboto";

      word-wrap: break-word;
    }
  }

  @media (min-width: 1143px) {
    width: 112rem;
    height: 27.3rem;
    gap: 10rem;

    margin: 16.4rem auto 0;
    border-radius: .8rem;

    > img {
      width: 63.2rem;
      height: 40.6rem;
      right: 54rem;
      top: -13.2rem;
    }

    > div {
      margin: 0 29.5rem;
      white-space: nowrap;

      h2 {
        font-weight: 500;
        font-size: 4rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    width: 100%;
    height: 12rem;

    margin-top: 4.4rem;
    border-radius: .2rem;

    > img {
      width: 19.1rem;
      height: 14.9rem;
      left: -3rem;
      top: -3rem;
    }

    > div {
      margin: 0 auto;

      h2 {
        font-size: 1.8rem;
        font-weight: 600;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
        white-space: nowrap;
      }
    }
  }

  @keyframes topdown {
  0% {
    opacity: 0;
    transform: translateY(-15px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
`;