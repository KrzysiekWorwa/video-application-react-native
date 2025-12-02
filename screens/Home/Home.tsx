import CategorySection from "@/components/CategorySection/CategorySection";
import { useRouter } from "expo-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, SearchBarWrapper, SettingsIcon } from "./Home.styled";

export default function Home() {

  const router = useRouter();

  return (
    <Container>
      <SearchBarWrapper>
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search videos"
        />
        <SettingsIcon width={32} height={32} />
      </SearchBarWrapper>
      <CategorySection />
    </Container>
  );
}