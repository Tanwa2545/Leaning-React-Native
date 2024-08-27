import { View } from "react-native";
import { myStyle } from "./styles/myStyles";
import Person from "./components/Person";

export default function App() {
  return (
    <View style={myStyle.container}>
      <Person name={"Kong"} age={22}/>
      <Person name={"Karn"} age={20}/>
      <Person name={"Charlie"} age={21}/>
    </View>
  );
}

/*
<Image source={require("./assets/icon.png")} style={myStyle.image}></Image>
      <Image source={{uri:"https://picsum.photos/id/16/2500/1667"}} style={myStyle.image}></Image>
      <Text style={myStyle.header}>Maow</Text>
      <Text style={myStyle.header}>hellow : {developer.name} | {developer.year}</Text>
      <Button title="Update data" onPress={() => 
        setDeveloper({name: "Plink", year: 2567})}
      ></Button>
<Button title="See more" onPress={()=>Alert.alert("Alarm","AOUU")}></Button>
<View style={{ width: 80, height: 80, backgroundColor: "blue" , alignSelf:"flex-start"}}></View>
      <View style={{ width: 80, height: 80, backgroundColor: "yellow" }}></View>
      <View style={{ width: 80, height: 80, backgroundColor: "green" , alignSelf:"flex-end"}}></View>
*/
