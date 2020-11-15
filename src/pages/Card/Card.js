import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';


export default function Card() {
  const cardList = [
    {
      id: 'cardRenner',
      title: 'Cartão Renner',
      subtitle: 'Pague sua primeira parcela em até 60 dias',
      image: require('../../assets/img/rennercard.png'),
    },
    {
      id: 'cardCredit',
      title: 'Cartão de Credito',
      subtitle: 'Parcele suas compras em até 8x sem juros',
      image: require('../../assets/img/creditcard.png'),
    },
    {
      id: 'cardCaixa',
      title: 'Cartão virtual de Débito Caixa',
      subtitle: 'Pague sua compra no débito',
      image: require('../../assets/img/caixacard.png'),

    },
    {
      id: 'cardMine',
      title: 'Meu Cartão',
      subtitle: 'Parcele suas compras em até 10x sem juros - Confira as Regras',
      image: require('../../assets/img/mycard.png'),
    },
    {
      id: 'cardGift',
      title: 'Cartão Presente',
      subtitle: 'Ganhou um? Utilize ele agora mesmo :)',
      image: require('../../assets/img/giftcard.png'),
    },
  ];

  const Item = ({ item, onPress, style }) => {
    return (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Image style={styles.card} resizeMode="contain" source={item.image}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </TouchableOpacity>
  )};

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const borderColor = item.id === selectedId ? "#ff5252" : "#e8e8e8";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ borderColor }}
      />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.select}>Selecione a forma de pagamento e o número de parcelas</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={cardList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <View
        style={styles.hr}
      />
      <View style={styles.space}>
        <Text style={styles.leftText}>Produtos</Text>
        <Text style={styles.produtoPrice}>R$ 119,80</Text>
      </View>
      <View style={styles.space}>
        <Text style={styles.leftText}>Cupom</Text>
        <View style={styles.radius}>
          <TouchableOpacity style={styles.cupom}>
            <Text style={styles.cupomText}>inserir cupom</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={styles.hr}
      />

      <View style={styles.space}>
        <Text style={styles.leftText}>Total</Text>
        <Text style={styles.produtoPrice}>R$ 119,80</Text>
      </View>
      <TouchableOpacity style={styles.finalizar}>
        <Text style={styles.finalizarText}>FINALIZAR PEDIDO</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  item: {
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
    padding: 0,
    height: 207,
    width: 155,
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Lato_700Bold',
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
  },
  card: {
    width:53, height:39,
    alignSelf: 'center',
  },
  select: {
    flexDirection: 'row',
    fontSize: 23,
    fontFamily: 'Lato_700Bold',
    textAlign: 'center',
    marginTop: 40,
    marginHorizontal: 25,
  },
  hr: {
    borderBottomColor: '#dcdcdc',
    borderBottomWidth: 0.6,
    marginTop: 5,
    marginBottom: 5,
  },
  space: {
    flex:2,
    flexDirection:"row",
    justifyContent:'space-between',
    marginHorizontal: 10,
  },
  leftText: {
    marginTop: 20,
    fontFamily: 'Lato_400Regular',
    fontSize: 23
  },
  produtoPrice: {
    fontFamily: 'Lato_700Bold',
    fontSize: 22,
    marginTop: 20,
  },
  finalizar: {
    backgroundColor: '#4cc6a3',
    width: 414,
    height: 82,
    justifyContent: 'center',
    alignItems: 'center'
  },
  finalizarText: {
    color: '#FFF',
    fontFamily: 'Lato_300Light',
    fontSize: 18
  },

  cupomText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    height: 50,
    paddingTop:15,
    paddingHorizontal: 15,
    paddingBottom:15,
    color: '#000',
    textAlign:'center',
    backgroundColor:'#dcdcdc',
    borderBottomRightRadius: 15,
  },
  radius: {
    borderWidth: 1,
    borderColor: '#fff',
    height: 52,
    backgroundColor: '#000'
  }


});
