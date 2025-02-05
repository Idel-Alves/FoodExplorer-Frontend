import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  > main {
    display: flex;
    flex-direction: column;

    padding: 3.2rem 3.2rem 0;
    margin-bottom: 10rem;

    .top {
      a {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 2rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
      
    }
    
    h1 {
      font-weight: 500;
      font-size: 2.7rem;
      white-space: nowrap;
      margin: 3rem 0;
      animation: topdown 1s 0.3s backwards;
    }

    .favorites {
      display: flex;
      flex-wrap: wrap;
    }

    .favorites-empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.6rem;
      margin: 18rem auto;

      p {
        text-align: center;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
        animation: swipeleft 1s 0.3s backwards;
      }

      a {
        display: flex;
        align-items: center;
        gap: .2rem;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.CAKE_100};
        animation: swiperight 1s 0.3s backwards;
      }
    }

    @media (min-width: 1143px) {
      padding: 0 15rem;
      h1 {
        margin: 3.4rem 0 4.8rem;
        animation: swiperight 1s 0.2s backwards;
      }
    }

    @media (min-width: 768px) and (max-width: 1143px) {
      padding: 5.5rem;
      align-items: center;

      .favorites {
        justify-content: center;
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
`