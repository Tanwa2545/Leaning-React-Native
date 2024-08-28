import { View, TextInput, Button } from "react-native";
import { myStyle } from "../styles/myStyles";
import { useState } from "react";

export default function AddForm({insertData}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(15);
  return (
    <View>
      <TextInput
        style={myStyle.input}
        placeholder="Input name"
        keyboardType="default"
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        style={myStyle.input}
        placeholder="Input age"
        keyboardType="numeric"
        onChangeText={(value) => setAge(value)}
      />
      <Button title="Add data" onPress={()=>insertData(name,age)}/>
    </View>
  );
}
