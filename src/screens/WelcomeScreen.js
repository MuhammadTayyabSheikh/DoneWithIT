import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You Don't Need.</Text>
      </View>
      <Text></Text>
      <AppButton title='Login'/>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: '#4ecdc4'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 80,
  }
})

export default WelcomeScreen;