
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {

  return (
    <>
        <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
        </NavigationContainer>
    </>
  );
}