import { Text, View, FlatList, Alert } from "react-native";
import Person from "./components/Person";
import AddForm from "./components/AddForm";
import { myStyle } from "./styles/myStyles"
import { useState } from "react";


export default function App() {
  const [data,setData] = useState([
    {id:1,name:"Kong",age:22},
    {id:2,name:"Karn",age:20},
    {id:3,name:"Charlie",age:21},
    {id:4,name:"Meow Meow Cat",age:13}
  ])

  const deleteData=(id)=>{
    console.log("Deleting id : "+id);
    setData((prevData)=>{
      return prevData.filter((item)=>item.id!=id)
    })
  }

  const insertData=(name,age)=>{
    console.log("Inserting Name : "+name+" , Age: "+age);
    if(name){
      setData((prevData)=>{
        return[
          {id:Math.random(),name,age},
          ...prevData
        ]
      })
    }else{
      Alert.alert("Warning","Please input name")
    }
  }

  return (
    <View style={myStyle.container}>
      <FlatList
        data={data}
        renderItem={({item})=>(
          <Person item={item} deleteData={deleteData}/>
        )}
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={<Text style={{alignSelf:"center",fontSize:30,fontWeight:"bold"}}>Student Data</Text>}
        ListEmptyComponent={<Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold"}}>No Data</Text>}
      />
      <AddForm insertData={insertData}/>
    </View>
  );
}

/*
<Person name={"Kong"} age={22}/>
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
