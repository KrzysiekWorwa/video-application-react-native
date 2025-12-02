import { Text } from "react-native";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, SearchBarWrapper } from "./Home.styled";

export default function Home() {
  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar />
      </SearchBarWrapper>
      <Text>Welcome to Home!</Text>
    </Container>
  );
}