import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import UsersScreen from '../Screens/UsersScreen';
import WebViewScreen from '../Screens/WebViewScreen';

const Screen = {
    LOGIN_SCREEN: {
        name: 'LOGIN_SCREEN',
        component: LoginScreen
    },
    HOME_SCREEN: {
        name: 'HOME_SCREEN',
        component: HomeScreen
    },
    USERS_SCREEN: {
        name: 'USERS_SCREEN',
        component: UsersScreen
    },
    WEB_VIEW_SCREEN: {
        name: 'WEB_VIEW_SCREEN',
        component: WebViewScreen
    }
};

export default Screen;
