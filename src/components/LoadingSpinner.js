import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color="#00000088" />
    </View>
  );
};

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGray,
  },
});
