import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";
import IconSvg from "../../assets/svg/logos/app-icon.svg";
import LogoSvg from "../../assets/svg/logos/logo.svg";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 55px 32px;
    background-color: ${({ theme }) => theme.colors.surface};
`;

export const LogoWrapper = styled.View`
    margin-top: 25px;
`;

export const Logo = styled(LogoSvg)`
    max-width: 292px;
    width: 100%;
    height: auto;
`;

export const Icon = styled(IconSvg)`
    max-width: 128px;
    width: 100%;
    height: auto;
`;

export const Wrapper = styled.View`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: center;
    width: 100%;
`;

export const LogginHeader = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.xxl}px;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    letter-spacing: 0.22px;
    margin-bottom: 8px;
`;

export const LogginButton = styled(TouchableOpacity)`
    width: 100%;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 12px;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.lg}px;
    line-height: ${({ theme }) => theme.lineHeight.l}px;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: center;
`;

export const PolicyText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.smPlus}px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    line-height: ${({ theme }) => theme.lineHeight.m}px;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: center;
`;

export const PolicyLink = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.smPlus}px;
    font-family: ${({ theme }) => theme.fonts.semiBold};
    line-height: ${({ theme }) => theme.lineHeight.m}px;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
    text-decoration: underline;
`;