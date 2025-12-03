import { useFetch } from "@/hooks/useFetch";
import { getVideoDetails } from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { Dimensions } from "react-native";
import Video from "react-native-video";
import { ChannelName, ChannelWrapper, Description, DescriptionTitle, IconCircle, InfoContaier, LikesIcon, PersonIcon, StatisticBox, StatisticText, StatisticWrapper, SwitchButton, SwitchLine, SwitchsWrapper, SwitchText, UnactiveSwitchLine, VideoTitle, ViewsIcon } from "./VideoDetails.styled";

const { width } = Dimensions.get("window");
const VIDEO_HEIGHT = width * 0.56;

export default function VideoDetails() {

    const { id } = useLocalSearchParams<{ id: string }>();

    const { data: video, loading, error } = useFetch(
        () => getVideoDetails(id),
        [id]
    );

    if (loading) {
        return (
            <InfoContaier>
                <DescriptionTitle>Loading...</DescriptionTitle>
            </InfoContaier>
        );
    }

    if (!video || error) {
        return (
            <InfoContaier>
                <DescriptionTitle>Video not found</DescriptionTitle>
            </InfoContaier>
        );
    }

    return (
        <>
            <Video
                source={{ uri: "https://bitmovin-a.akamaihd.net/content/sintel/hls/playlist.m3u8" }}
                style={{
                    width: "100%",
                    height: VIDEO_HEIGHT,
                    backgroundColor: "#000",
                }}
                resizeMode="contain"
                controls={true}
                paused={false}
                onError={(e) => console.log("VIDEO ERROR:", e)}
            />
            <InfoContaier>
                <VideoTitle numberOfLines={2}>
                    {video.title}
                </VideoTitle>

                <ChannelWrapper>
                    <IconCircle>
                        <PersonIcon width={20} height={20} />
                    </IconCircle>
                    <ChannelName numberOfLines={1}>
                        {video.channelTitle}
                    </ChannelName>
                </ChannelWrapper>

                <SwitchsWrapper>
                    <SwitchButton>
                        <SwitchText>Details</SwitchText>
                        <SwitchLine />
                    </SwitchButton>

                    <SwitchButton>
                        <SwitchText>Notes</SwitchText>
                        <UnactiveSwitchLine />
                    </SwitchButton>
                </SwitchsWrapper>

                <DescriptionTitle>Description</DescriptionTitle>
                <Description>
                    {video.description || "No description available."}
                </Description>

                <DescriptionTitle>Statistics</DescriptionTitle>

                <StatisticWrapper>
                    <StatisticBox>
                        <ViewsIcon width={20} height={20} />
                        <StatisticText>
                            {Number(video.stats.viewCount).toLocaleString()} views
                        </StatisticText>
                    </StatisticBox>

                    <StatisticBox>
                        <LikesIcon width={20} height={20} />
                        <StatisticText>
                            {Number(video.stats.likeCount ?? 0).toLocaleString()} likes
                        </StatisticText>
                    </StatisticBox>
                </StatisticWrapper>
            </InfoContaier>
        </>
    );
}
