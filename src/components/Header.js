import { Pressable, StyleSheet, Text, StatusBar, Platform } from "react-native";
import ShadowWrapper from "./ShadowWrapper";
import { colors } from "../global/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { deleteSession } from "../db";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/auth/authSlice";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);
  const logout = () => {
    deleteSession();
    dispatch(clearUser());
  };
  return (
    <ShadowWrapper style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {idToken && (
        <Pressable style={styles.logout} onPress={logout}>
          <MaterialIcons name="logout" size={30} color="black" />
        </Pressable>
      )}
    </ShadowWrapper>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.lightGray,
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: 15,
  },
  text: {
    fontSize: 25,
    fontFamily: "Poppins",
  },
  logout: {
    position: "absolute",
    right: 10,
  },
});
