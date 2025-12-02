import { useRouter } from "expo-router";
import { Text } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, SearchBarWrapper } from "./Home.styled";

export default function Home() {

  const router = useRouter();

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar 
          onPress={() => router.push("/search")}
          placeholder="Search videos"
        />
      </SearchBarWrapper>
      <Text>Welcome to Home!</Text>
    </Container>
  );
}