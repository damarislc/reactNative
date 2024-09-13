import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductItemOrder = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: product.thumbnail }}
      />
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>Cantidad: {product.quantity}</Text>
          <Text style={styles.info}>Marca: {product.brand}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItemOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 3,
  },
  titleContainer: {
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    width: 200,
    fontWeight: "700",
  },
  infoContainer: {
    marginLeft: 10,
  },
  info: {
    color: "#00000088",
  },
});
