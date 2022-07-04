/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import CText from '../CText';

// create a component
const {width, height} = Dimensions.get('screen');
const CLoading = ({ message }) => (
    <View style={styles.container}>
        <ActivityIndicator size='large' color='white' />
        <View style={{ marginTop: 10 }}>
            <CText bold color='white'>{message}</CText>
        </View>
    </View>
);

CLoading.defaultProps = {
    message: 'Please Wait'
};

export default React.memo(CLoading);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: width,
        height: height
    },
});

