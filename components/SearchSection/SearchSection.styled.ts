import styled from "styled-components/native";

export const SearchCard = styled.TouchableOpacity`
    width: 345px;
    margin-top: 12px;
    color: ${({ theme }) => theme.colors.textPrimary};
`;

export const  SearchChannelName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    line-height: ${({ theme }) => theme.lineHeight.s}px;
    letter-spacing: 0.12px;
    margin-top: 16px;
    margin-bottom: 12px;
`;

export const SearchVideoTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.mdPlus}px;
    line-height: ${({ theme }) => theme.lineHeight.s}px;
    letter-spacing: 0.15px;
    margin-bottom: 12px;
`;

export const SearchPublishDate = styled.Text`
    margin-top: 4px;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.1px;
    text-align: right;
`;