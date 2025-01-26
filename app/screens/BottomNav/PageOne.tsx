import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Linking } from "react-native";
import { Avatar, Card, Button } from "react-native-paper";

import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PageOne() {
  const [staffData, setStaffData] = useState({});

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
    setStaffData(std);
  };

  setCache();
  return (
    <View>
      <ScrollView style={{ padding: 10 }}>
        <Card style={styles.cardm}>
          <Card.Title
            title={staffData.name}
            titleStyle={styles.cardts}
            titleNumberOfLines={3}
            subtitle={staffData.qua}
            subtitleStyle={styles.cards}
            left={(props) => (
              <Image
                source={{
                  uri: staffData.imgurl,
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
              />
            )}
            style={styles.cardt}
          />
        </Card>

        <Card style={styles.cardm}>
          <Card.Title
            title="Create New Post"
            titleStyle={styles.cardts}
            titleNumberOfLines={3}
            subtitle="B.E. Students"
            subtitleStyle={styles.cards}
            left={(props) => (
              <Image
                source={require("../../../assets/images/mygct.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                }}
              />
            )}
            style={styles.cardt}
          />

          <Card.Actions>
            <Button
              icon="file-image-plus"
              style={{
                backgroundColor: "#DE3163",
                borderColor: "#DE3163",
                margin: 5,
              }}
              textColor="white"
              onPress={() =>
                Linking.openURL("https://forms.gle/yEgJUc77WkNQKoSE6")
              }
            >
              Create
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  cardm: {
    boxShadow: "0 0 20 gray",
    margin: 10,
  },
  cardt: {
    backgroundColor: "#32174D",
    borderRadius: 10,
    paddingVertical: 50,
  },
  cardi: {
    backgroundColor: "#DE3163",
  },
  cards: {
    color: "white",

    margin: "30%",
  },
  cardts: {
    fontSize: 18,
    color: "white",
    marginLeft: "30%",
    fontWeight: "800",
  },
});
