import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Header from '../components/Header/';


import TopBar from '../components/TopBar/';
import ScannerCode from '../pages/ScannerCode';

export default function Routes() {
    return (
    <NavigationContainer>
      <Navigator>
          {/* <Screen name="Menu" component={Menu}/> */}
          {/* <Screen
              name="Menu"
              component={TopBar}
              options={{
                headerShown: true,
                header: () => <Header showCancel={false} title="Qr Code"/>
              }}
          /> */}
          <Screen
              name="ScannerCode"
              component={ScannerCode}
              options={{
                headerShown: true,
                headerTransparent: true,

                header: (e) => <Header headerTransparent={true} showCancel={false} title="Escanear"/>
              }}
          />

      </Navigator>

    </NavigationContainer>
    )
}
