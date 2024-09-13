import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRegisterMutation } from "../services/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../global/colors";
import { registerSchema } from "../validations/registerSchema";
//import { fonts } from "../global/fonts";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerRegister, { data: dataMutation, isError, error, status }] =
    useRegisterMutation();
  //const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword });
      const { data } = await triggerRegister({ email, password });
      if (!data) setErrorEmail("Este correo ya está registrado.");
      else navigation.navigate("Login");
    } catch (error) {
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          setErrorPassword("");
          setErrorConfirmPassword("");
          break;
        case "password":
          setErrorPassword(error.message);
          setErrorEmail("");
          setErrorConfirmPassword("");
          break;
        case "confirmPassword":
          setErrorConfirmPassword(error.message);
          setErrorEmail("");
          setErrorPassword("");
          break;
      }
    }
    //dispatch(setUser({ email: data.email, idToken: data.idToken }));
  };
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={errorEmail}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={errorPassword}
        />
        <InputForm
          label="Confirmar Password"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={errorConfirmPassword}
        />
        <SubmitButton title="Registrarme" onPress={onSubmit} />
        <Text style={styles.sub}>Ya tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Incio de sesion</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.blueFerrek,
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    //fontFamily: fonts.Poppins,
    color: "white",
  },
  sub: {
    fontSize: 14,
    //fontFamily: fonts.Poppins,
    color: "white",
  },
  subLink: {
    fontSize: 14,
    //fontFamily: fonts.Poppins,
    color: colors.lightGray,
  },
});
