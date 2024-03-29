import React from 'react';
import { Image, Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function Card({title, subTitle, image, onPress}) {
  
  return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          
          <Image style={styles.image} source={image} />
          
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
          </View>
          
        </View>
      </TouchableWithoutFeedback>
      
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden"
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  }
})

export default Card;