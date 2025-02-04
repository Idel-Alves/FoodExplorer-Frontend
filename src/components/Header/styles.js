import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  padding: 6.4rem 2.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  animation: topdown 700ms;

  .menu-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    svg {
      width: 2.4rem;
    }
  }

  button {
    margin-top: 1rem;
  }

  .search {
    display: none;
  }

  nav {
    display: none;
  }

  .btn-new, .btn-cart {
    display: none;
  }

  .profile {
    display: none;
  }

  .logout {
    display: none;
  }

  @media (min-width: 1143px) {
    height: 10.4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    white-space: nowrap;
    padding: 2.4rem 10rem;

    a {
      color: ${({ theme }) => theme.COLORS.TITLE_200};
      font-weight: 400;
      font-size: 1.6rem;
    }
    
    .btn-new,
    .btn-cart {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 21.6rem;
      margin: 0;

      svg {
        width: 2.8rem;
      }

    }

    .search {
      display: block;
      margin-top: .8rem;

      input {
        width: 35rem;
      }
    }

    nav {
      display: block;
      ul {
        display: flex;
        align-items: center;
        gap: 3.2rem;
        list-style: none;

        #favorites {
          font-family: "Roboto";
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.TITLE_200};
        }
      }
    }

    .profile {
      display: block;
      width: 6rem;
      height: 6rem;
      padding: .2rem;

      border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 100%;
      object-fit: cover;
    }

    .logout {
      display: block;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .menu-mobile {
      display: none;
    }

    .cart-mobile {
      display: none;
    }
  }

  @media (min-width: 768px) and (max-width: 1143px) {
    justify-content: space-between;
    padding: 6.4rem 2.7rem;
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
`