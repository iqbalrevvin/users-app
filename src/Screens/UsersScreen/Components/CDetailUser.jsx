/* eslint-disable react/prop-types */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import CButtonRegular from '../../../Components/CButtonRegular';
import CGap from '../../../Components/CGap';
import CText from '../../../Components/CText';
import Colors from '../../../Utility/Colors';
import Screen from '../../../Utility/ScreenConfig';
import styles from './CDetailUser.style';

const _renderGreetingName = (props) => {
    const { user } = props;
    return (
        <View>
            <CText>Welcome</CText>
            <CText bold>
                {user.first_name}  {user.last_name}
            </CText>
        </View>
    );
};

// eslint-disable-next-line max-lines-per-function
const _renderInfoName = (props) => {
    const { navigation, user } = props;
    return(
        <React.Fragment>
            <CText bold color={Colors.grey700} size={18}>
                {user.first_name} {user.last_name}
            </CText>
            <CGap height={10} />
            <CText bold color={Colors.grey700} size={18}>{user.email}</CText>
            <CGap height={10} />
            <TouchableOpacity onPress={() => navigation.navigate(Screen.WEB_VIEW_SCREEN.name)}>
                <CText bold color={Colors.primary} size={16}>website</CText>
            </TouchableOpacity>
        </React.Fragment>
    );
};

const _renderInfo = (props) => {
    const { user: { avatar } } = props;
    return (
        <View style={styles.infoAvatarContainer}>
            <Image
              source={{ uri: avatar }}
              style={styles.infoAvatarImage}
            />
            <CGap height={50} />
            {_renderInfoName(props)}
        </View>
    );
};

const _renderButton = (props) => {
    const { navigation } = props;
    return (
        <View>
            <CButtonRegular
              title='Choose a User'
              color={Colors.primary}
              onPress={() => { }}
            />
        </View>
    );
};

const CDetailUser = (props) => (
    <View style={styles.container}>
        {_renderGreetingName(props)}
        {_renderInfo(props)}
        {_renderButton(props)}
    </View>
);

export default CDetailUser;

