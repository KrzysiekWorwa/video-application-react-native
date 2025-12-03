import { SearchSection } from "@/components/SearchSection/SearchSection";
import { SortCard } from "@/components/SortCard/SortCard";
import { useDebounce } from "@/hooks/useDebounce";
import { useFetch } from "@/hooks/useFetch";
import {
  searchVideos,
  SortOption,
  YoutubeSearchResult,
  YoutubeVideo,
} from "@/services/api";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  Container,
  ResultsNumber,
  ResultTitle,
  SearchBarWrapper,
  SortCategory,
  SortText,
} from "./Search.styled";

export default function Search() {
  const params = useLocalSearchParams<{ query?: string }>();
  const initialQuery = typeof params.query === "string" ? params.query : "";

  const [searchText, setSearchText] = useState(initialQuery);
  const [sort, setSort] = useState<SortOption>("popular");
  const [isSortVisible, setIsSortVisible] = useState(false);

  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      setSearchText(initialQuery);
    }
  }, [initialQuery]);

  const debouncedSearchText = useDebounce(searchText, 500);

  const { data, loading } = useFetch<YoutubeSearchResult>(
    () =>
      debouncedSearchText
        ? searchVideos(debouncedSearchText, 20, sort)
        : Promise.resolve({ videos: [], totalResults: 0, nextPageToken: undefined }),
    [debouncedSearchText, sort]
  );

  useEffect(() => {
    if (!data) {
      setVideos([]);
      setNextPageToken(null);
      return;
    }

    setVideos(data.videos);
    setNextPageToken(data.nextPageToken ?? null);
  }, [data]);

  const resultsCount = data?.totalResults ?? 0;
  const hasQuery = searchText.trim().length > 0;
  const currentQuery = searchText || initialQuery;

  const sortLabelMap: Record<SortOption, string> = {
    latest: "Upload date: latest",
    oldest: "Upload date: oldest",
    popular: "Most popular",
  };

  const handleLoadMore = async () => {
    if (!nextPageToken || isLoadingMore || loading) return;
    if (!debouncedSearchText.trim()) return;

    try {
      setIsLoadingMore(true);
      const more = await searchVideos(
        debouncedSearchText,
        20,
        sort,
        nextPageToken
      );

      setVideos((prev) => {
        const existingIds = new Set(prev.map((v) => v.id));
        const uniqueNew = more.videos.filter(
          (v) => !existingIds.has(v.id)
        );
        return [...prev, ...uniqueNew];
      });

      setNextPageToken(more.nextPageToken ?? null);
    } finally {
      setIsLoadingMore(false);
    }
  };

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          placeholder="Search videos"
          value={searchText}
          onChangeText={setSearchText}
        />
      </SearchBarWrapper>

      {hasQuery && (
        <>
          <ResultsNumber>
            {resultsCount} results found for:{" "}
            <ResultTitle>"{currentQuery}"</ResultTitle>
          </ResultsNumber>

          <TouchableOpacity onPress={() => setIsSortVisible(true)}>
            <SortText>
              Sort by: <SortCategory>{sortLabelMap[sort]}</SortCategory>
            </SortText>
          </TouchableOpacity>
        </>
      )}

      {loading && <ActivityIndicator style={{ marginTop: 24 }} />}

      {!loading && videos && (
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SearchSection
              video={item}
              onPress={() => {
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isLoadingMore ? (
              <ActivityIndicator style={{ marginVertical: 16 }} />
            ) : null
          }
        />
      )}

      <SortCard
        visible={isSortVisible}
        selected={sort}
        onSelect={setSort}
        onConfirm={() => setIsSortVisible(false)}
      />
    </Container>
  );
}
