import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 40px 24px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const SearchBarWrapper = styled.View`
    display: flex;
    flex-direction: row;
`;