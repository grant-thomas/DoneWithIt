import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function GTAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      
      <View style={styles.heading}>
        <ListItem 
          title="Mosh Hamedani"
          subTitle="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        ></ListItem>
      </View>
      
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => console.log("Clicked 1.")}>
        <View style={styles.accountPages}>
          <View style={styles.listingsLogo}>
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={27}
              color={colors.white}
            />
          </View>
          <AppText style={styles.text}>My Listings</AppText>
        </View>
      </TouchableHighlight> 
      
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => console.log("Clicked 2.")}>
        <View style={styles.accountPages}>
          <View style={styles.messageLogo}>
            <MaterialCommunityIcons
              name="email"
              size={26}
              color={colors.white}
            />
          </View>
          <AppText style={styles.text}>My Messages</AppText>
        </View>
      </TouchableHighlight>
      
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => console.log("Clicked 3.")}>
        <View style={[styles.accountPages, { marginVertical: 20 }]}>
          <View style={styles.logOutLogo}>
            <MaterialCommunityIcons
              name="logout"
              size={26}
              color={colors.white}
            />
          </View>
          <AppText style={styles.text}>Log Out</AppText>
        </View>
      </TouchableHighlight>
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  accountPages: {
    flexDirection: "row",
    backgroundColor: colors.white,
    padding: 15,
    marginVertical: 1,
    alignItems: "center"
  },
  heading: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
  listingsLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  messageLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center"
  },
  logOutLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ffe66d",
    justifyContent: "center",
    alignItems: "center"
  },
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.light
  },
  text: {
    fontWeight: "500",
    paddingLeft: 10
  }
})

export default GTAccountScreen;