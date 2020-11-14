import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView} from 'react-native';
import Routes from './src/routes/routes';
import { useFonts } from 'expo-font';
import { Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic } from '@expo-google-fonts/lato'

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Routes/>
  );
}


