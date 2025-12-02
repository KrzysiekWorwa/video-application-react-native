
import { ButtonText, Container, Icon, LogginButton, LogginHeader, Logo, LogoWrapper, PolicyText, Wrapper } from "../Loggin/LoginScreen.styled";

export default function LogginScreen() {
    return (
        <Container>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>

            <Icon />

            <Wrapper>
                <LogginHeader>Welcome to the best YouTube-based learning application.</LogginHeader>
                <LogginButton>
                    <ButtonText>Log in as guest</ButtonText>
                </LogginButton>
                <PolicyText>
                    By continuing you agree with Terms and Conditions and Privacy Polic
                </PolicyText>
            </Wrapper>

        </Container>
    );
}
