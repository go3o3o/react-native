import React, {useRef} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import useAuth from '@/hooks/queries/useAuth';
import useUserLocation from '@/hooks/useUserLocation';
import {MapStackParamList} from '@/navigations/stack/MapStackNavigator';
import {MainDrawerParamList} from '@/navigations/drawer/MainDrawerNavigator';
import {colors} from '@/constants';
import {usePermission} from '@/hooks/usePermission';
import mapStyle from '@/styles/mapStyle';

type Navigation = CompositeNavigationProp<
  StackNavigationProp<MapStackParamList<string>>,
  DrawerNavigationProp<MainDrawerParamList<string>>
>;

function MapHomeScreen() {
  const inset = useSafeAreaInsets();
  const {logoutMutation} = useAuth();
  const navigation = useNavigation<Navigation>();
  const mapRef = useRef<MapView | null>(null);
  const {userLocation, isUserLocationError} = useUserLocation();
  usePermission('LOCATION');

  const handleLogout = () => {
    logoutMutation.mutate(null);
  };

  const handlePressUserLocation = () => {
    if (isUserLocationError) {
      // 에러메세지를 표시하기
      return;
    }

    mapRef.current?.animateToRegion({
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <>
      <MapView
        ref={mapRef}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        followsUserLocation
        showsMyLocationButton={false}
        customMapStyle={mapStyle}
      />
      <Pressable
        style={[styles.drawerButton, {top: inset.top || 20}]}
        onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" color={colors.WHITE} size={25} />
      </Pressable>
      <View style={styles.buttonList}>
        <Pressable style={styles.mapButton} onPress={handlePressUserLocation}>
          <MaterialIcons name="my-location" color={colors.WHITE} size={25} />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerButton: {
    position: 'absolute',
    left: 0,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.PINK_700,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: colors.BLACK,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    elevation: 4,
  },
  buttonList: {
    position: 'absolute',
    bottom: 30,
    right: 15,
  },
  mapButton: {
    backgroundColor: colors.PINK_700,
    marginVertical: 5,
    height: 48,
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: colors.BLACK,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
  },
});

export default MapHomeScreen;
