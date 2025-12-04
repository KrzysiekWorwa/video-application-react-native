import { SearchSection } from "@/components/SearchSection/SearchSection";
import { SortCard } from "@/components/SortCard/SortCard";
import { useSearchScreen } from "@/hooks/useSearchScreen";
import { YoutubeVideo } from "@/services/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
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
  const router = useRouter();

  const params = useLocalSearchParams<{ query?: string }>();
  const initialQuery = typeof params.query === "string" ? params.query : "";

  const {
    searchText,
    setSearchText,
    sort,
    setSort,
    isSortVisible,
    setIsSortVisible,
    videos,
    loading,
    isLoadingMore,
    resultsCount,
    hasQuery,
    currentQuery,
    sortLabelMap,
    handleLoadMore,
  } = useSearchScreen({ initialQuery });

  const handlePressVideo = (video: YoutubeVideo) => {
    router.push({
      pathname: "/video/[id]",
      params: { id: video.id },
    });
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
            <SearchSection video={item} onPress={() => handlePressVideo(item)} />
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
