import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },

  ContainerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },

  Title: {
    fontSize: 50,
    lineHeight: 60,
    color: '#000',
    fontWeight: '100',
  },

  Strong: {
    fontWeight: 'bold',
  },

  ContainerQRCODE: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextQRCODE: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '300',
  },

  ContainerLocal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },

  ContentLocal: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  TextLocal: {
    fontWeight: 'normal',
    lineHeight: 30,
    color: '#000',
    fontSize: 25,
    paddingLeft: 5,
  },

  IconShopping: {
    width: 36,
    height: 28,
  },

});
