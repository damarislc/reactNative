import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useGetOrderByUserQuery } from "../services/orders";
import LoadingSpinner from "../components/LoadingSpinner";
import ProductItemOrder from "../components/ProductItemOrder";
import { colors } from "../global/colors";

const OrderDetail = ({ route }) => {
  const { id } = route.params;
  const localId = useSelector((state) => state.auth.localId);
  const {
    data: order,
    isLoading,
    isSuccess,
  } = useGetOrderByUserQuery({
    localId,
    orderId: id,
  });

  if (isLoading) return <LoadingSpinner />;

  let totalItems = 0;
  if (isSuccess) {
    order.items.forEach((item) => {
      totalItems += item.quantity;
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ver detalles del pedido</Text>
      <View style={styles.containerInfo}>
        <View style={styles.containerInfoDetail}>
          <Text style={styles.infoText}>Fecha de compra</Text>
          <Text>{order.createdAt}</Text>
        </View>
        <View style={styles.containerInfoDetail}>
          <Text style={styles.infoText}>N.° de pedido</Text>
          <Text>{id}</Text>
        </View>
        <View style={styles.containerInfoDetail}>
          <Text style={styles.infoText}>Total de la compra </Text>
          <Text>${order.total}</Text>
          <Text style={styles.totalItems}>({totalItems} artículos)</Text>
        </View>
      </View>
      <View style={styles.products}>
        <FlatList
          data={order.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItemOrder product={item} />}
        />
      </View>
    </View>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: "90%",
    marginHorizontal: "5%",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  containerInfo: {
    borderColor: colors.lightGray,
    borderRadius: 3,
    borderWidth: 2,
    padding: 5,
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  containerInfoDetail: {
    flexDirection: "row",
  },
  infoText: {
    color: "#00000088",
    width: 150,
  },
  totalItems: {
    color: "#00000088",
    marginLeft: 5,
  },
  products: {
    borderColor: colors.lightGray,
    borderRadius: 3,
    borderWidth: 2,
    padding: 5,
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
  },
});
