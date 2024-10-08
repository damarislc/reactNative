import { StyleSheet, Text, TextInput, View } from "react-native";
//import { fonts } from "../global/fonts";

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      <View>
        <Text style={styles.error}>{error ? error : ""}</Text>
      </View>
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: "white",
    padding: 2,
    fontFamily: "Poppins",
    color: "white",
    fontSize: 14,
    marginHorizontal: "5%",
    marginVertical: 10,
  },
  titleInput: {
    width: "90%",
    marginHorizontal: "5%",
    fontSize: 16,
    color: "white",
    fontFamily: "Poppins",
  },
  error: {
    fontSize: 16,
    color: "red",
    fontFamily: "Poppins",
    fontStyle: "italic",
    marginLeft: 20,
  },
});
