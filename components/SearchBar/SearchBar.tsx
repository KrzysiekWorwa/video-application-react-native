import { Container, Input, SearchIcon } from "./SearchBar.styled";

export default function SearchBar({ placeholder, onPress }: Props) {

  interface Props {
    placeholder: string;
    onPress?: () => void;
  }

  return (
    <Container>
      <SearchIcon width={24} height={24} />
      <Input
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => { }} />
    </Container>
  );
}