import { Text, View } from "react-native";

export default function Search() {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white"
    }}>
      <Text style={{ fontSize: 24 }}>Welcome to Search page!</Text>
    </View>
  );
}