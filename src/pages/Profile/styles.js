import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    overflow-y: auto;

    display: grid;
    grid-template-rows: 11.4rem auto;
    grid-template-areas: "header" "form";
    overflow: auto;

  > header {
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: topdown 700ms;

    height: 14.4rem;
    padding: 0 2.7rem 1.2rem 2.7rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    svg {
      width: 3.2rem;
    }

    button {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      animation: swiperight 1s 1.1s backwards;
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

export const Form = styled.form`
    grid-area: form;
    width: 36rem;
    margin: 0 auto;
    animation: downtop 1s 0.3s reverse backwards;

    div:nth-child(4) {
      margin-top: 2.4rem;
    }

    @media (min-width: 1143px) {
      margin-bottom: 15rem;
    }

    @keyframes downtop {
    100% {
      opacity: 0;
      transform: translateY(15px);
    }
}
`;

export const Avatar = styled.div`
    position: relative;
  width: 18.6rem;
  height: 18.6rem;

  margin: -8.4rem auto 3.2rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    border-radius: 50%;
    object-fit: cover;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    bottom: .7rem;
    right: .7rem;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

    cursor: pointer;

    background-color: ${({ theme }) => theme.COLORS.RED_200};
    border-radius: 50%;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;