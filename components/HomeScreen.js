import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bonjour Paris</Text>
      <FontAwesome name="heart" size={34} color="#0984e3" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  text: {
    color: "#ff7675",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
