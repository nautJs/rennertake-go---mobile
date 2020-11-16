import React from 'react';

import { SafeAreaView, View, Text, Image } from 'react-native';

import { QRCode } from 'react-native-custom-qr-codes';

import { styles } from './styles';

const QRcode = () => {

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>
          Olá, <Text style={styles.strong}>Matt!</Text>
        </Text>
      </View>

      <View style={styles.containerQRCODE}>
        <QRCode
          content="MATT"
          innerEyeStyle="circle"
          outerEyeStyle="square"
          codeStyle="circle"
          size={330}
          logo={require('../../assets/img/logoRenner.png')}
        />
        <Text style={styles.textQRCODE}>Encoste o QR code no scanner</Text>
      </View>

      <View style={styles.containerLocal}>
        <View style={styles.contentLocal}>
          <Image
            style={styles.iconShopping}
            resizeMode="contain"
            source={require('../../assets/img/shopping.png')}
          />
          <Text style={styles.textLocal}>Shopping Palladium</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default QRcode;
