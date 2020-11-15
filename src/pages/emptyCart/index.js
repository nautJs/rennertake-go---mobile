import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList} from 'react-native';

import { stylesNotItem, stylesWithItem, stylesItem } from './styles';

export default function EmptyCart() {
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
    <View style={stylesItem.Container}>
      <Image
        source={item.image}
      />
      <View style={stylesItem.ContainerInfo}>
        <Image
          source={item.brand}
          resizeMode="contain"
          style={stylesItem.Brand}
        />
        <Text
          style={stylesItem.Name}
        >{item.name}</Text>
        <TouchableOpacity style={stylesItem.ButtonColor}>
          <Text style={stylesItem.TextButtonColor}>Cor: {item.color}</Text>
        </TouchableOpacity>
        <View style={stylesItem.ContentNumber}>
          <View style={{flexDirection: 'row'}}>
            <View style={stylesItem.ContainerNumber}>
              <Text style={stylesItem.NumberText}>{item.number}</Text>
            </View>
            <View style={stylesItem.ContainerAmount}>
              <Text style={stylesItem.AmountText}>{item.amount}</Text>
            </View>
          </View>
          <View>
            <Text style={stylesItem.Prize}>R$ {item.prize}</Text>
          </View>
        </View>
      </View>
    </View>
  );



  if(false){
    return(
      <SafeAreaView style={stylesNotItem.Container}>
        <View style={stylesNotItem.ContainerText}>
          <Text style={stylesNotItem.Text}>
            NENHUM PRODUTO AINDA
          </Text>
          <Text style={stylesNotItem.Text}>
            ;-(
          </Text>
          <TouchableOpacity
            style={stylesNotItem.ContainerButton}
          >
            <Text style={stylesNotItem.TextButton}>
              Aproveite e escaneie um produto!
            </Text>
          </TouchableOpacity>
        </View>


        </SafeAreaView>
    );
  }

  return(
    <SafeAreaView style={stylesWithItem.Container}>
      <View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={stylesWithItem.Footer}>
        <View style={stylesWithItem.ContentFooter}>
          <View style={stylesWithItem.TableFlex}>
            <Text style={stylesWithItem.TextTotal}>Total</Text>
            <Text style={stylesWithItem.TextCardDivi}>
              ou em até <Text style={stylesWithItem.TextCardDiviStrong}>10x de 11,98</Text>
            </Text>
          </View>
          <View style={stylesWithItem.TableFlex}>
            <Text style={stylesWithItem.PrizeTotal}>R$ 59,90</Text>
            <Text style={stylesWithItem.TextCardDesc}>
              no cartão Renner
            </Text>
          </View>
          <View style={stylesWithItem.TableFlex}>
            <TouchableOpacity style={stylesWithItem.ButtonOneClick}>
              <Text style={stylesWithItem.ButtonOneClickText}>Finalizar com 1 click</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesWithItem.ButtonFinishBuy}>
              <Text style={stylesWithItem.TextButtonFinish}>Finalizar compra</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

