import React from 'react';
import { Avatar,Appbar } from 'react-native-paper';


export default function StudentTitle() {
  return (
        <Appbar.Header style={{backgroundColor:"black"}}>
        <Avatar.Icon size={45} icon="account" style={{ backgroundColor:"black"}}/>
            <Appbar.Content title="Student" color='#FFD700' titleStyle={{fontWeight:"700"}}/>
            <Appbar.Action icon="dots-vertical" color='white'/>
        </Appbar.Header>

  );
}


