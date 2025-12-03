import { Container, Input, SearchIcon } from "./SearchBar.styled";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({ placeholder, value, onChangeText }: Props) {
  return (
    <Container>
      <SearchIcon width={24} height={24} />
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
      />
    </Container>
  );
}