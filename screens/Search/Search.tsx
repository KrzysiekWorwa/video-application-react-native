import { SearchSection } from "@/components/SearchSection/SearchSection";
import { useFetch } from "@/hooks/useFetch";
import { searchVideos, YoutubeVideo } from "@/services/api";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, SearchBarWrapper } from "./Search.styled";

export default function Search() {

  const router = useRouter();

  const params = useLocalSearchParams<{ query?: string }>();
  const initialQuery = typeof params.query === "string" ? params.query : "";

  const [searchText, setSearchText] = useState(initialQuery);

  const { data, loading } = useFetch<YoutubeVideo[]>(
    () => searchVideos(searchText || initialQuery, 20),
    [searchText, initialQuery]
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