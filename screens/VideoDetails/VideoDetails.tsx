import VideoPlayer from "@/components/VideoPlayer/VideoPlater";
import { useFetch } from "@/hooks/useFetch";
import { getVideoDetails } from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react"; // 👈 NOWE
import { Dimensions } from "react-native";
import {
    ChannelName,
    ChannelWrapper,
    Description,
    DescriptionTitle,
    IconCircle,
    InfoContaier,
    LikesIcon,
    PersonIcon,
    StatisticBox,
    StatisticText,
    StatisticWrapper,
    SwitchButton,
    SwitchLine,
    SwitchsWrapper,
    SwitchText,
    UnactiveSwitchLine,
    VideoTitle,
    ViewsIcon,
} from "./VideoDetails.styled";

const { width } = Dimensions.get("window");
const VIDEO_HEIGHT = width * 0.56;

type ActiveTab = "details" | "notes";

export default function VideoDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const [activeTab, setActiveTab] = useState<ActiveTab>("details");

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
            <VideoPlayer />

            <InfoContaier>
                <VideoTitle numberOfLines={2}>{video.title}</VideoTitle>

                <ChannelWrapper>
                    <IconCircle>
                        <PersonIcon width={20} height={20} />
                    </IconCircle>
                    <ChannelName numberOfLines={1}>{video.channelTitle}</ChannelName>
                </ChannelWrapper>

                <SwitchsWrapper>
                    <SwitchButton
                        activeOpacity={0.8}
                        onPress={() => setActiveTab("details")}
                    >
                        <SwitchText>Details</SwitchText>
                        {activeTab === "details" ? <SwitchLine /> : <UnactiveSwitchLine />}
                    </SwitchButton>

                    <SwitchButton
                        activeOpacity={0.8}
                        onPress={() => setActiveTab("notes")}
                    >
                        <SwitchText>Notes</SwitchText>
                        {activeTab === "notes" ? <SwitchLine /> : <UnactiveSwitchLine />}
                    </SwitchButton>
                </SwitchsWrapper>

                {activeTab === "details" ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <DescriptionTitle>Notes</DescriptionTitle>
                        <Description>
                            No notes yet. Soon you’ll be able to add and view notes for this
                            video.
                        </Description>
                    </>
                )}
            </InfoContaier>
        </>
    );
}
