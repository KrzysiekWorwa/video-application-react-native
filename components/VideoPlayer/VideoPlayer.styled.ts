import styled from "styled-components/native";

import AirPlaySvg from "../../assets/svg/icons/airplay-icon.svg";
import BackSvg from "../../assets/svg/icons/backward-icon.svg";
import ForwardSvg from "../../assets/svg/icons/forward-icon.svg";
import FullScreenSvg from "../../assets/svg/icons/fullscreen-icon.svg";
import ArrowSvg from "../../assets/svg/icons/leftarrow-icon.svg";
import PauseSvg from "../../assets/svg/icons/pause-icon.svg";
import PlaySvg from "../../assets/svg/icons/play-icon.svg";
import VolumeSvg from "../../assets/svg/icons/volume-icon.svg";

export const PlayerWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding-bottom: 6px;
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
  gap: 8px;
`;

export const IconButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0.55);
  justify-content: center;
  align-items: center;
`;

export const CentralGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 64px;
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

export const PlayIconButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.55);
  justify-content: center;
  align-items: center;
`;

export const BottomControls = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const BottomRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProgressTrack = styled.TouchableOpacity`
  flex: 1;
  height: 4px;
  background-color: #C8C8C8;
`;

export const ProgressFill = styled.View`
  height: 4px;
  border-radius: 999px;
  background-color: #c71f1f;
  justify-content: center;
  align-items: flex-end; 
`;

export const ProgressThumb = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #c71f1f;
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  margin-left: 8px;
  margin-bottom: 7px;
`;

export const FullscreenButton = styled.TouchableOpacity`
  position: absolute;
  right: 9px;
  bottom: 16px;
  z-index: 20;
`;

export const ArrowIcon = styled(ArrowSvg)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const BackIcon = styled(BackSvg)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ForwardIcon = styled(ForwardSvg)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FullScreenIcon = styled(FullScreenSvg)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const PauseIcon = styled(PauseSvg)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;
export const PlayIcon = styled(PlaySvg)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const VolumeIcon = styled(VolumeSvg)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const AirPlayIcon = styled(AirPlaySvg)`
    color: ${({ theme }) => theme.colors.textSecondary};
`;