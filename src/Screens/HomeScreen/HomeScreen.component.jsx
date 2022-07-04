/* eslint-disable react/prop-types */
import React from 'react';
import { Image, View } from 'react-native';
import { iconBack } from '../../Assets/Icons';
import CButtonRegular from '../../Components/CButtonRegular';
import CHeader from '../../Components/CHeader';
import CText from '../../Components/CText';
import styles from './HomeScreen.styles';
import Colors from '../../Utility/Colors';
import Screen from '../../Utility/ScreenConfig';
import { avatarPlaceholder } from '../../Assets/Images';
import CGap from '../../Components/CGap';

const _renderGreetingName = () => (
    <View>
        <CText>Welcome</CText>
        <CText bold>John Doe</CText>
    </View>
);

const _renderAvatarPlaceholder = () => (
    <Image
      source={avatarPlaceholder}
      style={styles.avatarPlaceholderSection}
    />
);

const _renderInfo = () => (
    <View style={styles.infoAvatarContainer}>
        {_renderAvatarPlaceholder()}
        <CGap height={40} />
        <CText bold color={Colors.grey700}>Select a user to show the profile</CText>
    </View>
);

const _renderButton = (props) => {
    const { navigation } = props;
    return (
        <View>
            <CButtonRegular 
              title='Choose a User'
              color={Colors.primary}
              onPress={() => navigation.navigate(Screen.USERS_SCREEN.name)}
            />
        </View>
    );
};

const _getHeaderProps = (props) => ({
    title: 'Home',
    iconLeft: iconBack,
    onPressLeft: () => props.navigation.goBack()
});

const HomeScreenComponent = (props) => (
    <React.Fragment>
        <CHeader {..._getHeaderProps(props)} />
        <View style={styles.container}>
            {_renderGreetingName()}
            {_renderInfo()}
            {_renderButton(props)}
        </View>
    </React.Fragment>
);

export default HomeScreenComponent;
