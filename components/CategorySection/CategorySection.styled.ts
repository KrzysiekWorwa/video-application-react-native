import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 8px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const TextWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Header = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.18px;
`;

export const ShowMoreText = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.12px;
    text-decoration: underline;
`;

export const Card = styled.TouchableOpacity`
    width: 180px;
    margin-right: 16px;
    margin-top: 16px;
`;

export const VideoTitle = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 2px;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    line-height: ${({ theme }) => theme.lineHeight.m}px;
    letter-spacing: 0.12px;
`;

export const PublishDate = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 4px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.1px;
    text-align: right;
`;

export const Separator = styled.View`
    margin-top: 13px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-left: -24px; 
    margin-right: -24px;
`;

export const Thumbnail = styled.Image`
  width: 180px;
  height: 112px;
  border-radius: 12px;
  background-color: #000;
`;