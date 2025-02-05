import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

min-height: 100vh;
position: relative;
overflow: hidden;

> main {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  margin: 0 auto;
  padding: 0 0 9rem;

  .top {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin: 4rem 0 3.2rem 1.2rem;

    a {
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 2.4rem;
      margin-left: -1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      animation: swiperight 1s 0.3s backwards;
    }

    h1 {
      font-weight: 500;
      font-size: 3.2rem;
      animation: swipeleft 1s 0.3s backwards;
    }
  }

  @media (min-width: 1143px) {
    .top {
      display: flex;
      align-items: center;

      h1 {
        margin-left: 4.5rem;
      }
    }
    width: 112rem;
    padding: 0;
  }
}

@media (min-width: 668px) and (max-width: 1143px) {
  > main {
    width: 42.8rem;
    align-items: center;
    padding: 0 0 4rem;

    .top {
      padding: 0;

      position: absolute;
      left: 13.5rem;

      h1 {
        font-size: 3.2rem;
      }
    }
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
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8rem;
  overflow-y: auto;
  animation: downtop 1s 0.4s reverse backwards;

  > .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem;

    div {
      > input {
        ::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
      }
    }

    label {
      width: 36.4rem;
      height: 4.8rem;

      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: .8rem;

      padding: 1.2rem 3.2rem;
      margin-top: 1rem;

      font-size: 1.4rem;
      cursor: pointer;

      border-radius: .5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};

      > input[type="file"] {
        display: none;
      }

      > svg {
        width: 2;
        height: 2.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .name {
      width: 36.4rem;
      div {
        margin-top: 1.6rem;

        > input {
          width: 43.9rem;
          height: 4.8rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_700};
        }
      }
    }

    .options {
      display: flex;
      flex-direction: column;

      select {
        width: 36.4rem;
        height: 4.8rem;

        font-size: 1.4rem;
        padding: 1.6rem;

        border: 0;
        border-radius: .5rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        option {
          font-size: 1.8rem;
          padding: 8.7rem;
        }

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    }

    .tags {
      width: 36.4rem;
      height: auto;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.6rem;

      padding: .8rem;
      margin-top: 1rem;

      border-radius: .8rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }

    .price {
      width: 36.4rem;

      div {
        height: 4.8rem;
        margin-top: 1.6rem;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};
      }
    }
  }

  .description {
    margin-bottom: 3.2rem;
    div {
      width: 36.4rem;

      textarea {
        width: 36.4rem;
      }
    }
  }

  .btns {
    display: flex;
    white-space: nowrap;
    gap: 3.2rem;

    .delete {
      width: 16rem;
      padding: 1.2rem 2.4rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }

    .save {
      width: 17.2rem;
      padding: 1.2rem 2.4rem;
      background-color: ${({ theme }) => theme.COLORS.RED_100};
      transition: 0.5s;
    }

    .save:hover {
      background-color: ${({ theme }) => theme.COLORS.RED_200};
    }
  }

  @media (min-width: 1143px) {
    align-items: flex-end;
    margin-bottom: 11.6rem;
    animation: swiperight 1s 0.7s backwards;

    > .input-wrapper {
      padding: 0;
      margin: 0 auto;

      label {
        width: 22.9rem;
      }

      .options {
        select {
          width: 38.6rem;
        }
      }

      .price {
        width: 25.1rem;
      }

      .tags {
        width: 76rem;
      }
    }

    .description {
      div {
        width: 104.3rem;

        textarea {
          width: 104.3rem;
        }
      }
    }

    .btns {
      margin-right: 4rem;

      .delete {
        width: 13.5rem;
      }
    }
  }

  @media (min-width: 668px) and (max-width: 1143px) {
    align-items: center;

    > .input-wrapper {
      flex-direction: column;
      align-items: flex-start;

      margin-top: 18rem;
      padding: 0;

      label {
        width: 50rem;
      }

      div {
        width: 50rem;
        input {
          width: 50rem;
        }
      }

      .name {
        div {
          input {
            width: 50rem;
          }
        }
      }

      .options {
        select {
          width: 50rem;
        }
      }

      .tags {
        width: 50rem;

        div {
          width: 11.8rem;
          input {
            width: 8rem;
          }
        }
      }

      .price {
        width: 36.4rem;
      }
    }

    .description {
      div {
        width: 50rem;
        height: 17.2rem;

        textarea {
          width: 50rem;
        }
      }
    }

    .btns {
      gap: 10rem;
      .delete {
        width: 20rem;
      }

      .save {
        width: 19.5rem;
      }
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