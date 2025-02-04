import styled from "styled-components";

export const Container = styled.div`
  .title {
    font-size: 1.8rem;
    margin-top: 6.2rem;
    animation: swipeleft 1s 0.3s backwards;
  }

  .swiper {
    width: 38.3rem;
    height: 29.2rem;
    margin: 2.4rem 0;
    animation: swiperight 1s 0.3s backwards;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 21rem;
    height: 29.2rem;

    padding: 2.4rem;
    gap: 1.5rem;

    border: ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.DARK_300};

    .edit {
      position: fixed;
      top: 1.6rem;
      right: 1.6rem;

      svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }
    }

    .favorite {
      position: fixed;
      top: 1.6rem;
      right: 1.6rem;

      svg {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
      }
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;

      > img {
        width: 8.8rem;
      }

      > h2 {
        font-weight: 500;
        font-size: 1.4rem;
        white-space: nowrap;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    > p {
      display: none;
    }

    > span {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 1.6rem;
      margin: 0;

      color: ${({ theme }) => theme.COLORS.CAKE_100};
    }

    .btns {
      flex-direction: column;
      align-items: center;

      .include {
        width: 16.2rem;
        height: 3.2rem;
        font-size: 1.4rem;
      }
    }
  }

  .swiper-button-prev {
    display: none;
  }

  .swiper-button-next {
    display: none;
  }

  @media (min-width: 1143px) {
    .title {
      font-size: 3.2rem;
      font-weight: 500;
      margin: 4.7rem 0 2.3rem;
    }

    .title:nth-child(1) {
      margin: 6.2rem 0 2.3rem;
    }

    .swiper {
      width: 112.2rem;
      height: 100%;
    }

    .swiper:last-child {
      margin-bottom: 4.7rem;
    }

    .swiper-slide {
      max-width: 30.4rem;
      height: 46.2rem;

      .favorite {
        right: 1.8rem;
      }
      
      a {
        img {
          width: 17.6rem;
        }

        h2 {
          font-weight: 700;
          font-size: 2.4rem;
        }
      }

      p {
        width: 20.8rem;
        display: block;
        font-family: "Roboto";
        font-size: 1.4rem;
        text-align: center;

        overflow: hidden;
        text-overflow: ellipsis;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      span {
        font-size: 3.2rem;
        margin-bottom: 1.5rem;
      }

      .btns {
        display: flex;
        flex-direction: row;
        gap: 1.8rem;

        .include {
          width: 9.2rem;
          height: 4.8rem;
        }
      }
    }

    .swiper-button-prev {
      display: block;
      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 30.4rem;
      height: 48.5rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .swiper-button-prev:after {
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .swiper-button-next {
      display: block;
      position: absolute;
      top: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 13rem;
      height: 48.5rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background: ${({ theme }) => theme.COLORS.GRADIENTS_100};
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    .title {
      font-size: 1.8rem;
      margin-top: 6.2rem;
    }

    .swiper {
      width: 69rem;
      height: 29.2rem;
      margin: 2.4rem 0;
    }

    .swiper-slide {
      max-width: 21rem;
      height: 29.2rem;

      .favorite {
        right: 1.6rem;
      }

      a {
        img {
          width: 8.8rem;
        }

        h2 {
          font-weight: 500;
          font-size: 1.4rem;
        }
      }

      p {
        display: none;
      }

      span {
        font-size: 1.6rem;
        margin: 0;
      }

      .btns {
        flex-direction: column;

        .include {
          width: 16.2rem;
          height: 3.2rem;

          font-size: 1.4rem;
        }
      }
    }

    .swiper-button-prev {
      display: none;
    }

    .swiper-button-next {
      display: none;
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
`