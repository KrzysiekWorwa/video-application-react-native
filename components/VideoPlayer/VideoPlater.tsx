import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, GestureResponderEvent, TouchableWithoutFeedback } from "react-native";
import Video, { OnLoadData, OnProgressData } from "react-native-video";

import { AirPlayIcon, BackIcon, BottomControls, CenterPlayButton, FullscreenButton, FullScreenIcon, HeaderGroup, HeaderIconButton, PlayerContainer, PlayerHeader, PlayerWrapper, PlayIcon, ProgressFill, ProgressRow, ProgressTrack, TimeText, VolumeIcon } from "./VideoPlayer.styled";

const { width } = Dimensions.get("window");
const VIDEO_HEIGHT = width * 0.56;

const VIDEO_SOURCE = {
    uri: "https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
};

function formatTime(seconds: number) {
    if (!seconds || Number.isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");
    return `${m}:${s}`;
}

export default function VideoPlayer() {
    const router = useRouter();
    const videoRef = useRef<Video | null>(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [barWidth, setBarWidth] = useState(0);

    const progress = duration ? currentTime / duration : 0;

    const handleLoad = (meta: OnLoadData) => {
        setDuration(meta.duration ?? 0);
    };

    const handleProgress = (p: OnProgressData) => {
        setCurrentTime(p.currentTime ?? 0);
    };

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    };

    const openFullscreen = () => {
        videoRef.current?.presentFullscreenPlayer?.();
    };

    const handleSeekBarLayout = (e: any) => {
        setBarWidth(e.nativeEvent.layout.width);
    };

    const handleSeekOnPress = (e: GestureResponderEvent) => {
        if (!duration || !barWidth) return;
        const { locationX } = e.nativeEvent;
        const ratio = Math.min(Math.max(locationX / barWidth, 0), 1);
        const newTime = ratio * duration;
        videoRef.current?.seek(newTime);
        setCurrentTime(newTime);
    };

    return (
        <PlayerWrapper>
            <PlayerContainer style={{ height: VIDEO_HEIGHT }}>
                <TouchableWithoutFeedback onPress={togglePlay}>
                    <Video
                        ref={(ref) => (videoRef.current = ref)}
                        source={VIDEO_SOURCE}
                        style={{ width: "100%", height: "100%" }}
                        resizeMode="cover"
                        paused={!isPlaying}
                        onLoad={handleLoad}
                        onProgress={handleProgress}
                        onError={(e) => console.log("VIDEO ERROR", e)}
                    />
                </TouchableWithoutFeedback>

                <PlayerHeader>
                    <HeaderGroup>
                        <HeaderIconButton onPress={() => router.back()}>
                            <BackIcon width={20} height={20} />
                        </HeaderIconButton>
                    </HeaderGroup>

                    <HeaderGroup>
                        <HeaderIconButton>
                            <VolumeIcon width={20} height={20} />
                        </HeaderIconButton>
                    </HeaderGroup>

                    <HeaderGroup>
                        <HeaderIconButton>
                            <AirPlayIcon width={20} height={20} />
                        </HeaderIconButton>
                    </HeaderGroup>
                </PlayerHeader>

                {!isPlaying && (
                    <CenterPlayButton onPress={togglePlay}>
                        <PlayIcon width={24} height={24} />
                    </CenterPlayButton>
                )}
            </PlayerContainer>

            <BottomControls>
                <ProgressRow>
                    <ProgressTrack
                        onLayout={handleSeekBarLayout}
                        onPress={handleSeekOnPress}
                        activeOpacity={1}
                    >
                        <ProgressFill style={{ width: `${(progress || 0) * 100}%` }} />
                    </ProgressTrack>

                    <TimeText>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </TimeText>

                    <FullscreenButton onPress={openFullscreen}>
                        <FullScreenIcon width={20} height={20} />
                    </FullscreenButton>
                </ProgressRow>
            </BottomControls>
        </PlayerWrapper>
    );
}
