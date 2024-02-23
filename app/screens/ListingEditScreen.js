import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
  { label: "Furniture", value: 1, icon: "floor-lamp", backgroundColor: "#fc5c65" },
  { label: "Cars", value: 2, icon: "car", backgroundColor: "#fd9644" },
  { label: "Cameras", value: 3, icon: "camera", backgroundColor: "#fed330" },
  { label: "Games", value: 4, icon: "cards", backgroundColor: "#26de81" },
  { label: "Clothing", value: 5, icon: "shoe-heel", backgroundColor: "#2bcbba" },
  { label: "Sports", value: 6, icon: "basketball", backgroundColor: "#45aaf2" },
  { label: "Movies & Music", value: 7, icon: "headphones", backgroundColor: "#4b7bec" },
  { label: "Books", value: 8, icon: "book", backgroundColor: "purple" },
  { label: "Other", value: 9, icon: "cards", backgroundColor: "grey" },
]

function ListingEditScreen(props) {
  const location = useLocation();
  
  return (
    <Screen style={styles.container}>
      
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        
        <FormImagePicker name="images" />
        
        <AppFormField 
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          placeholder="Title"
        />
        
        <AppFormField 
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        
        <AppFormPicker
          items={categories} 
          name="category"
          numberofColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        
        <AppFormField 
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        
        <SubmitButton title="Post" />
        
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default ListingEditScreen;