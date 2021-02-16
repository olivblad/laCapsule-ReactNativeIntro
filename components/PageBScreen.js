import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PageBScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Page B</Text>
      <Button title="Go to A" onPress={() => navigation.navigate("PageA")} />
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
    color: "teal",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
