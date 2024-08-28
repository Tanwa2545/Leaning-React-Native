import { StyleSheet } from "react-native";

export const myStyle=StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor: "#fff",
    marginVertical:50,
    marginHorizontal:10,
  },
  header:{
    fontSize: 24,
    fontWeight: "bold"
  },
  content:{
    backgroundColor:"lightblue",
    padding: 20,
    marginTop:15,
    borderWidth:2,
    borderColor:"black",
    borderStyle:"dashed",
    borderRadius:10
  },
  image:{
    width: 300,
    height: 300
  }
});