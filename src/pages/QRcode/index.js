import React from 'react';

import { SafeAreaView, View, Text, Image } from 'react-native';

import { QRCode } from 'react-native-custom-qr-codes';

import { styles } from './styles';

const QRcode = () => {

  return(
    <SafeAreaView style={styles.Container}>
      <View style={styles.ContainerTitle}>
        <Text style={styles.Title}>
          Olá, <Text style={styles.Strong}>Matt!</Text>
        </Text>
      </View>

      <View style={styles.ContainerQRCODE}>
        <QRCode
          content="MATT"
          innerEyeStyle="circle"
          outerEyeStyle="square"
          codeStyle="circle"
          size={330}
          logo={require('../../assets/img/logoRenner.png')}
        />
        <Text style={styles.TextQRCODE}>Encoste o QR code no scanner</Text>
      </View>

      <View style={styles.ContainerLocal}>
        <View style={styles.ContentLocal}>
          <Image
            style={styles.IconShopping}
            resizeMode="contain"
            source={require('../../assets/img/shopping.png')}
          />
          <Text style={styles.TextLocal}>Shopping Palladium</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default QRcode;
