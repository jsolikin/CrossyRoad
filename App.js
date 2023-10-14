
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MapView, { Heatmap } from 'react-native-maps';
import { PaperProvider } from 'react-native-paper';
import SearchLocBar from './components/SearchLocBar.js';
import Dropdown from './components/Dropdown.js';
import BottomNav from './components/BottomNav.js';


// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from './HomeScreen'; // Replace with your screen components


export default function App() {
  const data = [
    { latitude: 37.782551, longitude: -122.445368 },
    { latitude: 37.782745, longitude: -122.444586 },
    { latitude: 37.782842, longitude: -122.443688 },
    { latitude: 37.782919, longitude: -122.442815 },
    { latitude: 37.782992, longitude: -122.442112 },
    { latitude: 37.783100, longitude: -122.441461 },
    { latitude: 37.783206, longitude: -122.440829 },
    { latitude: 37.783273, longitude: -122.440324 },
    { latitude: 37.783316, longitude: -122.440023 },
    { latitude: 37.783357, longitude: -122.439794 },
    { latitude: 37.783371, longitude: -122.439687 },
    { latitude: 37.783368, longitude: -122.439666 },
    { latitude: 37.783383, longitude: -122.439594 },
    { latitude: 37.783508, longitude: -122.439525 },
    { latitude: 37.783842, longitude: -122.439591 },
    { latitude: 37.784147, longitude: -122.439668 },
    { latitude: 37.784206, longitude: -122.439686 }
  ];

  const dropdownOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider='google'
          showsMyLocationButton={true}
          showsUserLocation={true}
          initialRegion={{
            latitude: 33.7490,
            longitude: -84.3880,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Heatmap
            points={data}
            radius={40}
            opacity={0.6}
            gradient={{
              colors: ["#00BFFF", "#FFA500", "#FF0000"],
              startPoints: [0.1, 0.4, 1],
              colorMapSize: 256
            }}
          />
        </MapView>
        <SafeAreaView style={styles.searchBarContainer}>
          <Dropdown
            options={dropdownOptions}
            onSelect={(selectedOption) => console.log(selectedOption)}
          />
          <BottomNav />
        </SafeAreaView>

  
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
  searchBarContainer: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    zIndex: 1
  },
  searchBar: {
    position: 'absolute',
    top: 10, // Adjust the value as per your needs
    left: 10,
    right: 10,
    zIndex: 1
  }
  
});