import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },

  title: {
    fontSize: 50,
    lineHeight: 60,
    color: '#000',
    fontFamily: 'Lato_400Regular',
  },

  strong: {
    fontWeight: 'bold',
  },

  containerQRCODE: {
    marginTop: -40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textQRCODE: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Lato_400Regular',
  },

  containerLocal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },

  contentLocal: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textLocal: {
    fontFamily: 'Lato_400Regular',
    lineHeight: 30,
    color: '#000',
    fontSize: 25,
    paddingLeft: 5,
    marginLeft: 10,
  },

  iconShopping: {
    width: 36,
    height: 28,
  },

});
