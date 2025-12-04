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
    SubtitlesIcon,
    TimeText,
    VolumeIcon,
} from "./VideoPlayer.styled";

type VideoPlayerProps = {
    onProgress?: (seconds: number) => void;
};

export default function VideoPlayer({ onProgress }: VideoPlayerProps) {
    const {
        videoRef,
        VIDEO_SOURCE,
        isPlaying,
        isMuted,
        isFullscreen,
        progress,
        timeLabel,
        wrapperStyle,
        containerStyle,
        textTracks,
        selectedTextTrack,
        isSubtitlesOn,
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
        toggleSubtitles,
    } = useVideoPlayer();

    return (
        <PlayerWrapper style={wrapperStyle}>
            <StatusBar hidden={isFullscreen} />

            <PlayerContainer style={containerStyle}>
                <Video
                    ref={(ref) => (videoRef.current = ref)}
                    source={VIDEO_SOURCE}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                    paused={!isPlaying}
                    onLoad={handleLoad}
                    onProgress={(status) => {
                        handleProgress(status);
                        onProgress?.(status.currentTime ?? 0);
                    }}
                    onError={(e) => console.log("VIDEO ERROR", e)}
                    muted={isMuted}
                    textTracks={textTracks}
                    selectedTextTrack={selectedTextTrack}
                    subtitleStyle={{
                        paddingBottom: isFullscreen ? 80 : 40,
                    }}
                />

                {!isPlaying && <PauseOverlay />}

                <Pressable
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
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
                        <IconButton onPress={toggleSubtitles} style={{ opacity: isSubtitlesOn ? 0.4 : 1 }}>
                            <SubtitlesIcon width={20} height={20} />
                        </IconButton>
                        <IconButton onPress={toggleMute} style={{ opacity: isMuted ? 0.4 : 1 }}>
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

                <BottomControls
                    style={isFullscreen ? { bottom: 12 } : undefined}
                >
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
