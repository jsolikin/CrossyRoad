import React, { useState } from 'react';
import MapView, { Heatmap, Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import Mapdata from './Mapdata';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'; // Or whichever icon library you use



const MapComponent = () => {
    const [region, setRegion] = useState({
        latitude: 33.7490,
        longitude: -84.3880,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
    });

    const ZOOM_THRESHOLD = 0.05;  // Adjust this based on your preference

    return (
        <MapView
            style={styles.map}
            provider='google'
            showsMyLocationButton={true}
            showsUserLocation={true}
            initialRegion={region}
            onRegionChangeComplete={setRegion}
        >
            {region.latitudeDelta > ZOOM_THRESHOLD ? (
                <Heatmap
                    points={Mapdata}
                    radius={100}
                    opacity={0.9}
                    gradient={{
                        colors: ["#0000FF", "#00BFFF", "#FFFF00", "#FFA500", "#FF0000"],
                        startPoints: [0.05, 0.2, 0.4, 0.6, 0.8],
                        colorMapSize: 256,
                    }}
                />
            ) : (
                Mapdata.map((point, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: point.latitude, longitude: point.longitude }}
                        
                    >
                        <Callout tooltip>

                            <View style={styles.calloutView}>
                                <Card.Title
                                    title={point.ucrLiteral}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    subtitle={
                                        <View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Icon name="ios-time" size={20} color="#000" />
                                                <Text style={{ marginLeft: 5 }}>{point.occurTime}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                                <Icon name="ios-location" size={20} color="#000" />
                                                <Text style={{ marginLeft: 5 }}>{point.location}</Text>
                                            </View>
                                        </View>

                                    }
                                />
                            </View>
                        </Callout>
                    </Marker>
                ))
            )}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    calloutView: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: 250,  // adjust this width based on your needs
        height: 90,
        padding: 0,
        elevation: 5, // shadow for Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.0, // shadow for iOS
        shadowRadius: 10,
        justifyContent: 'center',
    },
    calloutText: {
        marginBottom: 5,
    },
});

export default MapComponent;
