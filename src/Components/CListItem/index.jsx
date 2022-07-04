import React from 'react';
import { Image, View } from 'react-native';
import CText from '../CText';
import styles from './CListItem.styles';
import Colors from '../../Utility/Colors';
import PropTypes from 'prop-types';

const _renderAvatarImage = (avatar) => (
    <Image
      source={{ uri: avatar }}
      style={styles.avatarImage}
    />
);

const CListItem = (props) => {
    const { name, email, avatar } = props;
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                {_renderAvatarImage(avatar)}
            </View>
            <View style={styles.infoUserContainer}>
                <CText bold size={16}>{name}</CText>
                <CText color={Colors.grey700}>{email}</CText>
            </View>
        </View>
    );
};

CListItem.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.any,
};

export default CListItem;
