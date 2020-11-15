import { StyleSheet } from 'react-native';

export const stylesItem = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 20,
  },

  ContainerInfo: {
    flex: 1,
    marginLeft: 20,
    marginTop: 10,
  },

  Brand: {
    marginBottom: 10,
  },

  Name: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
  },

  ButtonColor: {
    marginTop: 20,

    width: 120,
    height: 27,
    backgroundColor: '#E5E5E5',

    justifyContent: 'center',
    alignItems: 'center',

  },

  TextButtonColor: {
    fontFamily: 'Lato_300Light',
    fontSize: 15,
    lineHeight: 18,
    color: '#000',
  },

  ContainerNumber: {
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 33,
    width: 41,
  },

  ContentNumber: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  NumberText: {
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
    color: '#000'
  },

  ContainerAmount: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 33,
    width: 41,
    backgroundColor: '#E5E5E5',
    marginLeft: 10,
  },

  AmountText: {
    color: '#000',
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
  },

  Prize: {
    fontFamily: 'Lato_400Regular',
    color: '#000',
    fontWeight: 'bold',

  }

});

export const stylesWithItem = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  Footer: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  ContentFooter: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  TableFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  TextTotal: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
  },

  PrizeTotal: {
    fontFamily: 'Lato_700Bold',
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
  },

  ButtonOneClick: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginTop: 5,
    height: 49,
  },

  ButtonOneClickText: {
    fontFamily: 'Lato_300Light',
    fontWeight: '300',
    fontSize: 15,
    color: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  TextCardDivi: {
    fontFamily: 'Lato_300Light',
    fontSize: 18,
  },

  TextCardDiviStrong: {
    fontFamily: 'Lato_700Bold',
    fontWeight: 'bold'
  },

  TextCardDesc: {
    fontFamily: 'Lato_300Light',
    fontSize: 15,
  },

  ButtonFinishBuy: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AE7C',
    height: 49,
  },

  TextButtonFinish: {
    fontFamily: 'Lato_300Light',
    fontWeight: '300',
    fontSize: 15,
    color: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }

});

export const stylesNotItem = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  ContainerText: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  Text: {
    fontFamily: 'Lato_300Light',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '300',
    lineHeight: 60,
  },

  ContainerButton: {
    marginTop: 30,
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 15,

  },

  TextButton: {
    color: '#FFF',
    fontWeight: '600',
    lineHeight: 26,
    fontSize: 22,
  },

});
