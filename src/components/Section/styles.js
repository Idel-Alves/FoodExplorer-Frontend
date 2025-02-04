import styled from "styled-components";

export const Container = styled.span`
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.6rem;

    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_200};
`;