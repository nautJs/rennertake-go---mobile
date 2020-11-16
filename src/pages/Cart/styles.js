import { StyleSheet } from 'react-native';

export const stylesItem = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 20,
  },

  containerInfo: {
    flex: 1,
    marginLeft: 20,
    marginTop: 10,
  },

  brand: {
    marginBottom: 10,
  },

  name: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
  },

  buttonColor: {
    marginTop: 20,

    width: 120,
    height: 27,
    backgroundColor: '#E5E5E5',

    justifyContent: 'center',
    alignItems: 'center',

  },

  textButtonColor: {
    fontFamily: 'Lato_300Light',
    fontSize: 15,
    lineHeight: 18,
    color: '#000',
  },

  containerNumber: {
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 33,
    width: 41,
  },

  contentNumber: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  numberText: {
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
    color: '#000'
  },

  containerAmount: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 33,
    width: 41,
    backgroundColor: '#E5E5E5',
    marginLeft: 10,
  },

  amountText: {
    color: '#000',
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
  },

  prize: {
    fontFamily: 'Lato_400Regular',
    color: '#000',

  }

});

export const stylesWithItem = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  contentFooter: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  tableFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textTotal: {
    fontFamily: 'Lato_400Regular',
    fontSize: 12,
    color: '#000',
  },

  prizeTotal: {
    fontFamily: 'Lato_700Bold',
    fontSize: 20,
    color: '#000',
  },

  buttonOneClick: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginTop: 5,
    height: 49,
  },

  buttonOneClickText: {
    fontFamily: 'Lato_300Light',
    fontSize: 15,
    color: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  textCardDivi: {
    fontFamily: 'Lato_300Light',
    fontSize: 18,
  },

  textCardDiviStrong: {
    fontFamily: 'Lato_700Bold',
  },

  textCardDesc: {
    fontFamily: 'Lato_300Light',
    fontSize: 15,
  },

  buttonFinishBuy: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00AE7C',
    height: 49,
  },

  textButtonFinish: {
    fontFamily: 'Lato_300Light',
    fontSize: 15,
    color: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }

});

export const stylesNotItem = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  containerText: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  text: {
    fontFamily: 'Lato_300Light',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'Lato_400Regular',
    lineHeight: 60,
  },

  containerButton: {
    marginTop: 30,
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 15,

  },

  textButton: {
    color: '#FFF',
    fontFamily: 'Lato_400Regular',
    lineHeight: 26,
    fontSize: 22,
  },

});
