import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  > main {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    padding: 0 5.6rem;
    margin-bottom: 15rem;

    .top {
      position: absolute;
      left: 2rem;
      margin: 3.6rem 0 1.6rem;
      animation: swiperight 1s 0.3s backwards;

      a {
        display: flex;
        align-items: center;

        font-weight: 500;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .cover img {
        width: 26.4rem;
        margin: 0;
        margin: 9rem 0 1.6rem;
        animation: topdown 1s 0.3s backwards;
      }

      .details {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-size: 2.7rem;
          font-weight: 500;
          margin-bottom: 2.4rem;
          animation: topdown 1s 0.7s backwards;
        }

        p {
          font-size: 1.6rem;
          text-align: center;
          margin-bottom: 2.4rem;
          animation: topdown 1s 0.9s backwards;
        }

        .tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          animation: topdown 1s 1.1s backwards;
          margin-bottom: 5rem
        }

        .btns {
          display: flex;
          align-items: end;
          margin-top: 4.8rem;
          gap: 1rem;

          .select-quantity div {
            animation: swipeleft 1s 1.1s backwards;
            margin: 0;
          }

          .include {
            width: 31.6rem;
            height: 4.8rem;
            margin-top: 4.8rem;
            animation: swipeleft 1s 1.1s backwards;
            font-size: 1.6rem;
          }

          .edit {
            width: 31.6rem;
            height: 4.8rem;
            margin-top: 4.8rem;
            animation: swipeleft 1s 1.1s backwards;
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    display: none;
  }

  @media (min-width: 1143px) {
    main {
      padding: 0 10rem;
      margin: 0 auto 18.6rem;

      .top {
        left: 13.5rem;
        margin-top: 2.4rem;

        a {
          font-size: 2.4rem;
          font-weight: 700;
          margin: 2.4rem 0 4.2rem;
        }
      }

      .container {
        flex-direction: row;
        margin-top: 4.2rem;

        .cover img {
          width: 39rem;
          margin-right: 4.7rem;
          animation: swipeleft 1s 0.3s backwards;
        }

        .details {
          align-items: flex-start;
          margin-top: 7.5rem;

          h1 {
            font-size: 4rem;
          }

          p {
            font-size: 2.4rem;
            text-align: start;
          }

          .tags {
            gap: 1.2rem;
            margin-bottom: 1rem;
          }

          .edit {
            width: 13.1rem;
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
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    main {
      flex-direction: column;
      align-content: center;

      padding: 0 5.6rem 18rem;
      margin: 0 0 5.4rem;

      .top {
        a {
          position: absolute;
          left: 5rem;
          font-weight: 500;
          font-size: 2.4rem;
        }

        img {
          width: 26.4rem;
          margin: 0;
          margin-top: 7rem;
        }
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-size: 2.7rem;
        }

        p {
          font-size: 1.6rem;
          text-align: center;
        }

        .tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2.4rem;
        }

        .edit {
          width: 31.6rem;
          height: 4.8rem;
        }
      }
    }

    ::-webkit-scrollbar {
      display: none;
    }

    ::-webkit-scrollbar-thumb {
      display: none;
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
