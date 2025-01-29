import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Linking } from "react-native";
import { Avatar, Card, Button, Text } from "react-native-paper";
import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function PageThree() {
  const [staffData, setStaffData] = useState([]);
  const [err, setErr] = useState("");

  const cache = new Cache({
    namespace: "myapp",
    policy: {
      maxEntries: 50000,
      stdTTL: 0,
    },
    backend: AsyncStorage,
  });

  const setCache = async () => {
    const std = await cache.get("staff");
    setStaffData(std.post);
  };

  setCache();

  function profileFetch(result1:JSON) {
    setErr("Content Loading...");
    const fetchData2 = async () => {
    try {
      const url = `https://api.github.com/repos/ragavanperarasu/MyGCTConfig/contents/StaffProfile/${result1.dept}/StaffProfile${result1.dept}.json`;

      const token = "";

      const response2 = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const content2 = atob(response2.data.content);
      const d = JSON.parse(content2)

      const result2 = d.find((item) => item.id === result1.id);
      setErr("");
      await cache.set("staff", result2);
      setCache();
      

    } catch (error) {
      console.log(error)
      setErr("Network Error");
    }
  }
  fetchData2()

  }

  function handleClick(){
    const aresult1 = async()=>{
      const result1 = await cache.get("result1");
      console.log("Result 2 : "+result1)
      profileFetch(result1)
    }
    aresult1()
  }
  
  return (
    <View style={styles.container}>
      <Card style={{width:"100%", borderRadius:0}}>
    <Card.Actions>
      <Text>{err}</Text>
      <Button icon={"cached"} onPress={handleClick}>Refresh Page</Button>
    </Card.Actions>
  </Card>

      <ScrollView style={{ padding: 10 }}>

      {staffData.length > 0 &&
          (() => {
            const items = [];
            staffData.forEach((item) => {
              items.push(

                <Card style={styles.cardm} key={item.pid}>
          <Card.Title
            title={item.sub}
            titleStyle={styles.cardts}
            titleNumberOfLines={3}
            left={(props) => <Avatar.Icon {...props} icon='comment-processing' size={45} style={styles.cardi}/>}
            style={styles.cardt}
          />

<Card.Content style={{ margin: 5 }}>
            <Text variant="bodyMedium" style={styles.tex}>
              Post Title : {item.ptitle}
            </Text>
            <Text variant="bodyMedium" style={styles.tex}>
              Deparment : {item.dep}
            </Text>
            <Text variant="bodyMedium" style={styles.tex}>
              Semester : {item.sem}
            </Text>

            <Button
              icon="cloud-download"
              style={{
                backgroundColor: "#DE3163",
                borderColor: "#DE3163",
                marginTop: 30,
              }}
              textColor="white"
              onPress={() => Linking.openURL(item.drive)}
            >
              Download
            </Button>
          </Card.Content>
        </Card>

                
              );
            });
            return items;
          })()}

        

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  cardm: {
    boxShadow: "0 0 20 gray",
    margin: 10,
  },
  cardt: {
    backgroundColor: "#32174D",
    borderRadius: 10,
    paddingVertical: 35,
  },
  cardi: {
    backgroundColor: "#DE3163",
  },
  cards: {
    color: "white",

  },
  cardts: {
    fontSize: 18,
    color: "white",
  
    fontWeight: "800",
  },
  tex: {
    fontSize: 15,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontWeight: 700,
    color: "#DE3163",
    borderRadius: 10,
  },
});
