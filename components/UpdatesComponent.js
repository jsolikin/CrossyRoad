import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Appbar, Card, Title, Paragraph, Text, Button, List } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import Mapdata from './Mapdata';
import {
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function UpdatesComponent() {
  const [loadedIncidents, setLoadedIncidents] = useState(5);

  const loadMoreIncidents = () => {
    setLoadedIncidents(loadedIncidents + 5);
  };

  const allIncidents = Mapdata;
  const incidentsToShow = allIncidents.slice(0, loadedIncidents);

  const horizontalIncidents = incidentsToShow.slice(0, 4);
  const verticalIncidents = incidentsToShow.slice(4);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withDelay(
      2000 * Math.random(),
      withRepeat(
        withSequence(
          withTiming(0.4, { duration: 1000 }),
          withTiming(1, { duration: 1000 })
        ),
        -1,
        true
      ),
    ),
  }));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Updates" titleStyle={{ fontSize: 24 }} />
      </Appbar.Header>

      <ScrollView horizontal style={styles.scrollSection}>
        {horizontalIncidents.map((item, index) => (
          <Card key={index} style={[styles.card, animatedStyle]}>
            <Card.Content>
              <Title>Incident at {item.location}</Title>
              <MapView
                style={{ width: '100%', height: 200 }}
                initialRegion={{
                  latitude: item.latitude, // Replace with your location data
                  longitude: item.longitude, // Replace with your location data
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                  }}
                  title="Incident Location"
                />
              </MapView>
              <Paragraph>{item.ucrLiteral}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <View style={styles.list}>
        <Text style={styles.listHeader}>Other Incidents</Text>
        {verticalIncidents.map((item, index) => (
          <List.Item
            key={index}
            title={`Incident at ${item.location}`}
            description={item.ucrLiteral}
          />
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
  scrollSection: {
    flexDirection: 'row',
  },
  card: {
    width: 250,
    margin: 10,
  },
  list: {
    margin: 20,
  },
  listHeader: {
    fontSize: 20,
  },
});

export default UpdatesComponent;
