import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, GestureResponderEvent, Pressable } from "react-native";
import Video, { OnLoadData, OnProgressData } from "react-native-video";

import { AirPlayIcon, ArrowIcon, BackIcon, BottomControls, CenterPlayButton, CentralGroup, ForwardIcon, FullscreenButton, FullScreenIcon, HeaderGroup, IconButton, PlayerContainer, PlayerHeader, PlayerWrapper, PlayIcon, PlayIconButton, ProgressFill, ProgressThumb, ProgressTrack, TimeText, VolumeIcon } from "./VideoPlayer.styled";

const { width } = Dimensions.get("window");
const VIDEO_HEIGHT = width * 0.58;

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
    const [isMuted, setIsMuted] = useState(false);

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

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    const SEEK_INTERVAL = 10;

    const handleSkipBackward = () => {
        if (!videoRef.current) return;

        const newTime = Math.max(currentTime - SEEK_INTERVAL, 0);
        videoRef.current.seek(newTime);
        setCurrentTime(newTime);
    };

    const handleSkipForward = () => {
        if (!videoRef.current || !duration) return;

        const newTime = Math.min(currentTime + SEEK_INTERVAL, duration);
        videoRef.current.seek(newTime);
        setCurrentTime(newTime);
    };

    return (
        <PlayerWrapper>
            <PlayerContainer style={{ height: VIDEO_HEIGHT }}>
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

                <Pressable
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                    onPress={togglePlay}
                >
                    <></>
                </Pressable>

                <PlayerHeader>
                    <HeaderGroup>
                        <IconButton onPress={() => router.back()}>
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
                    <TimeText>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </TimeText>

                    <ProgressTrack
                        onLayout={handleSeekBarLayout}
                        onPress={handleSeekOnPress}
                        activeOpacity={1}
                        hitSlop={{ top: 10, bottom: 10 }}
                    >
                        <ProgressFill style={{ width: `${(progress || 0) * 100}%` }} >
                            <ProgressThumb />
                        </ProgressFill>
                    </ProgressTrack>

                    <FullscreenButton onPress={openFullscreen}>
                        <FullScreenIcon width={20} height={20} />
                    </FullscreenButton>

                </BottomControls>
            </PlayerContainer>


        </PlayerWrapper>
    );
}
