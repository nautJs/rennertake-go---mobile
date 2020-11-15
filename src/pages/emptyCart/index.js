import React from 'react';
import { Button, Text, View, SafeAreaView} from 'react-native';
import { styles } from './styles';

export default function EmptyCart() {

  return(
    <SafeAreaView style={styles.Container}>
      <View style={styles.ContainerText}>
        <Text style={styles.Text}>
          Nenhum produto ainda ;-(
        </Text>
        <Button
        title="Aproveite e escaneie um produto"
        color="#000000"
        />
      </View>
      

      </SafeAreaView>
  );
};

