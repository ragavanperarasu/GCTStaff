import * as React from 'react';
import { View,ScrollView, StyleSheet,Linking } from 'react-native';
import { Avatar, Card} from 'react-native-paper';





export default function PageFive() {
  return (
    <View>
      <ScrollView style={{padding:10}}>
      <Card  style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in")}>
    <Card.Cover source={require('../../../assets/images/gctcollege.jpg')} style={styles.cardimg}/>
    <Card.Title
    title="GCT Website" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Official Website" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardtp} /></Card>

    <Card style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in/principal")}>
    <Card.Cover source={require('../../../assets/images/principle.jpg')} style={styles.cardimg}/>
    <Card.Title
    title="Dr.K.Manonmani" titleStyle={{fontSize:20, color:"white"}}
    subtitle="Principal" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardtp} /></Card>

    


    <Card  style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in/college-calendar")}>
    <Card.Title
    title="Calender" titleStyle={{fontSize:20, color:"white"}}
    subtitle="GCT Calender" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

<Card  style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in/forms")}>
    <Card.Title
    title="Forms" titleStyle={{fontSize:20, color:"white"}}
    subtitle="College" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>


    <Card  style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in/regulation-2022")}>
    <Card.Title
    title="Regulation - 2022" titleStyle={{fontSize:20, color:"white"}}
    subtitle="(UG) B.E. - FullTime" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

<Card  style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in/ug-parttime")}>
    <Card.Title
    title="Regulation - 2023" titleStyle={{fontSize:20, color:"white"}}
    subtitle="(UG) B.E. - PartTime" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

<Card  style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in/pg-full-time")}>
    <Card.Title
    title="Regulation - 2023" titleStyle={{fontSize:20, color:"white"}}
    subtitle="(PG) M.E. - FullTime" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

<Card  style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in/regulation-2018a")}>
    <Card.Title
    title="Regulation - 2018a" titleStyle={{fontSize:20, color:"white"}}
    subtitle="(UG) B.E. - FullTime" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>

<Card  style={styles.cardm} onPress={()=>Linking.openURL("https://gct.ac.in/regulations-2018")}>
    <Card.Title
    title="Regulation - 2018" titleStyle={{fontSize:20, color:"white"}}
    subtitle="(UG)+(PG) - FullTime" 
    subtitleStyle={styles.cards}
    left={(props) => <Avatar.Icon {...props} icon="bank" size={45} style={styles.cardi}/>}
    style={styles.cardt} /></Card>


    
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  cardm: {
    boxShadow:"5 5 5 gray", 
    margin:10,
  },
  cardimg: {
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0,
  },
  
  cardtp: {
    backgroundColor:"#32174D",
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    padding:30,
  },
  cardt: {
    backgroundColor:"#32174D",
    borderRadius:10,
    padding:30,
  },
  cardi: {
    backgroundColor: '#DE3163',
  },
  cards:{
      color:"white",
      
  },
  cardts:{
      fontSize:20,
      color:"white",
      fontWeight:700,
  }
});

