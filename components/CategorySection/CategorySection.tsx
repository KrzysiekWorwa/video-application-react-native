import { useFetch } from "@/hooks/useFetch";
import { searchVideos, YoutubeVideo } from "@/services/api";
import { useRouter } from "expo-router";
import { FlatList, Image } from "react-native";
import {
    Card,
    Container, Header,
    PublishDate,
    Separator,
    ShowMoreText, TextWrapper, VideoTitle
} from "./CategorySection.styled";

type Props = {
    title: string;
    query: string;
};

export default function CategorySection({ title, query }: Props) {
    const router = useRouter();

    const { data, loading } = useFetch<YoutubeVideo[]>(
        () => searchVideos(query, 10),
        []
    );

    const handleShowMore = () => {
        router.push({ pathname: "/search", params: { query } });
    };

    const renderItem = ({ item }: { item: YoutubeVideo }) => {
        const date = new Date(item.publishedAt).toLocaleDateString("pl-PL");

        return (
            <Card activeOpacity={0.8}>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={{
                        width: 180,
                        height: 112,
                        borderRadius: 12,
                        backgroundColor: "#000",
                    }}
                />
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
                    data={data}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    style={{ marginRight: -24 }}
                />
            )}

            <Separator />

        </Container>
    );
}