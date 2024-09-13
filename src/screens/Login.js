import { Pressable, StyleSheet, Text, View } from "react-native";
import InputForm from "../components/InputForm";
import { useEffect, useState } from "react";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../global/colors";
//import { fonts } from "../global/fonts";
import { useLoginMutation } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { insertSession } from "../db";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogin, { isError, error }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      setErrorEmail("Credenciales invalidas");
      setErrorPassword("Credenciales invalidas");
    }
  }, [isError]);

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
      insertSession(data);
    } catch (error) {
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          setErrorPassword("");
          break;
        case "password":
          setErrorPassword(error.message);
          setErrorEmail("");
          break;
      }
    }
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
        <SubmitButton onPress={onSubmit} title="Iniciar sesion" />
        <Text style={styles.sub}>No tienes cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.sublink}>Registrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

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
    color: "white",
    //fontFamily: fonts.Poppins,
  },
  sublink: {
    fontSize: 14,
    // fontFamily: fonts.Poppins,
    color: colors.lightGray,
  },
});
