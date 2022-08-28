import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";
import CreateScreen from "../screens/CreateScreen";
import MarketScreen from "../screens/MarketScreen";
import UserScreen from "../screens/UserScreen";

import ButtonNew from "../components/ButtonNew";

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function AppStack() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarShowLabel: false, //nome abaixo dos ícones
      tabBarActiveTintColor: '#FFFF00',
      tabBarInactiveTintColor: '#0E2433',
      tabBarStyle:{
        position: 'absolute',
        backgroundColor: '#3792CB',
        borderTopWidth: 0,
        paddingBottom: 5,
        paddingTop: 5,
      },
      }}
    >
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({ size, color, focused }) => {
            if(focused){
              return <Ionicons name="home" size={size} color={color} />
            }

            return <Ionicons name="home-outline" size={size} color={color} />
        }
      }}
      />
      
      <Tab.Screen 
      name="Games" 
      component={ListScreen}
      options={{
        tabBarIcon: ({ size, color, focused }) => {
            if(focused){
              return <Ionicons name="search" size={size} color={color} />
            }

            return <Ionicons name="search-outline" size={size} color={color} />
        }
      }}
      />

      <Tab.Screen 
      name="New" 
      component={CreateScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ size, focused }) => (
          <ButtonNew size={size} focused={focused} />
        )
      }}
      />

      <Tab.Screen 
      name="Plans" 
      component={MarketScreen}
      options={{
        tabBarIcon: ({ size, color, focused }) => {
            if(focused){
              return <Ionicons name="cart" size={size} color={color} />
            }

            return <Ionicons name="cart-outline" size={size} color={color} />
        }
      }}
      />

      <Tab.Screen 
      name="Profile" 
      component={UserScreen} 
      options={{
        tabBarIcon: ({ size, color, focused }) => {
            if(focused){
              return <Ionicons name="person" size={size} color={color} />
            }

            return <Ionicons name="person-outline" size={size} color={color} />
        }
      }}
      />

    </Tab.Navigator>
  );
}

/*
const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );
}
*/


