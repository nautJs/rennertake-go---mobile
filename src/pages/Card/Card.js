import React, { useState } from 'react';
import { Alert, Modal, TouchableHighlight ,StyleSheet, Text, View, ImageBackground, StatusBar, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import MyPopup from './Popup';


export default function Card() {
  const [modalVisible, setModalVisible] = useState(false);
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
      subtitle: 'Parcele suas compras em até 10x sem juros',
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
      <TouchableOpacity
        style={styles.finalizar}
        onPress={() => {
          setModalVisible(true);
        }}
        >
        <Text style={styles.finalizarText}>FINALIZAR PEDIDO</Text>
      </TouchableOpacity>

      <MyPopup visible={modalVisible}>
    <View style={styles.modalContainer}>
       <Text style={styles.confirmText}>Confirmar compra?</Text>
        <View style={styles.spaceButton}>
          <TouchableHighlight
                    style={{ ...styles.cancelButton }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.cancelText}>CANCELAR</Text>
          </TouchableHighlight>
    <TouchableHighlight
              style={{ ...styles.confirmButton }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.cancelText}>CONFIRMAR</Text>
    </TouchableHighlight>
    </View>
</View>
</MyPopup>

    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginVertical: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  item: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 18,
    overflow: 'hidden',
    paddingTop: 18,
    width: 155,
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
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
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
    textAlign: 'center',
    marginTop: 15,
    marginHorizontal: 25,
  },
  hr: {
    flex: 1,
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
    fontSize: 18
  },
  produtoPrice: {
    fontFamily: 'Lato_700Bold',
    fontSize: 18,
    marginTop: 20,
  },
  finalizar: {
    backgroundColor: '#4cc6a3',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  finalizarText: {
    color: '#FFF',
    fontFamily: 'Lato_400Regular',
    fontSize: 18
  },

  cupomText: {
    fontFamily: 'Lato_700Bold',
    fontSize: 14,
    height: 45,
    paddingTop:13,
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
    height: 47,
    backgroundColor: '#000'
  },
  confirmText: {
    textAlign: 'center',
    fontFamily: 'Lato_400Regular',
    fontSize: 22,
    marginBottom: 30,
    marginTop: 20,
  },
  cancelText: {
    color: '#FFF',
    fontFamily: 'Lato_400Regular',
    textAlign: 'center'
  },
  cancelButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0f0f',
    elevation: 7
  },
  confirmButton: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4cc6a3',
    marginLeft: 20,
    elevation: 7
  },
  spaceButton: {
    flex:1,
    flexDirection:"row",
    justifyContent:'space-between',
    marginHorizontal: 20,

  },


});
