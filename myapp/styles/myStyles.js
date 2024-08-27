import { StyleSheet } from "react-native";

export const myStyle=StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff"
  },
  header:{
    fontSize: 25, 
    fontWeight: "bold"
  },
  content:{
    fontStyle:"italic"
  },
  image:{
    width: 300,
    height: 300
  }
});