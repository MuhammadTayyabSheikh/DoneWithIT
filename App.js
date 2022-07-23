import { StyleSheet, View, SafeAreaView, Button, Alert, StatusBar, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './src/components/AppText';
import ViewImageScreen from './src/screens/ViewImageScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AppButton from './src/components/AppButton';


export default function App() {
  // console.log(useDimensions());
  return (
    <WelcomeScreen />
    // <ViewImageScreen/>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
