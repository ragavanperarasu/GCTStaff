import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button} from "react-native-paper";
import { Cache } from "react-native-cache";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function StaffLogin() {
  const navigation = useNavigation();

  const token = "";

  const cache = new Cache({
    namespace: "myapp",
    policy: {
        maxEntries: 50000,
        stdTTL: 0 
    },
    backend: AsyncStorage
  });

  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  function profileFetch(result1:JSON) {
    setErr("Profile Loading...");
    const fetchData2 = async () => {
    try {
      const url = `https://api.github.com/repos/ragavanperarasu/MyGCTConfig/contents/StaffProfile/${result1.dept}/StaffProfile${result1.dept}.json`;

      const response2 = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const content2 = atob(response2.data.content);
      const d = JSON.parse(content2)

      const result2 = d.find((item) => item.id === result1.id);
      setErr("");
      await cache.set("name", result2.name);
      await cache.set("imgurl", result2.imgurl);
      await cache.set("staff", result2);
      navigation.navigate("StaffHome")

    } catch (error) {
      console.log(error)
      setErr("Profile Network Error");
    }
  }
  fetchData2()

  }

  function loginFetch(){
    setErr("Checking...");
    const fetchData = async () => {
      try {
        const url = `https://api.github.com/repos/ragavanperarasu/MyGCTConfig/contents/StaffLogin/CSE.json`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const content = atob(response.data.content);
        const d = JSON.parse(content)

        if(d.length > 0){
          const result1 = d.find(
            (item) => item.mail === mail && item.pass === pass
            );
        
            if (result1 === undefined) {
              setErr("Please, Check Mail ID & Password");
            } else {
              profileFetch(result1)
            }  
        }

        
      } catch (error) {
        console.log(error)
        setErr("Login Network Error");
      }
    };
    fetchData();



  }

  function handleClick() {
    if (mail === "" || pass === "") {
      setErr("Please, Fill All Fields");
    } else {
      loginFetch()
    }
  }

  return (
    <View style={styles.container}>
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
            onChangeText={(text) => {
              setMail(text);
              setErr("");
            }}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => {
              setPass(text);
              setErr("");
            }}
            style={styles.input}
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
    height: "100%",
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
