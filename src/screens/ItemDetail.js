import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../global/colors";
import { addItemCart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useGetProductQuery } from "../services/shop";
import LoadingSpinner from "../components/LoadingSpinner";

const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const { data: product, isLoading } = useGetProductQuery(id);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddItemCart = () => {
    dispatch(addItemCart({ ...product, quantity: 1 }));
    navigation.navigate("CartStack");
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{ uri: product.thumbnail }}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Precio: ${product.price}</Text>
        </View>
        <Pressable style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 5,
  },
  containerDetail: {},
  containerText: { gap: 20, margin: 20, width: "80%", marginHorizontal: "10%" },
  image: {
    width: "80%",
    height: 250,
    marginVertical: 10,
    alignSelf: "center",
  },
  title: { fontSize: 20 },
  description: { fontSize: 18 },
  price: { fontSize: 20, fontWeight: "bold" },
  button: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: colors.blueFerrek,
    alignItems: "center",
    borderRadius: 3,
    padding: 10,
  },
  buttonText: { color: "white", fontSize: 20 },
});
