import CategorySection from "@/components/CategorySection/CategorySection";
import { useRouter } from "expo-router";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, SearchBarWrapper, SettingsIcon } from "./Home.styled";

const CATEGORIES = [
  { title: "React Native", query: "React Native" },
  { title: "React", query: "React" },
  { title: "Typescript", query: "Typescript" },
  { title: "Javascript", query: "Javascript" },
];

export default function Home() {

  const router = useRouter();

  return (
    <Container contentContainerStyle={{ paddingBottom: 35 }}>
      <SearchBarWrapper>
        <SearchBar
          placeholder="Search videos"
          value=""
          onChangeText={() => { }}
          navigateOnly={true}
          onPress={() => router.push("/search")}
        />
        <SettingsIcon width={32} height={32} />
      </SearchBarWrapper>

      {CATEGORIES.map((cat) => (
        <CategorySection
          key={cat.title}
          title={cat.title}
          query={cat.query}
        />
      ))}

    </Container>
  );
}