import { Container, Input, SearchIcon } from "./SearchBar.styled";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  navigateOnly?: boolean;
}

export default function SearchBar({ placeholder, value, onChangeText, onPress, navigateOnly = false, }: Props) {

  const editable = !navigateOnly;

  return (

    <Container
      activeOpacity={navigateOnly ? 0.9 : 1}
      onPress={navigateOnly ? onPress : undefined}
      disabled={!navigateOnly}
    >
      <SearchIcon width={24} height={24} />
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={editable ? onChangeText : undefined}
        editable={editable}
        pointerEvents={navigateOnly ? "none" : "auto"}
        returnKeyType="search"
      />
    </Container>
  );
}