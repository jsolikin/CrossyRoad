
import MapView, { Heatmap } from 'react-native-maps';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import MapComponent from './MapComponent';
import AccountComponent from './AccountComponent';
import UpdatesComponent from './UpdatesComponent';
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import SavedComponent from './SavedComponent';

//SavedComponent
const MusicRoute = () => <MapComponent />;

const RecentsRoute = () => <SafeAreaView style={styles.safeArea}><UpdatesComponent /></SafeAreaView>;

const FavoriteRoute = () => <SafeAreaView style={styles.safeArea}><SavedComponent/></SafeAreaView>;

const NotificationsRoute = () => <SafeAreaView style={styles.safeArea}><AccountComponent /></SafeAreaView>;

const BottomNav = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        //
        { key: 'map', title: 'Map', focusedIcon: 'map', unfocusedIcon: 'map-outline' },
        { key: 'recents', title: 'Updates', focusedIcon: 'tooltip', unfocusedIcon: 'tooltip-outline'},
        { key: 'Favorites', title: 'Saved', focusedIcon: 'bookmark' , unfocusedIcon: 'bookmark-outline' },
        { key: 'notifications', title: 'Account', focusedIcon: 'account-cowboy-hat', unfocusedIcon: 'account' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        map: MusicRoute,
        recents: RecentsRoute,
        Favorites: FavoriteRoute,
        notifications: NotificationsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}


        />
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
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

export default BottomNav;