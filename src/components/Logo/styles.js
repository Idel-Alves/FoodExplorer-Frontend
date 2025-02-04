import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .8rem;

  white-space: nowrap;
  margin: 0 auto;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > div {
    display: flex;

    img {
      width: 2.4rem;
      margin-right: 1rem;
    }

    h1 {
      font-size: 2.4rem;
    }
  }

  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
  }

  @media (min-width: 1143px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
    margin: 0;

    > div {
      display: flex;
      img {
        width: 2.5rem;
        margin-right: 1rem;
      }
    }
  }
`