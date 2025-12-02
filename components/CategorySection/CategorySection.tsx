import { Container, Header, ShowMoreText, TextWrapper } from "./CategorySection.styled";

export default function CategorySection() {

    return (
        <Container>
            <TextWrapper>
                <Header>React Native</Header>
                <ShowMoreText>Show more</ShowMoreText>
            </TextWrapper>
        </Container>
    );
}