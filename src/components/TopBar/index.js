import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, Dimensions, SafeAreaView} from 'react-native';

import QRcode from '../../pages/QRcode';

import { useNavigation } from '@react-navigation/native';

export default function TopBar() {

  const navigation = useNavigation();

  function handleNavigateToQR() {
    navigation.navigate('QRcode')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navIcon}>
        <TouchableOpacity onPress={() => handleNavigateToQR()}>
          <ImageBackground
          style={styles.icon}
          source={require('../../assets/img/QR.png')}
          >
          </ImageBackground>
        </TouchableOpacity>
       <ImageBackground
       resizeMode="contain"
       style={styles.icon}
       source={require('../../assets/img/Heart.png')}
       >
       </ImageBackground>

       <ImageBackground
       resizeMode="contain"
       style={styles.icon}
       source={require('../../assets/img/Sacola.png')}
       >
       </ImageBackground>

      </View>

       <View style={styles.container}>
        <ImageBackground
        resizeMode="contain"
        style={styles.menuPrint}
        source={require('../../assets/img/menu_print.png')}
        >

        </ImageBackground>

       </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff'
    //justifyContent: "flex-end",
  },

  navIcon: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  icon: {
    height: 30,
    width: 30,
    marginTop: 50,
    marginHorizontal: 12,
  },

  menuPrint: {
    width:  Math.round(Dimensions.get('window').width),
    height: "100%",
  },

});
