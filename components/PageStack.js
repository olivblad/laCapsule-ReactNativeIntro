import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PageAScreen from "./PageAScreen";
import PageBScreen from "./PageBScreen";

const StackNav = createStackNavigator();

export default function PageStack() {
  return (
    <StackNav.Navigator>
      <StackNav.Screen name="PageA" component={PageAScreen} />
      <StackNav.Screen name="PageB" component={PageBScreen} />
    </StackNav.Navigator>
  );
}
