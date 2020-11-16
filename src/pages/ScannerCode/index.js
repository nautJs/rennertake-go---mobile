import React, {useEffect, useState} from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';

import { styles } from './styles';

const ScannerCode = () => {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Código de barras com tipo ${type} e dados ${data} foi escaneado!`);
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
        style={{
          flex: 1,
        }}
      />

      {scanned &&
        <Button
          title={'Toque para digitalizar novamente'}
          onPress={() => setScanned(false)}
        />
      }
    </View>
  );
};

export default ScannerCode;
