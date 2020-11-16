import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>

       <View >
        <TouchableOpacity>
          <ImageBackground
          resizeMode="contain"
          style={styles.box1}
          source={require('../../assets/img/Home.png')}
          >
          </ImageBackground>
        </TouchableOpacity>
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
    width:  Math.round(Dimensions.get('window').width),
    height: "100%",
  },

});
