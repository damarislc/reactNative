import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Empty = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: "90%",
    marginHorizontal: "5%",
    justifyContent: "center",
    borderColor: colors.lightGray,
    borderRadius: 3,
    borderWidth: 2,
    alignItems: "center",
  },
  text: {
    color: "#00000088",
    fontSize: 36,
    padding: 5,
  },
});
