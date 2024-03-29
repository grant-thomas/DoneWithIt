import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { Image } from 'react-native';

import { AppForm, AppFormField, SubmitButton} from '../components/forms'
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      
      <AppForm
        initialValues={{ name: '', email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        
        <AppFormField 
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
          textContentType="name"
        />
        
      <AppFormField 
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField 
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"

          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        />              
        <SubmitButton title="Register" />
        
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default RegisterScreen;