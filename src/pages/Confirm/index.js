import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView
  } from 'react-native';

import { stylesNotItem, stylesWithItem, stylesItem } from './styles';

export default function EmptyCart() {

    return(

        <SafeAreaView style={stylesNotItem.container}>
        <View style={stylesNotItem.containerText}>
        <Image
          style={stylesNotItem.img}
          source={require('../../assets/img/creditcard.png')}
        />
          <Text style={stylesNotItem.text}>
            Obrigado por comprar com a Renner!
          </Text>

          <TouchableOpacity
            style={stylesNotItem.containerButton}
          >
            <Text style={stylesNotItem.textButton}>
              Voltar para o início
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesNotItem.containerButton}
          >
            <Text style={stylesNotItem.textButton}>
              Ver recibo
            </Text>
          </TouchableOpacity>
        </View>


        </SafeAreaView>


    );




};
