import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, Text, Button, List } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import Mapdata from './Mapdata';

function SavedComponent() {
  const [loadedIncidents, setLoadedIncidents] = useState(5);
  const [selectedIncident, setSelectedIncident] = useState(null);

  const loadMoreIncidents = () => {
    setLoadedIncidents(loadedIncidents + 5);
  };

  const allIncidents = Mapdata;
  const incidentsToShow = allIncidents.slice(0, loadedIncidents);

  const georgiaTechLibraryCoords = {
    latitude: 33.7756,
    longitude: -84.3963,
  };

  // ... (other coordinates)

  const handleMarkerPress = (incident) => {
    setSelectedIncident(incident);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Updates" titleStyle={{ fontSize: 24 }} />
      </Appbar.Header>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: georgiaTechLibraryCoords.latitude,
            longitude: georgiaTechLibraryCoords.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0021,
          }}
        >
          {/* Markers for various locations */}
          {/* ... */}
        </MapView>
      </View>

      <View style={styles.list}>
        <Text style={styles.listHeader}>Recently Saved</Text>
        {selectedIncident && (
          <List.Item
            title={`Recent places: ${selectedIncident.location}`}
            description={selectedIncident.ucrLiteral}
          />
        )}
        {recentlySaved.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleMarkerPress(item)}>
            <List.Item title={`Pin Point: ${item.location}`} description={item.ucrLiteral} />
          </TouchableOpacity>
        ))}
        {loadedIncidents < allIncidents.length && (
          <Button mode="contained" onPress={loadMoreIncidents}>
            Load More
          </Button>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  mapContainer: {
    height: 200,
  },
  map: {
    flex: 1,
  },
  list: {
    margin: 20,
    marginBottom: 80, // Adjust the marginBottom to move the touch components lower
  },
  listHeader: {
    fontSize: 20,
  },
});

export default SavedComponent;
