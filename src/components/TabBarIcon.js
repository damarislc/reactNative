import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../global/colors";

const TabBarIcon = ({ icon, text, focused }) => {
  return (
    <View style={styles.container}>
      <Entypo
        style={styles.icon}
        name={icon}
        size={24}
        color={focused ? colors.blueFerrek : "#00000088"}
      />
      <Text style={{ color: focused ? colors.blueFerrek : "#00000088" }}>
        {text}
      </Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 5,
  },
  icon: {},
});
