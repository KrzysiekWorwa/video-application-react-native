import { useRouter } from "expo-router";
import { Text } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, SearchBarWrapper } from "./Search.styled";

export default function Search() {

  const router = useRouter();

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar 
          onPress={() => router.push("/search")}
          placeholder="Search videos"
        />
      </SearchBarWrapper>
      <Text>Welcome to Search page!</Text>
    </Container>
  );
}