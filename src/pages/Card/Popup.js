import React from 'react';
import { Modal, View } from 'react-native';
  export default function MyPopup (props) {
    return (
          <Modal
              animationType="fade"
              transparent={true}
              visible={props.visible}
              >
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                      {props.children}
                  </View>
          </Modal>
      )
  }
