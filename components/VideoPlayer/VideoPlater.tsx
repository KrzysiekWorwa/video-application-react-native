// screens/VideoDetails/VideoPlayer/VideoPlayer.tsx
import { Pressable, StatusBar } from "react-native";
import Video from "react-native-video";

import { useVideoPlayer } from "@/hooks/useVideoPlayer";
import {
    AirPlayIcon,
    ArrowIcon,
    BackIcon,
    BottomControls,
    CenterPlayButton,
    CentralGroup,
    ForwardIcon,
    FullscreenButton,
    FullScreenIcon,
    HeaderGroup,
    IconButton,
    PauseOverlay,
    PlayerContainer,
    PlayerHeader,
    PlayerWrapper,
    PlayIcon,
    PlayIconButton,
    ProgressFill,
    ProgressThumb,
    ProgressTrack,
    TimeText,
    VolumeIcon,
} from "./VideoPlayer.styled";

export default function VideoPlayer() {
  const {
    videoRef,
    VIDEO_SOURCE,
    isPlaying,
    isMuted,
    isFullscreen,
    progress,
    timeLabel,
    containerStyle,
    handleLoad,
    handleProgress,
    handleSeekBarLayout,
    handleSeekOnPress,
    togglePlay,
    toggleMute,
    handleBackPress,
    handleSkipBackward,
    handleSkipForward,
    toggleFullscreen,
  } = useVideoPlayer();

  return (
    <PlayerWrapper>
      <StatusBar hidden={isFullscreen} />

      <PlayerContainer style={containerStyle}>
        <Video
          ref={(ref) => (videoRef.current = ref)}
          source={VIDEO_SOURCE}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          paused={!isPlaying}
          onLoad={handleLoad}
          onProgress={handleProgress}
          onError={(e) => console.log("VIDEO ERROR", e)}
          muted={isMuted}
        />

        {!isPlaying && <PauseOverlay />}

        <Pressable
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 48,
          }}
          onPress={togglePlay}
        >
          <></>
        </Pressable>

        <PlayerHeader>
          <HeaderGroup>
            <IconButton onPress={handleBackPress}>
              <ArrowIcon width={20} height={20} />
            </IconButton>
          </HeaderGroup>

          <HeaderGroup>
            <IconButton onPress={toggleMute}>
              <VolumeIcon width={20} height={20} />
            </IconButton>
            <IconButton>
              <AirPlayIcon width={20} height={20} />
            </IconButton>
          </HeaderGroup>
        </PlayerHeader>

        {!isPlaying && (
          <CenterPlayButton onPress={togglePlay}>
            <CentralGroup>
              <IconButton onPress={handleSkipBackward}>
                <BackIcon width={20} height={20} />
              </IconButton>
              <PlayIconButton onPress={togglePlay}>
                <PlayIcon width={24} height={24} />
              </PlayIconButton>
              <IconButton onPress={handleSkipForward}>
                <ForwardIcon width={20} height={20} />
              </IconButton>
            </CentralGroup>
          </CenterPlayButton>
        )}

        <BottomControls>
          <TimeText>{timeLabel}</TimeText>

          <ProgressTrack
            onLayout={handleSeekBarLayout}
            onPress={handleSeekOnPress}
            activeOpacity={1}
            hitSlop={{ top: 10, bottom: 10 }}
          >
            <ProgressFill style={{ width: `${(progress || 0) * 100}%` }}>
              <ProgressThumb />
            </ProgressFill>
          </ProgressTrack>

          <FullscreenButton onPress={toggleFullscreen}>
            <FullScreenIcon width={20} height={20} />
          </FullscreenButton>
        </BottomControls>
      </PlayerContainer>
    </PlayerWrapper>
  );
}
