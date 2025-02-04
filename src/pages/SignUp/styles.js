import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    white-space: nowrap;
    gap: 1rem;
    margin: 16rem 0 7.3rem;
    animation: topdown 1s;

    h1 {
      font-family: "Roboto";
      font-size: 3.7rem;
      font-weight: 700;
    }
  }

  @media (min-width: 1143px) {
    justify-content: space-between;
    flex-direction: row;

    .header {
      gap: 1.9rem;
      margin: 0 auto;
      animation: swipeleft 1s;

      h1 {
        font-size: 4.2rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    flex-direction: column;

    .header {
      margin: 15rem 0 0;

      img {
        width: 4.9rem;
      }

      h1 {
        font-family: "Roboto";
        font-weight: 700;
        font-size: 4.2rem;
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

export const Form = styled.form`
     width: 35rem;
  height: 62.1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin-bottom: 30rem;

  border-radius: .8rem;
  background-color: transparent;
  animation: downtop 1s 0.2s reverse backwards;

  > label {
    font-family: "Roboto";
    font-weight: 400;
    align-self: flex-start;
    margin-bottom: .8rem;
  }

  > div {
    border: 0;
    margin-bottom: 3.2rem;

    input {
      width: 50rem;
    }
    input::placeholder {
        font-family: "Roboto";
     }
    
  }

  button {
    margin-bottom: 3.2rem;
  }

  a {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: 0.3s;
  }

  a:hover {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  h1 {
    display: none;
  }

  @media (min-width: 900px) {
    width: 47.6rem;
    height: 62.1rem;
    flex-direction: column;
    animation: swiperight 1s 0.3s backwards;

    padding: 6.4rem;
    margin: 6rem auto;

    border-radius: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    h1 {
      display: block;
      margin-bottom: 3.2rem;
    }

    button {
      padding: 1.2rem 3.2rem;
    }
  }
  @media (min-width: 600px) and (max-width: 900px) {
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;

    div {
      border: 0;
    }

    h1 {
      display: none;
    }
  }

  @keyframes downtop {
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}

  @keyframes swiperight {
  0% {
    opacity: 0;
    transform: translateX(15px);
  }
  
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
`;