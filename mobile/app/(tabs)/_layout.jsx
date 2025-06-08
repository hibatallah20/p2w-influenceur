import { Tabs } from "expo-router"; 
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function TabLayout() {
    const insets = useSafeAreaInsets();
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        headerTitleStyle: {
            color: COLORS.textPrimary,
            fontWeight: "600",
        },
        headerShadowVisible: false,

        tabBarStyle: {
            backgroundColor: COLORS.cardBackground,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
            paddingTop: 5,
            paddingBottom: insets.bottom,
            height: 60 + insets.bottom,
    
        }
      }}
    >
        <Tabs.Screen 
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({color,size}) => (<Ionicons name="home-outline"
                size={size} color={color }
                />),
          }}
          />
        <Tabs.Screen 
           name="search"
           options={{
            title: "Search",
            tabBarIcon: ({color,size}) => (<Ionicons name="search-outline"
                size={size} color={color }
                />),
          }}
        />
        <Tabs.Screen 
           name="chat"
           options={{
           title: "Chat",
           tabBarIcon: ({color,size}) => (<Ionicons name="chatbubble-outline"
                size={size} color={color }
                />),
          }}
        />
        <Tabs.Screen 
           name="balance"
           options={{
           title: "Balance",
           tabBarIcon: ({color,size}) => (<Ionicons name="wallet-outline"
                size={size} color={color }
                />),
          }}
        />
      
    </Tabs>
  )
}