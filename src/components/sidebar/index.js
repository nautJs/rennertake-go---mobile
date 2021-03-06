import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView} from 'react-native';


export default function SideBar() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navIcon}>
       <ImageBackground 
       style={styles.icon}
       source={require('../../assets/img/QR.png')}
       >
       </ImageBackground>

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
