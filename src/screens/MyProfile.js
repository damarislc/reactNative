import { FlatList, Image, StyleSheet, View } from "react-native";
import SubmitButton from "../components/SubmitButton";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../services/users";
import LoadingSpinner from "../components/LoadingSpinner";
import Address from "../components/Address";

const MyProfile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: user, isLoading } = useGetUserQuery(localId);

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <Image
        source={
          user.image
            ? { uri: user.image }
            : require("../../assets/profile-default.png")
        }
        resizeMode="cover"
        style={styles.image}
      />
      <SubmitButton
        title="Cambiar imagen"
        onPress={() => navigation.navigate("ImageSelector")}
      />
      <SubmitButton
        title="Agregar ubicacion"
        onPress={() => navigation.navigate("LocationSelector")}
      />

      <FlatList
        data={user.locations}
        key={(item) => item.id}
        renderItem={({ item }) => <Address addressText={item.address} />}
      />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    gap: 20,
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
  },
});
