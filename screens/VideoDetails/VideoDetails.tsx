import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function VideoDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();

    return (
        <>
            <Stack.Screen options={{ title: "Video details" }} />

            <View
                style={{
                    flex: 1,
                    backgroundColor: "#050816",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "600" }}>
                    Video details screen
                </Text>

                <Text style={{ color: "#9CA3AF", marginTop: 8 }}>
                    id: {id ?? "brak id (jeszcze tu nie nawigujemy)"}
                </Text>
            </View>
        </>
    );
}
