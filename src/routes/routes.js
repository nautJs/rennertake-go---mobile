import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Header from '../components/Header/';

import TopBar from '../components/TopBar/';
import ScannerCode from '../pages/ScannerCode';
import QRcode from '../pages/QRcode';
import Cart from '../pages/Cart/Cart';
import Confirm from '../pages/Confirm';
import Card from '../pages/Card/Card';

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
          {/* <Screen
              name="QRcode"
              component={QRcode}
              options={{
                headerShown: true,
                headerTransparent: true,

                header: (e) => <Header headerTransparent={false} showCancel={false} title="QR Code"/>
              }}
          />*/}
          <Screen
              name="Cart"
              component={Cart}
              options={{
                headerShown: true,
                header: (e) => <Header headerTransparent={false} showCancel={true} title="Carrinho"/>
              }}
          />
          <Screen
              name="QRcode"
              component={QRcode}
              options={{
                headerShown: true,
                headerTransparent: true,
                header: (e) => <Header headerTransparent={true} showCancel={false} title="QR Code"/>
              }}
          />



          <Screen
              name="Card"
              component={Card}
              options={{
                headerShown: true,
                header: (e) => <Header headerTransparent={false} showCancel={true} title="Pagamento"/>
              }}
          />

            <Screen
              name="Confirm"
              component={Confirm}
              options={{
                headerShown: true,
                header: (e) => <Header headerTransparent={false} showCancel={true} title="Confirmação"/>
              }}
          />

      </Navigator>

    </NavigationContainer>
    )
}
