import { View, Text } from "react-native"

export default function Person(props){
  console.log(props)
  return(
    <View>
      <Text>Name : {props.name} , Age : {props.age}</Text>
    </View>
  )
}