import * as React from 'react';
import { Text, ViewBase } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import MyRequests from './pages/MyRequests';
import About from './pages/About';

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="left"
        initialRouteName="Home"
        drawerStyle={{
          backgroundColor: "#FFF"
        }}
        drawerContentOptions={{labelStyle: {color: "#000"}}}
      >
        <Drawer.Screen name="Home" component={Home}
          options={{
            title: "Home",
            drawerIcon: () => (
              <IconSimpleLineIcons
                name="home"
                size={20}
                color="#000"
              />
            ), 
          }}
        />
        <Drawer.Screen name="MyAccount" component={MyAccount}
          options={{
            title: "Minha Conta",
            drawerIcon: () => (
              <IconSimpleLineIcons
                name="user"
                size={20}
                color="#000"
              />
            ), 
          }}
        />
        <Drawer.Screen name="MyRequests" component={MyRequests}
          options={{
            title: "Meus pedidos",
            drawerIcon: () => (
              <IconSimpleLineIcons
                name="basket"
                size={20}
                color="#000"
              />
            ),
          }}
        />
        <Drawer.Screen name="Sobre" component={About}
          options={{
            title: "Sobre",
            drawerIcon: () => (
              <IconSimpleLineIcons
                name="info"
                size={20}
                color="#000"
              />
            ),
          }}
        />
        {}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
