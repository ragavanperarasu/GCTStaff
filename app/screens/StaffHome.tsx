import React from 'react';
import {View, StyleSheet} from 'react-native';

import StaffTitle from './TileBar/StaffTitle';
import Bottom from './BottomNav/Bottom'


export default function StaffHome() {


  return (
    <View style={styles.container}>
        <StaffTitle/>
        <Bottom/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  bottomBar: {
    backgroundColor: '#6200ee',
  },
});
