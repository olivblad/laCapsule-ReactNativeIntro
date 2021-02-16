import React from "react";
import Home from "./components/HomeScreen";
import PageStack from "./components/PageStack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const icons = {
  Home: "home",
  Stack: "book",
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName = icons[route.name];
            return <FontAwesome name={iconName} size={24} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#0984e3",
          inactiveTintColor: "#dfe6e9",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Stack" component={PageStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
