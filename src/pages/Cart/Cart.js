import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList} from 'react-native';

import { stylesNotItem, stylesWithItem, stylesItem } from './styles';
import EmptyCart from './EmptyCart';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {
  const [items, setItems] = useState([{
    id: 1,
    image: require('../../assets/img/cart1.png'),
    brand: require('../../assets/img/blueStell.png'),
    name: 'Camiseta com Estampa',
    color: 'Amarela',
    number: 'M',
    amount: '1',
    prize: '59.90'
  }]);


  const renderItem = ({item}) => (
    <View style={stylesItem.container}>
      <Image
        source={item.image}
      />
      <View style={stylesItem.containerInfo}>
        <Image
          source={item.brand}
          resizeMode="contain"
          style={stylesItem.brand}
        />
        <Text
          style={stylesItem.name}
        >{item.name}</Text>
        <TouchableOpacity style={stylesItem.buttonColor}>
          <Text style={stylesItem.textButtonColor}>Cor: {item.color}</Text>
        </TouchableOpacity>
        <View style={stylesItem.contentNumber}>
          <View style={{flexDirection: 'row'}}>
            <View style={stylesItem.containerNumber}>
              <Text style={stylesItem.numberText}>{item.number}</Text>
            </View>
            <View style={stylesItem.containerAmount}>
              <Text style={stylesItem.amountText}>{item.amount}</Text>
            </View>
          </View>
          <View>
            <Text style={stylesItem.prize}>R$ {item.prize}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const navigation = useNavigation();
  function handleNavigateToFinalPage() {
    navigation.navigate('Confirm')
  }

  function handleNavigateToCartPage() {
    navigation.navigate('Card')
  }


  if(false){
    return(
      <EmptyCart/>
    );
  }

  return(
    <SafeAreaView style={stylesWithItem.container}>
      <View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={stylesWithItem.footer}>
        <View style={stylesWithItem.contentFooter}>
          <View style={stylesWithItem.tableFlex}>
            <Text style={stylesWithItem.textTotal}>Total</Text>
            <Text style={stylesWithItem.textCardDivi}>
              ou em até <Text style={stylesWithItem.textCardDiviStrong}>10x de 11,98</Text>
            </Text>
          </View>
          <View style={stylesWithItem.tableFlex}>
            <Text style={stylesWithItem.prizeTotal}>R$ 59,90</Text>
            <Text style={stylesWithItem.textCardDesc}>
              no cartão Renner
            </Text>
          </View>
          <View style={stylesWithItem.tableFlex}>
            <TouchableOpacity
              onPress={handleNavigateToFinalPage}
              style={stylesWithItem.buttonOneClick}
            >
              <Text style={stylesWithItem.buttonOneClickText}>Finalizar com 1 click</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleNavigateToCartPage}
              style={stylesWithItem.buttonFinishBuy}
            >
              <Text style={stylesWithItem.textButtonFinish}>Finalizar compra</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

