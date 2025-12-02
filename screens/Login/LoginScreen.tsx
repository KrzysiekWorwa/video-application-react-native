
import { Linking } from "react-native";
import { ButtonText, Container, Icon, LogginButton, LogginHeader, Logo, LogoWrapper, PolicyLink, PolicyText, Wrapper } from "./LoginScreen.styled";

export default function LoginScreen() {
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
                    By continuing you agree with{" "}
                    <PolicyLink onPress={() => Linking.openURL("https://example.com/termsandconditions")}>Terms and Conditions</PolicyLink>
                    {" "}and{" "}
                    <PolicyLink onPress={() => Linking.openURL("https://example.com/privacy")}>Privacy Policy</PolicyLink>
                </PolicyText>
            </Wrapper>

        </Container>
    );
}
