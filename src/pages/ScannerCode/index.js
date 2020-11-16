import React, {useEffect, useState} from 'react';

import { View, Text, StyleSheet,  Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { BarCodeScanner } from 'expo-barcode-scanner';

import { styles } from './styles';

const ScannerCode = () => {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);


  const navigation = useNavigation();

  function handleToCart() {
    navigation.navigate('Cart')
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if(scanned){
      handleToCart();
    }
  }, [scanned]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
  };


  if (hasPermission === null) {
    return <Text>Solicitando permissão de câmera</Text>;
  }

  if (hasPermission === false) {
    return <Text>Sem acesso à câmera</Text>;
  }

  return(
    <View style={styles.Container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, {
          padding: 0,
          margin: 0,
          backgroundColor: '#000',
        }]}

      />
    </View>
  );
};

export default ScannerCode;
