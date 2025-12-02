import { Tabs } from "expo-router";
import { useTheme } from "styled-components/native";

import HomeIcon from "../../assets/svg/icons/home-icon.svg";
import SearchIcon from "../../assets/svg/icons/search-icon.svg";

export default function TabLayout() {

    const theme = useTheme();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.textSecondary,
                tabBarStyle: {
                    height: 72,
                    backgroundColor: theme.colors.surface,
                     paddingHorizontal: 17,
                },
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.regular,
                    fontSize: theme.fontSizes.lg,
                },
                tabBarItemStyle: {
                    paddingTop: 8,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <HomeIcon width={32} height={32} color={color} />
                    )
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ color }) => (
                        <SearchIcon width={32} height={32} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}