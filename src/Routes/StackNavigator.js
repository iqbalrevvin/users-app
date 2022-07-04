import React from 'react';
import { Easing, LogBox } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Screen from '../Utility/ScreenConfig';

const openConfig = {
    animation: 'spring',
    config: {
      stiffness: 1250,
      damping: 75,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
    },
  };
  
  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 150,
      Easing: Easing.linear,
    },
  };
  
  const screenOptionsConfig = {
    headerShown: false,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardOverlayEnabled: true,
    ...TransitionPresets.SlideFromRightIOS,
    transitionSpec: {
      open: openConfig,
      close: closeConfig,
    },
  };
  
  LogBox.ignoreLogs([
      // eslint-disable-next-line max-len
      "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionsConfig} animation={true}>
    <Stack.Screen name={Screen.LOGIN_SCREEN.name} component={Screen.LOGIN_SCREEN.component} />
    <Stack.Screen name={Screen.HOME_SCREEN.name} component={Screen.HOME_SCREEN.component} />
    <Stack.Screen name={Screen.USERS_SCREEN.name} component={Screen.USERS_SCREEN.component} />
    <Stack.Screen name={Screen.WEB_VIEW_SCREEN.name} component={Screen.WEB_VIEW_SCREEN.component} />
  </Stack.Navigator>
);

export default StackNavigator;
