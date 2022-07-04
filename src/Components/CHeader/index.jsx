import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import CText from '../CText';
import styles from './CHeader.styles';
import Colors from '../../Utility/Colors';

const _renderLeftTouchable = (onPressLeft, iconLeft) => (
    <TouchableOpacity onPress={onPressLeft}>
        <Image source={iconLeft} style={styles.iconAddSection} />
    </TouchableOpacity>
);

const _renderRightTouchable = (onPressRight, iconRight) => (
    <TouchableOpacity onPress={onPressRight}>
        <Image source={iconRight} style={styles.iconAddSection} />
    </TouchableOpacity>
);

const CHeader = (props) => {
    const { title, iconLeft, iconRight, onPressLeft, onPressRight } = props;
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {_renderLeftTouchable(onPressLeft, iconLeft)}
                <View>
                    <CText bold color={Colors.primary} size={16}>{title}</CText>
                </View>
                {onPressRight && _renderRightTouchable(onPressRight, iconRight)}
            </View>
        </View>
    );
};

CHeader.propTypes = {
    title: PropTypes.string,
    iconLeft: PropTypes.any,
    iconRight: PropTypes.any,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
};

export default CHeader;
