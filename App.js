import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView
} from 'react-native';
//import LindoApp from './LindoApp';
import Navigation from './components/Navigation';
//import ScanningApp from './ScanningApp';
//import Scanning from './Scanning/Scanning';

export default function App2() {
  return(
    <SafeAreaView style={styles.root}>
        <Navigation />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  }
})