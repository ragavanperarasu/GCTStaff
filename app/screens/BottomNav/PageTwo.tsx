import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Image, Linking } from "react-native";
import { Card, Button, Text } from "react-native-paper";

import { Cache } from "react-native-cache";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PageTwo() {
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

          <Card.Content style={{ margin: 5 }}>
            <Text variant="bodyMedium" style={styles.tex}>
              Name : {staffData.name}
            </Text>
            <Text variant="bodyMedium" style={styles.tex}>
              Qualification : {staffData.qua}
            </Text>
            <Text variant="bodyMedium" style={styles.tex}>
              Designation : {staffData.des}
            </Text>
            <Text variant="bodyMedium" style={styles.tex}>
              Contact No : {staffData.mob}
            </Text>
            <Button
              icon="account"
              style={{
                backgroundColor: "#DE3163",
                borderColor: "#DE3163",
                marginTop: 30,
              }}
              textColor="white"
              onPress={() => Linking.openURL(staffData.fulld)}
            >
              View Full Porfile
            </Button>
          </Card.Content>
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
  tex: {
    fontSize: 15,
    marginTop: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontWeight: 700,
    color: "#DE3163",
    borderRadius: 10,
  },
});
