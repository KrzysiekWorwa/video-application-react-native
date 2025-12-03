import { SearchSection } from "@/components/SearchSection/SearchSection";
import { useDebounce } from "@/hooks/useDebounce";
import { useFetch } from "@/hooks/useFetch";
import { searchVideos, YoutubeVideo } from "@/services/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, ResultsNumber, ResultTitle, SearchBarWrapper, SortCategory, SortText } from "./Search.styled";

export default function Search() {

  const router = useRouter();

  const params = useLocalSearchParams<{ query?: string }>();
  const initialQuery = typeof params.query === "string" ? params.query : "";

  const [searchText, setSearchText] = useState(initialQuery);


  useEffect(() => {
    if (initialQuery) {
      setSearchText(initialQuery);
    }
  }, [initialQuery]);

  const debouncedSearchText = useDebounce(searchText, 500);

  const { data, loading } = useFetch<YoutubeVideo[]>(
    () =>
      debouncedSearchText
        ? searchVideos(debouncedSearchText, 20)
        : Promise.resolve([]),
    [debouncedSearchText]
  );

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          placeholder="Search videos"
          value={searchText}
          onChangeText={setSearchText}
        />
      </SearchBarWrapper>

      <ResultsNumber>1157 results found for: <ResultTitle>“React Native”</ResultTitle></ResultsNumber>
      <SortText>Sort by: <SortCategory>Most popular</SortCategory></SortText>

      {loading && <ActivityIndicator style={{ marginTop: 24 }} />}

      {!loading && data && (
        <FlatList
          data={data}
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
        />
      )}
    </Container>
  );
}