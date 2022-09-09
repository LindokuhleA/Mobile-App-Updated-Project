import React from 'react';
import { 
    SafeAreaView,
    Text 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LindoHomeScreen from './screens/LindoHomeScreen/LindoHomeScreen';
import LindoMenuScreen from './screens/LindoMenuScreen/LindoMenuScreen';
import LindoMyCartsScreen from './screens/LindoMyCartsScreen';
import LindoProductInforScreen from './screens/LindoProductInforScreen';
//import LindoProfileScreen from './screens/LindoProfileScreen';
import ScanningScreen from './screens/ScanningScreen/ScanningScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo, FontAwesome5, MaterialCommunityIcons, Foundation, Fontisto} from '@expo/vector-icons';
//import PaymentViewScreen from './src/screens/PaymentViewScreen/PaymentViewScreen';
import { AntDesign } from '@expo/vector-icons';

//import { COLORS, SIZES } from './Constants';


const Tab = createBottomTabNavigator();

export default function App2(){
  return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#DD0004',
            headerShown: false,
        }}>
                
        <Tab.Screen name="Home" component={LindoMenuScreen} options={{
            tabBarIcon: () =><Entypo name="home" size={24} color="#a9a9a9" />
        }} />

        <Tab.Screen name="Shop" component={LindoHomeScreen} options={{
            tabBarIcon: () =><Fontisto name="shopping-basket-add" size={24} color="#a9a9a9" />
        }}/>

        <Tab.Screen name="Scan" component={ScanningScreen} options={{
            tabBarIcon: () =><AntDesign name="scan1" size={24} color="#a9a9a9" />
            
        }}/>

        <Tab.Screen name="Cart" component={LindoMyCartsScreen} options={{
            tabBarIcon: () =><Entypo name="shopping-cart" size={24} color="#a9a9a9" />
        }}/>

        <Tab.Screen name="ProductInfo" component={LindoProductInforScreen} options={{
            tabBarIcon: () =><Foundation name="checkbox" size={24} color="#a9a9a9" />
        }}/>            
    </Tab.Navigator>    
  );
}