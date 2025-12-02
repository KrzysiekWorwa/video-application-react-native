import { Container, Input, SearchIcon } from "./SearchBar.styled";

export default function SearchBar() {
  return (
    <Container>
      <SearchIcon width={24} height={24} />
      <Input
        onPress={() => { }}
        placeholder="Search videos"
        value=""
        onChangeText={() => { }} />
    </Container>
  );
}