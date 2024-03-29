import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

function AppPicker({ 
  icon,
  items,
  onSelectItem,
  numberofColumns = 1,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%" }) 
{
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
      <View style={[styles.container, {width}]}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>}
        
        { selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText> }
        
        <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium}/>
      </View>
    </TouchableWithoutFeedback>
    
    <Modal visible={modalVisible} animationType="slide">
      <Screen>
        <Button title="Close" onPress={() => setModalVisible(false)}/>

            <FlatList 
            data={items}
            keyExtractor={item => item.value.toString()}
            numColumns={numberofColumns}
            renderItem={({item}) => 
              <PickerItemComponent
                title={item.label}
                item={item}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />}
            />
      </Screen>
    </Modal>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1
  },
  text: {
    flex: 1,
  }
})

export default AppPicker;