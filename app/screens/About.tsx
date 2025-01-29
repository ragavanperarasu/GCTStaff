import React from "react";
import { View, ScrollView, StyleSheet, Image, Linking } from "react-native";
import { Button, Text } from "react-native-paper";

export default function About() {
  return (
    <View>
      <ScrollView style={{ padding: 10 }}>
        <View style={styles.container}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={styles.image}
          />
          <Text style={styles.vtext}>App Version : 1.0.0</Text>

          <Button
            icon="account-wrench"
            style={{
              backgroundColor: "#DE3163",
              borderColor: "#DE3163",
              marginTop: 30,
              width: "90%",
              padding: 8,
            }}
            textColor="white"
            onPress={() =>
              Linking.openURL("https://forms.gle/3ZkhAmA83QboobJT7")
            }
          >
            Report Any Issuse
          </Button>

          <Text style={styles.vtext}>App Developer</Text>

          <Button
            icon="linkedin"
            style={{
              backgroundColor: "#DE3163",
              borderColor: "#DE3163",
              marginTop: 30,
              width: "90%",
              padding: 8,
            }}
            textColor="white"
            onPress={() =>
              Linking.openURL("https://www.linkedin.com/in/ragavandevp/")
            }
          >
            LinkedIn Profile
          </Button>
        </View>
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
  vtext: {
    fontSize: 18,

    marginTop: 30,
    fontWeight: "800",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    borderRadius: 20,
  },
});
