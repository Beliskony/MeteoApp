
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { Ionicons } from '@expo/vector-icons';

export default function TabLayout(){
  return ( 
     <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
       
     <Drawer.Screen
        name="index"
        options={{
        title:'Acceuil',
        drawerIcon: ({ }) => (
        <Ionicons name= {'thunderstorm'} color="black" size={30}/>
         ),
        }}/>

      <Drawer.Screen
        name="Recherche"
        options={{
        title:'Recherche',
        drawerIcon: ({ }) => (
        <Ionicons name= {'grid'} color="black" size={30}/>
         ),
        }}/>

     </Drawer>
     </GestureHandlerRootView>
  );
};