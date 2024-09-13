import { FlatList, StyleSheet } from "react-native";

import CategoryItem from "./CategoryItem";
import { useGetCategoriesQuery } from "../services/shop";
import LoadingSpinner from "./LoadingSpinner";
//import { useSelector } from "react-redux";

const Categories = () => {
  //const categories = useSelector((state) => state.shop.categories);
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useGetCategoriesQuery();

  if (isLoading) return <LoadingSpinner />;

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <CategoryItem category={item} />}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
