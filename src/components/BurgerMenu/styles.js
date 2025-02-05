import styled from "styled-components";

export const Container = styled.div`

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};

  transition: 0.5s;
  transform: ${({ isVisible }) => (isVisible ? "translateY(0)" : "translateY(50px)")};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > header {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    width: 42.8rem;
    height: 11.4rem;

    position: absolute;
    top: 0;

    padding: 3.2rem;
    margin-bottom: 3.6rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    p {
      font-family: "Roboto";
      font-size: 2.1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    svg {
      transition: 0.7s;
      transform: ${({ isVisible }) => (isVisible ? "rotate(0deg)" : "rotate(-45deg)")};
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 3.2rem;
    margin: 11rem 0 4.5rem;

    transition: 0.7s;
    transform: ${({ isVisible }) => (isVisible ? "scale(1)" : "scale(0.7)")};

    div {
      width: 37.2rem;
      margin-bottom: 4.6rem;
    }

    .btns {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-width: 35.5rem;

      a,
      button {
        font-weight: 300;
        font-size: 2.4rem;
        padding-bottom: 1rem;

        color: ${({ theme }) => theme.COLORS.TITLE_200};
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
      }

      button {
        display: flex;
        width: 37rem;
        margin: 0;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    header {
      width: 100%;
      align-items: center;
    }

    main {
      justify-content: flex-start;
      .btns button {
        width: 100%;
      }

      div {
        width: 100%;

        input {
          width: 100%;
        }
      }
    }
  }
`