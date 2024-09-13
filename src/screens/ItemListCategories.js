import { FlatList, StyleSheet, SafeAreaView, View, Text } from "react-native";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shop";
import LoadingSpinner from "../components/LoadingSpinner";

const ItemListCategories = ({ route }) => {
  const category = useSelector((state) => state.shop.categorySelected);
  const {
    data: productsFilteredByCategory,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetProductsByCategoryQuery(category);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      const productsFiltered = productsFilteredByCategory.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLocaleLowerCase())
      );

      setProducts(productsFiltered);
    }
  }, [productsFilteredByCategory, keyword, isSuccess]);

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );

  return (
    <>
      <Search onSearch={setKeyword} />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({});
