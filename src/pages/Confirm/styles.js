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

  img: {
    width: 157,
    height: 116,
    margin: 20
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
    width: 300,
    paddingVertical: 15,
    paddingHorizontal: 15,

  },

  TextButton: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '600',
    lineHeight: 26,
    fontSize: 22,
  },

});
