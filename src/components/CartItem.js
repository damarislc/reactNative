import { Pressable, StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../global/colors";

const CartItem = ({ item, handleDeleteItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.brand}>Cantidad: {item.quantity}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <Pressable onPress={() => handleDeleteItem(item.id)}>
        <Entypo name="trash" size={35} color="black" />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: colors.blueFerrek,
    marginVertical: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    justifyContent: "space-between",
  },
  containerText: {
    width: "70%",
    gap: 5,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  brand: {
    color: "white",
    fontSize: 16,
  },
  price: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});
