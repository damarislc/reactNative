import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ product }) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { id: product.id })}
    >
      <View style={styles.textContainer}>
        <Text
          style={
            (styles.title, width < 300 ? styles.titleMin : styles.titleMax)
          }
        >
          {product.title}
        </Text>
      </View>

      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: product.thumbnail,
        }}
      />
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.lightGray,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    width: "90%",
    marginHorizontal: "5%",
    gap: 10,
    borderRadius: 3,
    borderWidth: 1,
    flex: 1,
  },
  textContainer: {
    flexWrap: "wrap",
    flexShrink: 1,
    flexDirection: "row",
  },
  title: {},
  titleMin: {
    fontSize: 14,
  },
  titleMax: {
    fontSize: 20,
  },
  image: {
    minWidth: 80,
    width: "20vw",
    maxWidth: 150,
    minHeight: 80,
    height: "20vw",
    maxHeight: 150,
    borderRadius: 3,
  },
});
