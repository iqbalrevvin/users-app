/* eslint-disable react/prop-types */
import React from 'react';
import { Image, View } from 'react-native';
import styles from './CMapsUsers.styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { randomRangeNumber } from '../../../Utility/Functions';
import { iconPinPoint } from '../../../Assets/Icons';
import CText from '../../../Components/CText';
import CGap from '../../../Components/CGap';
import CButtonRegular from '../../../Components/CButtonRegular';
import Colors from '../../../Utility/Colors';

const randomLng = -122 + '.' + randomRangeNumber(4400, 4524);
console.log(randomLng);

const _getInitialRegionDataObject = () => ({
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0912,
  longitudeDelta: 0.0921,
});

const _getRegionDataObject = () => ({
  latitude: 37.78825,
  longitude: Number(randomLng),
  latitudeDelta: 0.0712,
  longitudeDelta: 0.0712,
});

const _renderMarker = (item, i, props) => (
    <Marker key={i} title={item.first_name}
      description={item.email}
      coordinate={{ latitude: item.latitude , longitude: item.longitude }}  
      onPress={() => props.onPressMarker(item)}
    >
      <Image source={iconPinPoint}
        style={styles.markerImageSection}
        resizeMode="contain"
      />
    </Marker>
);

const _renderUserSelectedInfo = (props) => {
  const { userSelected, onPressButtonSelect } = props;
  return(
    <View style={styles.userCardContainer}>
        <View style={styles.userAvatarContainer}>
          <Image source={{ uri: userSelected.avatar }} style={styles.infoAvatarImage} />
        </View>
        <CText bold>{userSelected.first_name} {userSelected.last_name}</CText>
        <CGap height={30} />
        <View style={styles.buttonContainer}>
          <CButtonRegular title='Select' color={Colors.primary} onPress={onPressButtonSelect} />
        </View>
    </View>
  );
};

const CMapsUsers = (props) => (
  <View style={styles.container}>
    <MapView showsUserLocation zoomTapEnabled
      zoomEnabled zoomControlEnabled
      provider={PROVIDER_GOOGLE} style={styles.map}
      initialRegion={_getInitialRegionDataObject()}
      region={_getRegionDataObject()}
    >
      {props.users.map((item, i) => _renderMarker(item, i, props))}
    </MapView>
    {props.userSelected && _renderUserSelectedInfo(props)}
  </View>
);

export default CMapsUsers;
