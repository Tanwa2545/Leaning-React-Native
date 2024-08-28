import { View, Text, TouchableOpacity } from "react-native"
import { myStyle } from "../styles/myStyles"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Person({item,deleteData}){
  return(
    <TouchableOpacity onPress={()=>deleteData(item.id)}>
      <View style={myStyle.content}>
        <Text style={myStyle.header}>Name : {item.name} , Age : {item.age}</Text>
        <MaterialIcons style={myStyle.icon} name="delete" size={24} color="black" />
      </View>
    </TouchableOpacity>
  )
}