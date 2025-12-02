import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2B2D42",
        tabBarInactiveTintColor: "#8D99AE",
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ title: "Home" }} 
      />

      <Tabs.Screen 
        name="search" 
        options={{ title: "Search" }} 
      />
    </Tabs>
  );
}