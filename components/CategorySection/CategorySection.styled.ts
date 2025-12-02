import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin-top: 8px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TextWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Header = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.18px;
`;

export const ShowMoreText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.12px;
    text-decoration: underline;
`;