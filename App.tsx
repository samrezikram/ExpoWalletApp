import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from "expo-app-loading"; 
import { useFonts } from "expo-font"

// React Navigation
import RootStack from './navigators/RootStack';
import Welcome from './screens/Welcome';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf")
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <RootStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
