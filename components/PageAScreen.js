import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PageAScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page A</Text>
      <Button title="Go to B" onPress={() => navigation.navigate("PageB")} />
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
    color: "#2ecc71",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
