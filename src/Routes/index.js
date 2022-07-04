import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const Routes = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
);

export default Routes;
