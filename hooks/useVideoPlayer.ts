import { useRouter } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useRef, useState } from "react";
import { Dimensions, GestureResponderEvent } from "react-native";
import {
    OnLoadData,
    OnProgressData,
    TextTrackType
} from "react-native-video";

const { width } = Dimensions.get("window");
const VIDEO_HEIGHT = width * 0.58;

const VIDEO_SOURCE = {
    uri: "https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
};

const SUBTITLES_SOURCE =
    "https://bitmovin-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt";

const SEEK_INTERVAL = 10;

function formatTime(seconds: number) {
    if (!seconds || Number.isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
}

export function useVideoPlayer() {
    const router = useRouter();
    const videoRef = useRef<Video | null>(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [barWidth, setBarWidth] = useState(0);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [isSubtitlesOn, setIsSubtitlesOn] = useState(true);

    const progress = duration ? currentTime / duration : 0;

    useEffect(() => {
        return () => {
            if (isFullscreen) {
                ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.PORTRAIT_UP
                ).catch(() => { });
            }
        };
    }, [isFullscreen]);

    const handleLoad = (meta: OnLoadData) => {
        setDuration(meta.duration ?? 0);
    };

    const handleProgress = (p: OnProgressData) => {
        setCurrentTime(p.currentTime ?? 0);
    };

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
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

    const enterFullscreen = async () => {
        try {
            setIsFullscreen(true);
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE
            );
        } catch (e) {
            console.warn("Failed to enter fullscreen", e);
        }
    };

    const exitFullscreen = async () => {
        try {
            setIsFullscreen(false);
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
        } catch (e) {
            console.warn("Failed to exit fullscreen", e);
        }
    };

    const toggleFullscreen = () => {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    };

    const handleBackPress = () => {
        if (isFullscreen) {
            exitFullscreen();
        } else {
            router.back();
        }
    };

    const wrapperStyle = isFullscreen
        ? {
            position: "absolute" as const,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 20,
            paddingBottom: 0,
        }
        : undefined;

    const containerStyle = isFullscreen
        ? { width: "100%", height: "100%" }
        : { height: VIDEO_HEIGHT };

    const timeLabel = `${formatTime(currentTime)} / ${formatTime(duration)}`;

    const textTracks = [
        {
            title: "English",
            language: "en",
            type: TextTrackType.VTT,
            uri: SUBTITLES_SOURCE,
        },
    ];

    const selectedTextTrack = isSubtitlesOn
        ? ({ type: "language", value: "en" } as const)
        : ({ type: "disabled", value: "" } as const);

    const toggleSubtitles = () => {
        setIsSubtitlesOn((prev) => !prev);
    };

    return {
        videoRef,
        VIDEO_SOURCE,

        isPlaying,
        isMuted,
        isFullscreen,
        progress,
        timeLabel,
        isSubtitlesOn,
        wrapperStyle,
        containerStyle,
        textTracks,
        selectedTextTrack,
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
    };
}
