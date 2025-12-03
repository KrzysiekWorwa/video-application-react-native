import styled from "styled-components/native";
import LikesSvg from "../../assets/svg/icons/likes-icon.svg";
import PersonSvg from "../../assets/svg/icons/person-icon.svg";
import ViewsSvg from "../../assets/svg/icons/views-icon.svg";

export const InfoContaier = styled.View`
    flex: 1;
    padding: 20px 24px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const VideoTitle = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
    letter-spacing: 0.18px;
    margin-bottom: 10px;
`;

export const ChannelWrapper = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const IconCircle = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    margin-right: 12px;
`;

export const PersonIcon = styled(PersonSvg)`
    color: ${({ theme }) => theme.colors.secondary};
`;

export const ChannelName = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => theme.fontSizes.md}px;
    letter-spacing: 0.14px;
`;

export const SwitchsWrapper = styled.View`
    flex-direction: row;
    margin-top: 16px;
`;

export const SwitchButton = styled.View`
    flex: 1;
    align-items: center;
`;

export const SwitchText = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    letter-spacing: 0.12px;
`;

export const SwitchLine = styled.View`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const DescriptionTitle = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    letter-spacing: 0.1px;
    margin-top: 8px;
    margin-bottom: 8px;

`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    letter-spacing: 0.12px;
`;

export const StatisticWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const StatisticBox = styled.View`
    flex-direction: row;
    height: 32px;
    width: 136px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: start;
    align-items: center;
    padding: 6px 8px;
`;

export const ViewsIcon = styled(ViewsSvg)`
    color: ${({ theme }) => theme.colors.secondary};
`;

export const LikesIcon = styled(LikesSvg)`
    color: ${({ theme }) => theme.colors.secondary};
`;

export const StatisticText = styled.Text`
flex: 1;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    line-height: ${({ theme }) => theme.lineHeight.s}px;
    letter-spacing: 0.1px;
    text-align: center;
`;