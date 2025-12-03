import styled from "styled-components/native";
import SettingsSvg from "../../assets/svg/icons/settings-icon.svg";

export const Container = styled.ScrollView`
    flex: 1;
    padding: 40px 24px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const SearchBarWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    width: 100%;
    margin-bottom: 23px;
`;

export const SettingsIcon = styled(SettingsSvg)`
    color: ${({ theme }) => theme.colors.primary};
`;