import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../global/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const handleInput = (t) => {
    setInput(Number(t));
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCounter}>
        <Pressable style={styles.button} onPress={() => dispatch(decrement())}>
          <AntDesign name="minus" size={24} color="white" />
        </Pressable>
        <View style={styles.count}>
          <Text>{count}</Text>
        </View>
        <Pressable style={styles.button} onPress={() => dispatch(increment())}>
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={String(input)}
          onChangeText={handleInput}
        />
        <Pressable
          style={styles.button}
          onPress={() => dispatch(incrementByAmount(input))}
        >
          <Text style={{ color: "white" }}>Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: { alignItems: "center", margin: 5 },
  containerCounter: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.blueFerrek,
    minWidth: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 3,
    margin: 5,
  },
  count: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  containerInput: { flexDirection: "row", margin: 10 },
  input: {
    width: 60,
    borderWidth: 1,
    textAlign: "center",
    borderRadius: 3,
  },
});
