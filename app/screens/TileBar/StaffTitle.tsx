import React from 'react';
import { Avatar,Appbar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


export default function StudentTitle() {
  const navigation = useNavigation();
  return (
        <Appbar.Header style={{backgroundColor:"black"}}>
        <Avatar.Icon size={45} icon="account" style={{ backgroundColor:"black"}}/>
            <Appbar.Content title="Lecturer" color='#FFD700' titleStyle={{fontWeight:"700"}}/>
            <Appbar.Action icon="account-convert" color='white' onPress={()=>navigation.navigate("StaffLogin")}/>
            <Appbar.Action icon="react" color='white' onPress={()=>navigation.navigate("About")}/>
        </Appbar.Header>

  );
}


