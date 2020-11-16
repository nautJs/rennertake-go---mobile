import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList} from 'react-native';

import { stylesNotItem, stylesWithItem, stylesItem } from './styles';

export default function EmptyCart () {
return (
  <SafeAreaView style={stylesNotItem.container}>
        <View style={stylesNotItem.containerText}>
          <Text style={stylesNotItem.Text}>
            NENHUM PRODUTO AINDA
          </Text>
          <Text style={stylesNotItem.Text}>
            ;-(
          </Text>
          <TouchableOpacity
            style={stylesNotItem.containerButton}
          >
            <Text style={stylesNotItem.TextButton}>
              Aproveite e escaneie um produto!
            </Text>
          </TouchableOpacity>
        </View>


        </SafeAreaView>
)
}
