import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../global/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [inputText, setInputText] = useState("");
  const [colorButtons, setColorButtons] = useState("gray");
  const [disableButtons, setDisableButtons] = useState(true);
  const [error, setError] = useState("");

  const handleInputChange = (text) => {
    setError("");
    setInputText(text);
    if (!text) {
      handleDisableButtons();
    } else {
      setColorButtons("black");
      setDisableButtons(false);
    }
  };

  const removeInput = () => {
    setInputText("");
    handleDisableButtons();
    onSearch("");
    setError("");
  };

  const handleDisableButtons = () => {
    setColorButtons("gray");
    setDisableButtons(true);
  };

  const search = () => {
    const regex = /[^a-zA-Z0-9 ]/;
    if (regex.test(inputText)) setError("No se admiten caracteres especiales");
    else onSearch(inputText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Buscar producto"
          placeholderTextColor="#ffe"
          style={styles.input}
          value={inputText}
          onChangeText={handleInputChange}
          onSubmitEditing={search}
        />
        <Pressable onPress={search} disabled={disableButtons}>
          <AntDesign
            style={styles.search}
            name="search1"
            size={28}
            color={colorButtons}
          />
        </Pressable>
        <Pressable onPress={removeInput} disabled={disableButtons}>
          <MaterialIcons
            style={styles.cancel}
            name="cancel"
            size={28}
            color={colorButtons}
          />
        </Pressable>
      </View>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { margin: 10 },
  containerInput: { flexDirection: "row", alignItems: "center" },
  input: {
    backgroundColor: colors.blueFerrek,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    textDecorationColor: "white",
    flex: 1,
    color: "white",
  },
  search: { marginRight: 10 },
  cancel: { marginRight: 10 },
  error: { color: "red", fontWeight: "bold", marginLeft: 10 },
});
