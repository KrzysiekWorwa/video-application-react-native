import styled from "styled-components/native";
import SettingsSvg from "../../assets/svg/icons/settings-icon.svg";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding: 40px 24px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const SearchBarWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 100%;
`;

export const SettingsIcon = styled(SettingsSvg)`
    color: ${({ theme }) => theme.colors.primary};
`;