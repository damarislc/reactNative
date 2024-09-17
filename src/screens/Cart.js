import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/orders";
import { clearCart, deleteItemCart } from "../features/cart/cartSlice";
import Empty from "../components/Empty";

const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const dispatch = useDispatch();
  const [triggerPostOrder] = usePostOrderMutation();
  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      ...cart,
      createdAt,
    };
    triggerPostOrder({ order, localId });
    dispatch(clearCart());
    navigation.navigate("OrdersStack");
  };

  handleDeleteItem = (id) => {
    dispatch(deleteItemCart({ id }));
  };

  if (cart.items.length === 0)
    return <Empty text="No hay productos en tu carrito" />;
  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem item={item} handleDeleteItem={handleDeleteItem} />
        )}
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </Pressable>
        <Text style={styles.textConfirm}>Total: ${cart.total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
  },
  containerConfirm: {
    backgroundColor: colors.blueFerrek,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textConfirm: { color: "white", fontSize: 20 },
});
