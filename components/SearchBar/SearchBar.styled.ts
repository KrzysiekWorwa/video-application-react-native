import styled from "styled-components/native";

import SearchSvg from "../../assets/svg/icons/search-icon.svg";

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.primary};
    border: solid 2px;
    border-radius: 16px;
    height: 44px;
    width: 100%;
`;

export const SearchIcon = styled(SearchSvg)`
    margin: 10px 12px; 
    color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled.TextInput`
    flex: 1;
    height: 100%;
    padding: 0;
    padding-left: 0;
    padding-right: 0;
    font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

