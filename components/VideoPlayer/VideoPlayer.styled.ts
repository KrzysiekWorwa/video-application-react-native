import styled from "styled-components/native";

export const PlayerWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PlayerContainer = styled.View`
  width: 100%;
  background-color: #000000;
  position: relative;
`;

export const PlayerHeader = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderGroup = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderIconButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.55);
  justify-content: center;
  align-items: center;
`;

export const CenterPlayButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const BottomControls = styled.View`
  padding: 6px 24px 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProgressRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProgressTrack = styled.TouchableOpacity`
  flex: 1;
  height: 18px;
  justify-content: center;
  margin-right: 8px;
`;

export const ProgressFill = styled.View`
  height: 4px;
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  margin-right: 8px;
`;

export const FullscreenButton = styled.TouchableOpacity`
  padding: 4px;
`;
