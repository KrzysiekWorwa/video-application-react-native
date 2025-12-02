import { Container, Input, SearchIcon } from "./SearchBar.styled";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

export default function SearchBar({ placeholder, onPress }: Props) {

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