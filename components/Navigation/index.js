import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/SignInScreen'
import SignUpScreen from '../../screens/SignUpScreen';
import LindoMenuScreen from '../../screens/LindoMenuScreen';
import PaymentViewScreen from '../../screens/PaymentViewScreen/PaymentViewScreen';
import ScanningScreen from '../../screens/ScanningScreen/ScanningScreen'

import LindoApp from '../../LindoApp';

//Enable the stack navigator for pages
const Stack = createNativeStackNavigator();

export default window.Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false,
                    }}
                    initialRouteName={'SignUp'} //to be changed to sign
                >

                <Stack.Screen 
                    name="SignIn" 
                    component={SignInScreen} 
                />

                <Stack.Screen 
                    name="SignUp" 
                    component={SignUpScreen} 
                />

                <Stack.Screen 
                    name='LindoMenuScreen'
                    component={LindoApp}
                />

                <Stack.Screen 
                    name='Home'
                    component={LindoMenuScreen}
                />


                <Stack.Screen 
                    name="ProductScreen"
                    component={LindoApp}
                />

                <Stack.Screen 
                    name="PaymentViewScreen"
                    component={PaymentViewScreen}
                />

                <Stack.Screen 
                    name="Scan"
                    component={ScanningScreen}
                />

                {/* <Stack.Screen 
                    name="ScanScreen"
                    component={ScanScreen}
                />    */}

                {/* <Stack.Screen
                    name='ScanApp'
                    component={ScanApp}
                />      */}
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}


// # Installation

// ## Using npm

// ```sh
// npm install idb
// ```

// Then, assuming you're using a module-compatible system (like webpack, Rollup etc):

// ```js
// import { openDB, deleteDB, wrap, unwrap } from 'idb';

// async function doDatabaseStuff() {
//   const db = await openDB(…);
// }
// ```
