import React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TopBar from '../TopBar';
import ScannerCode from '../../pages/ScannerCode';

function BlogScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Blog</Text>
    </View>
  );
}

function CartaoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cartões</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bankai!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNav() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',

      }}
      >
        <Tab.Screen
         name="Lorja Virtual"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/img/Sacola_icon.png')                  
              }/>
         ),             
        }} 
          
        />

        <Tab.Screen
         name="Blog"
        component={BlogScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/img/Blog.png')                  
              }/>
         ),             
        }} 
          
        />

        <Tab.Screen
         name="Busca"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/img/Search.png')                  
              }/>
         ),             
        }} 
          
        />

        <Tab.Screen
         name="Cartões"
        component={CartaoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/img/Card.png')                  
              }/>
         ),             
        }} 
          
        />

        <Tab.Screen
         name="Menu"
         component={TopBar}
         options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={require('../../assets/img/Menu.png')                  
              }/>
         ),             
        }} 
         />

      </Tab.Navigator>
    </NavigationContainer>
  );
}