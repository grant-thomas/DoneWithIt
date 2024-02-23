import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors';
import defaultStyles from '../config/styles'


function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions, showChevrons, showVertical}) {
 
  return (
  
    // <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
      <View
        style={styles.container}>
        
        {IconComponent}
        {image && <Image source={image} style={styles.image}/>}
        
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
          {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
        
        </View>
        
        {showChevrons && <MaterialCommunityIcons name="chevron-right" size={25} color={defaultStyles.colors.medium}/>}

        
      </View>
      </TouchableHighlight>
    // </Swipeable>    
  );
}

const styles = StyleSheet.create({
  chevron: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  description: {
    marginLeft: 10,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  subTitle: {
    color: colors.medium,
    fontSize: 17
  },
  title: {
    fontWeight: "500"
  }

})

export default ListItem;