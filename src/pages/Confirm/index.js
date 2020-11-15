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

        <SafeAreaView style={stylesNotItem.Container}>
        <View style={stylesNotItem.ContainerText}>
        <Image
          style={stylesNotItem.img}
          source={require('../../assets/img/creditcard.png')}
        />
          <Text style={stylesNotItem.Text}>
            Obrigado por comprar com a Renner!
          </Text>

          <TouchableOpacity
            style={stylesNotItem.ContainerButton}
          >
            <Text style={stylesNotItem.TextButton}>
              Voltar para o início
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={stylesNotItem.ContainerButton}
          >
            <Text style={stylesNotItem.TextButton}>
              Ver recibo
            </Text>
          </TouchableOpacity>
        </View>


        </SafeAreaView>


    );




};
