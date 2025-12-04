import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, GestureResponderEvent, Pressable } from "react-native";
import Video, { OnLoadData, OnProgressData } from "react-native-video";

import { AirPlayIcon, ArrowIcon, BottomControls, CenterPlayButton, FullscreenButton, FullScreenIcon, HeaderGroup, IconButton, PlayerContainer, PlayerHeader, PlayerWrapper, PlayIcon, PlayIconButton, ProgressFill, ProgressTrack, TimeText, VolumeIcon } from "./VideoPlayer.styled";

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
                        <IconButton>
                            <VolumeIcon width={20} height={20} />
                        </IconButton>
                        <IconButton>
                            <AirPlayIcon width={20} height={20} />
                        </IconButton>
                    </HeaderGroup>
                </PlayerHeader>

                {!isPlaying && (
                    <CenterPlayButton onPress={togglePlay}>
                        <PlayIconButton onPress={togglePlay}>
                            <PlayIcon width={24} height={24} />
                        </PlayIconButton>
                    </CenterPlayButton>
                )}

                <BottomControls>
                    <TimeText>
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </TimeText>
                    <FullscreenButton onPress={openFullscreen}>
                        <FullScreenIcon width={20} height={20} />
                    </FullscreenButton>
                    <ProgressTrack
                        onLayout={handleSeekBarLayout}
                        onPress={handleSeekOnPress}
                        activeOpacity={1}
                    >
                        <ProgressFill style={{ width: `${(progress || 0) * 100}%` }} />
                    </ProgressTrack>

                </BottomControls>
            </PlayerContainer>


        </PlayerWrapper>
    );
}
