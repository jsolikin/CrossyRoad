import React, { useState } from 'react';
import MapView, { Heatmap, Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import Mapdata from './Mapdata';

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
                    />
                ))
            )}
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapComponent;
