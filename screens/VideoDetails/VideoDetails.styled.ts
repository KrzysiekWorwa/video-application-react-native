import styled from "styled-components/native";
import LikesSvg from "../../assets/svg/icons/likes-icon.svg";
import PersonSvg from "../../assets/svg/icons/person-icon.svg";
import ViewsSvg from "../../assets/svg/icons/views-icon.svg";

export const InfoContaier = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: 40,
    },
})`
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

export const SwitchButton = styled.TouchableOpacity`
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

export const UnactiveSwitchLine = styled.View`
    width: 100%;
    height: 2px;
    background-color: #C8C8C8;
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

export const NotesList = styled.View`
    margin-top: 16px;
    gap: 12px;
`;

export const NoteCard = styled.View`
    border-radius: 12px;
    border-width: 1px;
    border-color: #c8c8c8;
    padding: 12px 12px;
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: 10px;
`;

export const NoteText = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    line-height: ${({ theme }) => theme.lineHeight.s}px;
    letter-spacing: 0.12px;
`;

export const NoteTime = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.xs}px;
    letter-spacing: 0.1px;
    text-align: right;
    margin-top: 8px;
`;

export const NoteInput = styled.TextInput.attrs({
    multiline: true,
    textAlignVertical: "top" as const,
    placeholderTextColor: "#C8C8C8",
    underlineColorAndroid: "transparent",
})`
    margin-top: 24px;
    border-radius: 12px;
    border-width: 1px;
    border-color: #c8c8c8;
    padding: 12px 12px;
    min-height: 60px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${({ theme }) => theme.fontSizes.sm}px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const ButtonWrapper = styled.View`
    align-items: center;
`;

export const AddNoteButton = styled.TouchableOpacity`
    margin-top: 16px;
    margin-bottom: 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 0;
    align-items: center;
    justify-content: center;
    width: 256px;
`;

export const AddNoteButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
    font-family: ${({ theme }) => theme.fonts.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.md}px;
    letter-spacing: 0.14px;
`;