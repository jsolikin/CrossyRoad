import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Appbar, Card, Title, Paragraph, Text, Button, List } from 'react-native-paper';
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

  const verticalIncidents = incidentsToShow;

  const georgiaTechLibraryCoords = {
    latitude: 33.7756,
    longitude: -84.3963,
  };

  const techTowerCoords = {
    latitude: 33.7727,
    longitude: -84.3959,
  };

  const klausCoords = {
    latitude: 33.7774,
    longitude: -84.3967,
  };

  const georgiaAquariumCoords = {
    latitude: 33.7622,
    longitude: -84.3930,
  };

  const northAvenueApartmentsCoords = {
    latitude: 33.7722,
    longitude: -84.3895,
  };

  const studentCenterCoords = {
    latitude: 33.7735,
    longitude: -84.3961,
  };

  const recreationalCenterCoords = {
    latitude: 33.7728,
    longitude: -84.3944,
  };

  // Coordinates for Atlantic Station
  const atlanticStationCoords = {
    latitude: 33.7926,
    longitude: -84.3962,
  };

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
          <Marker
            coordinate={georgiaTechLibraryCoords}
            title="Georgia Tech Library"
            onPress={() => handleMarkerPress({ location: "Georgia Tech Library", ucrLiteral: "Library Incident" })}
          />
          <Marker
            coordinate={techTowerCoords}
            title="Tech Tower"
            onPress={() => handleMarkerPress({ location: "Tech Tower", ucrLiteral: "Tech Tower Incident" })}
          />
          <Marker
            coordinate={klausCoords}
            title="Klaus at Georgia Tech"
            onPress={() => handleMarkerPress({ location: "Klaus at Georgia Tech", ucrLiteral: "Klaus Incident" })}
          />
          <Marker
            coordinate={georgiaAquariumCoords}
            title="Georgia Aquarium"
            onPress={() => handleMarkerPress({ location: "Georgia Aquarium", ucrLiteral: "Aquarium Incident" })}
          />
          <Marker
            coordinate={northAvenueApartmentsCoords}
            title="North Avenue Apartments"
            onPress={() => handleMarkerPress({ location: "North Avenue Apartments", ucrLiteral: "Apartments Incident" })}
          />
          <Marker
            coordinate={studentCenterCoords}
            title="Student Center at Georgia Tech"
            onPress={() => handleMarkerPress({ location: "Student Center at Georgia Tech", ucrLiteral: "Student Center Incident" })}
          />
          <Marker
            coordinate={recreationalCenterCoords}
            title="Georgia Tech Recreational Center"
            onPress={() => handleMarkerPress({ location: "Georgia Tech Recreational Center", ucrLiteral: "Recreational Center Incident" })}
          />
          <Marker
            coordinate={atlanticStationCoords}
            title="Atlantic Station"
            onPress={() => handleMarkerPress({ location: "Atlantic Station", ucrLiteral: "Atlantic Station Incident" })}
          />
        </MapView>
      </View>

      <View style={styles.list}>
        <Text style={styles.listHeader}>Recently Saved</Text>
        {selectedIncident && (
          <List.Item
            title={`Incident at ${selectedIncident.location}`}
            description={selectedIncident.ucrLiteral}
          />
        )}
        {verticalIncidents.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleMarkerPress(item)}>
            <List.Item title={`Incident at ${item.location}`} description={item.ucrLiteral} />
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
  },
  listHeader: {
    fontSize: 20,
  },
});

export default SavedComponent;
