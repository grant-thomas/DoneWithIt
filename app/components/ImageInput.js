import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import defaultStyles from '../config/styles';
import Icon from './Icon';


function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, [])
  
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert('You need to enable permission to access the library')
  };
  
  const handlePress = () => {
    if (!imageUri)
      selectImage();
    else
      Alert.alert('Delete', 'Are you sure you want to delete this image?', 
      [{ text: 'Yes', onPress: () => onChangeImage(null)}, { text: 'No' }]
      )
  }
  
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
    
      if (!result.canceled)  
        onChangeImage(result.assets[0].uri);
      
    } catch (error) {
      console.log('Error reading an image!');
    } 
  };
  
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && 
          <Icon 
            name="camera"
            backgroundColor={defaultStyles.colors.light}
            iconColor={defaultStyles.colors.medium}
            size={50}
          />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image}/>}
      </View>
    </TouchableWithoutFeedback>
  );
  }

  const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    height: 110,
    justifyContent: "center",
    marginTop: 20,
    width: 110,
    overflow: "hidden"
  },
  image: {
    height: "100%",
    width: "100%",
  }
  })

  export default ImageInput;