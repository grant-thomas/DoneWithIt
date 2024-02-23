import React from 'react';
import { StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function MenuItem({title, logo, logoBackground}) {
  return (
    <View style={styles.container}>
      <View style={[styles.logo,]}>
        
      </View>
    </View>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // margin: 15,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  title: {
    fontWeight: "500"
  }
})