/* eslint-disable react/prop-types */
import React from 'react';
import { Image, View, Alert } from 'react-native';
import CButtonRegular from '../../Components/CButtonRegular';
import CGap from '../../Components/CGap';
import CTextInput from '../../Components/CTextInput';
import Screen from '../../Utility/ScreenConfig';
import styles from './LoginScreen.styles';
import Configs from './LoginScreen.config';
import Colors from '../../Utility/Colors';
import { avatarPlusPlaceholder, background } from '../../Assets/Images';
import { ImageBackground } from 'react-native';
import { checkPalindrome } from '../../Utility/Functions';

const _getStates = () => {
    const [name, setName] = React.useState('John Doe');
    const [palindrome, setPalindrome] = React.useState('');
    return { name, setName, palindrome, setPalindrome };
};

const _getNameInputProps = (states) => ({
    value: states.name,
    onChangeText: (value) => states.setName(value),
    placeholder: 'Name',
    keyboardType: 'default',
});

const _getPalindromeInputProps = (states) => ({
    value: states.palindrome,
    onChangeText: (value) => states.setPalindrome(value),
    placeholder: 'Palindrome',
    keyboardType: 'default',
});

const _renderFormContent = (states) => (
    <View>
        <CTextInput {..._getNameInputProps(states)} />
        <CGap height={20} />
        <CTextInput {..._getPalindromeInputProps(states)} />
    </View>
);

const _handlePalindromeCheck = (states) => {
    console.log(states.palindrome);
    if(checkPalindrome(states.palindrome)) {
        Alert.alert('Check Palindrome', 'Is palindrome');
    } else {
        Alert.alert('Check Palindrome', 'Is not palindrome');
    }
};

const _handleNextScreen = (states, props) => {
    const { navigation } = props;
    if(!states.name){
        Alert.alert('Next Screen', 'Please enter name');
    } else {
        navigation.navigate(Screen.HOME_SCREEN.name);
    }
};

const _renderButtonContent = (props, states) => (
    <View>
        <CButtonRegular color={Colors.primary} title='CHECK' 
          onPress={() => _handlePalindromeCheck(states)} />
        <CGap height={10} />
        <CButtonRegular 
          color={Colors.primary} 
          title='NEXT'
          onPress={() => _handleNextScreen(states, props)} 
        />
    </View>
);

const _renderAvatarPlaceholder = () => (
    <Image
      source={avatarPlusPlaceholder}
      style={styles.avatarPlaceholderSection}
    />
);

const _renderContentContainer = (props, states) => (
    <View style={styles.contentContainer}>
        <View style={styles.avatarContainer}>
            {_renderAvatarPlaceholder()}
        </View>
        {_renderFormContent(states)}
        <CGap height={40} />
        {_renderButtonContent(props, states)}
    </View>
);

const LoginScreenComponent = (props) => {
    const states = _getStates();
    return(
        <View style={styles.container}>
            <ImageBackground source={background} resizeMode="cover" style={styles.imageBackground}>
                {_renderContentContainer(props, states)}
            </ImageBackground>
        </View>
    );
};

LoginScreenComponent.propTypes = Configs.propTypes;

export default LoginScreenComponent;
