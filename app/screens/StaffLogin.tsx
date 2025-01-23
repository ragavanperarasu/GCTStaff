import React,{useState, useEffect} from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import StudentTitle from "./TileBar/StaffTitle";
import { SelectList } from "react-native-dropdown-select-list";
import axios from "axios";

export default function StaffLogin() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [selected, setSelected] = useState("");
  const [err, setErr] = useState("");
  const [udata, setData] = useState("");




  const data = [
    { key: "1", value: "Civil" },
    { key: "2", value: "CSE" },
    { key: "3", value: "ECE" },
    { key: "4", value: "EEE" },
    { key: "5", value: "E&I" },
    { key: "6", value: "IBT" },
    { key: "7", value: "IT" },
    { key: "8", value: "Mechanical" },
    { key: "9", value: "Production" },
  ];

  function handleClick(){
    if (mail === "" || pass === "" || selected === ""){
      setErr("Please, Fill All Fields")
    }
    else{
      setErr("Checking...")
    

        const fetchData = async () => {
          try {
            const url = `https://api.github.com/repos/ragavanperarasu/MyGCTConfig/contents/StaffLogin/${selected}.json`;
    
            const token = "";
    
            const response = await axios.get(url, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            const content = atob(response.data.content);
            setData(JSON.parse(content));
          
            const result = udata.find(item => item.mail === mail && item.pass === pass)

            if(result === undefined){
              setErr("Please, Check Mail ID & Password")
            }
          } catch (error) {
            setErr("Network Error");
          }
        };
    
        fetchData();

    }
 


  }

  return (
    <View style={styles.container}>
      <StudentTitle />
      <View style={styles.logincon}>
        <View style={styles.logincon2}>
          <Text
            style={{
              fontSize: 30,
              marginBottom: 10,
              textAlign: "center",
              fontWeight: "700",
              color: "#DE3163",
            }}
          >
            Login
          </Text>
          <TextInput
            mode="outlined"
            label="Mail ID"
            placeholder="Mail ID"
            onChangeText={text => {
              setMail(text)
              setErr("")
        
            }}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Password"
            secureTextEntry
            onChangeText={text => {
              setPass(text)
              setErr("")
        
            }}
            style={styles.input}
          />

          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            placeholder="Select Depratment"
            boxStyles={{ marginTop: 20, borderRadius: 10 }}
            inputStyles={{ fontSize: 17 }}
          />

          <Button
            mode="contained"
            style={styles.but}
            labelStyle={styles.butlab}
            onPress={handleClick}
          >
            Login
          </Button>

          <Text
            style={{
              fontSize: 18,
              marginTop: 10,
              textAlign: "center",
              fontWeight: "500",
              color: "#DE3163",
            }}
          >
          {err}
          </Text>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  logincon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    margin: 20,
  },
  logincon2: {
    backgroundColor: "white",
    borderRadius: 10,

    padding: 20,
    width: "100%",
  },
  but: {
    backgroundColor: "#007FFF",
    borderRadius: 5,
    marginTop: 30,
    width: "100%",
  },
  butlab: {
    color: "white",
    fontSize: 20,
    padding: 5,
  },
  input: {
    marginTop: 15,
  },
});
