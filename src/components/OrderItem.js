import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";
import Fontisto from "@expo/vector-icons/Fontisto";

const OrderItem = ({ order }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>{order.createdAt}</Text>
        <Text style={styles.total}>Total: ${order.total}</Text>
      </View>
      <Pressable
        style={styles.look}
        onPress={() => navigation.navigate("OrderDetail", { id: order.id })}
      >
        <Fontisto name="preview" size={48} color="black" />
        <Text>Ver detalle de la orden</Text>
      </Pressable>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  container: {
    borderBlockColor: colors.lightGray,
    borderWidth: 2,
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 3,
  },
  containerText: {
    gap: 20,
  },
  date: {
    fontSize: 16,
  },
  total: {
    fontSize: 20,
    fontWeight: "700",
  },
  look: {
    alignItems: "center",
  },
});
