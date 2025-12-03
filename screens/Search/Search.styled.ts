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

export const ResultsNumber = styled.Text`
    flex-direction: row;
    width: 100%;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.1px;
    margin: 10px 0;
`;

export const ResultTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semiBold};
`;

export const SortText = styled.Text`
    flex-direction: row;
    width: 100%;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.12px;
    text-align: right;
`;

export const SortCategory = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semiBold};
`;