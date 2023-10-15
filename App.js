import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import SearchLocBar from './components/SearchLocBar.js';
import Dropdown from './components/Dropdown.js';
import BottomNav from './components/BottomNav.js';



export default function App() {
  const data = [
    // Your data points here








  ];


  //////Take out dropdowns?
  const dropdownOptions = [
    // Your dropdown options here
  ];

  return (
    <PaperProvider>
        <View style={styles.container}>
            <BottomNav />
        </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  searchBar: {
    position: 'absolute',
    top: 10, // Adjust the value as per your needs 10
    left: 10, //10
    right: 10, //10
    zIndex: 1,//1

  },
});
