import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView} from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>

       <View >
        <ImageBackground
        resizeMode="contain"
        style={styles.box1}
        source={require('../../assets/img/abs.png')}
        >
        </ImageBackground>
       </View>

       <View >
        <ImageBackground
        resizeMode="contain"
        style={styles.box2}
        source={require('../../assets/img/anuncio.png')}
        >
        </ImageBackground>
       </View>
       
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    //justifyContent: "flex-end",
  },

  box1:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width:  Math.round(Dimensions.get('window').width),  
    height: "100%",
  },

  box2:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width:  Math.round(Dimensions.get('window').width),  
    height: "100%",
  },


});
