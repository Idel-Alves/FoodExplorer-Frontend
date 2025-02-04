import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    width: 70rem;

    margin: 0 .8rem;
  }
`