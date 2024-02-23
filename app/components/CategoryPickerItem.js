import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
  return (
    <>
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View >
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%"
  },
  label: {
    marginTop: 5,
    textAlign: "center"
  }
})

export default CategoryPickerItem;