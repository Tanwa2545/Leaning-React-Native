import { View, Text, TouchableOpacity } from "react-native"
import { myStyle } from "../styles/myStyles"

export default function Person({item,deleteData}){
  return(
    <TouchableOpacity onPress={()=>deleteData(item.id)}>
      <View style={myStyle.content}>
        <Text style={myStyle.header}>Name : {item.name} , Age : {item.age}</Text>
      </View>
    </TouchableOpacity>
  )
}