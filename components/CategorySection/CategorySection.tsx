import { useFetch } from "@/hooks/useFetch";
import { searchVideos, YoutubeSearchResult, YoutubeVideo } from "@/services/api";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import {
    Card,
    Container, Header,
    PublishDate,
    Separator,
    ShowMoreText, TextWrapper, Thumbnail, VideoTitle
} from "./CategorySection.styled";

type Props = {
    title: string;
    query: string;
};

export default function CategorySection({ title, query }: Props) {
    const router = useRouter();

    const { data, loading } = useFetch<YoutubeSearchResult>(
        () => searchVideos(query, 10, "popular"),
        []
    );

    const videos = data?.videos ?? [];

    const handleShowMore = () => {
        router.push({ pathname: "/search", params: { query } });
    };

    const handlePressVideo = (video: YoutubeVideo) => {
        router.push({
            pathname: "/video/[id]",
            params: { id: video.id },
        });
    };

    const renderItem = ({ item }: { item: YoutubeVideo }) => {
        const date = new Date(item.publishedAt).toLocaleDateString("pl-PL");

        return (
            <Card activeOpacity={0.8} onPress={() => handlePressVideo(item)}>
                <Thumbnail source={{ uri: item.thumbnail }} />
                <VideoTitle numberOfLines={2}>{item.title}</VideoTitle>
                <PublishDate>{date}</PublishDate>
            </Card>
        );
    };

    return (
        <Container>
            <TextWrapper>
                <Header>{title}</Header>
                <ShowMoreText onPress={handleShowMore}>Show more</ShowMoreText>
            </TextWrapper>

            {loading && <Header>Loading...</Header>}

            {!loading && data && (
                <FlatList
                    horizontal
                    data={videos}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    style={{ marginRight: -24 }}
                />
            )}

            {!loading && videos.length === 0 && (
                <Header>No videos found</Header>
            )}

            <Separator />

        </Container>
    );
}