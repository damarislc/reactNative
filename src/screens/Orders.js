import { FlatList, StyleSheet, Text, View } from "react-native";
import OrderItem from "../components/OrderItem";
import { useGetOrdersByUserQuery } from "../services/orders";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
import Empty from "../components/Empty";

const Orders = () => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: orders, isLoading } = useGetOrdersByUserQuery(localId);

  if (isLoading) return <LoadingSpinner />;
  if (orders.length === 0)
    return <Empty text="No has realizado ninguna orden" />;

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
