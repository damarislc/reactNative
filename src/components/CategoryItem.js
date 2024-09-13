import { Pressable, StyleSheet, Text, View } from "react-native";
import ShadowWrapper from "./ShadowWrapper";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <Pressable
      onPress={() => {
        dispatch(setCategorySelected(category));
        navigation.navigate("Products", { category });
      }}
    >
      <ShadowWrapper style={styles.container}>
        <Text style={styles.text}>{category}</Text>
      </ShadowWrapper>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: colors.blueFerrek,
    marginVertical: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  text: { fontSize: 16, color: "white", fontWeight: "700" },
});
